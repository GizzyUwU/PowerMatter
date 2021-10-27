module.exports = {
    name: "embed",
    description: "Sends Message As Bot In A Embed.",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["say"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        let text = args[0]
        
        if(!text) return message.reply('Enter A Text To Generate');
try {
        let embed = new MessageEmbed()
        .setColor(`BLACK`)
        .setTitle('Embed Generater')
        .setDescription(`${text}`)
        .setFooter('This Is A Embed Generater Made My MCRaspRBX');
       await message.channel.send({ embeds: [embed] })
} catch (err) {
    console.log(err)
}
    }}