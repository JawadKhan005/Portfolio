// JavaScript for Contact Form Submission

// Contact Form Submission Handling
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            console.log("Name: ", name);
            console.log("Email: ", email);
            console.log("Message: ", message);

            alert("Thank you for your message!");
            contactForm.reset();
        });
    }
});