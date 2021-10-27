const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "hack",
    description: "hacks Into A User",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["hacksystem"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        const user = args[0] || message.mentions.members.first();
        if(!user) return message.reply('Enter A Username To Hack.')
        const embed = new MessageEmbed()
        .setTitle(`Hacked Info`)
        .setDescription(`Found ${user} Personal Info.`)
        .addField('IP:', `127.0.0.1`)
        .addField('Email:', `${user}@gmail.com`)
        .addField('Location:', '[REDACTED]')
        .addField('Discord Password:', `TheBobbyBoy12`)
        .setFooter('This Is A Fake Hack Command.')
        try {
        message.reply(embed)
        } catch (err) {
            message.reply('Error Occurred')
            console.log(err)
        }
    }}