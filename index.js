const { BedrockPortal } = require('bedrock-portal');
const express = require('express');

// Keep Render online
const app = express();
app.get('/', (req, res) => res.send('Bot is searching for world...'));
app.listen(process.env.PORT || 3000);

const main = async () => {
  const portal = new BedrockPortal({
    username: 'IWnetwork@outlook.com',
    auth: 'microsoft'
  });

  console.log('Searching for NehemiahCraft...');
  
  try {
    await portal.start();
    // THE FIX: Use .join() instead of .joinWorld()
    await portal.join('NehemiahCraft'); 
    console.log('Successfully Joined NehemiahCraft!');
  } catch (err) {
    console.error('Join Error:', err);
  }
};

main();
