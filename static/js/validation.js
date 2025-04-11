function validateForm() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one uppercase letter, one number, one symbol, and be at least 6 characters long.");
        return false;
    }

    return true;
}
