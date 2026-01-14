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
        image: "https://fever.imgix.net/plan/photo/9c0a0c0e-8f5a-4e3d-9b2c-1a3b4c5d6e7f.jpg?auto=format&fit=crop&w=800&h=600"
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
        image: "https://fever.imgix.net/plan/photo/code-173-fabrik.jpg?auto=format&fit=crop&w=800&h=600"
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
        image: "https://fever.imgix.net/plan/photo/jazz-room-nueva-orleans.jpg?auto=format&fit=crop&w=800&h=600"
    },
    // Candlelight Experiences
    {
        id: 4,
        title: "Candlelight: Tributo a Queen",
        location: "Four Seasons Hotel Madrid",
        date: "Jan 25 - Mar 29",
        price: 59,
        category: "candlelight",
        image: "https://fever.imgix.net/plan/photo/candlelight-queen.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 5,
        title: "Candlelight Premium: Lo Mejor de Hans Zimmer",
        location: "Four Seasons Hotel Madrid",
        date: "Jan 18 - Mar 15",
        price: 53,
        category: "candlelight",
        image: "https://fever.imgix.net/plan/photo/candlelight-hans-zimmer.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 6,
        title: "Candlelight: Coldplay vs. Imagine Dragons",
        location: "Círculo de Bellas Artes",
        date: "Jan 23 - May 15",
        price: 24,
        category: "candlelight",
        image: "https://fever.imgix.net/plan/photo/candlelight-coldplay-imagine-dragons.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 7,
        title: "Candlelight: Queen vs. ABBA",
        location: "Círculo de Bellas Artes",
        date: "Mar 13 - May 15",
        price: 30,
        category: "candlelight",
        image: "https://fever.imgix.net/plan/photo/candlelight-queen-abba.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 8,
        title: "Candlelight: Ed Sheeran vs Coldplay",
        location: "Four Seasons Hotel Madrid",
        date: "Feb 8 - Mar 29",
        price: 54,
        category: "candlelight",
        image: "https://fever.imgix.net/plan/photo/candlelight-ed-sheeran-coldplay.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 9,
        title: "Candlelight Ballet: El Lago de los Cisnes de Tchaikovsky",
        location: "Círculo de Bellas Artes",
        date: "Jan 31 - Feb 28",
        price: 11,
        category: "candlelight",
        image: "https://fever.imgix.net/plan/photo/candlelight-lago-cisnes.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 10,
        title: "Candlelight: Con Mozart, Bach y otros compositores atemporales",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Jan 16 - May 9",
        price: 35,
        category: "candlelight",
        image: "https://fever.imgix.net/plan/photo/candlelight-mozart-bach.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 11,
        title: "Candlelight: Lo mejor de The Beatles",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Jan 17 - Jun 19",
        price: 32,
        category: "candlelight",
        image: "https://fever.imgix.net/plan/photo/candlelight-beatles.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 12,
        title: "Candlelight: Tributo a ABBA",
        location: "Ateneo de Madrid",
        date: "Feb 6 - May 10",
        price: 30,
        category: "candlelight",
        image: "https://fever.imgix.net/plan/photo/candlelight-abba.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 13,
        title: "Candlelight: Tributo a Taylor Swift",
        location: "Ateneo de Madrid",
        date: "Feb 22 - Mar 8",
        price: 27,
        category: "candlelight",
        image: "https://fever.imgix.net/plan/photo/candlelight-taylor-swift.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 14,
        title: "Candlelight: Especial de San Valentín",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Feb 14",
        price: 27,
        category: "valentines-specials",
        image: "https://fever.imgix.net/plan/photo/candlelight-san-valentin.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 15,
        title: "Candlelight: Romance Clásico",
        location: "Palacio de los Duques de Santoña",
        date: "Feb 14",
        price: 67,
        category: "valentines-specials",
        image: "https://fever.imgix.net/plan/photo/candlelight-romance-clasico.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 16,
        title: "Candlelight Meditation: Una experiencia de Mindfulness con Piano",
        location: "Four Seasons Hotel Madrid",
        date: "Feb 15",
        price: 25,
        category: "wellness",
        image: "https://fever.imgix.net/plan/photo/candlelight-meditation.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 17,
        title: "Cena Romántica con Música en Vivo",
        location: "Restaurante El Jardín",
        date: "Feb 13 - Feb 15",
        price: 85,
        category: "food",
        image: "https://fever.imgix.net/plan/photo/cena-romantica-musica.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 18,
        title: "Taller de Chocolate para Parejas",
        location: "Chocolatería San Ginés",
        date: "Feb 10 - Feb 16",
        price: 45,
        category: "workshops",
        image: "https://fever.imgix.net/plan/photo/taller-chocolate-parejas.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 19,
        title: "Spa Romántico para Dos",
        location: "Spa Gran Meliá",
        date: "Feb 1 - Feb 28",
        price: 120,
        category: "wellness",
        image: "https://fever.imgix.net/plan/photo/spa-romantico-dos.jpg?auto=format&fit=crop&w=800&h=600"
    },
    {
        id: 20,
        title: "Concierto de Jazz Romántico",
        location: "Café Central",
        date: "Feb 12 - Feb 15",
        price: 28,
        category: "concerts",
        image: "https://fever.imgix.net/plan/photo/jazz-romantico.jpg?auto=format&fit=crop&w=800&h=600"
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

    topPicksContainer.innerHTML = topPicks.map(exp => `
        <article class="top-pick-card" role="listitem" itemscope itemtype="https://schema.org/Event">
            <div class="top-pick-badge" aria-label="Top pick número ${exp.rank}">#${exp.rank}♥ TOP PICK</div>
            <div class="top-pick-image">
                <img src="${exp.image || 'https://via.placeholder.com/800x600/ff6b9d/ffffff?text=' + encodeURIComponent(exp.title)}" 
                     alt="${exp.title} en ${exp.location}" 
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/800x600/ff6b9d/ffffff?text=' + encodeURIComponent('${exp.title}')">
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
                <button class="top-pick-btn" onclick="handleGetTickets(${exp.id})" aria-label="Comprar entradas para ${exp.title}">Comprar Entradas →</button>
            </div>
        </article>
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
        gridContainer.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem; color: var(--text-light);" role="status" aria-live="polite">No se encontraron experiencias que coincidan con tus filtros.</p>';
        return;
    }
    
    gridContainer.innerHTML = filtered.map(exp => `
        <article class="experience-card" role="listitem" itemscope itemtype="https://schema.org/Event" onclick="handleGetTickets(${exp.id})">
            <div class="experience-image">
                <img src="${exp.image || 'https://via.placeholder.com/800x600/ff6b9d/ffffff?text=' + encodeURIComponent(exp.title)}" 
                     alt="${exp.title} en ${exp.location}" 
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/800x600/ff6b9d/ffffff?text=' + encodeURIComponent('${exp.title}')">
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
                    <button class="experience-btn" onclick="event.stopPropagation(); handleGetTickets(${exp.id})" aria-label="Ver detalles de ${exp.title}">→</button>
                </div>
            </div>
        </article>
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
        // Update page title for SEO when viewing experience details
        document.title = `${experience.title} - San Valentín Madrid | Comprar Entradas`;
        
        // In a real app, this would redirect to a booking page
        // For now, we'll show an alert but could navigate to a detail page
        alert(`Comprar entradas para: ${experience.title}\nPrecio: ${experience.price}€\nUbicación: ${experience.location}`);
        
        // Track event for analytics (if you add analytics later)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'select_content', {
                'content_type': 'experience',
                'item_id': experienceId
            });
        }
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
