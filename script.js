// Sample data based on the Fever landing page
const experiencesData = [
    // Top Picks
    {
        id: 1,
        title: "Candlelight: El Señor de los Anillos",
        location: "Hotel Wellington",
        date: "Mar 8 - Apr 26",
        price: 36,
        category: "candlelight",
        topPick: true,
        rank: 1
    },
    {
        id: 2,
        title: "CODE 173 en Fabrik",
        location: "Fabrik",
        date: "Feb 14 - Mar 15",
        price: 33,
        category: "valentines-specials",
        topPick: true,
        rank: 2
    },
    {
        id: 3,
        title: "The Jazz Room: Un Viaje al Corazón de Nueva Orleans",
        location: "Café Berlín",
        date: "Feb 10 - Mar 20",
        price: 38,
        category: "concerts",
        topPick: true,
        rank: 3
    },
    // Candlelight Experiences
    {
        id: 4,
        title: "Candlelight: Tributo a Queen",
        location: "Four Seasons Hotel Madrid",
        date: "Jan 25 - Mar 29",
        price: 59,
        category: "candlelight"
    },
    {
        id: 5,
        title: "Candlelight Premium: Lo Mejor de Hans Zimmer",
        location: "Four Seasons Hotel Madrid",
        date: "Jan 18 - Mar 15",
        price: 53,
        category: "candlelight"
    },
    {
        id: 6,
        title: "Candlelight: Coldplay vs. Imagine Dragons",
        location: "Círculo de Bellas Artes",
        date: "Jan 23 - May 15",
        price: 24,
        category: "candlelight"
    },
    {
        id: 7,
        title: "Candlelight: Queen vs. ABBA",
        location: "Círculo de Bellas Artes",
        date: "Mar 13 - May 15",
        price: 30,
        category: "candlelight"
    },
    {
        id: 8,
        title: "Candlelight: Ed Sheeran vs Coldplay",
        location: "Four Seasons Hotel Madrid",
        date: "Feb 8 - Mar 29",
        price: 54,
        category: "candlelight"
    },
    {
        id: 9,
        title: "Candlelight Ballet: El Lago de los Cisnes de Tchaikovsky",
        location: "Círculo de Bellas Artes",
        date: "Jan 31 - Feb 28",
        price: 11,
        category: "candlelight"
    },
    {
        id: 10,
        title: "Candlelight: Con Mozart, Bach y otros compositores atemporales",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Jan 16 - May 9",
        price: 35,
        category: "candlelight"
    },
    {
        id: 11,
        title: "Candlelight: Lo mejor de The Beatles",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Jan 17 - Jun 19",
        price: 32,
        category: "candlelight"
    },
    {
        id: 12,
        title: "Candlelight: Tributo a ABBA",
        location: "Ateneo de Madrid",
        date: "Feb 6 - May 10",
        price: 30,
        category: "candlelight"
    },
    {
        id: 13,
        title: "Candlelight: Tributo a Taylor Swift",
        location: "Ateneo de Madrid",
        date: "Feb 22 - Mar 8",
        price: 27,
        category: "candlelight"
    },
    {
        id: 14,
        title: "Candlelight: Especial de San Valentín",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Feb 14",
        price: 27,
        category: "valentines-specials"
    },
    {
        id: 15,
        title: "Candlelight: Romance Clásico",
        location: "Palacio de los Duques de Santoña",
        date: "Feb 14",
        price: 67,
        category: "valentines-specials"
    },
    {
        id: 16,
        title: "Candlelight Meditation: Una experiencia de Mindfulness con Piano",
        location: "Four Seasons Hotel Madrid",
        date: "Feb 15",
        price: 25,
        category: "wellness"
    },
    {
        id: 17,
        title: "Cena Romántica con Música en Vivo",
        location: "Restaurante El Jardín",
        date: "Feb 13 - Feb 15",
        price: 85,
        category: "food"
    },
    {
        id: 18,
        title: "Taller de Chocolate para Parejas",
        location: "Chocolatería San Ginés",
        date: "Feb 10 - Feb 16",
        price: 45,
        category: "workshops"
    },
    {
        id: 19,
        title: "Spa Romántico para Dos",
        location: "Spa Gran Meliá",
        date: "Feb 1 - Feb 28",
        price: 120,
        category: "wellness"
    },
    {
        id: 20,
        title: "Concierto de Jazz Romántico",
        location: "Café Central",
        date: "Feb 12 - Feb 15",
        price: 28,
        category: "concerts"
    }
];

