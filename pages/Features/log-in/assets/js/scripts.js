document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = { email, password };

    try {
      const response = await fetch("http://localhost:3000/api/PetLover/users/login/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("userId", result.id);
        localStorage.setItem("name", result.name);
        localStorage.setItem("email", result.email);

        alert(`Welcome back, ${result.name}!`);
        window.location.href = "../../index.html"; 
      } else {
        alert(result.error || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  });