const bedrock = require('bedrock-protocol');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Bot online'));
app.listen(process.env.PORT || 3000);

const client = bedrock.createClient({
  host: 'NehemiahCraft',
  username: 'IWnetwork@outlook.com',
  offline: false,
  auth: 'microsoft',
  profilesFolder: './auth-cache'
});

client.on('join', () => console.log('Joined!'));
client.on('error', (err) => console.error(err));
