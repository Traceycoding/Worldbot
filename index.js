
const bedrock = require('bedrock-protocol');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Bot searching for 26.2 world...'));
app.listen(process.env.PORT || 3000);

console.log('Bot starting... version set to 1.26.201');

const client = bedrock.createClient({
  username: 'IWnetwork@outlook.com',
  offline: false,
  auth: 'microsoft',
  version: '1.26.201', // Version code for Bedrock 26.2
  follow: true, 
  host: 'NehemiahCraft' 
});

client.on('join', () => {
  console.log('SUCCESS: Bot has entered your 26.2 world!');
});

client.on('error', (err) => {
  // If you see "Unsupported Version," remove the version line above
  console.log('Status Update:', err.message);
});
