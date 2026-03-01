const { BedrockPortal } = require('bedrock-portal');
const express = require('express');

// Keep Render happy
const app = express();
app.get('/', (req, res) => res.send('Bot is active'));
app.listen(process.env.PORT || 3000);

const main = async () => {
  const portal = new BedrockPortal({
    username: 'IWnetwork@outlook.com',
    auth: 'microsoft'
  });

  console.log('Starting bot and looking for NehemiahCraft...');
  
  try {
    await portal.start();
    // This tells the bot to join NehemiahCraft's active session
    await portal.joinWorld('NehemiahCraft'); 
    console.log('Joined world!');
  } catch (err) {
    console.error('Failed to join:', err);
  }
};

main();
