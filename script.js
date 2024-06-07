const form = document.querySelector(".signup-form");
const checkboxField = document.querySelector(".checkbox");
const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm-pwd");

let password, confirmedPassword;

const errorMsg = document.createElement("div");
errorMsg.classList.add("error-msg");
errorMsg.textContent = "Passwords do not match!";

confirmPasswordField.addEventListener("blur", () => {
    password = passwordField.value;
    confirmedPassword = confirmPasswordField.value;
    confirmPassword();
});

// In case user changes the password field again after they enter the confirm password field
passwordField.addEventListener("blur", () => {
    if (confirmPasswordField.value !== "") {
        password = passwordField.value;
        confirmPassword();
    }
});

function confirmPassword() {
    if (password !== confirmedPassword) {
        form.insertBefore(errorMsg, checkboxField);
        confirmPasswordField.style.border = "2px solid #ff0000";
        checkboxField.disabled = true;
    }
    else {
        if (document.querySelector(".error-msg")) {
            form.removeChild(errorMsg);
            confirmPasswordField.style.border = "";
            checkboxField.disabled = false;
        }
    }
}

