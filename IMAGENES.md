# 📸 Guía de Imágenes

## Estructura Actual

El código está configurado para usar imágenes desde el CDN de Fever usando `fever.imgix.net`. 

## URLs de Imágenes

Las imágenes están configuradas con URLs como:
```
https://fever.imgix.net/plan/photo/[nombre-imagen].jpg?auto=format&fit=crop&w=800&h=600
```

## Cómo Obtener las Imágenes Reales

### Opción 1: Desde la Página de Fever
1. Abre la página de Fever en el navegador
2. Inspecciona las imágenes de las experiencias (clic derecho → Inspeccionar)
3. Copia la URL real de la imagen
4. Reemplaza en `script.js` en el campo `image` de cada experiencia

### Opción 2: Usar las URLs Reales de Fever
Las imágenes probablemente están en un formato similar a:
- `https://fever.imgix.net/plan/photo/[id-unico].jpg`
- O en el dominio principal de Fever

### Opción 3: Usar Placeholder Temporal
Si las imágenes de Fever no están disponibles públicamente, puedes:
1. Usar servicios como Unsplash con imágenes temáticas
2. Usar placeholders mientras obtienes las imágenes reales
3. El código ya tiene fallback a placeholder si la imagen falla

## Actualizar Imágenes

Para actualizar una imagen, edita el objeto de experiencia en `script.js`:

```javascript
{
    id: 1,
    title: "Candlelight: El Señor de los Anillos",
    // ... otros campos
    image: "URL_AQUI"  // ← Actualiza esta URL
}
```

## Fallback

Si una imagen no carga, el código automáticamente mostrará un placeholder con el título de la experiencia.

## Optimización

Las imágenes usan:
- `loading="lazy"` para carga diferida
- `object-fit: cover` para mantener proporción
- Transform en hover para efecto zoom
- Alt text para SEO y accesibilidad

## Nota

Las URLs actuales son ejemplos. Necesitas reemplazarlas con las URLs reales de las imágenes de Fever o usar un servicio de imágenes alternativo.
