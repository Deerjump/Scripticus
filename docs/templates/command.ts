/* eslint-disable no-unused-vars */
// This template is a WIP. I plan on adding to it as we add more features to our command handlers
module.exports = {
  // REQUIRED FIELDS
  // the name the user will use excluding the prefix. i.e. name: 'name' NOT name: '!name'
  name: 'template',
  // Descrive briefly what the command does
  description: 'A template command to demonstrate how you should format them',

  // OPTIONAL FIELDS - You're able to add more fields to use internally, these are just the universally supported ones
  // Add alternative names that a user can use to reference this command
  aliases: ['templates', 'placeholder', 'filler', 'stencil'],
  /*
      'usage' should demonstrate the order that args should follow.
      i.e if the command should be used like "!math decay 100 23 25"
      then it should look like this "usage:<formula> <number1> <number1> <number1>"
   */
  usage: '<command args>',
  // How long before the user can use the command again, in seconds.
  // DEFAULT: 3
  cooldown: 10,
  // Set this to true if your execute() requires args to function.
  // DEFAULT: false
  args: false,
  // This function is called when the bot is started
  init(client) {
    // start a scheduled task (see notify.js) or whatever else you need to do.
  },
  // This is the function that is run when the command is called.
  // It must be called `execute(message, args)` the parameters CAN
  // be renamed, but it is not recommended.
  // 'args' may also be omitted if you do not require arguments
  execute(message, args) {
    // do whatever you need to do
  },
};
