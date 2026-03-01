const { BedrockPortal } = require('bedrock-portal');
const express = require('express');

// Keep Render online
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
    // Joins the session of your friend NehemiahCraft
    await portal.joinWorld('NehemiahCraft'); 
    console.log('Bot has entered the world!');
  } catch (err) {
    console.error('Join Error:', err);
  }
};

main();
