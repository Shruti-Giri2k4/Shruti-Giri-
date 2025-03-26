function validateForm() {
    let isValid = true;

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let website = document.getElementById("website").value.trim();
    let message = document.getElementById("message").value.trim();

    // Name validation
    if (name === "") {
        document.getElementById("nameError").innerText = "This field is required";
        document.getElementById("name").classList.add("error-border");
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
        document.getElementById("name").classList.remove("error-border");
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "A valid email address is required";
        document.getElementById("email").classList.add("error-border");
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
        document.getElementById("email").classList.remove("error-border");
    }

    // Website validation
    let websitePattern = /^(https?:\/\/)?(www\.)?[a-z0-9]+\.[a-z]{2,}$/;
    if (!website.match(websitePattern)) {
        document.getElementById("websiteError").innerText = "A valid URL is required";
        document.getElementById("website").classList.add("error-border");
        isValid = false;
    } else {
        document.getElementById("websiteError").innerText = "";
        document.getElementById("website").classList.remove("error-border");
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").innerText = "This field is required";
        document.getElementById("message").classList.add("error-border");
        isValid = false;
    } else {
        document.getElementById("messageError").innerText = "";
        document.getElementById("message").classList.remove("error-border");
    }

    return isValid;
}
