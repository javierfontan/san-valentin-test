// Script SIN copia automática - Solo muestra resultados
(() => {
    const results = [];
    document.querySelectorAll('a[href*="/m/"]').forEach(link => {
        const planId = link.href.match(/\/m\/(\d+)/)?.[1];
        if (planId) {
            const card = link.closest('[class*="card"], article, [class*="experience"], [class*="item"]');
            if (card) {
                const img = card.querySelector('img');
                const title = card.querySelector('h2, h3, [class*="title"]')?.textContent?.trim() || '';
                if (img && img.src && !img.src.includes('data:')) {
                    const cleanTitle = title.replace(/^#\d+♥\s*TOP\s*PICK/i, '').replace(/📍.*$/g, '').replace(/📅.*$/g, '').replace(/From.*$/g, '').trim();
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
    console.log('='.repeat(80));
    results.forEach((r, i) => {
        console.log(`\n${i+1}. Plan ${r.planId}`);
        console.log(`   Título: ${r.title}`);
        console.log(`   Imagen: ${r.imageUrl}`);
    });
    
    // Crear objeto mapeado por planId
    const imageMap = {};
    results.forEach(r => {
        if (r.planId) {
            imageMap[r.planId] = r.imageUrl;
        }
    });
    
    console.log('\n' + '='.repeat(80));
    console.log('\n📋 OBJETO JSON PARA COPIAR:\n');
    console.log(JSON.stringify(imageMap, null, 2));
    
    console.log('\n💡 INSTRUCCIONES:');
    console.log('1. Selecciona el objeto JSON de arriba (desde { hasta })');
    console.log('2. Copia con Ctrl+C');
    console.log('3. Pégalo en el chat');
    
    return { results, imageMap };
})();
