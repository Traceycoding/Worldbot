const { BedrockPortal } = require('bedrock-portal');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Bot is active'));
app.listen(process.env.PORT || 3000);

const main = async () => {
  const portal = new BedrockPortal({
    username: 'IWnetwork@outlook.com',
    auth: 'microsoft'
  });

  console.log('Searching for NehemiahCraft...');
  
  try {
    await portal.start();
    // THE FIX: The method name is joinSession
    await portal.joinSession('NehemiahCraft'); 
    console.log('Successfully Joined NehemiahCraft!');
  } catch (err) {
    console.error('Join Error:', err.message);
  }
};

main();
