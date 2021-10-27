const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban",
    description: "Boom One Message And That Person Is Gone Forever...",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["cyanever"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
   // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();

    const reason = args.join(' ');
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.members.resolve(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: reason,
          })
          .then(() => {
            // We let the message author know we were able to ban the person
           let embed = new MessageEmbed()
           .setTitle('Banned User!')
           .setDescription('Someone Was Just Banned OwO')
           .addField('Username:', `${user.tag}`)
           .addField('Reason:', `${reason}`)
           
            message.channel.send({ embeds: [embed] });
          })
          .catch(err => {
            let embed = new MessageEmbed()
            .setTitle('Error Occurred')
            .setDescription('A Error Has Appeared')
            .addField('Error:', `UNKNOWN ERROR`)
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.channel.send({ embed: [embed] });
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.channel.send("You didn't mention the user to ban!");
    }
    }}