// ===============================
// SHRUTI® Register Page
// ===============================

// Show / Hide Password
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        confirmPassword.type = "text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        password.type = "password";
        confirmPassword.type = "password";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});

// Register Form

const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const role = document.getElementById("role").value;

    if(password.value !== confirmPassword.value){

        alert("Passwords do not match!");
        return;

    }

    // Save user locally (Demo)

    const user = {

        fullName,
        email,
        phone,
        role

    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    alert("Registration Successful!");

    window.location.href = "dashboard.html";

});

// If already logged in

window.onload = () => {

    const login = localStorage.getItem("isLoggedIn");

    if(login === "true"){

        console.log("User already registered.");

    }

};
