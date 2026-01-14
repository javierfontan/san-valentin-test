// Script ROBUSTO - Busca imágenes de múltiples formas
(() => {
    console.log('🔍 Buscando imágenes...\n');
    
    const imageMap = {};
    
    // Método 1: Buscar por enlaces con /m/
    document.querySelectorAll('a[href*="/m/"]').forEach(link => {
        const planId = link.href.match(/\/m\/(\d+)/)?.[1];
        if (planId) {
            // Buscar imagen en el card
            let card = link.closest('[class*="card"], article, [class*="experience"], [class*="item"], [class*="product"]');
            if (!card) {
                card = link.parentElement;
            }
            
            if (card) {
                // Buscar imagen
                const img = card.querySelector('img');
                if (img && img.src && !img.src.includes('data:') && !img.src.includes('placeholder')) {
                    const src = img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
                    if (src && !imageMap[planId]) {
                        imageMap[planId] = src;
                        console.log(`✅ Plan ${planId}: ${src.substring(0, 80)}...`);
                    }
                }
                
                // Buscar background-image
                const bgEl = card.querySelector('[style*="background"], [class*="image"]');
                if (bgEl && !imageMap[planId]) {
                    const style = window.getComputedStyle(bgEl);
                    const bgImage = style.backgroundImage;
                    if (bgImage && bgImage !== 'none' && bgImage.includes('url(')) {
                        const match = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/);
                        if (match && match[1] && !match[1].includes('data:')) {
                            imageMap[planId] = match[1];
                            console.log(`✅ Plan ${planId} (bg): ${match[1].substring(0, 80)}...`);
                        }
                    }
                }
            }
        }
    });
    
    // Método 2: Buscar todas las imágenes y asociarlas con enlaces cercanos
    document.querySelectorAll('img').forEach(img => {
        const src = img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
        if (src && !src.includes('data:') && (src.includes('fever') || src.includes('imgix') || src.includes('cdn'))) {
            // Buscar enlace cercano
            let parent = img.parentElement;
            for (let i = 0; i < 10 && parent; i++) {
                const link = parent.querySelector('a[href*="/m/"]');
                if (link) {
                    const planId = link.href.match(/\/m\/(\d+)/)?.[1];
                    if (planId && !imageMap[planId]) {
                        imageMap[planId] = src;
                        console.log(`✅ Plan ${planId} (método 2): ${src.substring(0, 80)}...`);
                        break;
                    }
                }
                parent = parent.parentElement;
            }
        }
    });
    
    console.log('\n' + '='.repeat(80));
    console.log(`\n✅ Total: ${Object.keys(imageMap).length} imágenes encontradas\n`);
    
    // Mostrar objeto JSON
    console.log('📋 OBJETO JSON:\n');
    const jsonOutput = JSON.stringify(imageMap, null, 2);
    console.log(jsonOutput);
    
    // Crear texto para copiar fácilmente
    console.log('\n' + '='.repeat(80));
    console.log('\n💡 Para copiar:');
    console.log('1. Arriba verás el objeto JSON entre llaves { }');
    console.log('2. Selecciona TODO el objeto (desde { hasta })');
    console.log('3. Copia con Ctrl+C');
    console.log('4. Pégalo aquí');
    
    // También mostrar lista numerada
    console.log('\n📝 LISTA DE IMÁGENES:\n');
    Object.keys(imageMap).sort().forEach((planId, i) => {
        console.log(`${i+1}. Plan ${planId}: ${imageMap[planId]}`);
    });
    
    return imageMap;
})();
