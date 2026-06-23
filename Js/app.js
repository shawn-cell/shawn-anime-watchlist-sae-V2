const animeCatalog = [
  {id:1,title:"Classroom of the Elite",image:"https://cdn.myanimelist.net/images/anime/5/86830.jpg",genres:["Psychological","School","Drama"],synopsis:"At Advanced Nurturing High School, intelligence, manipulation and social hierarchy become tools of survival.",rating:"8.2",episodes:36,youtube:"https://www.youtube.com/results?search_query=Classroom+of+the+Elite+official+trailer",official:"https://www.crunchyroll.com/"},
  {id:2,title:"Attack on Titan",image:"https://cdn.myanimelist.net/images/anime/10/47347.jpg",genres:["Action","Drama","Mystery"],synopsis:"Humanity fights for survival behind walls while deeper truths about the world begin to surface.",rating:"9.1",episodes:89,youtube:"https://www.youtube.com/results?search_query=Attack+on+Titan+official+trailer",official:"https://www.crunchyroll.com/"},
  {id:3,title:"Solo Leveling",image:"https://cdn.myanimelist.net/images/anime/1800/142390.jpg",genres:["Action","Fantasy","Adventure"],synopsis:"The weakest hunter gains a system that lets him grow stronger beyond normal limits.",rating:"8.6",episodes:12,youtube:"https://www.youtube.com/results?search_query=Solo+Leveling+official+trailer",official:"https://www.crunchyroll.com/"},
  {id:4,title:"Jujutsu Kaisen",image:"https://cdn.myanimelist.net/images/anime/1171/109222.jpg",genres:["Action","Supernatural","Dark Fantasy"],synopsis:"A boy enters the world of curses and sorcerers after consuming a dangerous cursed object.",rating:"8.6",episodes:47,youtube:"https://www.youtube.com/results?search_query=Jujutsu+Kaisen+official+trailer",official:"https://www.crunchyroll.com/"},
  {id:5,title:"Blue Lock",image:"https://cdn.myanimelist.net/images/anime/1258/126929.jpg",genres:["Sports","Psychological","Competition"],synopsis:"A ruthless football project designed to create the ultimate egoistic striker.",rating:"8.3",episodes:24,youtube:"https://www.youtube.com/results?search_query=Blue+Lock+official+trailer",official:"https://www.crunchyroll.com/"}
];
let currentAnimePool = [...animeCatalog];

function getCurrentUser(){return window.SAE_DB.getCurrentUser();}
function getWatchlistForCurrentUser(){const u=getCurrentUser(); const w=window.SAE_DB.getWatchlist(); return u ? w.filter(i=>i.userId===u.id) : [];}

function saveToWatchlist(animeObj){
  const user=getCurrentUser();
  if(!user){alert("Please sign in first to save anime to your watchlist."); location.href="login.html"; return;}
  const watchlist=window.SAE_DB.getWatchlist();
  const exists=watchlist.find(i=>i.userId===user.id && i.title===animeObj.title);
  if(exists){alert("This anime is already in your watchlist."); return;}
  watchlist.push({id:crypto.randomUUID(),userId:user.id,animeId:animeObj.id || Date.now(),title:animeObj.title,image:animeObj.image,genres:animeObj.genres||[],status:"Plan to Watch",progress:0,favorite:false,rating:animeObj.rating || "N/A"});
  window.SAE_DB.saveWatchlist(watchlist); updateHomeStats(); alert(`${animeObj.title} added to your watchlist.`);
}

function renderAnimeGrid(list=currentAnimePool){
  const grid=document.getElementById("animeGrid"); if(!grid) return; grid.innerHTML="";
  list.forEach(anime=>{
    const card=document.createElement("div"); card.className="anime-card";
    card.innerHTML=`<img class="anime-poster" src="${anime.image}" alt="${anime.title}">
      <div class="anime-card-body"><h4>${anime.title}</h4><p class="muted">⭐ ${anime.rating||"N/A"} • ${anime.episodes||"?"} eps</p>
      <div class="genre-row">${(anime.genres||[]).map(g=>`<span class="genre-tag">${g}</span>`).join("")}</div>
      <div class="card-actions"><button class="btn small" data-details="${anime.id}">Details</button><button class="btn btn-outline small" data-save="${anime.id}">+ Watchlist</button></div></div>`;
    grid.appendChild(card);
  });
  grid.querySelectorAll("[data-details]").forEach(btn=>btn.onclick=()=>openAnimeModal(btn.dataset.details));
  grid.querySelectorAll("[data-save]").forEach(btn=>{btn.onclick=()=>{const a=currentAnimePool.find(x=>String(x.id)===String(btn.dataset.save)); if(a) saveToWatchlist(a);};});
}
function openAnimeByTitle(title){const anime=currentAnimePool.find(a=>a.title.toLowerCase()===title.toLowerCase()) || animeCatalog.find(a=>a.title.toLowerCase()===title.toLowerCase()); if(anime) openAnimeModal(anime.id);}

