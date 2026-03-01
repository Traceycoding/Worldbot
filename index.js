const bedrock = require('bedrock-protocol');
const express = require('express');

// Keep Render online
const app = express();
app.get('/', (req, res) => res.send('Bot is searching for NehemiahCraft...'));
app.listen(process.env.PORT || 3000);

console.log('Starting bot for NehemiahCraft...');

const client = bedrock.createClient({
  // Use the host's Gamertag directly here
  host: 'NehemiahCraft', 
  username: 'IWnetwork@outlook.com',
  offline: false,
  auth: 'microsoft',
  // This tells the bot to find the friend's session on Xbox Live
  follow: true 
});

client.on('join', () => {
  console.log('SUCCESS: Bot has entered NehemiahCraft\'s world!');
});

client.on('error', (err) => {
  console.error('Join Error:', err.message);
});

client.on('close', () => {
  console.log('Connection closed. If this happened immediately, check if NehemiahCraft is online.');
});
