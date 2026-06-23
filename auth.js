const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const authMessage = document.getElementById("authMessage");
const showLoginBtn = document.getElementById("showLoginBtn");
const showRegisterBtn = document.getElementById("showRegisterBtn");

function setAuthMessage(message, isError = false) {
  authMessage.textContent = message;
  authMessage.style.color = isError ? "#ff7b94" : "#9aa6c5";
}
showLoginBtn?.addEventListener("click",()=>{loginForm.classList.remove("hidden");registerForm.classList.add("hidden");});
showRegisterBtn?.addEventListener("click",()=>{registerForm.classList.remove("hidden");loginForm.classList.add("hidden");});

registerForm?.addEventListener("submit", e => {
  e.preventDefault();
  const username = registerUsername.value.trim();
  const email = registerEmail.value.trim().toLowerCase();
  const password = registerPassword.value.trim();
  if (!username || !email || !password) return setAuthMessage("Please fill all registration fields.", true);
  const users = window.SAE_DB.getUsers();
  if (users.find(u => u.email === email)) return setAuthMessage("An account with that email already exists.", true);
  const newUser = { id: crypto.randomUUID(), username, email, password };
  users.push(newUser);
  window.SAE_DB.saveUsers(users);
  window.SAE_DB.setCurrentUser(newUser);
  const profiles = window.SAE_DB.getProfiles();
  profiles[newUser.id] = { username, bio: "Anime strategist.", favoriteAnime: ["Classroom of the Elite","Attack on Titan"] };
  window.SAE_DB.saveProfiles(profiles);
  setAuthMessage("Account created successfully. Redirecting...");
  setTimeout(()=>window.location.href="index.html",800);
});

loginForm?.addEventListener("submit", e => {
  e.preventDefault();
  const email = loginEmail.value.trim().toLowerCase();
  const password = loginPassword.value.trim();
  const user = window.SAE_DB.getUsers().find(u => u.email === email && u.password === password);
  if (!user) return setAuthMessage("Invalid email or password.", true);
  window.SAE_DB.setCurrentUser(user);
  setAuthMessage("Login successful. Redirecting...");
  setTimeout(()=>window.location.href="index.html",800);
});
