// ==============================
// SHRUTI® Login Page
// ==============================

// Password Show / Hide
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }

});

// Login Form
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.querySelector("input[type='email']").value.trim();
    const pass = password.value.trim();

    if (email === "" || pass === "") {
        alert("Please enter your email and password.");
        return;
    }

    // Save login (Demo)
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Button Animation
    const btn = document.querySelector("button[type='submit']");

    btn.innerHTML = "Logging In...";
    btn.disabled = true;

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 1200);

});

// Register Button
document.querySelector(".register").addEventListener("click", () => {

    window.location.href = "register.html";

});

// Welcome Message
const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {
    greeting = "Good Morning ☀️";
}
else if (hour < 18) {
    greeting = "Good Afternoon 🌸";
}
else {
    greeting = "Good Evening 🌙";
}

console.log(greeting);
