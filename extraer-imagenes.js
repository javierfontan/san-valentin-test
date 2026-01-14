// Script para extraer URLs de imágenes de la página de Fever
// INSTRUCCIONES:
// 1. Abre la página de Fever: https://fever-valentines-landing--workflows-and-automations-1.us-central1.hosted.app/en/madrid#valentines-specials
// 2. Abre la consola del navegador (F12 → Console)
// 3. Copia y pega este script completo
// 4. Presiona Enter
// 5. Las URLs se mostrarán en la consola y se copiarán al portapapeles

(function() {
    console.log('🔍 Buscando imágenes en la página...\n');
    
    // Buscar todas las imágenes
    const images = Array.from(document.querySelectorAll('img'));
    const experienceImages = [];
    const imageMap = new Map();
    
    // Buscar imágenes en cards de experiencias
    images.forEach((img, index) => {
        const src = img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
        if (src && !src.includes('data:image') && !src.includes('placeholder')) {
            // Buscar el título de la experiencia más cercano
            let card = img.closest('article, .card, .experience-card, [class*="card"], [class*="experience"]');
            if (!card) {
                // Buscar en el contenedor padre
                let parent = img.parentElement;
                for (let i = 0; i < 5 && parent; i++) {
                    if (parent.querySelector('h2, h3, [class*="title"], [class*="name"]')) {
                        card = parent;
                        break;
                    }
                    parent = parent.parentElement;
                }
            }
            
            let title = '';
            if (card) {
                const titleEl = card.querySelector('h2, h3, [class*="title"], [class*="name"], a[href*="/"]');
                if (titleEl) {
                    title = titleEl.textContent.trim() || titleEl.getAttribute('aria-label') || '';
                }
            }
            
            // Si no encontramos título, usar el alt o un identificador
            if (!title) {
                title = img.alt || `Imagen ${index + 1}`;
            }
            
            // Extraer URL limpia (sin parámetros de tamaño si es imgix)
            let cleanUrl = src;
            if (src.includes('imgix.net') || src.includes('fever')) {
                // Mantener la URL base pero limpiar parámetros de tamaño si existen
                cleanUrl = src.split('?')[0] + '?auto=format&fit=crop&w=800&h=600';
            }
            
            if (!imageMap.has(cleanUrl)) {
                imageMap.set(cleanUrl, {
                    url: cleanUrl,
                    title: title,
                    originalSrc: src,
                    alt: img.alt || ''
                });
            }
        }
    });
    
    // Convertir a array
    const uniqueImages = Array.from(imageMap.values());
    
    console.log(`✅ Encontradas ${uniqueImages.length} imágenes únicas\n`);
    console.log('📋 URLs de imágenes encontradas:\n');
    console.log('='.repeat(80));
    
    // Mostrar resultados
    uniqueImages.forEach((img, index) => {
        console.log(`\n${index + 1}. ${img.title || 'Sin título'}`);
        console.log(`   URL: ${img.url}`);
        if (img.alt) console.log(`   Alt: ${img.alt}`);
    });
    
    console.log('\n' + '='.repeat(80));
    
    // Crear objeto JSON mapeado por títulos similares a nuestras experiencias
    const experienceTitles = [
        'El Señor de los Anillos',
        'CODE 173',
        'Jazz Room',
        'Queen',
        'Hans Zimmer',
        'Coldplay',
        'Imagine Dragons',
        'ABBA',
        'Ed Sheeran',
        'Lago de los Cisnes',
        'Mozart',
        'Bach',
        'Beatles',
        'Taylor Swift',
        'San Valentín',
        'Romance',
        'Meditation',
        'Cena',
        'Chocolate',
        'Spa',
        'Jazz'
    ];
    
    const mappedImages = {};
    uniqueImages.forEach(img => {
        const title = img.title.toLowerCase();
        experienceTitles.forEach(expTitle => {
            if (title.includes(expTitle.toLowerCase()) || 
                expTitle.toLowerCase().includes(title.substring(0, 10))) {
                if (!mappedImages[expTitle]) {
                    mappedImages[expTitle] = img.url;
                }
            }
        });
    });
    
    // Crear código JavaScript listo para usar
    const jsCode = `// URLs de imágenes extraídas automáticamente\nconst imageUrls = ${JSON.stringify(mappedImages, null, 2)};\n\n// Para usar: imageUrls['Queen'] o imageUrls['El Señor de los Anillos']`;
    
    console.log('\n📝 Código JavaScript generado:\n');
    console.log(jsCode);
    
    // Copiar al portapapeles (si está disponible)
    if (navigator.clipboard) {
        const fullOutput = uniqueImages.map((img, i) => 
            `${i + 1}. ${img.title}\n   ${img.url}`
        ).join('\n\n');
        
        navigator.clipboard.writeText(fullOutput).then(() => {
            console.log('\n✅ URLs copiadas al portapapeles!');
        }).catch(err => {
            console.log('\n⚠️ No se pudo copiar al portapapeles automáticamente');
        });
    }
    
    // También crear un objeto con todas las URLs
    const allUrls = uniqueImages.map(img => ({
        title: img.title,
        url: img.url,
        alt: img.alt
    }));
    
    console.log('\n📦 Objeto completo con todas las imágenes:');
    console.log(JSON.stringify(allUrls, null, 2));
    
    // Retornar para uso en consola
    return {
        images: uniqueImages,
        mapped: mappedImages,
        count: uniqueImages.length
    };
})();
