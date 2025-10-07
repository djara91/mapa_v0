// Cargar configuración
let config;

fetch('config/layers-config.json')
  .then(response => response.json())
  .then(data => {
    config = data;
    initMap();
  })
  .catch(error => {
    console.error('Error cargando configuración:', error);
    document.getElementById('loadingOverlay').innerHTML = '<p>Error al cargar la configuración</p>';
  });

// Iconos para categorías
const categoryIcons = {
  'Predios': '🏘️',
  'Minería': '⛏️',
  'Infraestructura': '🏗️',
  'Educación': '🎓',
  'Salud': '🏥',
  'SPPC': '⚠️'
};

function initMap() {
  // Inicializar mapa
  mapboxgl.accessToken = config.mapboxToken;
  
  const map = new mapboxgl.Map({
    container: 'map',
    style: config.mapStyle,
    center: config.center,
    zoom: config.zoom
  });
  
  // Agregar controles
  map.addControl(new mapboxgl.NavigationControl(), 'top-left');
  map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
  map.addControl(new mapboxgl.ScaleControl(), 'bottom-right');
  
  // Agrupar capas por categoría
  const categories = {};
  config.layers.forEach(layer => {
    if (!categories[layer.category]) {
      categories[layer.category] = [];
    }
    categories[layer.category].push(layer);
  });
  
  // Crear panel de control
  const panelContent = document.getElementById('panelContent');
  
  Object.keys(categories).forEach(categoryName => {
    const categoryDiv = createCategory(categoryName, categories[categoryName], map);
    panelContent.appendChild(categoryDiv);
  });
  
  // Cuando el mapa cargue
  map.on('load', () => {
    // Ocultar loading
    document.getElementById('loadingOverlay').classList.add('hidden');
    
    // Agregar todas las capas
    config.layers.forEach(layer => {
      // Agregar source
      map.addSource(layer.id, {
        type: 'vector',
        url: `mapbox://${layer.tilesetId}`
      });
      
      // Configurar layer según tipo
      const layerConfig = {
        id: layer.id,
        type: layer.type,
        source: layer.id,
        'source-layer': layer.sourceLayer,
        layout: {
          visibility: 'none'
        },
        paint: layer.paint
      };
      
      map.addLayer(layerConfig);
      
      // Agregar eventos de click para popups
      map.on('click', layer.id, (e) => {
        if (e.features.length > 0) {
          createPopup(e.features[0], layer, map);
        }
      });
      
      // Cambiar cursor
      map.on('mouseenter', layer.id, () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      
      map.on('mouseleave', layer.id, () => {
        map.getCanvas().style.cursor = '';
      });
    });
    
    console.log('Mapa cargado correctamente');
  });
  
  // Manejo de errores
  map.on('error', (e) => {
    console.error('Error en el mapa:', e);
  });
}

function createCategory(name, layers, map) {
  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'category';
  
  const header = document.createElement('div');
  header.className = 'category-header';
  header.innerHTML = `
    <span class="category-icon">${categoryIcons[name] || '📍'}</span>
    <span class="category-name">${name}</span>
    <span class="category-count">${layers.length}</span>
    <span class="category-arrow">▼</span>
  `;
  
  const layersDiv = document.createElement('div');
  layersDiv.className = 'category-layers';
  
  layers.forEach(layer => {
    const layerItem = createLayerItem(layer, map);
    layersDiv.appendChild(layerItem);
  });
  
  header.addEventListener('click', () => {
    header.classList.toggle('active');
    layersDiv.classList.toggle('expanded');
  });
  
  categoryDiv.appendChild(header);
  categoryDiv.appendChild(layersDiv);
  
  return categoryDiv;
}

function createLayerItem(layer, map) {
  const item = document.createElement('div');
  item.className = 'layer-item';
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'layer-checkbox';
  checkbox.id = `layer-${layer.id}`;
  
  const colorDiv = document.createElement('span');
  colorDiv.className = 'layer-color';
  
  // Obtener color según tipo
  if (layer.type === 'circle') {
    colorDiv.style.backgroundColor = layer.paint['circle-color'];
  } else if (layer.type === 'line') {
    colorDiv.style.backgroundColor = layer.paint['line-color'];
  } else if (layer.type === 'fill') {
    colorDiv.style.backgroundColor = layer.paint['fill-color'];
  }
  
  const label = document.createElement('label');
  label.className = 'layer-name';
  label.htmlFor = `layer-${layer.id}`;
  label.textContent = layer.name;
  
  checkbox.addEventListener('change', () => {
    const visibility = checkbox.checked ? 'visible' : 'none';
    map.setLayoutProperty(layer.id, 'visibility', visibility);
    item.classList.toggle('active', checkbox.checked);
  });
  
  item.appendChild(checkbox);
  item.appendChild(colorDiv);
  item.appendChild(label);
  
  return item;
}

function createPopup(feature, layer, map) {
  const properties = feature.properties;
  
  let popupHTML = `<h3>${layer.name}</h3>`;
  
  layer.popupFields.forEach(fieldConfig => {
    const value = properties[fieldConfig.field];
    if (value !== undefined && value !== null && value !== '') {
      popupHTML += `
        <div class="popup-field">
          <strong>${fieldConfig.label}:</strong>
          <span>${value}</span>
        </div>
      `;
    }
  });
  
  new mapboxgl.Popup()
    .setLngLat(feature.geometry.coordinates)
    .setHTML(popupHTML)
    .addTo(map);
}
