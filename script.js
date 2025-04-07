// LocalStorage-based authentication (for demo)
function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
  
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }
  
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Signup successful!");
    window.location.href = "index.html";
  }
  
  function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored && stored.username === username && stored.password === password) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "game.html";
    } else {
      alert("Invalid credentials");
    }
  }
  
  function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
  }
  
  function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultText = `You chose ${userChoice} | Computer chose ${computerChoice} → `;
  
    if (userChoice === computerChoice) resultText += "It's a Draw!";
    else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) resultText += "You Win!";
    else resultText += "You Lose!";
  
    document.getElementById("result").innerText = resultText;
  }
  
  // Redirect if not logged in
  if (window.location.pathname.includes("game.html") && !sessionStorage.getItem("loggedIn")) {
    window.location.href = "index.html";
  }
  