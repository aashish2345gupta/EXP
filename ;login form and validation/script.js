function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "yourusername" && password === "yourpassword") {
        window.location.href = "success.html"; // Redirect to a success page
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}
