# 🔗 Actualizar URLs de Fever

## Problema
Los links actuales apuntan a URLs que no existen (404). Necesitas las URLs reales de los planes de Fever.

## Solución: Extraer URLs Reales

### Paso 1: Abrir la página de Fever
Abre: https://fever-valentines-landing--workflows-and-automations-1.us-central1.hosted.app/en/madrid

### Paso 2: Ejecutar el script
1. Presiona `F12` para abrir la consola
2. Abre el archivo `extraer-urls-fever.js`
3. Copia TODO el contenido
4. Pégalo en la consola
5. Presiona `Enter`

### Paso 3: Ver los resultados
El script mostrará:
- Todas las URLs de planes encontradas
- Títulos asociados
- Código JavaScript listo para copiar

### Paso 4: Actualizar script.js
1. Copia las URLs que necesites
2. Abre `script.js`
3. Busca cada experiencia por su título
4. Reemplaza el campo `url` con la URL real

## Ejemplo

**Antes:**
```javascript
{
    id: 1,
    title: "Candlelight: El Señor de los Anillos",
    url: "https://feverup.com/madrid/e/candlelight-el-senor-de-los-anillos" // ❌ 404
}
```

**Después:**
```javascript
{
    id: 1,
    title: "Candlelight: El Señor de los Anillos",
    url: "https://feverup.com/madrid/e/12345-candlelight-senor-anillos" // ✅ URL real
}
```

## Formato de URLs de Fever

Las URLs reales de Fever suelen tener este formato:
- `https://feverup.com/madrid/e/[id]-[slug]`
- `https://feverup.com/es/madrid/e/[id]-[slug]`
- O pueden tener IDs numéricos

## Nota Importante

Si no puedes extraer las URLs automáticamente:
1. Ve manualmente a cada plan en Fever
2. Copia la URL de la barra de direcciones
3. Actualiza manualmente en `script.js`
