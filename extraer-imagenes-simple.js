// VERSIÓN SIMPLIFICADA - Copia y pega esto en la consola del navegador
// cuando estés en la página de Fever

(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    const urls = [];
    
    imgs.forEach(img => {
        const src = img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
        if (src && !src.includes('data:') && (src.includes('fever') || src.includes('imgix'))) {
            const title = img.alt || img.closest('[class*="card"], [class*="experience"]')?.querySelector('h2, h3, [class*="title"]')?.textContent || 'Sin título';
            urls.push({ title: title.trim(), url: src });
        }
    });
    
    console.log(`\n✅ ${urls.length} imágenes encontradas:\n`);
    urls.forEach((img, i) => {
        console.log(`${i + 1}. ${img.title}`);
        console.log(`   ${img.url}\n`);
    });
    
    // Copiar al portapapeles
    const text = urls.map(img => `${img.title}\n${img.url}`).join('\n\n');
    navigator.clipboard.writeText(text).then(() => {
        console.log('✅ URLs copiadas al portapapeles!');
    });
    
    return urls;
})();
