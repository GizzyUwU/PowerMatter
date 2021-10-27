module.exports = {
    name: "autorole",
    description: "Set Up A Role So When Someone Joins It Gives Them A Role...",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["rolegiver"],
     /**
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
const toggle = args.join(" ");
const channel = message.guild.id
const role = args[0]
if(toggle === "enable")  {
    db.set('autorole', true)
    let embed = new MessageEmbed()
    .setTitle('AutoRole')
    .setDescription('AutoRole Is Enabled')
    .setColor(RED)
    message.channel.send(embed)
    db.set('autorole.txt', channel.id)
    db.set('autorole.role', role)
}

if(toggle === "on")  {
    db.set('autorole', true)
    let embed = new MessageEmbed()
    .setTitle('AutoRole')
    .setDescription('AutoRole Is Enabled')
    .setColor(RED)
    message.reply(embed)
    db.set('autorole.txt', channel.id)
    db.set('autorole.role', role)
}

if(toggle === "disabled") {
    db.set('autorole', false)
    let embed = new MessageEmbed()
    .setTitle('AutoRole')
    .setDescription('AutoRole Is Disabled')
    .setColor(RED)
    message.reply(embed)
}

if(toggle === "off") {
    db.set('autorole', false)
    let embed = new MessageEmbed()
    .setTitle('AutoRole')
    .setDescription('AutoRole Is Disabled')
    .setColor(RED)
    message.reply(embed)
}

    }}