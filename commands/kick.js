const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kick",
    description: "Boom One Message And That Person Is Gone.",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["cya"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        let member = message.mentions.members.first();
        const reason = args.join(' ');
if(!member) return message.reply("Please mention a valid member of this server");
if(!member.kickable) return message.reply("I cannot kick this member!");
const embed = new MessageEmbed()
.setTitle('Kicked User')
.setdescription('Someone Just Got Kicked 0o0')
.addField('User', `${member.tag}`)
.addField('Reason', `${reason}`)
message.channel.send({embeds: [embed]})

member.kick(reason); //.kick(reason) if you would to put in the reason through arguments
    }}