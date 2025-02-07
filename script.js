// Initialize EmailJS
emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

// Fetch the user's IP address
fetch('https://api.ipify.org/?format=json')
    .then(response => response.json())
    .then(data => {
        const ip = data.ip;
        document.getElementById('ipAddress').innerText = `Your IP Address is: ${ip}`;
    })
    .catch(error => {
        console.error('Error fetching IP address:', error);
        document.getElementById('ipAddress').innerText = 'Could not fetch IP address.';
    });

// Function to send email with the IP address
function sendEmail() {
    const ip = document.getElementById('ipAddress').innerText.split(": ")[1]; // Get IP address

    // Create the email template
    const templateParams = {
        to_email: 'hirschmilesh@gmail.com', // Your email address
        subject: 'User IP Address',
        message: `User's IP Address is: ${ip}`
    };

    // Send the email using EmailJS
    emailjs.send('service_angqvni', 'YOUR_TEMPLATE_ID', templateParams) // Replace these with your EmailJS service and template IDs
        .then(response => {
            alert('IP address sent to your email!');
        })
        .catch(error => {
            alert('Failed to send email. Please try again.');
            console.error('Error sending email:', error);
        });
}
