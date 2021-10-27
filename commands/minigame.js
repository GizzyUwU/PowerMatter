const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "minigame",
    description: "Minigame",
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
        let embed = new MessageEmbed()
        .setTitle('Select One Path')
        .setDescription('This Minigame Bot Is Made For A Contest Also If Your Marking This Hope You Rate It Good :)')
        .addFields(
            {		name: 'Bridge One', value: 'This Is Bridge One 🌉', inline: true  },
            {		name: 'Bridge Two', value: 'This Is Bridge Two 🌉', inline: true  },
        )
        .setThumbnail('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCQC6S8cErFU&psig=AOvVaw1J_Y5VPsHXun8FriosdrGH&ust=1635359430060000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCOrOXa6PMCFQAAAAAdAAAAABAD')
        .setFooter('Thumbs Up IS Bridge 1 Thumps Down Is Bridge 2')
        
        message.channel.send({ embed: embed })   
     await   message.react('👍').then(r => {
            message.react('👎');
    })

    message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
    { max: 1, time: 30000 }).then(collected => {
            if (collected.first().emoji.name == '👍') {
                const embed = new MessageEmbed()
                .setTitle('OOF You Lost :(')  
                .setDescription('You Lost The Game Sad.')
                .setColor('RED')
                message.reply({embed: embed});
            }
            else {
            const embed = new MessageEmbed()
            .setTitle('Winner :)')
            .setDescription('You Won The Game')   
           .setColor('GREEN')
            
            message.reply({ embed: embed});
            }
    }).catch(() => {
            message.reply('No reaction after 30 seconds, operation canceled');
    });
 
 }
 
 
}
