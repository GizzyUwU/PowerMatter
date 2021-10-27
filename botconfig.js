module.exports = {
    Admins: ["", ""], //Admins of the bot
    ExpressServer: true,//If you wanted to make the website run or not
    DefaultPrefix: process.env.Prefix || "pow!", //Default prefix, Server Admins can change the prefix
    Port: 8080, //Which port website gonna be hosted
    SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
    Token: process.env.Token || "token", //Discord Bot Token
    ClientID: process.env.Discord_ClientID || "", //Discord Client ID
    ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
    Scopes: ["identify", "guilds", "applications.commands"],//Discord OAuth2 Scopes
    ServerDeafen : true,//If you want bot to stay deafened
    CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
    "24/7": false, //, //A Secret like a password
    CookieSecret: "secretcookie",
    IconURL:  "https://raw.githubusercontent.com/MCRaspRBX/PowerMatter/main/Gifs/help.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
    EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
    Permissions: 2205280576, //Bot Inviting Permissions
    Website: process.env.Website || "https://dash.powermatter.ml:8080", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
    //Lavalink
     Lavalink: {
      id: "Main",
      host: "",
      port: port,
      pass: "",
    },
  
  
    //Please go to https://developer.spotify.com/dashboard/
    Spotify: {
      ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
      ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
    },
  };