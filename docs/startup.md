# Running your own test version of the bot
1. Download the code
2. You'll need to go [here](https://discord.com/developers/applications) 
    1. Create a new `Application`. 
        - You'll also need the `Client ID` on the "General Information" tab in order to add the bot to your server using this template link: 
          - `https://discord.com/oauth2/authorize?client_id=CLIENT-ID_HERE&scope=bot`
        - [Discord.js Help Docs](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)
    2. Then in the `Bot` tab, copy the token for the step below.

3. Create a `.env` file in the main directory as seen [below](#example-.env)
    - If you need to use a database, you'll need to create your own MongoDB to use.
    - You'll place your credentials in the `.env` and you'll need to configure [connection.js](../mongo/connection.js) with your database url.

## Example .env
```js
// Your Discord bot's token
TOKEN=YOUR_TOKEN_HERE

/* 
  OPTIONAL: Only if you need database functionality for your feature.
  This file is not commited to GitHub and therefore safe to keep 
  your username, password and token safe.
*/
MONGO_USER=YOUR_MONGO_USER
MONGO_PASS=YOUR_MONGO_PASS
```
4. Make sure you have [node.js](https://nodejs.org/) installed
5. You should navigate to the `root directory` of the project and run: `npm install` in your terminal
6. After that is done installing your necessary dependencies, you have a couple options:
    - Running the main `bot.js` file with: `node bot.js`
      
      OR
    
    - You can also start up the bot by running the command `npm start`, which will start up the bot using [pm2](https://pm2.io/docs/plus/overview/)
      - Also see [package.json](../package.json) for the other scripts available through `npm run <script>`
# Just like that you're up and running!

 