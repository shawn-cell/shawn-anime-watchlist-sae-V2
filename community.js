let currentRoom="global";
function getCommunityUser(){const user=window.SAE_DB.getCurrentUser(); if(!user){alert("Please sign in first to use community chat."); window.location.href="login.html"; return null;} return user;}
function renderMessages(){
  const container=chatMessages; const messages=window.SAE_DB.getMessages().filter(m=>m.room===currentRoom).sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt)); container.innerHTML="";
  if(!messages.length){container.innerHTML='<div class="empty-state">No messages yet. Start the conversation.</div>'; return;}
  messages.forEach(msg=>{const div=document.createElement("div"); div.className="chat-message"; div.innerHTML=`<div class="chat-meta">${msg.username} • ${new Date(msg.createdAt).toLocaleString()}</div><div>${msg.text}</div>`; container.appendChild(div);});
  container.scrollTop=container.scrollHeight;
}
function switchRoom(room){currentRoom=room; const labels={global:"Global Anime Chat","classroom-of-the-elite":"Classroom of the Elite","attack-on-titan":"Attack on Titan","solo-leveling":"Solo Leveling","jujutsu-kaisen":"Jujutsu Kaisen"}; currentRoomLabel.textContent=labels[room]||room; renderMessages();}
document.addEventListener("DOMContentLoaded",()=>{getCommunityUser(); document.querySelectorAll(".room-btn").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".room-btn").forEach(b=>b.classList.remove("active")); btn.classList.add("active"); switchRoom(btn.dataset.room);})); renderMessages();});
chatForm?.addEventListener("submit",e=>{e.preventDefault(); const user=getCommunityUser(); if(!user) return; const text=chatInput.value.trim(); if(!text) return; const messages=window.SAE_DB.getMessages(); messages.push({id:crypto.randomUUID(),room:currentRoom,userId:user.id,username:user.username||"User",text,createdAt:new Date().toISOString()}); window.SAE_DB.saveMessages(messages); chatInput.value=""; renderMessages();});
