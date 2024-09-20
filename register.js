document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const regUsername = document.getElementById("regUsername").value;
  const regEmail = document.getElementById("regEmail").value;
  const regPassword = document.getElementById("regPassword").value;

  // Save user data to localStorage
  localStorage.setItem("username", regUsername);
  localStorage.setItem("email", regEmail);
  localStorage.setItem("password", regPassword);

  // Show success message
  document.getElementById("registerSuccess").textContent = "Registration successful! Redirecting to login...";

  // Redirect to login page after 2 seconds
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
