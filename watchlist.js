function getCurrentUserOrRedirect(){const user=window.SAE_DB.getCurrentUser(); if(!user){alert("Please sign in to access your watchlist."); window.location.href="login.html"; return null;} return user;}
function getUserWatchlist(){const user=getCurrentUserOrRedirect(); if(!user) return []; return window.SAE_DB.getWatchlist().filter(i=>i.userId===user.id);}
function renderWatchlist(status="All"){
  const grid=document.getElementById("watchlistGrid"); if(!grid) return;
  const list=getUserWatchlist(); const filtered=status==="All"?list:list.filter(i=>i.status===status); grid.innerHTML="";
  if(!filtered.length){grid.innerHTML=`<div class="empty-state">No anime in this category yet.</div>`; return;}
  filtered.forEach(item=>{
    const card=document.createElement("div"); card.className="anime-card";
    card.innerHTML=`<img class="anime-poster" src="${item.image}" alt="${item.title}"><div class="anime-card-body"><h4>${item.title}</h4><p class="muted">Status: ${item.status}</p>
    <div class="genre-row">${(item.genres||[]).map(g=>`<span class="genre-tag">${g}</span>`).join("")}</div>
    <select class="watchlist-status" data-id="${item.id}">
      <option ${item.status==="Watching"?"selected":""}>Watching</option><option ${item.status==="Completed"?"selected":""}>Completed</option><option ${item.status==="On Hold"?"selected":""}>On Hold</option><option ${item.status==="Dropped"?"selected":""}>Dropped</option><option ${item.status==="Plan to Watch"?"selected":""}>Plan to Watch</option>
    </select>
    <div class="card-actions"><button class="btn btn-outline small favorite-btn" data-id="${item.id}">${item.favorite ? "★ Favorited":"☆ Favorite"}</button><button class="btn small remove-btn" data-id="${item.id}">Remove</button></div></div>`;
    grid.appendChild(card);
  }); bindWatchlistControls(status);
}
function bindWatchlistControls(currentStatus){
  document.querySelectorAll(".watchlist-status").forEach(select=>select.addEventListener("change",e=>{const id=e.target.dataset.id; const all=window.SAE_DB.getWatchlist(); const item=all.find(i=>i.id===id); if(item) item.status=e.target.value; window.SAE_DB.saveWatchlist(all); renderWatchlist(currentStatus);}));
  document.querySelectorAll(".favorite-btn").forEach(btn=>btn.addEventListener("click",()=>{const id=btn.dataset.id; const all=window.SAE_DB.getWatchlist(); const item=all.find(i=>i.id===id); if(item) item.favorite=!item.favorite; window.SAE_DB.saveWatchlist(all); renderWatchlist(currentStatus);}));
  document.querySelectorAll(".remove-btn").forEach(btn=>btn.addEventListener("click",()=>{const id=btn.dataset.id; let all=window.SAE_DB.getWatchlist(); all=all.filter(i=>i.id!==id); window.SAE_DB.saveWatchlist(all); renderWatchlist(currentStatus);}));
}
document.addEventListener("DOMContentLoaded",()=>{getCurrentUserOrRedirect(); document.querySelectorAll(".tab-btn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active")); btn.classList.add("active"); renderWatchlist(btn.dataset.status);})); renderWatchlist();});
