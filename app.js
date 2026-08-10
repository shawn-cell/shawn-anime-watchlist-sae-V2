// Anime Database with streaming platform info
const animeDatabase = [
    {
        id: 1,
        title: "Attack on Titan",
        rating: 9.0,
        genre: ["Action", "Fantasy", "Drama"],
        status: "Completed",
        episodes: 139,
        description: "Humanity fights for survival against giant man-eating Titans in a walled city.",
        poster: "👹",
        year: 2013,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Attack%20on%20Titan", free: true, paid: true },
            { name: "Netflix", url: "https://www.netflix.com/search?q=Attack%20on%20Titan", free: false, paid: true },
            { name: "Amazon Prime Video", url: "https://www.primevideo.com/search?keyword=Attack%20on%20Titan", free: false, paid: true }
        ]
    },
    {
        id: 2,
        title: "Death Note",
        rating: 8.9,
        genre: ["Thriller", "Drama", "Sci-Fi"],
        status: "Completed",
        episodes: 37,
        description: "A student discovers a mysterious notebook that kills anyone whose name is written in it.",
        poster: "📓",
        year: 2006,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Death%20Note", free: true, paid: true },
            { name: "Netflix", url: "https://www.netflix.com/search?q=Death%20Note", free: false, paid: true },
            { name: "Hulu", url: "https://www.hulu.com/search?q=Death%20Note", free: false, paid: true }
        ]
    },
    {
        id: 3,
        title: "Demon Slayer",
        rating: 8.7,
        genre: ["Action", "Adventure", "Fantasy"],
        status: "Ongoing",
        episodes: 55,
        description: "A young man joins the Demon Slayer corps to save his sister turned into a demon.",
        poster: "🗡️",
        year: 2019,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Demon%20Slayer", free: true, paid: true },
            { name: "Netflix", url: "https://www.netflix.com/search?q=Demon%20Slayer", free: false, paid: true }
        ]
    },
    {
        id: 4,
        title: "One Piece",
        rating: 8.8,
        genre: ["Action", "Adventure", "Comedy"],
        status: "Ongoing",
        episodes: 1000,
        description: "A pirate captain searches for the legendary treasure, the One Piece.",
        poster: "🏴‍☠️",
        year: 1999,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=One%20Piece", free: true, paid: true },
            { name: "Netflix", url: "https://www.netflix.com/search?q=One%20Piece", free: false, paid: true }
        ]
    },
    {
        id: 5,
        title: "My Hero Academia",
        rating: 8.5,
        genre: ["Action", "Adventure", "Comedy"],
        status: "Ongoing",
        episodes: 113,
        description: "A boy without superpowers dreams of becoming the greatest hero.",
        poster: "🦸",
        year: 2016,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=My%20Hero%20Academia", free: true, paid: true },
            { name: "Netflix", url: "https://www.netflix.com/search?q=My%20Hero%20Academia", free: false, paid: true },
            { name: "Hulu", url: "https://www.hulu.com/search?q=My%20Hero%20Academia", free: false, paid: true }
        ]
    },
    {
        id: 6,
        title: "Naruto Shippuden",
        rating: 8.6,
        genre: ["Action", "Adventure", "Comedy"],
        status: "Completed",
        episodes: 500,
        description: "A ninja with a hidden beast within him pursues his ambitions.",
        poster: "🥋",
        year: 2007,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Naruto%20Shippuden", free: true, paid: true },
            { name: "Netflix", url: "https://www.netflix.com/search?q=Naruto%20Shippuden", free: false, paid: true },
            { name: "Hulu", url: "https://www.hulu.com/search?q=Naruto", free: false, paid: true }
        ]
    },
    {
        id: 7,
        title: "Steins;Gate",
        rating: 9.1,
        genre: ["Thriller", "Sci-Fi", "Drama"],
        status: "Completed",
        episodes: 24,
        description: "A group discovers how to send messages to the past, changing fate itself.",
        poster: "⏰",
        year: 2011,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Steins%20Gate", free: true, paid: true },
            { name: "Hulu", url: "https://www.hulu.com/search?q=Steins%20Gate", free: false, paid: true }
        ]
    },
    {
        id: 8,
        title: "Jujutsu Kaisen",
        rating: 8.8,
        genre: ["Action", "Adventure", "Supernatural"],
        status: "Ongoing",
        episodes: 47,
        description: "A high schooler joins a secret organization to fight supernatural curses.",
        poster: "👹",
        year: 2020,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Jujutsu%20Kaisen", free: true, paid: true },
            { name: "Netflix", url: "https://www.netflix.com/search?q=Jujutsu%20Kaisen", free: false, paid: true }
        ]
    },
    {
        id: 9,
        title: "Fullmetal Alchemist",
        rating: 9.0,
        genre: ["Action", "Adventure", "Fantasy"],
        status: "Completed",
        episodes: 64,
        description: "Two brothers seek the Philosopher's Stone to restore their bodies.",
        poster: "⚗️",
        year: 2009,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Fullmetal%20Alchemist", free: true, paid: true },
            { name: "Netflix", url: "https://www.netflix.com/search?q=Fullmetal%20Alchemist", free: false, paid: true },
            { name: "Hulu", url: "https://www.hulu.com/search?q=Fullmetal%20Alchemist", free: false, paid: true }
        ]
    },
    {
        id: 10,
        title: "Sword Art Online",
        rating: 7.8,
        genre: ["Action", "Adventure", "Romance"],
        status: "Ongoing",
        episodes: 96,
        description: "Players are trapped in a virtual reality MMORPG where death is permanent.",
        poster: "⚔️",
        year: 2012,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Sword%20Art%20Online", free: true, paid: true },
            { name: "Netflix", url: "https://www.netflix.com/search?q=Sword%20Art%20Online", free: false, paid: true }
        ]
    },
    {
        id: 11,
        title: "Code Geass",
        rating: 8.7,
        genre: ["Action", "Drama", "Sci-Fi"],
        status: "Completed",
        episodes: 50,
        description: "A student gains the power to command anyone to obey him.",
        poster: "👁️",
        year: 2006,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Code%20Geass", free: true, paid: true },
            { name: "Hulu", url: "https://www.hulu.com/search?q=Code%20Geass", free: false, paid: true }
        ]
    },
    {
        id: 12,
        title: "Tokyo Ghoul",
        rating: 8.1,
        genre: ["Action", "Drama", "Supernatural"],
        status: "Completed",
        episodes: 48,
        description: "A student becomes a half-ghoul and enters a dangerous underground world.",
        poster: "🐦",
        year: 2014,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Tokyo%20Ghoul", free: true, paid: true },
            { name: "Hulu", url: "https://www.hulu.com/search?q=Tokyo%20Ghoul", free: false, paid: true }
        ]
    },
    {
        id: 13,
        title: "Mob Psycho 100",
        rating: 8.5,
        genre: ["Action", "Comedy", "Slice of Life"],
        status: "Completed",
        episodes: 25,
        description: "A middle schooler with psychic powers tries to live a normal life.",
        poster: "🧠",
        year: 2016,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Mob%20Psycho", free: true, paid: true },
            { name: "Netflix", url: "https://www.netflix.com/search?q=Mob%20Psycho", free: false, paid: true }
        ]
    },
    {
        id: 14,
        title: "Ergo Proxy",
        rating: 7.9,
        genre: ["Sci-Fi", "Drama", "Adventure"],
        status: "Completed",
        episodes: 23,
        description: "In a post-apocalyptic world, a girl and an android robot journey together.",
        poster: "🤖",
        year: 2006,
        streamingPlatforms: [
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Ergo%20Proxy", free: true, paid: true }
        ]
    },
    {
        id: 15,
        title: "Cowboy Bebop",
        rating: 8.8,
        genre: ["Action", "Adventure", "Sci-Fi"],
        status: "Completed",
        episodes: 26,
        description: "A group of bounty hunters explore the galaxy in search of wanted criminals.",
        poster: "🚀",
        year: 1998,
        streamingPlatforms: [
            { name: "Netflix", url: "https://www.netflix.com/search?q=Cowboy%20Bebop", free: false, paid: true },
            { name: "Crunchyroll", url: "https://www.crunchyroll.com/search?q=Cowboy%20Bebop", free: true, paid: true }
        ]
    }
];

