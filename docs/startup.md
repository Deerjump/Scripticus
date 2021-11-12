# THIS IS CURRENTLY OUT OF DATE!!!

# Running your own test version of the bot
1. Download the code
2. You'll need to go [here](https://discord.com/developers/applications) 
3. Create a new `Application`. 
    - You'll also need the `Client ID` on the "General Information" tab in order to add the bot to your server using this template link: 
        - `https://discord.com/oauth2/authorize?client_id=CLIENT-ID_HERE&scope=bot`
    - [Discord.js Help Docs](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)
4. Then in the `Bot` tab, copy the token for the step below.

5. Create a `.env` file in the main directory as seen [below](#example-env)
    - If you need to use a database, you'll need to create your own MongoDB to use.
    - You'll place your credentials in the `.env` and you'll need to configure [connection.js](../mongo/connection.js) with your database url.
    - Setting up an environment can also be seen at this [link](https://dev.to/francis04j/how-to-add-env-and-use-process-env-to-your-typescript-project-3d6b)
## Example .env
```js
// Your Discord bot's token
TOKEN=YOUR_TOKEN_HERE

/* 
  REQUIRED: The database(currently MongoDB) is used for guild settings and the NotifyCommand.
  This file is not commited to GitHub and therefore safe to keep 
  your username, password and token safe.
*/
DATABASE_URL=DATABASE_

LOGGER_TYPE='Console'


```
6. Make sure you have [node.js](https://nodejs.org/) installed
7. You should navigate to the `root directory` of the project and run: `npm install` in your terminal
8. After that is done installing your necessary dependencies, you have a couple options:
    - Running the main `bot.js` file with: `node bot.js`
      
    OR
    
    - You can also start up the bot by running the command `npm start`, which will start up the bot using [pm2](https://pm2.io/docs/plus/overview/)
        - Also see [package.json](../package.json) for the other scripts available through `npm run <script>`
        -note: Deerjump has also provided npm run dev to avoid pm2
# Just like that you're up and running!

 
