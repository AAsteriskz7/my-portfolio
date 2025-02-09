document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("ebXiCncjGzHjTRemy");

    const form = document.getElementById('contactForm');

    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();

            const formData = {
                from_name: document.getElementById('name').value,
                reply_to: document.getElementById('email').value,
                message: document.getElementById('message').value,
                to_name: "Adarsh"
            };

            emailjs.send("service_ekcb2ed", "template_viwczb5", formData)
                .then(function(response) {
                    alert("Message sent successfully!");
                    form.reset();
                }, function(error) {
                    alert("Failed to send message.");
                    console.error("Error:", error);
                });
        };
    } else {
        console.error("Form with ID 'contactForm' not found!");
    }
});