// State
let watchlist = [];
let filteredAnime = [...animeDatabase];
let currentPage = 'home';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadWatchlistFromStorage();
    initializeApp();
});

function initializeApp() {
    displayFeaturedAnime();
    displayPopularAnime();
    displayCatalog();
    updateWatchlistDisplay();
}

// Display Featured Anime (first 3)
function displayFeaturedAnime() {
    const grid = document.getElementById('featuredGrid');
    grid.innerHTML = '';
    
    animeDatabase.slice(0, 3).forEach(anime => {
        grid.appendChild(createAnimeCard(anime));
    });
}

// Display Popular Anime (next 6)
function displayPopularAnime() {
    const grid = document.getElementById('popularGrid');
    grid.innerHTML = '';
    
    animeDatabase.slice(3, 9).forEach(anime => {
        grid.appendChild(createAnimeCard(anime));
    });
}

// Display Full Catalog
function displayCatalog() {
    const grid = document.getElementById('catalogGrid');
    grid.innerHTML = '';
    
    (filteredAnime.length > 0 ? filteredAnime : animeDatabase).forEach(anime => {
        grid.appendChild(createAnimeCard(anime));
    });
}

// Create Anime Card
function createAnimeCard(anime) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    
    const isInWatchlist = watchlist.some(item => item.id === anime.id);
    
    card.innerHTML = `
        <div class="anime-poster">${anime.poster}</div>
        <div class="anime-info">
            <div class="anime-title">${anime.title}</div>
            <div class="anime-rating">⭐ ${anime.rating}/10</div>
            <div>
                ${anime.genre.map(g => `<span class="anime-genre">${g}</span>`).join('')}
            </div>
            <div style="margin-top: 8px;">
                <span class="anime-status">${anime.status}</span>
            </div>
            <div class="card-actions">
                <button class="btn-small btn-details" onclick="openAnimeDetail(${anime.id})">Details</button>
                <button class="btn-small btn-watchlist ${isInWatchlist ? 'added' : ''}" onclick="toggleWatchlist(${anime.id})">${isInWatchlist ? '✓ Added' : '+ Add'}</button>
            </div>
        </div>
    `;
    
    return card;
}

