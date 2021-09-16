const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const alias = require('../util/alias');

module.exports = {
  name: 'alias',
  description: 'Find all the accepted aliases for a monster or item!',
  usage: '<item or monster name>',
  args: true,
  cooldown: 1,
  async execute(message, args) {
    const lowerCaseArgs = args.join(' ').toLowerCase();
    const pageSize = 10;

    const aliases = alias
      .getAliases(lowerCaseArgs)
      .filter((alias) => alias.toLowerCase() !== lowerCaseArgs);

    if (aliases.length === 0) {
      return message.reply({
        content: `No aliases found for ${lowerCaseArgs}`,
        allowedMentions: { users: [] },
      });
    }

    const title = `Aliases for ${lowerCaseArgs}`;
    const sentMsg = await message.reply(getAliasEmbed(title, aliases));

    const collector = sentMsg.createMessageComponentCollector({
      filter: (i) => i.customId === 'prevPage' || i.customId === 'nextPage',
      componentType: 'BUTTON',
      time: 60000,
    });

    let currentIndex = 0;
    collector.on('collect', (interaction) => {
      if (interaction.user.id !== message.author.id) {
        return interaction.reply({
          content: "❌ You cannot interact with someone else's command!",
          ephemeral: true,
        });
      }

      switch (interaction.customId) {
        case 'prevPage': {
          currentIndex -= pageSize;
          break;
        }
        case 'nextPage': {
          currentIndex += pageSize;
          break;
        }
      }

      interaction.update(getAliasEmbed(title, aliases, currentIndex));
    });

    collector.on('end', () => {
      const expiredEmbed = new MessageEmbed()
        .setTitle(sentMsg.embeds[0].title)
        .addFields(sentMsg.embeds[0].fields)
        .setFooter('❌Timed out');
      sentMsg.edit({ embeds: [expiredEmbed], components: [] });
    });
  },
};

function getAliasEmbed(title, aliases, start = 0, size = 10) {
  const pageMax = start + size;
  const embed = new MessageEmbed();

  embed.setTitle(title);
  embed.addFields([
    {
      name: `${start} to ${
        aliases.length < pageMax ? aliases.length : pageMax
      } of ${aliases.length}`,
      value: aliases.slice(start, start + size).join(', '),
    },
  ]);

  const row = new MessageActionRow();
  const backBtn = new MessageButton()
    .setCustomId('prevPage')
    .setLabel('◄')
    .setStyle('PRIMARY')
    .setDisabled(start === 0);
  const nextBtn = new MessageButton()
    .setCustomId('nextPage')
    .setLabel('►')
    .setStyle('PRIMARY')
    .setDisabled(aliases.length <= pageMax);
  row.addComponents(backBtn, nextBtn);

  return {
    embeds: [embed],
    components: [row],
    allowedMentions: { users: [] },
    fetchReply: true,
  };
}
