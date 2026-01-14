// Helper function para obtener URL de imagen desde servicios gratuitos
function getImageUrl(experience) {
    // URLs directas de Unsplash y Pexels - imágenes reales y específicas
    const imageUrls = {
        // Top Picks
        1: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80', // Candlelight: El Señor de los Anillos - Candlelight concert
        2: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80', // CODE 173 - Romantic dinner
        3: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop&q=80', // Jazz Room - Jazz club
        
        // Candlelight Experiences
        4: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&q=80', // Queen - Rock concert
        5: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80', // Hans Zimmer - Orchestra cinematic
        6: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&q=80', // Coldplay vs Imagine Dragons - Concert
        7: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&q=80', // Queen vs ABBA - Disco party
        8: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&q=80', // Ed Sheeran vs Coldplay - Acoustic
        9: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop&q=80', // Lago de los Cisnes - Ballet
        10: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80', // Mozart, Bach - Classical
        11: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&q=80', // The Beatles - Concert
        12: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop&q=80', // ABBA - Disco 70s
        13: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop&q=80', // Taylor Swift - Pop concert
        
        // Valentines Specials
        14: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&q=80', // San Valentín - Romantic candles
        15: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80', // Romance Clásico - Classical romantic
        
        // Wellness
        16: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop&q=80', // Meditation - Wellness piano
        19: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&q=80', // Spa - Couple spa
        
        // Food
        17: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80', // Cena Romántica - Romantic dinner
        
        // Workshops
        18: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop&q=80', // Chocolate - Chocolate workshop
        
        // Concerts
        20: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop&q=80' // Jazz Romántico - Jazz romantic
    };
    
    // Si no hay URL específica, usar una genérica según categoría
    if (!imageUrls[experience.id]) {
        const categoryImages = {
            'candlelight': 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80',
            'valentines-specials': 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&q=80',
            'concerts': 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop&q=80',
            'food': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80',
            'workshops': 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop&q=80',
            'wellness': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop&q=80'
        };
        return categoryImages[experience.category] || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&q=80';
    }
    
    return imageUrls[experience.id];
}

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
        rank: 1,
        url: "https://feverup.com/madrid/e/candlelight-el-senor-de-los-anillos"
    },
    {
        id: 2,
        title: "CODE 173 en Fabrik",
        location: "Fabrik",
        date: "Feb 14 - Mar 15",
        price: 33,
        category: "valentines-specials",
        topPick: true,
        rank: 2,
        url: "https://feverup.com/madrid/e/code-173-fabrik"
    },
    {
        id: 3,
        title: "The Jazz Room: Un Viaje al Corazón de Nueva Orleans",
        location: "Café Berlín",
        date: "Feb 10 - Mar 20",
        price: 38,
        category: "concerts",
        topPick: true,
        rank: 3,
        url: "https://feverup.com/madrid/e/jazz-room-nueva-orleans"
    },
    // Candlelight Experiences
    {
        id: 4,
        title: "Candlelight: Tributo a Queen",
        location: "Four Seasons Hotel Madrid",
        date: "Jan 25 - Mar 29",
        price: 59,
        category: "candlelight",
        url: "https://feverup.com/madrid/e/candlelight-tributo-queen"
    },
    {
        id: 5,
        title: "Candlelight Premium: Lo Mejor de Hans Zimmer",
        location: "Four Seasons Hotel Madrid",
        date: "Jan 18 - Mar 15",
        price: 53,
        category: "candlelight",
        url: "https://feverup.com/madrid/e/candlelight-hans-zimmer"
    },
    {
        id: 6,
        title: "Candlelight: Coldplay vs. Imagine Dragons",
        location: "Círculo de Bellas Artes",
        date: "Jan 23 - May 15",
        price: 24,
        category: "candlelight",
        url: "https://feverup.com/madrid/e/candlelight-coldplay-imagine-dragons"
    },
    {
        id: 7,
        title: "Candlelight: Queen vs. ABBA",
        location: "Círculo de Bellas Artes",
        date: "Mar 13 - May 15",
        price: 30,
        category: "candlelight",
        url: "https://feverup.com/madrid/e/candlelight-queen-abba"
    },
    {
        id: 8,
        title: "Candlelight: Ed Sheeran vs Coldplay",
        location: "Four Seasons Hotel Madrid",
        date: "Feb 8 - Mar 29",
        price: 54,
        category: "candlelight",
        url: "https://feverup.com/madrid/e/candlelight-ed-sheeran-coldplay"
    },
    {
        id: 9,
        title: "Candlelight Ballet: El Lago de los Cisnes de Tchaikovsky",
        location: "Círculo de Bellas Artes",
        date: "Jan 31 - Feb 28",
        price: 11,
        category: "candlelight",
        url: "https://feverup.com/madrid/e/candlelight-lago-cisnes"
    },
    {
        id: 10,
        title: "Candlelight: Con Mozart, Bach y otros compositores atemporales",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Jan 16 - May 9",
        price: 35,
        category: "candlelight",
        url: "https://feverup.com/madrid/e/candlelight-mozart-bach"
    },
    {
        id: 11,
        title: "Candlelight: Lo mejor de The Beatles",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Jan 17 - Jun 19",
        price: 32,
        category: "candlelight",
        url: "https://feverup.com/madrid/e/candlelight-beatles"
    },
    {
        id: 12,
        title: "Candlelight: Tributo a ABBA",
        location: "Ateneo de Madrid",
        date: "Feb 6 - May 10",
        price: 30,
        category: "candlelight",
        url: "https://feverup.com/madrid/e/candlelight-abba"
    },
    {
        id: 13,
        title: "Candlelight: Tributo a Taylor Swift",
        location: "Ateneo de Madrid",
        date: "Feb 22 - Mar 8",
        price: 27,
        category: "candlelight",
        url: "https://feverup.com/madrid/e/candlelight-taylor-swift"
    },
    {
        id: 14,
        title: "Candlelight: Especial de San Valentín",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Feb 14",
        price: 27,
        category: "valentines-specials",
        url: "https://feverup.com/madrid/e/candlelight-san-valentin"
    },
    {
        id: 15,
        title: "Candlelight: Romance Clásico",
        location: "Palacio de los Duques de Santoña",
        date: "Feb 14",
        price: 67,
        category: "valentines-specials",
        url: "https://feverup.com/madrid/e/candlelight-romance-clasico"
    },
    {
        id: 16,
        title: "Candlelight Meditation: Una experiencia de Mindfulness con Piano",
        location: "Four Seasons Hotel Madrid",
        date: "Feb 15",
        price: 25,
        category: "wellness",
        url: "https://feverup.com/madrid/e/candlelight-meditation"
    },
    {
        id: 17,
        title: "Cena Romántica con Música en Vivo",
        location: "Restaurante El Jardín",
        date: "Feb 13 - Feb 15",
        price: 85,
        category: "food",
        url: "https://feverup.com/madrid/e/cena-romantica-musica"
    },
    {
        id: 18,
        title: "Taller de Chocolate para Parejas",
        location: "Chocolatería San Ginés",
        date: "Feb 10 - Feb 16",
        price: 45,
        category: "workshops",
        url: "https://feverup.com/madrid/e/taller-chocolate-parejas"
    },
    {
        id: 19,
        title: "Spa Romántico para Dos",
        location: "Spa Gran Meliá",
        date: "Feb 1 - Feb 28",
        price: 120,
        category: "wellness",
        url: "https://feverup.com/madrid/e/spa-romantico-dos"
    },
    {
        id: 20,
        title: "Concierto de Jazz Romántico",
        location: "Café Central",
        date: "Feb 12 - Feb 15",
        price: 28,
        category: "concerts",
        url: "https://feverup.com/madrid/e/jazz-romantico"
    }
];

