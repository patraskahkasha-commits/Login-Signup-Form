
// TAB SWITCH using for tab selection
// ===============================

function switchTab(tab) {

    const loginPanel = document.getElementById("loginPanel");
    const signupPanel = document.getElementById("signupPanel");

    const tabLogin = document.getElementById("tabLogin");
    const tabSignup = document.getElementById("tabSignup");

    // Hide success messages
    document.getElementById("loginSuccess").style.display = "none";
    document.getElementById("signupSuccess").style.display = "none";

    if (tab === "login") {

        loginPanel.classList.remove("panel-hidden");
        signupPanel.classList.add("panel-hidden");

        tabLogin.classList.add("active");
        tabSignup.classList.remove("active");

    } else {

        signupPanel.classList.remove("panel-hidden");
        loginPanel.classList.add("panel-hidden");

        tabSignup.classList.add("active");
        tabLogin.classList.remove("active");
    }
}

// SHOW / HIDE PASSWORD


function togglePw(inputId, button) {

    const input = document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";
        button.textContent = "Hide";

    } else {

        input.type = "password";
        button.textContent = "Show";
    }
}


// EMAIL VALIDATION


function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


// SHOW ERROR


function showError(fieldId, message) {

    const field = document.getElementById(fieldId);

    field.classList.add("error");

    const msg = field.querySelector(".msg");

    if (msg) {
        msg.textContent = message;
    }
}


// REMOVE ERROR


function removeError(fieldId) {

    const field = document.getElementById(fieldId);

    field.classList.remove("error");

    const sg = field.querySelector(".msg");

    if (msg) {
        msg.textContent = "";
    }
}



// LOGIN

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const loginSuccess = document.getElementById("loginSuccess");

    loginSuccess.style.display = "none";

    // Remove old errors
    removeError("loginEmailField");
    removeError("loginPasswordField");


    // Email empty
    if (email === "") {

        showError("loginEmailField", "Email is required.");
        return;
    }


    // Email invalid
    if (!isValidEmail(email)) {

        showError("loginEmailField", "Please enter a valid email.");
        return;
    }


    // Password empty
    if (password === "") {

        showError("loginPasswordField", "Password is required.");
        return;
    }


    // Password less than 8 characters
    if (password.length < 8) {

        showError(
            "loginPasswordField",
            "Password must be at least 8 characters."
        );

        return;
    }


    // Everything is correct
    loginSuccess.style.display = "block";
});


// SIGN UP : section


const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();

    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirm").value;

    const terms = document.getElementById("terms");
    const signupSuccess = document.getElementById("signupSuccess");

    signupSuccess.style.display = "none";

    // Remove old errors
    removeError("signupNameField");
    removeError("signupEmailField");
    removeError("signupPasswordField");
    removeError("signupConfirmField");


    // Name empty
    if (name === "") {

        showError(
            "signupNameField",
            "Full name is required."
        );

        return;
    }


    // Email empty
    if (email === "") {

        showError(
            "signupEmailField",
            "Email is required."
        );

        return;
    }


    // Email invalid
    if (!isValidEmail(email)) {

        showError(
            "signupEmailField",
            "Please enter a valid email."
        );

        return;
    }


    // Password empty
    if (password === "") {

        showError(
            "signupPasswordField",
            "Password is required."
        );

        return;
    }


    // Password less than 8
    if (password.length < 8) {

        showError(
            "signupPasswordField",
            "Password must be at least 8 characters."
        );

        return;
    }


    // Confirm password empty
    if (confirmPassword === "") {

        showError(
            "signupConfirmField",
            "Please confirm your password."
        );

        return;
    }


    // Passwords don't match
    if (password !== confirmPassword) {

        showError(
            "signupConfirmField",
            "Passwords do not match."
        );

        return;
    }


    // Terms not checked
    if (!terms.checked) {

        alert("Please agree to the terms & conditions.");

        return;
    }


    // Everything is correct
    signupSuccess.style.display = "block";
});



// PASSWORD STRENGTH


const signupPassword = document.getElementById("signupPassword");
const strengthBar = document.getElementById("strengthBar");

signupPassword.addEventListener("input", function () {

    const password = signupPassword.value;

    let strength = 0;


    // 8 characters
    if (password.length >= 8) {
        strength++;
    }


    // Capital letter
    if (/[A-Z]/.test(password)) {
        strength++;
    }


    // Number
    if (/[0-9]/.test(password)) {
        strength++;
    }


    // Special character
    if (/[^A-Za-z0-9]/.test(password)) {
        strength++;
    }


    // Strength bar
    if (password.length === 0) {

        strengthBar.style.width = "0%";

    } else if (strength === 1) {

        strengthBar.style.width = "25%";

    } else if (strength === 2) {

        strengthBar.style.width = "50%";

    } else if (strength === 3) {

        strengthBar.style.width = "75%";

    } else {

        strengthBar.style.width = "100%";
    }
});

