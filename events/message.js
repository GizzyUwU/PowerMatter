/**
 *
 * @param {require("../structures/DiscordMusicBot")} client
 * @param {require("discord.js").Message} message
 * @returns {void} aka: nothing ;-;
 */

 const db = require('quick.db')

 module.exports = async (client, message) => {
   if (message.author.bot || message.channel.type === "dm") return;
   let prefix = client.botconfig.DefaultPrefix;
 
   let GuildDB = await client.GetGuild(message.guild.id);
   if (GuildDB && GuildDB.prefix) prefix = GuildDB.prefix;
 
   //Initialize GuildDB
   if (!GuildDB) {
     await client.database.guild.set(message.guild.id, {
       prefix: prefix,
       DJ: null,
     });
     GuildDB = await client.GetGuild(message.guild.id);
   }
 
   //Prefixes also have mention match
   const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
   prefix = message.content.match(prefixMention)
     ? message.content.match(prefixMention)[0]
     : prefix;
 
   if (message.content.indexOf(prefix) !== 0) return;
 
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
   //Making the command lowerCase because our file name will be in lowerCase
   const command = args.shift().toLowerCase();
 
   //Searching a command
   const cmd =
     client.commands.get(command) ||
     client.commands.find((x) => x.aliases && x.aliases.includes(command));
 
   //Executing the codes when we get the command or aliases
   if (cmd) {
     if (
       (cmd.permissions &&
         cmd.permissions.channel &&
         !message.channel
           .permissionsFor(client.user)
           .has(cmd.permissions.channel)) ||
       (cmd.permissions &&
         cmd.permissions.member &&
         !message.channel
           .permissionsFor(message.member)
           .has(cmd.permissions.member)) ||
       (cmd.permissions &&
         GuildDB.DJ &&
         !message.channel
           .permissionsFor(message.member)
           .has(["ADMINISTRATOR"]) &&
         !message.member.roles.cache.has(GuildDB.DJ))
     )
       return client.sendError(
         message.channel,
         "Missing Permissions!" + GuildDB.DJ
           ? " You need the `DJ` role to access this command."
           : ""
       );
     cmd.run(client, message, args, { GuildDB });
     client.CommandsRan++;
   } else return;
 
 const autorole = db.get('autorole') 
 const autoroletxt = db.get('autorole.txt') 
 const autorolerole = db.get('autorole.role') 
 if(autorole === true) {

   const mutualGuilds = client.guilds.cache.filter((guild) => {
    return guild.members.cache.has(message.author.id);
  });
  
  mutualGuilds.each((guild) => {
    if (guild.roles.cache.has(autoroletxt)) {
var role = member.guild.roles.cache.find(role => role.name == autorolerole)
     member.roles.add(role);
  
    }  
  });
 }
 if(autorole === true) {

  const mutualGuilds = client.guilds.cache.filter((guild) => {
    return guild.members.cache.has(message.author.id);
  });
  
  mutualGuilds.each((guild) => {
    if (guild.roles.cache.has(autoroletxt)) {
var role = member.guild.roles.cache.find(role => role.name == "everyone")
     member.roles.add(role);
  
    }  
  });
 }
};
 