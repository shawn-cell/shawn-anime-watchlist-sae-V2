window.SAE_CONFIG = {
  useFirebase: false,
  appName: "Shawn anime-watchlist.SAE",
  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};

window.SAE_DB = {
  getCurrentUser(){const u=localStorage.getItem("sae_current_user"); return u?JSON.parse(u):null;},
  setCurrentUser(user){localStorage.setItem("sae_current_user", JSON.stringify(user));},
  logout(){localStorage.removeItem("sae_current_user");},
  getUsers(){return JSON.parse(localStorage.getItem("sae_users") || "[]");},
  saveUsers(users){localStorage.setItem("sae_users", JSON.stringify(users));},
  getWatchlist(){return JSON.parse(localStorage.getItem("sae_watchlist") || "[]");},
  saveWatchlist(items){localStorage.setItem("sae_watchlist", JSON.stringify(items));},
  getMessages(){return JSON.parse(localStorage.getItem("sae_messages") || "[]");},
  saveMessages(messages){localStorage.setItem("sae_messages", JSON.stringify(messages));},
  getShawnJrHistory(){return JSON.parse(localStorage.getItem("sae_shawnjr_history") || "[]");},
  saveShawnJrHistory(history){localStorage.setItem("sae_shawnjr_history", JSON.stringify(history));},
  getProfiles(){return JSON.parse(localStorage.getItem("sae_profiles") || "{}");},
  saveProfiles(profiles){localStorage.setItem("sae_profiles", JSON.stringify(profiles));}
};
