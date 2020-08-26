const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);
  client.user.setActivity("shinchan", { type: "WATCHING" });

  client.guilds.cache.forEach((guild) => {
    console.log(guild.name);

    guild.channels.cache.forEach((channel) => {
      console.log("- ${channel.name} ${channel.type} ${channel.id}");
    });
  });

  let generalChannel = client.channels.cache.get("747086125776240721");
  const attachment = new Discord.cache.Attachment("https://patatap.com/");
  generalChannel.cache.send(attachment);
});

client.login("NzQ3MDg2MTI1Nzc2MjQwNzIx.X0JwLA.4b5L5beN9ko8KcPMLipsMETD6zE");
