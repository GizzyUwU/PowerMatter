const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "updates",
    description: "Enter A Date And See What Update Was Added On That Date.",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
const date = args.join(" ");
if(!date) { 
    return message.reply('Either That Date Has No Updates Or You Have Wriiten The Wrong Date Dates Right Now Updates Are 11/10/2021 And 22/9/2021 And 21/10/2021')
}

if(date === "22/9/2021") {
    const embed = new MessageEmbed()
    .setTitle('Bot Release')
    .setDescription('Update Fron 22/9/2021')
    .addField('Update:', 'Bot Has Just Been Released In Its Beta State')
    message.reply({ embeds: embed });
}
if(date === "11/10/2021") {
    const embed = new MessageEmbed()
    .setTitle('Global Chat')
    .setDescription('Update Fron 11/10/2021')
    .addField('Update:', 'Global Chat Feature Has Been Released So You Can Communicate With Other Servers. To Set This Up Just Make A Channel Called globalchat And Then If You Have The Bot IN That Server ANy Global Message Will Go To That Channel.');
    message.channel.send(embed)
}

if(date === "21/10/2021") {
    const embed = new MessageEmbed()
    .setTitle('Updates Command')
    .setDescription('Update Fron 21/10/2021')
    .addField('Update:', 'Updates Command Is Working And Ready')
    message.reply({ embeds: embed });
}
    }}