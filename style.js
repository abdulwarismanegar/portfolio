// Form validation and submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting immediately
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    let formMessage = document.getElementById("form-message");
    
    // Basic form validation
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "green";
        
        // Optionally, you can send the form data to a server using fetch or XMLHttpRequest
        // For now, we'll just reset the form
        document.getElementById("contact-form").reset();
    }
});
