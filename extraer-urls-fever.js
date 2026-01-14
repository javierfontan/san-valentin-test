// Script para extraer URLs reales de planes de Fever
// INSTRUCCIONES:
// 1. Abre: https://fever-valentines-landing--workflows-and-automations-1.us-central1.hosted.app/en/madrid
// 2. Abre la consola (F12)
// 3. Copia y pega este script
// 4. Presiona Enter

(() => {
    console.log('🔍 Buscando URLs de planes de Fever...\n');
    
    const experienceUrls = [];
    const seen = new Set();
    
    // Buscar todos los enlaces que apuntan a planes
    document.querySelectorAll('a[href*="/e/"], a[href*="/plan/"], a[href*="feverup.com"]').forEach(link => {
        let href = link.href || link.getAttribute('href');
        
        // Si es una URL relativa, convertirla a absoluta
        if (href && href.startsWith('/')) {
            href = window.location.origin + href;
        }
        
        // Si es una URL relativa sin /, puede ser relativa a la página actual
        if (href && !href.startsWith('http')) {
            href = new URL(href, window.location.href).href;
        }
        
        if (href && (href.includes('/e/') || href.includes('/plan/') || href.includes('feverup.com')) && !seen.has(href)) {
            seen.add(href);
            
            // Buscar el título de la experiencia
            let title = '';
            const card = link.closest('article, [class*="card"], [class*="experience"], [class*="item"]');
            if (card) {
                const titleEl = card.querySelector('h2, h3, h4, [class*="title"], [class*="name"]');
                if (titleEl) {
                    title = titleEl.textContent.trim();
                }
            }
            
            // Si no hay título en el card, buscar en el link mismo
            if (!title) {
                title = link.textContent.trim() || link.getAttribute('aria-label') || link.title || '';
            }
            
            experienceUrls.push({
                url: href,
                title: title || 'Sin título',
                element: link
            });
        }
    });
    
    // También buscar enlaces en botones "Get Tickets" o similares
    document.querySelectorAll('button, [class*="button"], [class*="btn"]').forEach(btn => {
        const onclick = btn.getAttribute('onclick');
        if (onclick && onclick.includes('feverup.com')) {
            const urlMatch = onclick.match(/https?:\/\/[^\s'"]+/);
            if (urlMatch && !seen.has(urlMatch[0])) {
                seen.add(urlMatch[0]);
                let title = '';
                const card = btn.closest('[class*="card"], [class*="experience"]');
                if (card) {
                    const titleEl = card.querySelector('h2, h3, [class*="title"]');
                    if (titleEl) title = titleEl.textContent.trim();
                }
                experienceUrls.push({
                    url: urlMatch[0],
                    title: title || btn.textContent.trim() || 'Sin título',
                    element: btn
                });
            }
        }
    });
    
    console.log(`✅ Encontradas ${experienceUrls.length} URLs de planes:\n`);
    console.log('='.repeat(80));
    
    experienceUrls.forEach((exp, i) => {
        console.log(`\n${i + 1}. ${exp.title}`);
        console.log(`   ${exp.url}`);
    });
    
    // Crear objeto mapeado por títulos
    const urlMap = {};
    experienceUrls.forEach(exp => {
        const key = exp.title.toLowerCase()
            .replace(/[^a-z0-9]/g, '_')
            .replace(/_+/g, '_')
            .substring(0, 50);
        if (key && !urlMap[key]) {
            urlMap[key] = exp.url;
        }
    });
    
    console.log('\n' + '='.repeat(80));
    console.log('\n📋 Objeto JavaScript con URLs mapeadas:\n');
    console.log(JSON.stringify(urlMap, null, 2));
    
    // Crear código para copiar
    const jsCode = experienceUrls.map(exp => {
        const titleKey = exp.title.toLowerCase()
            .replace(/candlelight:/gi, '')
            .replace(/[^a-z0-9]/g, '_')
            .replace(/_+/g, '_')
            .trim();
        return `// ${exp.title}\nurl: "${exp.url}"`;
    }).join(',\n        ');
    
    console.log('\n📝 Código para copiar en script.js:\n');
    console.log(jsCode);
    
    // Copiar al portapapeles
    const text = experienceUrls.map(exp => `${exp.title}\n${exp.url}`).join('\n\n');
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('\n✅ URLs copiadas al portapapeles!');
        });
    }
    
    return { experienceUrls, urlMap };
})();
