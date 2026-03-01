const bedrock = require('bedrock-protocol');
const express = require('express');

// Keep Render alive
const app = express();
app.get('/', (req, res) => res.send('Bot is looking for NehemiahCraft...'));
app.listen(process.env.PORT || 3000);

function createBot() {
  console.log('Bot starting... logging in as IWnetwork@outlook.com');

  const client = bedrock.createClient({
    host: 'NehemiahCraft',      // Your main Gamertag
    username: 'IWnetwork@outlook.com', // The bot's email
    offline: false,
    auth: 'microsoft',
    version: '1.21.0'           // Change this if your Minecraft version is different
  });

  client.on('join', () => {
    console.log('SUCCESS: IWnetwork has entered NehemiahCraft\'s world!');
  });

  client.on('error', (err) => {
    console.log('Join Status:', err.message);
  });

  // If you leave the world, the bot waits 1 minute and tries to find you again
  client.on('close', () => {
    console.log('Connection lost. Retrying in 60 seconds...');
    setTimeout(createBot, 60000);
  });
}

createBot();
