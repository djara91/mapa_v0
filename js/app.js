// Tu Access Token de Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiZGphcmF2OTEiLCJhIjoiY21nMHRrOTFyMDc4eDJrb2s4MXFteHB4MiJ9.Ohh3xFjsIeEKhGbQRXs4jA';

let map;
let layersConfig = null;
let activeLayers = new Set();
let layerGroups = {};

// Inicializar mapa
async function initMap() {
    try {
        // Mostrar loading
        document.getElementById('loading').style.display = 'block';
        
        // Cargar configuración de capas
        const response = await fetch('config/layers-config.json');
        
        if (!response.ok) {
            throw new Error('No se pudo cargar la configuración de capas');
        }
        
        const data = await response.json();
        layersConfig = data.layers;
        
        console.log('✅ Capas cargadas:', layersConfig.length);
        
        // Crear mapa centrado en Chile
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v11',
            center: [-71.3, -33.4], // Santiago, Chile
            zoom: 5,
            pitch: 0,
            bearing: 0
        });
        
        // Agregar controles de navegación
        map.addControl(new mapboxgl.NavigationControl(), 'top-left');
        map.addControl(new mapboxgl.ScaleControl(), 'bottom-right');
        map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
        
        // Cuando el mapa cargue
        map.on('load', () => {
            console.log('✅ Mapa cargado exitosamente');
            addSources();
            createLayerControl();
            document.getElementById('loading').style.display = 'none';
        });
        
        // Manejo de errores del mapa
        map.on('error', (e) => {
            console.error('❌ Error en el mapa:', e);
            alert('Error al cargar el mapa. Por favor recarga la página.');
        });
        
    } catch (error) {
        console.error('❌ Error al inicializar:', error);
        document.getElementById('loading').innerHTML = '❌ Error al cargar el mapa: ' + error.message;
    }
}

// Agregar fuentes de datos
function addSources() {
    layersConfig.forEach(layer => {
        try {
            if (!map.getSource(layer.id)) {
                map.addSource(layer.id, {
                    type: 'vector',
                    url: `mapbox://${layer.tilesetId}`
                });
                console.log('✅ Fuente agregada:', layer.name);
            }
        } catch (error) {
            console.error(`❌ Error agregando fuente ${layer.id}:`, error);
        }
    });
}

// Crear panel de control de capas
function createLayerControl() {
    const categoriesDiv = document.getElementById('categories');
    categoriesDiv.innerHTML = '';
    
    // Agrupar capas por categoría
    const grouped = {};
    layersConfig.forEach(layer => {
        if (!grouped[layer.category]) {
            grouped[layer.category] = [];
        }
        grouped[layer.category].push(layer);
    });
    
    // Orden personalizado de categorías
    const categoryOrder = ['Salud', 'Educación', 'Minería', 'Infraestructura', 'Predios'];
    const sortedCategories = categoryOrder.filter(cat => grouped[cat]);
    
    // Crear HTML para cada categoría
    sortedCategories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        
        const titleDiv = document.createElement('div');
        titleDiv.className = 'category-title';
        
        // Iconos por categoría
        const icons = {
            'Salud': '🏥',
            'Educación': '🎓',
            'Minería': '⛏️',
            'Infraestructura': '🏗️',
            'Predios': '🏘️'
        };
        
        titleDiv.innerHTML = `
            <span>${icons[category] || '📍'} ${category}</span>
            <span class="arrow">▼</span>
        `;
        titleDiv.onclick = () => toggleCategory(titleDiv, layersDiv);
        
        const layersDiv = document.createElement('div');
        layersDiv.className = 'category-layers';
        
        grouped[category].forEach(layer => {
            const layerDiv = document.createElement('div');
            layerDiv.className = 'layer-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `check-${layer.id}`;
            checkbox.className = 'layer-checkbox';
            checkbox.onchange = () => toggleLayer(layer.id);
            
            const label = document.createElement('label');
            label.htmlFor = `check-${layer.id}`;
            label.className = 'layer-label';
            label.textContent = layer.name;
            
            // Indicador de color
            const colorIndicator = document.createElement('div');
            colorIndicator.className = 'layer-color-indicator';
            const color = layer.paint['circle-color'] || 
                         layer.paint['fill-color'] || 
                         layer.paint['line-color'] || 
                         '#3b82f6';
            colorIndicator.style.backgroundColor = color;
            
            layerDiv.appendChild(checkbox);
            layerDiv.appendChild(label);
            layerDiv.appendChild(colorIndicator);
            layersDiv.appendChild(layerDiv);
        });
        
        categoryDiv.appendChild(titleDiv);
        categoryDiv.appendChild(layersDiv);
        categoriesDiv.appendChild(categoryDiv);
    });
    
    updateLegend();
}