// Category titles mapping
const categoryTitles = {
    all: "All Experiences",
    candlelight: "🕯️ Candlelight Experiences",
    "valentines-specials": "Valentines Specials",
    concerts: "Concerts, musicals and theater",
    food: "Food Experiences",
    workshops: "Workshops and activities",
    wellness: "Wellness and relaxation"
};

// State
let currentCategory = "candlelight";
let currentPriceFilter = "all";
let currentDateFilter = "";

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderTopPicks();
    renderExperiences();
    setupEventListeners();
});

// Render Top Picks
function renderTopPicks() {
    const topPicksContainer = document.getElementById('topPicks');
    const topPicks = experiencesData
        .filter(exp => exp.topPick)
        .sort((a, b) => a.rank - b.rank);

    topPicksContainer.innerHTML = topPicks.map(exp => `
        <div class="top-pick-card">
            <div class="top-pick-badge">#${exp.rank}♥ TOP PICK</div>
            <div class="top-pick-image">🕯️</div>
            <div class="top-pick-content">
                <h3 class="top-pick-title">${exp.title}</h3>
                <div class="top-pick-location">📍 ${exp.location}</div>
                <div class="top-pick-price">From ${exp.price}€</div>
                <button class="top-pick-btn" onclick="handleGetTickets(${exp.id})">Get Tickets →</button>
            </div>
        </div>
    `).join('');
}

// Render Experiences
function renderExperiences() {
    const gridContainer = document.getElementById('experiencesGrid');
    const categoryTitle = document.getElementById('categoryTitle');
    
    // Update category title
    categoryTitle.textContent = categoryTitles[currentCategory] || categoryTitles.candlelight;
    
    // Filter experiences
    let filtered = experiencesData.filter(exp => {
        // Category filter
        if (currentCategory !== 'all' && exp.category !== currentCategory) {
            return false;
        }
        
        // Price filter
        if (currentPriceFilter !== 'all') {
            const price = exp.price;
            switch(currentPriceFilter) {
                case 'under-25':
                    if (price >= 25) return false;
                    break;
                case '25-50':
                    if (price < 25 || price > 50) return false;
                    break;
                case '50-100':
                    if (price < 50 || price > 100) return false;
                    break;
                case '100+':
                    if (price < 100) return false;
                    break;
            }
        }
        
        // Exclude top picks from main grid
        if (exp.topPick) return false;
        
        return true;
    });
    
    if (filtered.length === 0) {
        gridContainer.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem; color: var(--text-light);">No experiences found matching your filters.</p>';
        return;
    }
    
    gridContainer.innerHTML = filtered.map(exp => `
        <div class="experience-card" onclick="handleGetTickets(${exp.id})">
            <div class="experience-image">🕯️</div>
            <div class="experience-content">
                <h3 class="experience-title">${exp.title}</h3>
                <div class="experience-location">📍 ${exp.location}</div>
                <div class="experience-date">📅 ${exp.date}</div>
                <div class="experience-footer">
                    <span class="experience-price">From ${exp.price}€</span>
                    <button class="experience-btn" onclick="event.stopPropagation(); handleGetTickets(${exp.id})">→</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup Event Listeners
function setupEventListeners() {
    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderExperiences();
        });
    });
    
    // Price filter
    document.getElementById('priceFilter').addEventListener('change', (e) => {
        currentPriceFilter = e.target.value;
        renderExperiences();
    });
    
    // Date filter
    document.getElementById('dateFilter').addEventListener('change', (e) => {
        currentDateFilter = e.target.value;
        // You can implement date filtering logic here
        renderExperiences();
    });
    
    // Gift buttons
    document.querySelectorAll('.btn-gift, .btn-primary').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Gift feature coming soon! 🎁');
        });
    });
}

// Handle Get Tickets
function handleGetTickets(experienceId) {
    const experience = experiencesData.find(exp => exp.id === experienceId);
    if (experience) {
        alert(`Getting tickets for: ${experience.title}\nPrice: ${experience.price}€\nLocation: ${experience.location}`);
        // In a real app, this would redirect to a booking page
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
