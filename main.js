const { Client, MessageEmbed, Collection } = require ("discord.js");
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_EMOJIS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

client.config = require ("./config");

client.login(client.config.token);

client.commands = new Collection();
client.aliases = new Collection();
client.snipes = new Collection();

["Cmds", "Events"].forEach((handler) => {
  require(`./src/handlers/${handler}`)(client);
});
