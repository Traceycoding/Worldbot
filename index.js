const bedrock = require('bedrock-protocol');
const express = require('express');

// 1. Web Server to keep Render happy
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot is active and running!'));
app.listen(PORT, () => console.log(`Web server listening on port ${PORT}`));

// 2. Minecraft Bot Configuration
const client = bedrock.createClient({
  host: 'NehemiahCraft',         // The host's Gamertag
  username: 'IWnetwork@outlook.com',
  offline: false,                // Must be false for Friend Worlds
  auth: 'microsoft',
  profilesFolder: './auth-cache' // Folder containing your login session
});

client.on('join', () => {
  console.log('Successfully joined NehemiahCraft\'s world!');
});

client.on('error', (err) => {
  console.error('Connection Error:', err);
});

// Auto-reconnect if kicked
client.on('close', () => {
  console.log('Disconnected. Attempting to reconnect...');
});
