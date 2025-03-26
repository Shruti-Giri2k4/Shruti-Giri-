document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const userTableBody = document.getElementById("userTableBody");

    // Function to load users from localStorage and display them
    function loadUsers() {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        userTableBody.innerHTML = "";

        users.forEach((user, index) => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button></td>
            </tr>`;
            userTableBody.innerHTML += row;
        });
    }

    // Function to delete user
    window.deleteUser = function (index) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        loadUsers();
    };

    // Form submission handler
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let contact = document.getElementById("contact").value;
            let address = document.getElementById("address").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ name, email, contact, address });
            localStorage.setItem("users", JSON.stringify(users));

            alert("User Registered Successfully!");
            form.reset();
        });
    }

    // Load users when on view.html
    if (userTableBody) {
        loadUsers();
    }
});