// Category titles mapping
const categoryTitles = {
    all: "Todas las Experiencias",
    candlelight: "🕯️ Experiencias Candlelight",
    "valentines-specials": "Especiales de San Valentín",
    concerts: "Conciertos, musicales y teatro",
    food: "Experiencias Gastronómicas",
    workshops: "Talleres y actividades",
    wellness: "Bienestar y relajación"
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

    topPicksContainer.innerHTML = topPicks.map(exp => {
        const imageUrl = getImageUrl(exp);
        return `
        <article class="top-pick-card" role="listitem" itemscope itemtype="https://schema.org/Event">
            <a href="${exp.url || 'https://feverup.com/madrid'}" target="_blank" rel="noopener noreferrer" class="top-pick-link">
                <div class="top-pick-badge" aria-label="Top pick número ${exp.rank}">#${exp.rank}♥ TOP PICK</div>
                <div class="top-pick-image">
                    <img src="${imageUrl}" 
                         alt="${exp.title} en ${exp.location}" 
                         loading="lazy"
                         crossorigin="anonymous"
                         onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&q=80&auto=format'">
                </div>
                <div class="top-pick-content">
                    <h3 class="top-pick-title" itemprop="name">${exp.title}</h3>
                    <div class="top-pick-location" itemprop="location" itemscope itemtype="https://schema.org/Place">
                        <span itemprop="name">📍 ${exp.location}</span>
                    </div>
                    <div class="top-pick-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                        <span itemprop="price" content="${exp.price}">Desde ${exp.price}€</span>
                        <meta itemprop="priceCurrency" content="EUR">
                    </div>
                    <span class="top-pick-btn" aria-label="Comprar entradas para ${exp.title}">Comprar Entradas →</span>
                </div>
            </a>
        </article>
    `;
    }).join('');
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
        gridContainer.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem; color: var(--text-light);" role="status" aria-live="polite">No se encontraron experiencias que coincidan con tus filtros.</p>';
        return;
    }
    
    gridContainer.innerHTML = filtered.map(exp => {
        const imageUrl = getImageUrl(exp);
        return `
        <article class="experience-card" role="listitem" itemscope itemtype="https://schema.org/Event">
            <a href="${exp.url || 'https://feverup.com/madrid'}" target="_blank" rel="noopener noreferrer" class="experience-link">
                <div class="experience-image">
                    <img src="${imageUrl}" 
                         alt="${exp.title} en ${exp.location}" 
                         loading="lazy"
                         crossorigin="anonymous"
                         onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop&q=80&auto=format'">
                </div>
                <div class="experience-content">
                    <h3 class="experience-title" itemprop="name">${exp.title}</h3>
                    <div class="experience-location" itemprop="location" itemscope itemtype="https://schema.org/Place">
                        <span itemprop="name">📍 ${exp.location}</span>
                    </div>
                    <div class="experience-date" itemprop="startDate">📅 ${exp.date}</div>
                    <div class="experience-footer">
                        <span class="experience-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span itemprop="price" content="${exp.price}">Desde ${exp.price}€</span>
                            <meta itemprop="priceCurrency" content="EUR">
                        </span>
                        <span class="experience-btn" aria-label="Ver detalles de ${exp.title}">→</span>
                    </div>
                </div>
            </a>
        </article>
    `;
    }).join('');
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

// Handle Get Tickets - Redirect to Fever URL
function handleGetTickets(experienceId) {
    const experience = experiencesData.find(exp => exp.id === experienceId);
    if (experience && experience.url) {
        window.open(experience.url, '_blank', 'noopener,noreferrer');
        
        // Track event for analytics (if you add analytics later)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'select_content', {
                'content_type': 'experience',
                'item_id': experienceId
            });
        }
    } else {
        // Fallback to Fever Madrid page
        window.open('https://feverup.com/madrid', '_blank', 'noopener,noreferrer');
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