function openAnimeModal(id){
  const anime=currentAnimePool.find(a=>String(a.id)===String(id)) || animeCatalog.find(a=>String(a.id)===String(id)); if(!anime) return;
  animeModalContent.innerHTML=`<div class="modal-anime"><img src="${anime.image}" alt="${anime.title}">
  <div class="modal-section"><h2>${anime.title}</h2><p class="muted">⭐ ${anime.rating||"N/A"} • ${anime.episodes||"?"} episodes</p>
  <div class="genre-row">${(anime.genres||[]).map(g=>`<span class="genre-tag">${g}</span>`).join("")}</div>
  <p>${anime.synopsis||"No synopsis available."}</p>
  <div class="card-actions">
    <button class="btn" id="modalAddBtn">Add to Watchlist</button>
    <a class="btn btn-outline" href="${anime.youtube || `https://www.youtube.com/results?search_query=${encodeURIComponent(anime.title+' anime trailer')}`}" target="_blank">Watch on YouTube</a>
    <a class="btn btn-outline" href="${anime.official || 'https://myanimelist.net/'}" target="_blank">Official / Info</a>
  </div></div></div>`;
  document.getElementById("modalAddBtn").onclick=()=>saveToWatchlist(anime);
  animeModal.classList.remove("hidden");
}
function closeAnimeModal(){animeModal.classList.add("hidden");}
function updateHomeStats(){
  const list=getWatchlistForCurrentUser();
  statWatching.textContent=list.filter(i=>i.status==="Watching").length;
  statCompleted.textContent=list.filter(i=>i.status==="Completed").length;
  statFavorites.textContent=list.filter(i=>i.favorite).length;
  statTotal.textContent=list.length;
}
async function searchJikan(query){
  const res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=12`);
  const data = await res.json();
  return (data.data || []).map(item=>({
    id:`jikan-${item.mal_id}`,
    title:item.title,
    image:item.images?.jpg?.large_image_url || item.images?.jpg?.image_url || "",
    genres:(item.genres||[]).map(g=>g.name),
    synopsis:item.synopsis || "No synopsis available.",
    rating:item.score ? String(item.score) : "N/A",
    episodes:item.episodes || "?",
    youtube:`https://www.youtube.com/results?search_query=${encodeURIComponent(item.title+' anime trailer')}`,
    official:item.url || "https://myanimelist.net/"
  }));
}
function setupSearch(){
  const input=document.getElementById("searchInput"); if(!input) return;
  let timer;
  input.addEventListener("input", e=>{
    const value=e.target.value.trim();
    clearTimeout(timer);
    if(!value){ currentAnimePool=[...animeCatalog]; renderAnimeGrid(currentAnimePool); return; }
    timer=setTimeout(async()=>{
      try{
        const local = animeCatalog.filter(a=>a.title.toLowerCase().includes(value.toLowerCase()) || a.genres.some(g=>g.toLowerCase().includes(value.toLowerCase())));
        const live = await searchJikan(value);
        const seen = new Set();
        currentAnimePool=[...local, ...live].filter(a=>{const key=a.title.toLowerCase(); if(seen.has(key)) return false; seen.add(key); return true;});
        renderAnimeGrid(currentAnimePool);
      }catch(err){
        const local = animeCatalog.filter(a=>a.title.toLowerCase().includes(value.toLowerCase()) || a.genres.some(g=>g.toLowerCase().includes(value.toLowerCase())));
        currentAnimePool = local;
        renderAnimeGrid(currentAnimePool);
      }
    }, 450);
  });
}
document.addEventListener("DOMContentLoaded", ()=>{renderAnimeGrid(); setupSearch(); updateHomeStats();});
