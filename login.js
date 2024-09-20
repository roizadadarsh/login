document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Retrieve the user data from localStorage
  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    // Redirect to the secured page
    alert("Login successful! Redirecting to secured page...");
    window.location.href = "secured.html";
  } else {
    document.getElementById("error").textContent = "Invalid email or password!";
  }
});
