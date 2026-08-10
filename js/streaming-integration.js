// Streaming Platform Integration for Anime Watchlist
// This module handles all streaming platform links and information

const STREAMING_PLATFORMS = {
    crunchyroll: {
        name: "Crunchyroll",
        emoji: "🎬",
        url: "https://www.crunchyroll.com",
        searchUrl: "https://www.crunchyroll.com/search?q=",
        free: true,
        paid: true,
        description: "Free with ads or Premium subscription"
    },
    netflix: {
        name: "Netflix",
        emoji: "📺",
        url: "https://www.netflix.com",
        searchUrl: "https://www.netflix.com/search?q=",
        free: false,
        paid: true,
        description: "Subscription required"
    },
    prime: {
        name: "Amazon Prime Video",
        emoji: "🎥",
        url: "https://www.primevideo.com",
        searchUrl: "https://www.primevideo.com/search?keyword=",
        free: false,
        paid: true,
        description: "Prime membership required"
    },
    hulu: {
        name: "Hulu",
        emoji: "📡",
        url: "https://www.hulu.com",
        searchUrl: "https://www.hulu.com/search?q=",
        free: false,
        paid: true,
        description: "Subscription required"
    }
};

// Anime Database with Streaming Information
const ANIME_STREAMING_DB = {
    "Attack on Titan": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix,
        STREAMING_PLATFORMS.prime
    ],
    "Death Note": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix,
        STREAMING_PLATFORMS.hulu
    ],
    "Demon Slayer": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix
    ],
    "One Piece": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix
    ],
    "My Hero Academia": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix,
        STREAMING_PLATFORMS.hulu
    ],
    "Naruto Shippuden": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix,
        STREAMING_PLATFORMS.hulu
    ],
    "Steins;Gate": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.hulu
    ],
    "Jujutsu Kaisen": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix
    ],
    "Fullmetal Alchemist": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix,
        STREAMING_PLATFORMS.hulu
    ],
    "Sword Art Online": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix
    ],
    "Code Geass": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.hulu
    ],
    "Tokyo Ghoul": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.hulu
    ],
    "Mob Psycho 100": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix
    ],
    "Classroom of the Elite": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix
    ],
    "Blue Lock": [
        STREAMING_PLATFORMS.crunchyroll,
        STREAMING_PLATFORMS.netflix
    ],
    "Cowboy Bebop": [
        STREAMING_PLATFORMS.netflix,
        STREAMING_PLATFORMS.crunchyroll
    ],
    "Ergo Proxy": [
        STREAMING_PLATFORMS.crunchyroll
    ]
};

function getStreamingPlatforms(animeTitle) {
    return ANIME_STREAMING_DB[animeTitle] || [];
}

function generateStreamingButtons(animeTitle) {
    const platforms = getStreamingPlatforms(animeTitle);
    if (platforms.length === 0) {
        return '<div class="streaming-info">Check streaming availability on official platforms</div>';
    }
    let html = '<div class="streaming-section"><h4>🎥 Watch On:</h4><div class="streaming-buttons">';
    platforms.forEach(platform => {
        const searchUrl = platform.searchUrl + encodeURIComponent(animeTitle);
        const typeLabel = platform.free && platform.paid ? "Free/Paid" : platform.free ? "Free" : "Paid";
        html += `<a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="streaming-btn" title="${platform.description}"><span class="platform-emoji">${platform.emoji}</span><span class="platform-name">${platform.name}</span><span class="platform-type">${typeLabel}</span></a>`;
    });
    html += '</div></div>';
    return html;
}

function getAllStreamingPlatforms() {
    return Object.values(STREAMING_PLATFORMS);
}

function isAvailableOnPlatform(animeTitle, platformKey) {
    const platforms = getStreamingPlatforms(animeTitle);
    return platforms.some(p => p.url === STREAMING_PLATFORMS[platformKey].url);
}

function getSearchUrl(animeTitle, platformKey) {
    const platform = STREAMING_PLATFORMS[platformKey];
    return platform.searchUrl + encodeURIComponent(animeTitle);
}

function openOnPlatform(animeTitle, platformKey) {
    const url = getSearchUrl(animeTitle, platformKey);
    window.open(url, '_blank', 'noopener,noreferrer');
}

function getPlatformStats() {
    const stats = {};
    Object.keys(STREAMING_PLATFORMS).forEach(key => {
        stats[key] = 0;
    });
    Object.values(ANIME_STREAMING_DB).forEach(platforms => {
        platforms.forEach(platform => {
            const key = Object.keys(STREAMING_PLATFORMS).find(k => STREAMING_PLATFORMS[k].name === platform.name);
            if (key) stats[key]++;
        });
    });
    return stats;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { STREAMING_PLATFORMS, ANIME_STREAMING_DB, getStreamingPlatforms, generateStreamingButtons, getAllStreamingPlatforms, isAvailableOnPlatform, getSearchUrl, openOnPlatform, getPlatformStats };
}