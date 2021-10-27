
const express = require("express")
var api = express();
const { Collection } = require("discord.js");
const { join } = require("path");
let config;
try {
  //Config for testing
  config = require("../dev-config");
} catch {
  //Config for production
  config = require("../botconfig");
}
const Auth = require("./Middlewares/Auth");
const fs = require("fs");

let CommandsDir = join(__dirname, "..", "commands");
let Commands = [];

fs.readdir(CommandsDir, (err, files) => {
  if (err) this.log(err);
  else
    files.forEach((file) => {
      let cmd = require(CommandsDir + "/" + file);
      if (!cmd.name || !cmd.description || !cmd.run) return;
      Commands.push({
        name: cmd.name,
        aliases: cmd.aliases,
        usage: cmd.usage,
        description: cmd.description,
      });
    });
});

api.use(express.static('views'));
// Set the view engine to ejs

api.get('/', function (req, res) {
  res.render('pages/index');
});

api.get("/commands", Auth, (req, res) => {
  res.sendFile(join(__dirname, "..", "views", "commands.html"));
});

api.get('/ticket', async (request, response) => {
  // console.log(request.body);      // the information in your POST request's body
  const guild = await client.guilds.fetch('889940397130911784');
  guild.channels.create(request.body.ticketName);
});

api.get("/api/info", (req, res) => {
  res.send({
    ClientID: config.ClientID,
    Permissions: config.Permissions,
    Scopes: config.Scopes,
    Website: config.Website,
    CallbackURL: config.CallbackURL,
  });
});


module.exports = api;
