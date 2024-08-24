document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-bar a");

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.classList.add("animate");
    });

    link.addEventListener("mouseout", () => {
      link.classList.remove("animate");
    });
  });
});
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const box = document.querySelector(".box");
  box.addEventListener("click", function () {
    box.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.3)";
  });
});
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Simple validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // If validation is successful
    alert("Registration successful!");

    // Optionally, send the data to the server
    // var formData = new FormData(this);
    // fetch('your-server-endpoint', {
    //     method: 'POST',
    //     body: formData
    // }).then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
  });
