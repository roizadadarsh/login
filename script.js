document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Retrieve the user data from localStorage
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    // Hide the login and register forms and show the secured page
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("securedPage").classList.remove("hidden");

    // Display the username on the secured page
    document.getElementById("userDisplay").textContent = username;
  } else {
    document.getElementById("error").textContent = "Invalid username or password!";
  }
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const regUsername = document.getElementById("regUsername").value;
  const regPassword = document.getElementById("regPassword").value;

  // Save user data to localStorage
  localStorage.setItem("username", regUsername);
  localStorage.setItem("password", regPassword);

  document.getElementById("registerSuccess").textContent = "Registration successful!";
});

document.getElementById("logout").addEventListener("click", function() {
  // Clear localStorage and reset the forms
  localStorage.clear();
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
  document.getElementById("securedPage").classList.add("hidden");

  document.getElementById("error").textContent = "";
  document.getElementById("registerSuccess").textContent = "";
});
