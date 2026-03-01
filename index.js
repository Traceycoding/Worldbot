const bedrock = require('bedrock-protocol');
const express = require('express');

// Keep Render alive
const app = express();
app.get('/', (req, res) => res.send('Bot status: Active'));
app.listen(process.env.PORT || 3000);

// Bot Config
const client = bedrock.createClient({
  username: 'IWnetwork@outlook.com',
  offline: false,
  auth: 'microsoft',
  // Removed profilesFolder since you can't make folders
  version: '26.2', // Set this to the version NehemiahCraft is using
  realms: {
    pickRealm: (realms) => realms.find(r => r.owner === 'NehemiahCraft')
  }
});

client.on('join', () => console.log('Successfully joined the world!'));
client.on('error', (err) => console.error('Bot Error:', err));
