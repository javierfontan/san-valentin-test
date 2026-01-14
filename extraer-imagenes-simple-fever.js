// Script SIMPLIFICADO - Copia y pega esto en la consola de Fever
(() => {
    const results = [];
    document.querySelectorAll('a[href*="/m/"]').forEach(link => {
        const planId = link.href.match(/\/m\/(\d+)/)?.[1];
        if (planId) {
            const card = link.closest('[class*="card"], article, [class*="experience"]');
            if (card) {
                const img = card.querySelector('img');
                const title = card.querySelector('h2, h3, [class*="title"]')?.textContent?.trim() || '';
                if (img && img.src) {
                    const cleanTitle = title.replace(/^#\d+♥\s*TOP\s*PICK/i, '').replace(/📍.*$/g, '').trim();
                    results.push({
                        planId: planId,
                        title: cleanTitle,
                        imageUrl: img.src
                    });
                }
            }
        }
    });
    
    console.log('\n✅ Imágenes encontradas:\n');
    results.forEach((r, i) => {
        console.log(`${i+1}. Plan ${r.planId}: ${r.title}`);
        console.log(`   ${r.imageUrl}\n`);
    });
    
    // Crear objeto mapeado por planId
    const imageMap = {};
    results.forEach(r => {
        if (r.planId) {
            imageMap[r.planId] = r.imageUrl;
        }
    });
    
    console.log('\n📋 Objeto para copiar:\n');
    console.log(JSON.stringify(imageMap, null, 2));
    
    // Copiar al portapapeles
    const text = results.map(r => `Plan ${r.planId} (${r.title}): ${r.imageUrl}`).join('\n');
    navigator.clipboard.writeText(text).then(() => {
        console.log('\n✅ Copiado al portapapeles!');
    });
    
    return { results, imageMap };
})();
