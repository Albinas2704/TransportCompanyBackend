function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    if (username === "") {
        alert("Username cannot be empty");
        return;
    }

    if (password === "") {
        alert("Password cannot be empty");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (role === "") {
        alert("Please select a role");
        return;
    }

    if (role === "manager") {
        window.location.href = "./dashboard/manager.html";
    } else if (role === "employee") {
        window.location.href = "./dashboard/employee.html";
    } else if (role === "customer") {
        window.location.href = "./dashboard/customer.html";
    } else if (role === "driver") {
        window.location.href = "./dashboard/driver.html";
    }
}
