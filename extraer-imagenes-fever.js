// Script para extraer URLs de imágenes reales de Fever
// INSTRUCCIONES:
// 1. Abre: https://fever-valentines-landing--workflows-and-automations-1.us-central1.hosted.app/en/madrid
// 2. Abre la consola (F12)
// 3. Copia y pega este script
// 4. Presiona Enter

(() => {
    console.log('🔍 Buscando imágenes de experiencias en Fever...\n');
    
    const experienceImages = [];
    const seen = new Set();
    
    // Buscar todas las imágenes
    document.querySelectorAll('img').forEach((img, index) => {
        const src = img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy-src') || img.getAttribute('data-original');
        
        if (src && !src.includes('data:image') && (src.includes('fever') || src.includes('imgix') || src.includes('cdn'))) {
            if (!seen.has(src)) {
                seen.add(src);
                
                // Buscar el título de la experiencia asociada
                let title = '';
                let experienceUrl = '';
                
                // Buscar en el card/container padre
                let card = img.closest('article, [class*="card"], [class*="experience"], [class*="item"], [class*="product"]');
                if (card) {
                    // Buscar título
                    const titleEl = card.querySelector('h2, h3, h4, [class*="title"], [class*="name"], a[href*="/m/"]');
                    if (titleEl) {
                        title = titleEl.textContent.trim();
                    }
                    
                    // Buscar URL del plan
                    const linkEl = card.querySelector('a[href*="/m/"]');
                    if (linkEl) {
                        experienceUrl = linkEl.href;
                    }
                }
                
                // Si no encontramos título, buscar en elementos cercanos
                if (!title) {
                    let parent = img.parentElement;
                    for (let i = 0; i < 5 && parent; i++) {
                        const titleEl = parent.querySelector('h2, h3, [class*="title"]');
                        if (titleEl) {
                            title = titleEl.textContent.trim();
                            break;
                        }
                        parent = parent.parentElement;
                    }
                }
                
                // Limpiar título (remover emojis y texto extra)
                title = title.replace(/^#\d+♥\s*TOP\s*PICK/i, '')
                            .replace(/📍.*$/g, '')
                            .replace(/📅.*$/g, '')
                            .replace(/From.*$/g, '')
                            .replace(/Get Tickets.*$/g, '')
                            .trim();
                
                if (title || src.includes('plan/photo')) {
                    experienceImages.push({
                        title: title || `Imagen ${index + 1}`,
                        url: src,
                        experienceUrl: experienceUrl
                    });
                }
            }
        }
    });
    
    // También buscar imágenes en background-image
    document.querySelectorAll('[style*="background-image"], [class*="image"]').forEach(el => {
        const style = window.getComputedStyle(el);
        const bgImage = style.backgroundImage;
        if (bgImage && bgImage !== 'none' && bgImage.includes('url(')) {
            const match = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
            if (match) {
                const url = match[1];
                if (url && !url.includes('data:') && (url.includes('fever') || url.includes('imgix')) && !seen.has(url)) {
                    seen.add(url);
                    let title = '';
                    const card = el.closest('[class*="card"]');
                    if (card) {
                        const titleEl = card.querySelector('h2, h3, [class*="title"]');
                        if (titleEl) title = titleEl.textContent.trim();
                    }
                    experienceImages.push({
                        title: title || 'Background image',
                        url: url,
                        experienceUrl: ''
                    });
                }
            }
        }
    });
    
    console.log(`✅ Encontradas ${experienceImages.length} imágenes:\n`);
    console.log('='.repeat(80));
    
    // Agrupar por experiencia usando la URL del plan
    const imagesByExperience = {};
    experienceImages.forEach(img => {
        if (img.experienceUrl) {
            const planId = img.experienceUrl.match(/\/m\/(\d+)/)?.[1];
            if (planId && !imagesByExperience[planId]) {
                imagesByExperience[planId] = {
                    title: img.title,
                    url: img.url,
                    planId: planId
                };
            }
        }
    });
    
    // Mostrar resultados
    experienceImages.forEach((img, i) => {
        console.log(`\n${i + 1}. ${img.title}`);
        console.log(`   URL: ${img.url}`);
        if (img.experienceUrl) {
            console.log(`   Plan: ${img.experienceUrl}`);
        }
    });
    
    console.log('\n' + '='.repeat(80));
    console.log('\n📋 Imágenes agrupadas por Plan ID:\n');
    console.log(JSON.stringify(imagesByExperience, null, 2));
    
    // Crear mapeo por título para facilitar la actualización
    const titleMap = {};
    experienceImages.forEach(img => {
        const cleanTitle = img.title.toLowerCase()
            .replace(/candlelight:/gi, '')
            .replace(/tributo a/gi, '')
            .replace(/lo mejor de/gi, '')
            .replace(/[^a-z0-9]/g, '')
            .substring(0, 30);
        
        if (cleanTitle && !titleMap[cleanTitle]) {
            titleMap[cleanTitle] = img.url;
        }
    });
    
    console.log('\n📝 Mapeo por título simplificado:\n');
    console.log(JSON.stringify(titleMap, null, 2));
    
    // Copiar al portapapeles
    const text = experienceImages.map(img => `${img.title}\n${img.url}`).join('\n\n');
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('\n✅ URLs de imágenes copiadas al portapapeles!');
        });
    }
    
    return { experienceImages, imagesByExperience, titleMap };
})();
