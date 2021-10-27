const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "sendglobal",
    description: "Use This Command To Talk Globally To EVery Server What Bot Is In If They Have The Global Channel",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["globalchat"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        let argson = message.content.split(" ").slice(1);
		let vcsmsg = argson.join(" ")
		if(!vcsmsg) return message.reply("Please add a message to send.");
		client.guilds.cache.forEach(guild => {
			if (guild == message.guild) return;
			let channel = guild.channels.cache.find(ch => ch.name === "globalchat");
			if (!channel) return;
			let embed = new MessageEmbed()
				.setColor('RANDOM')
				.setAuthor(message.author.tag + " | Global Chat")
				.setDescription(vcsmsg)
				.setFooter("Server: " + message.guild.name)
				.setTimestamp()
			channel.send(embed);
        })
    }
}