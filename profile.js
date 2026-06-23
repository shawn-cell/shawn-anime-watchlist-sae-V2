function requireUser(){const user=window.SAE_DB.getCurrentUser(); if(!user){alert("Please sign in first."); window.location.href="login.html"; return null;} return user;}
function updateProfileStats(userId){
  const watchlist=window.SAE_DB.getWatchlist().filter(i=>i.userId===userId);
  profileWatching.textContent=watchlist.filter(i=>i.status==="Watching").length;
  profileCompleted.textContent=watchlist.filter(i=>i.status==="Completed").length;
  profileFavorites.textContent=watchlist.filter(i=>i.favorite).length;
  profileTotal.textContent=watchlist.length;
}
function loadProfile(){
  const user=requireUser(); if(!user) return;
  const profiles=window.SAE_DB.getProfiles();
  const profile=profiles[user.id] || {username:user.username||"User",bio:"Anime strategist.",favoriteAnime:[]};
  profileName.textContent=profile.username; profileBio.textContent=profile.bio || ""; profileAvatar.textContent=(profile.username||"U")[0].toUpperCase();
  profileNameInput.value=profile.username || ""; profileBioInput.value=profile.bio || ""; favoriteAnimeInput.value=(profile.favoriteAnime||[]).join(", ");
  favoriteAnimeList.innerHTML=""; (profile.favoriteAnime||[]).forEach(a=>{const li=document.createElement("li"); li.textContent=a; favoriteAnimeList.appendChild(li);});
  updateProfileStats(user.id);
}
profileForm?.addEventListener("submit", e=>{e.preventDefault(); const user=requireUser(); if(!user) return; const profiles=window.SAE_DB.getProfiles(); profiles[user.id]={username:profileNameInput.value.trim()||"User",bio:profileBioInput.value.trim(),favoriteAnime:favoriteAnimeInput.value.split(",").map(v=>v.trim()).filter(Boolean)}; window.SAE_DB.saveProfiles(profiles); loadProfile(); alert("Profile updated.");});
document.addEventListener("DOMContentLoaded", loadProfile);
