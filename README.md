# A Discord Self Bot ( WOP )
This selfbot is for educational purposes only, you **can** and *will* get banned for using a self bot. By using my bot **you acknowledge** that *I, Jack Levreau*, am not responsible for any account loss nor damage done by using this bot. This project was inspired by [Xware Selfbot](https://www.youtube.com/watch?v=dGYq6krDsa8).

## Installation

Use the package manager [npm](https://www.w3schools.com/nodejs/nodejs_npm.asp) from [node](https://nodejs.org/en/) in order to install the needed packages to run this script locally. ( If they are not already installed ) If you need to remake the package use the command `npm init` inside of your terminal.

```node
npm install discord.js
```

## Usage

To use the bot first you need to add your client token to the config file. Once done, you can launch the batfile and use the script.

## License
This script is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

## Source Code

```JavaScript 
const Discord = require("discord.js");
const config = require("./config.json");
const selfbot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

selfbot.on("ready", async () => {
  console.log(`Logged in as ${selfbot.user.tag}!`);
  selfbot.user.setActivity("With selfbots", { type: "PLAYING" });
});

selfbot.login(config.token);
```
