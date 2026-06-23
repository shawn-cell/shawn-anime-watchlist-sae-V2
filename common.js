function saeGetUser(){ return window.SAE_DB.getCurrentUser(); }

function setupNavUserUI(){
  const user = saeGetUser();
  const label = document.getElementById("navUserLabel");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginBtn = document.getElementById("loginBtn");

  if(label) label.textContent = user ? (user.username || user.email || "User") : "Guest";
  if(logoutBtn){
    if(user) logoutBtn.classList.remove("hidden");
    logoutBtn.onclick = () => {
      window.SAE_DB.logout();
      window.location.href = "index.html";
    };
  }
  if(loginBtn && user) loginBtn.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", setupNavUserUI);
