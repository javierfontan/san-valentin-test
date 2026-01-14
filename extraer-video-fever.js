// Script para extraer URL del vídeo del hero de Fever
// Ejecuta esto en la consola de la página de Fever

(() => {
    console.log('🔍 Buscando vídeo en el hero...\n');
    
    // Buscar vídeo en el hero
    const hero = document.querySelector('[class*="hero"], [class*="Hero"], section:first-of-type');
    let videoFound = null;
    
    if (hero) {
        // Buscar video tag
        const video = hero.querySelector('video');
        if (video) {
            const src = video.src || video.querySelector('source')?.src || video.getAttribute('data-src');
            if (src) {
                videoFound = { type: 'video', src: src };
            }
        }
        
        // Buscar iframe de video
        if (!videoFound) {
            const iframe = hero.querySelector('iframe[src*="video"], iframe[src*="youtube"], iframe[src*="vimeo"]');
            if (iframe) {
                videoFound = { type: 'iframe', src: iframe.src };
            }
        }
        
        // Buscar background video
        if (!videoFound) {
            const bgVideo = hero.querySelector('[style*="video"], [data-video]');
            if (bgVideo) {
                const videoUrl = bgVideo.getAttribute('data-video') || bgVideo.style.backgroundImage;
                if (videoUrl) {
                    videoFound = { type: 'background', src: videoUrl };
                }
            }
        }
    }
    
    // Buscar en toda la página
    if (!videoFound) {
        document.querySelectorAll('video').forEach(video => {
            const src = video.src || video.querySelector('source')?.src;
            if (src && !src.includes('data:')) {
                console.log(`📹 Vídeo encontrado: ${src}`);
                if (!videoFound) videoFound = { type: 'video', src: src };
            }
        });
    }
    
    if (videoFound) {
        console.log('\n✅ VÍDEO ENCONTRADO:');
        console.log(`Tipo: ${videoFound.type}`);
        console.log(`URL: ${videoFound.src}`);
        console.log('\n💡 Copia esta URL y pégala en el campo videoUrl del hero en index.html');
    } else {
        console.log('\n⚠️ No se encontró vídeo en el hero.');
        console.log('💡 Puedes usar un vídeo de stock o agregar uno manualmente.');
    }
    
    return videoFound;
})();
