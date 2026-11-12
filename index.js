const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

const CHANNEL_ID = '1570338274197770350';
const GUILD_ID = '1406435900191146084';

client.once('ready', () => {
    console.log(`¡Bot conectado como ${client.user.tag}!`);

    client.user.setActivity('ʀɪɴᴄᴏɴ ᴅᴇ ʟᴜɢᴀʀᴜ', { type: ActivityType.Custom });

    const guild = client.guilds.cache.get(GUILD_ID);
    if (!guild) {
        return console.log('No se pudo encontrar el servidor.');
    }

    joinVoiceChannel({
        channelId: CHANNEL_ID,
        guildId: GUILD_ID,
        adapterCreator: guild.voiceAdapterCreator,
        selfDeaf: true,
        selfMute: true
    });

    console.log('Bot conectado al canal de voz correctamente.');
});

// Ahora el token se leerá de forma segura desde Render
client.login(process.env.DISCORD_TOKEN);