module.exports = {
    name: "rps",
    description: "A Game Of Rock Paper Scissors",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["rockpaperscissors"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        try {
            const acceptedReplies = ['rock', 'paper', 'scissors'];
            const random = Math.floor((Math.random() * acceptedReplies.length));
            const result = acceptedReplies[random];
    
            const choice = args[0];
            if(choice === 'hack') return message.reply('You Won')
            if (!choice) return message.channel.send(`\`<rock|paper|scissors>\``);
            if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            
            if (result === choice) return message.reply("It's a tie! We had the same choice.");
            
            switch (choice) {
                case 'rock': {
                    if (result === 'paper') return message.reply('I won!');
                    else return message.reply('You won!');
                }
                case 'paper': {
                    if (result === 'scissors') return message.reply('I won!');
                    else return message.reply('You won!');        
                }
                case 'scissors': {
                    if (result === 'rock') return message.reply('I won!');
                    else return message.reply('You won!');
                }
                default: {
                    return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
                }
            }
        }         
     catch (e) {
        message.reply('❌ ERROR')
        console.log(e)
    }
    }}