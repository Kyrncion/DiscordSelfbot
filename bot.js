const Discord = require("discord.js");
const config = require("./config.json");
const selfbot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

selfbot.on("ready", async () => {
  console.log(`Logged in as ${selfbot.user.tag}!`);
  selfbot.user.setActivity("With selfbots", { type: "PLAYING" });
});

selfbot.login(config.token);