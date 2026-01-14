// Script para extraer vídeo y tipografía de Fever
// INSTRUCCIONES:
// 1. Abre la página de Fever
// 2. Presiona F12 → Console
// 3. Copia y pega este código
// 4. Presiona Enter

(() => {
    console.log('🔍 Buscando vídeo y tipografía...\n');
    
    // Buscar vídeo
    const videos = [];
    document.querySelectorAll('video, iframe[src*="video"], [class*="video"]').forEach(el => {
        if (el.tagName === 'VIDEO') {
            const src = el.src || el.getAttribute('src') || el.querySelector('source')?.src;
            if (src) videos.push({ type: 'video', src: src });
        } else if (el.tagName === 'IFRAME') {
            videos.push({ type: 'iframe', src: el.src });
        }
    });
    
    // Buscar background video
    document.querySelectorAll('[style*="video"], [class*="hero"]').forEach(el => {
        const style = window.getComputedStyle(el);
        const bgVideo = style.backgroundImage;
        if (bgVideo && bgVideo.includes('video')) {
            videos.push({ type: 'background', element: el });
        }
    });
    
    console.log('📹 VÍDEOS ENCONTRADOS:');
    videos.forEach((v, i) => {
        console.log(`${i+1}. Tipo: ${v.type}`);
        if (v.src) console.log(`   URL: ${v.src}`);
        if (v.element) console.log(`   Elemento: ${v.element.className}`);
    });
    
    // Buscar tipografía
    const fonts = new Set();
    document.querySelectorAll('*').forEach(el => {
        const style = window.getComputedStyle(el);
        const fontFamily = style.fontFamily;
        if (fontFamily && !fontFamily.includes('monospace')) {
            fonts.add(fontFamily.split(',')[0].replace(/['"]/g, ''));
        }
    });
    
    console.log('\n🔤 TIPOGRAFÍAS ENCONTRADAS:');
    Array.from(fonts).forEach((font, i) => {
        console.log(`${i+1}. ${font}`);
    });
    
    // Buscar fuente principal del body
    const bodyFont = window.getComputedStyle(document.body).fontFamily;
    console.log(`\n📝 Fuente principal del body: ${bodyFont}`);
    
    return { videos, fonts: Array.from(fonts), bodyFont };
})();
