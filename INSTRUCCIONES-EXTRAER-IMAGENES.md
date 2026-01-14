# 📸 Instrucciones para Extraer Imágenes de Fever

## Método 1: Script Automático (Recomendado)

### Paso 1: Abrir la página de Fever
1. Abre tu navegador
2. Ve a: https://fever-valentines-landing--workflows-and-automations-1.us-central1.hosted.app/en/madrid#valentines-specials
3. Espera a que la página cargue completamente

### Paso 2: Abrir la consola del navegador
- **Chrome/Edge**: Presiona `F12` o `Ctrl+Shift+J` (Windows) / `Cmd+Option+J` (Mac)
- **Firefox**: Presiona `F12` o `Ctrl+Shift+K` (Windows) / `Cmd+Option+K` (Mac)
- **Safari**: `Cmd+Option+C` (primero activa el menú de desarrollo en Preferencias)

### Paso 3: Ejecutar el script
1. Abre el archivo `extraer-imagenes.js` que está en tu proyecto
2. Copia TODO el contenido del archivo
3. Pega el código en la consola del navegador
4. Presiona `Enter`

### Paso 4: Ver los resultados
El script mostrará:
- Lista de todas las imágenes encontradas
- URLs limpias listas para usar
- Código JavaScript con las URLs mapeadas
- Las URLs se copiarán automáticamente al portapapeles

### Paso 5: Actualizar el código
1. Copia las URLs que necesites
2. Abre `script.js` en tu proyecto
3. Reemplaza el campo `image` de cada experiencia con la URL correspondiente

## Método 2: Manual (Si el script no funciona)

### Opción A: Inspeccionar elemento
1. Clic derecho en una imagen → "Inspeccionar elemento"
2. Busca el tag `<img>` o el elemento con la imagen de fondo
3. Copia el valor del atributo `src`, `data-src`, o `style` (si es background-image)
4. Si es una URL de imgix, puedes optimizarla agregando: `?auto=format&fit=crop&w=800&h=600`

### Opción B: Network Tab
1. Abre DevTools (F12)
2. Ve a la pestaña "Network"
3. Filtra por "Img"
4. Recarga la página
5. Busca las imágenes de las experiencias
6. Clic derecho en la imagen → "Copy" → "Copy URL"

## Método 3: Usar Selector CSS

Ejecuta esto en la consola:

```javascript
// Buscar todas las imágenes
document.querySelectorAll('img').forEach((img, i) => {
    const src = img.src || img.getAttribute('data-src');
    if (src && src.includes('fever') || src.includes('imgix')) {
        console.log(`${i + 1}. ${img.alt || 'Sin título'}`);
        console.log(`   ${src}`);
    }
});
```

## Formato de URLs esperado

Las URLs de Fever generalmente tienen este formato:
```
https://fever.imgix.net/plan/photo/[id].jpg?auto=format&fit=crop&w=800&h=600
```

O pueden ser:
```
https://cdn.feverup.com/[ruta]/[archivo].jpg
```

## Actualizar script.js

Una vez que tengas las URLs, actualiza `script.js`:

```javascript
{
    id: 1,
    title: "Candlelight: El Señor de los Anillos",
    location: "Hotel Wellington",
    date: "Mar 8 - Apr 26",
    price: 36,
    category: "candlelight",
    topPick: true,
    rank: 1,
    image: "URL_AQUI"  // ← Pega la URL real
}
```

## Tips

- Si una imagen no carga, el código automáticamente mostrará un placeholder
- Las imágenes se cargan con lazy loading para mejor rendimiento
- Todas las imágenes tienen alt text para SEO
- Las URLs se optimizan automáticamente con parámetros de imgix

## Solución de Problemas

**El script no encuentra imágenes:**
- Asegúrate de que la página esté completamente cargada
- Algunas imágenes pueden cargarse con JavaScript (lazy loading)
- Intenta hacer scroll por toda la página primero

**Las URLs no funcionan:**
- Algunas URLs pueden requerir autenticación
- Verifica que la URL sea pública
- Prueba abrir la URL directamente en el navegador

**No encuentro la imagen correcta:**
- Usa el título de la experiencia para identificar la imagen
- El script intenta mapear automáticamente por título
- Puedes hacerlo manualmente comparando visualmente
