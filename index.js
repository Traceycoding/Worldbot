const bedrock = require('bedrock-protocol');
const express = require('express');

// Keep Render online
const app = express();
app.get('/', (req, res) => res.send('Bot is searching for NehemiahCraft...'));
app.listen(process.env.PORT || 3000);

console.log('Bot starting... logging in as IWnetwork@outlook.com');

const client = bedrock.createClient({
  username: 'IWnetwork@outlook.com',
  offline: false,
  auth: 'microsoft',
  // This logic searches your friends list for your active world
  realms: {
    pickRealm: (realms) => {
      console.log('Checking active sessions...');
      return realms.find(r => r.owner === 'NehemiahCraft');
    }
  }
});

client.on('join', () => {
  console.log('SUCCESS: Bot has entered NehemiahCraft\'s world!');
});

client.on('error', (err) => {
  console.log('Status:', err.message);
});