// Generate Streaming Platform Buttons
function generateStreamingPlatforms(platforms) {
    if (!platforms || platforms.length === 0) {
        return '<p style="color: var(--text-muted); margin-top: 15px;">No streaming platforms available</p>';
    }
    
    return `
        <div class="streaming-section">
            <h3>🎥 Watch On:</h3>
            <div class="streaming-buttons">
                ${platforms.map(platform => {
                    const platformEmoji = getPlatformEmoji(platform.name);
                    const typeLabel = platform.free && platform.paid ? 'Free/Paid' : platform.free ? 'Free' : 'Paid';
                    return `
                        <a href="${platform.url}" target="_blank" rel="noopener noreferrer" class="streaming-btn" title="${typeLabel}">
                            <span class="platform-emoji">${platformEmoji}</span>
                            <span class="platform-name">${platform.name}</span>
                            <span class="platform-type">${typeLabel}</span>
                        </a>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// Get Platform Emoji
function getPlatformEmoji(platformName) {
    const emojis = {
        "Crunchyroll": "🎬",
        "Netflix": "📺",
        "Amazon Prime Video": "🎥",
        "Hulu": "📡",
        "MyAnimeList": "📝",
        "AniList": "🎌"
    };
    return emojis[platformName] || "▶️";
}

// Open Anime Detail Modal
function openAnimeDetail(animeId) {
    const anime = animeDatabase.find(a => a.id === animeId);
    if (!anime) return;
    
    const isInWatchlist = watchlist.some(item => item.id === anime.id);
    
    const detailHTML = `
        <div class="detail-header">
            <div class="detail-poster">${anime.poster}</div>
            <div class="detail-info">
                <h2>${anime.title}</h2>
                <p><strong>Rating:</strong> ⭐ ${anime.rating}/10</p>
                <p><strong>Status:</strong> ${anime.status}</p>
                <p><strong>Episodes:</strong> ${anime.episodes}</p>
                <p><strong>Year:</strong> ${anime.year}</p>
                <p><strong>Genres:</strong> ${anime.genre.join(', ')}</p>
                <p><strong>Description:</strong></p>
                <p>${anime.description}</p>
                <div class="detail-actions">
                    <button class="btn-large btn-add ${isInWatchlist ? 'added' : ''}" onclick="toggleWatchlist(${anime.id})">${isInWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}</button>
                    <button class="btn-large btn-close" onclick="closeModal()">Close</button>
                </div>
            </div>
        </div>
        ${generateStreamingPlatforms(anime.streamingPlatforms)}
        <div class="episodes-section">
            <h3>Episodes (${anime.episodes})</h3>
            <div class="episode-list">
                ${generateEpisodeList(anime.episodes)}
            </div>
        </div>
    `;
    
    document.getElementById('animeDetail').innerHTML = detailHTML;
    document.getElementById('animeModal').classList.add('active');
}

// Generate Episode List
function generateEpisodeList(totalEpisodes) {
    let html = '';
    for (let i = 1; i <= Math.min(totalEpisodes, 24); i++) {
        html += `<div class="episode-item" onclick="playEpisode(${i})">Ep ${i}</div>`;
    }
    if (totalEpisodes > 24) {
        html += `<div class="episode-item" style="grid-column: 1 / -1; cursor: default;">... and ${totalEpisodes - 24} more episodes available on streaming platform</div>`;
    }
    return html;
}

// Play Episode
function playEpisode(episodeNumber) {
    alert(`Click on a streaming platform above to watch Episode ${episodeNumber}!`);
}

// Close Modal
function closeModal() {
    document.getElementById('animeModal').classList.remove('active');
}

// Toggle Watchlist
function toggleWatchlist(animeId) {
    const anime = animeDatabase.find(a => a.id === animeId);
    if (!anime) return;
    
    const existingIndex = watchlist.findIndex(item => item.id === animeId);
    
    if (existingIndex > -1) {
        watchlist.splice(existingIndex, 1);
    } else {
        watchlist.push({
            ...anime,
            watchedEpisodes: 0,
            addedDate: new Date().toLocaleDateString()
        });
    }
    
    saveWatchlistToStorage();
    updateWatchlistDisplay();
    displayCatalog();
    displayFeaturedAnime();
    displayPopularAnime();
    
    // Update modal if open
    const modal = document.getElementById('animeModal');
    if (modal.classList.contains('active')) {
        openAnimeDetail(animeId);
    }
}

// Update Watchlist Display
function updateWatchlistDisplay() {
    const container = document.getElementById('watchlistContainer');
    
    if (watchlist.length === 0) {
        container.innerHTML = '<p class="empty-message">Your watchlist is empty. Start adding anime!</p>';
        return;
    }
    
    container.innerHTML = watchlist.map(anime => `
        <div class="watchlist-card">
            <div class="watchlist-poster">${anime.poster}</div>
            <div class="watchlist-info">
                <h3>${anime.title}</h3>
                <div class="watchlist-status">Added: ${anime.addedDate}</div>
                <div class="watchlist-status">${anime.episodes} Episodes</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(anime.watchedEpisodes / anime.episodes) * 100}%"></div>
                </div>
                <div class="watchlist-status">Watched: ${anime.watchedEpisodes}/${anime.episodes}</div>
                <div class="watchlist-actions">
                    <button class="btn-small btn-details" onclick="openAnimeDetail(${anime.id})">View</button>
                    <button class="btn-small btn-remove" onclick="removeFromWatchlist(${anime.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Remove From Watchlist
function removeFromWatchlist(animeId) {
    if (confirm('Remove this anime from your watchlist?')) {
        toggleWatchlist(animeId);
    }
}

// Show Page
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active class from nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageName + '-page').classList.add('active');
    
    // Add active class to corresponding nav link
    event.target.classList.add('active');
    
    currentPage = pageName;
}

// Search Anime
function searchAnime() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm === '') {
        filteredAnime = [...animeDatabase];
    } else {
        filteredAnime = animeDatabase.filter(anime =>
            anime.title.toLowerCase().includes(searchTerm) ||
            anime.genre.some(g => g.toLowerCase().includes(searchTerm)) ||
            anime.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Show catalog and update display
    showPage('catalog');
    displayCatalog();
    
    if (filteredAnime.length === 0) {
        document.getElementById('catalogGrid').innerHTML = '<p class="empty-message">No anime found matching your search.</p>';
    }
}

// Filter by Genre
function filterByGenre() {
    const genre = document.getElementById('genreFilter').value;
    const status = document.getElementById('statusFilter').value;
    
    filteredAnime = animeDatabase.filter(anime => {
        const genreMatch = genre === '' || anime.genre.includes(genre);
        const statusMatch = status === '' || anime.status === status;
        return genreMatch && statusMatch;
    });
    
    displayCatalog();
}

// Filter by Status
function filterByStatus() {
    filterByGenre(); // Same logic as genre filter
}

// Storage Functions
function saveWatchlistToStorage() {
    localStorage.setItem('animeWatchlist', JSON.stringify(watchlist));
}

function loadWatchlistFromStorage() {
    const stored = localStorage.getItem('animeWatchlist');
    if (stored) {
        watchlist = JSON.parse(stored);
    }
}

// Search on Enter
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchAnime();
        }
    });
});

// Close modal when clicking outside
window.onclick = (event) => {
    const modal = document.getElementById('animeModal');
    if (event.target === modal) {
        closeModal();
    }
};
