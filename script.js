// Helper function para obtener URL de imagen real de Fever
function getImageUrl(experience) {
    // Mapeo de Plan ID a URL de imagen real de Fever
    // Las URLs se optimizan automáticamente cambiando w_550,h_550 por w_800,h_600
    const planIdToImage = {
        // Top Picks
        '524089': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/6e89eade-c92d-11f0-ab44-1e339e1eaa9a.jpg', // El Señor de los Anillos
        '502224': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/ca6d5314-db1f-11f0-aed6-0ee7c3aa6ae4.jpeg', // CODE 173
        '250209': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/d41e2e90-570f-11f0-b2c5-f295a86a2f76.jpg', // Jazz Room
        
        // Candlelight Experiences
        '198569': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/5009ee58-1940-11f0-bd95-56c21721c770.jpg', // Queen
        '118384': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/6347514e-1397-11f0-bb78-565b7aecbc77.jpg', // Hans Zimmer
        '160548': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/7588d684-1158-11f0-b4c2-c22f5b3d6cc1.jpg', // Coldplay vs Imagine Dragons
        '183038': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/ad60b410-1945-11f0-bf40-961efeb2b763.jpg', // Queen vs ABBA
        '491996': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/dc7d1b48-148c-11f0-b520-be12cc90078e.jpg', // Ed Sheeran vs Coldplay
        '136532': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/073db61e-2020-11f0-a226-461578d92733.jpg', // Lago de los Cisnes
        '344700': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/581f9228-057c-11f0-a694-227d8868e509.jpg', // Mozart, Bach
        '261562': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/b2ee49a2-1a93-11f0-aa80-c25aaa6cf640.jpg', // The Beatles
        '139030': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/f51b8418-25ae-11f0-a83d-9e59e0727bbd.jpg', // ABBA
        '107114': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/ee89a0dc-1aa8-11f0-87b3-ba3a3d0c034e.jpg', // Taylor Swift
        
        // Valentines Specials
        '519886': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/581f9228-057c-11f0-a694-227d8868e509.jpg', // Especial San Valentín
        '411236': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/a1694468-0af6-11f0-bdcd-ee32a89aa521.jpg', // Romance Clásico
        
        // Wellness
        '481507': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/b17c86ea-a447-11f0-9c74-e2e305484c14.jpg', // Meditation
        '93624': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/b271f8ac-2e3e-11eb-9bdd-06551cb39bc6.jpg', // Spa
        
        // Food
        '533582': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/27f0dfba-df4e-11f0-8469-92f95fc64d0f.png', // Cena Romántica
        
        // Workshops
        '475629': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/84071038-df1f-11ef-a5e9-9e203939653e' // Taller Chocolate
    };
    
    // Extraer Plan ID de la URL de la experiencia
    const planIdMatch = experience.url?.match(/\/m\/(\d+)/);
    const planId = planIdMatch ? planIdMatch[1] : null;
    
    // Si tenemos Plan ID y existe en el mapeo, usar esa imagen
    if (planId && planIdToImage[planId]) {
        return planIdToImage[planId];
    }
    
    // Fallback: usar imagen genérica según categoría
    const categoryImages = {
        'candlelight': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/581f9228-057c-11f0-a694-227d8868e509.jpg',
        'valentines-specials': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/a1694468-0af6-11f0-bdcd-ee32a89aa521.jpg',
        'concerts': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/d41e2e90-570f-11f0-b2c5-f295a86a2f76.jpg',
        'food': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/27f0dfba-df4e-11f0-8469-92f95fc64d0f.png',
        'workshops': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/84071038-df1f-11ef-a5e9-9e203939653e',
        'wellness': 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/b271f8ac-2e3e-11eb-9bdd-06551cb39bc6.jpg'
    };
    
    return categoryImages[experience.category] || 'https://applications-media.feverup.com/image/upload/f_auto,w_800,h_600/fever2/plan/photo/581f9228-057c-11f0-a694-227d8868e509.jpg';
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
        url: "https://feverup.com/m/524089"
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
        url: "https://feverup.com/m/502224"
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
        url: "https://feverup.com/m/250209"
    },
    // Candlelight Experiences
    {
        id: 4,
        title: "Candlelight: Tributo a Queen",
        location: "Four Seasons Hotel Madrid",
        date: "Jan 25 - Mar 29",
        price: 59,
        category: "candlelight",
        url: "https://feverup.com/m/198569"
    },
    {
        id: 5,
        title: "Candlelight Premium: Lo Mejor de Hans Zimmer",
        location: "Four Seasons Hotel Madrid",
        date: "Jan 18 - Mar 15",
        price: 53,
        category: "candlelight",
        url: "https://feverup.com/m/118384"
    },
    {
        id: 6,
        title: "Candlelight: Coldplay vs. Imagine Dragons",
        location: "Círculo de Bellas Artes",
        date: "Jan 23 - May 15",
        price: 24,
        category: "candlelight",
        url: "https://feverup.com/m/160548"
    },
    {
        id: 7,
        title: "Candlelight: Queen vs. ABBA",
        location: "Círculo de Bellas Artes",
        date: "Mar 13 - May 15",
        price: 30,
        category: "candlelight",
        url: "https://feverup.com/m/183038"
    },
    {
        id: 8,
        title: "Candlelight: Ed Sheeran vs Coldplay",
        location: "Four Seasons Hotel Madrid",
        date: "Feb 8 - Mar 29",
        price: 54,
        category: "candlelight",
        url: "https://feverup.com/m/491996"
    },
    {
        id: 9,
        title: "Candlelight Ballet: El Lago de los Cisnes de Tchaikovsky",
        location: "Círculo de Bellas Artes",
        date: "Jan 31 - Feb 28",
        price: 11,
        category: "candlelight",
        url: "https://feverup.com/m/136532"
    },
    {
        id: 10,
        title: "Candlelight: Con Mozart, Bach y otros compositores atemporales",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Jan 16 - May 9",
        price: 35,
        category: "candlelight",
        url: "https://feverup.com/m/344700"
    },
    {
        id: 11,
        title: "Candlelight: Lo mejor de The Beatles",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Jan 17 - Jun 19",
        price: 32,
        category: "candlelight",
        url: "https://feverup.com/m/261562"
    },
    {
        id: 12,
        title: "Candlelight: Tributo a ABBA",
        location: "Ateneo de Madrid",
        date: "Feb 6 - May 10",
        price: 30,
        category: "candlelight",
        url: "https://feverup.com/m/139030"
    },
    {
        id: 13,
        title: "Candlelight: Tributo a Taylor Swift",
        location: "Ateneo de Madrid",
        date: "Feb 22 - Mar 8",
        price: 27,
        category: "candlelight",
        url: "https://feverup.com/m/107114"
    },
    {
        id: 14,
        title: "Candlelight: Especial de San Valentín",
        location: "Ilustre Colegio Oficial de Médicos de Madrid",
        date: "Feb 14",
        price: 27,
        category: "valentines-specials",
        url: "https://feverup.com/m/519886"
    },
    {
        id: 15,
        title: "Candlelight: Romance Clásico",
        location: "Palacio de los Duques de Santoña",
        date: "Feb 14",
        price: 67,
        category: "valentines-specials",
        url: "https://feverup.com/m/411236"
    },
    {
        id: 16,
        title: "Candlelight Meditation: Una experiencia de Mindfulness con Piano",
        location: "Four Seasons Hotel Madrid",
        date: "Feb 15",
        price: 25,
        category: "wellness",
        url: "https://feverup.com/m/481507"
    },
    {
        id: 17,
        title: "Cena Romántica con Música en Vivo",
        location: "Restaurante El Jardín",
        date: "Feb 13 - Feb 15",
        price: 85,
        category: "food",
        url: "https://feverup.com/m/533582"
    },
    {
        id: 18,
        title: "Taller de Chocolate para Parejas",
        location: "Chocolatería San Ginés",
        date: "Feb 10 - Feb 16",
        price: 45,
        category: "workshops",
        url: "https://feverup.com/m/475629"
    },
    {
        id: 19,
        title: "Spa Romántico para Dos",
        location: "Spa Gran Meliá",
        date: "Feb 1 - Feb 28",
        price: 120,
        category: "wellness",
        url: "https://feverup.com/m/93624"
    },
    {
        id: 20,
        title: "Concierto de Jazz Romántico",
        location: "Café Central",
        date: "Feb 12 - Feb 15",
        price: 28,
        category: "concerts",
        url: "https://feverup.com/m/250209"
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