// Toggle categoría
function toggleCategory(titleDiv, layersDiv) {
    titleDiv.classList.toggle('collapsed');
    layersDiv.classList.toggle('collapsed');
}

// Toggle capa
function toggleLayer(layerId) {
    const layer = layersConfig.find(l => l.id === layerId);
    
    if (!layer) {
        console.error('❌ Capa no encontrada:', layerId);
        return;
    }
    
    if (activeLayers.has(layerId)) {
        removeLayer(layerId);
        activeLayers.delete(layerId);
        console.log('➖ Capa desactivada:', layer.name);
    } else {
        addLayer(layer);
        activeLayers.add(layerId);
        console.log('➕ Capa activada:', layer.name);
    }
    
    updateLegend();
}

// Agregar capa al mapa
function addLayer(layer) {
    try {
        const layerConfig = {
            id: layer.id,
            type: layer.type,
            source: layer.id,
            'source-layer': layer.sourceLayer
        };
        
        if (layer.paint) {
            layerConfig.paint = layer.paint;
        }
        
        if (layer.layout) {
            layerConfig.layout = layer.layout;
        }
        
        map.addLayer(layerConfig);
        console.log('✅ Capa renderizada en el mapa:', layer.name);
        
        addLayerInteractivity(layer);
        
    } catch (error) {
        console.error(`❌ Error agregando capa ${layer.id}:`, error);
        alert(`Error al agregar la capa "${layer.name}". Verifica la configuración del tileset.`);
    }
}

// Remover capa del mapa
function removeLayer(layerId) {
    if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
    }
}

// Agregar interactividad a la capa
function addLayerInteractivity(layer) {
    // Cambiar cursor
    map.on('mouseenter', layer.id, () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    
    map.on('mouseleave', layer.id, () => {
        map.getCanvas().style.cursor = '';
    });
    
    // Click en feature
    map.on('click', layer.id, (e) => {
        if (e.features && e.features.length > 0) {
            const feature = e.features[0];
            showPopup(feature, layer, e.lngLat);
        }
    });
}

// Mostrar popup
function showPopup(feature, layer, lngLat) {
    const properties = feature.properties;
    
    // Construir HTML del popup
    let html = `
        <div class="popup-header">
            ${layer.name}
        </div>
        <div class="popup-body">
    `;
    
    layer.popupFields.forEach(field => {
        let value = properties[field.field];
        
        // Manejar valores nulos o undefined
        if (value === undefined || value === null || value === '') {
            value = 'No disponible';
        }
        
        // Formatear área en metros cuadrados
        if (field.field === 'area_metros2' && value !== 'No disponible') {
            value = parseFloat(value).toLocaleString('es-CL') + ' m²';
        }
        
        html += `
            <div class="popup-field">
                <div class="popup-label">${field.label}:</div>
                <div class="popup-value">${value}</div>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Crear y mostrar popup
    new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: true,
        maxWidth: '400px'
    })
        .setLngLat(lngLat)
        .setHTML(html)
        .addTo(map);
}

// Actualizar leyenda
function updateLegend() {
    const legendContent = document.getElementById('legend-content');
    legendContent.innerHTML = '';
    
    if (activeLayers.size === 0) {
        legendContent.innerHTML = '<p style="color: #94a3b8; font-size: 12px; font-style: italic;">No hay capas activas. Selecciona capas del panel.</p>';
        return;
    }
    
    activeLayers.forEach(layerId => {
        const layer = layersConfig.find(l => l.id === layerId);
        if (layer) {
            const item = document.createElement('div');
            item.className = 'legend-item';
            
            const colorBox = document.createElement('div');
            const isCircle = layer.type === 'circle';
            const isLine = layer.type === 'line';
            colorBox.className = isCircle ? 'legend-color legend-circle' : 'legend-color';
            
            if (isLine) {
                colorBox.style.height = '4px';
                colorBox.style.borderRadius = '2px';
            }
            
            const color = layer.paint['circle-color'] || 
                         layer.paint['fill-color'] || 
                         layer.paint['line-color'] || 
                         '#3b82f6';
            colorBox.style.backgroundColor = color;
            
            const label = document.createElement('span');
            label.textContent = layer.name;
            
            item.appendChild(colorBox);
            item.appendChild(label);
            legendContent.appendChild(item);
        }
    });
}

// Inicializar cuando cargue la página
window.onload = initMap;
