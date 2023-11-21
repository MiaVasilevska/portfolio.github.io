function sendMail() {
    var params = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send("service_j2jrhue", "template_bwzprhh", params)
        .then(function (res) {
            alert("Success! " + res.status);
        })
        .catch(function (error) {
            console.log("Error sending email:", error);
            alert("Error sending email. Please try again later.");
        });
}
