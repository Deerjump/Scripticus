/* eslint-disable no-unused-vars */
const fetch = require('node-fetch');

module.exports = {
   name: 'cats',
   description: 'Sends an image of a cat!',
   cooldown: 5,
   aliases: ['kitty', 'cat'],
   async execute(message, args) {
      const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
      message.channel.send(file);
   },
};