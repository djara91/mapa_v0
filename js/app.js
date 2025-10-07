// Inicializar Mapbox
mapboxgl.accessToken = CONFIG.mapboxToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: CONFIG.mapStyle,
  center: CONFIG.center,
  zoom: CONFIG.zoom,
  pitch: 0,
  bearing: 0
});

// Agregar controles de navegación
map.addControl(new mapboxgl.NavigationControl(), 'top-left');
map.addControl(new mapboxgl.FullscreenControl(), 'top-left');
map.addControl(new mapboxgl.ScaleControl(), 'bottom-right');

// Agrupar tilesets por categoría
const categories = {};
CONFIG.tilesets.forEach(tileset => {
  if (!categories[tileset.category]) {
    categories[tileset.category] = [];
  }
  categories[tileset.category].push(tileset);
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

// Crear panel de control
function createControlPanel() {
  const panel = document.createElement('div');
  panel.className = 'control-panel';
  
  const header = document.createElement('div');
  header.className = 'panel-header';
  header.innerHTML = `
    <h2>Capas del Mapa</h2>
    <p>${CONFIG.tilesets.length} capas disponibles</p>
  `;
  
  const content = document.createElement('div');
  content.className = 'panel-content';
  
  // Crear categorías
  Object.keys(categories).forEach(categoryName => {
    const categoryDiv = createCategory(categoryName, categories[categoryName]);
    content.appendChild(categoryDiv);
  });
  
  panel.appendChild(header);
  panel.appendChild(content);
  document.body.appendChild(panel);
}

// Crear categoría
function createCategory(name, tilesets) {
  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'category';
  
  const header = document.createElement('div');
  header.className = 'category-header';
  header.innerHTML = `
    <span class="category-icon">${categoryIcons[name] || '📍'}</span>
    <span class="category-name">${name}</span>
    <span class="category-count">${tilesets.length}</span>
    <span class="category-arrow">▼</span>
  `;
  
  const layersDiv = document.createElement('div');
  layersDiv.className = 'category-layers';
  
  tilesets.forEach(tileset => {
    const layerItem = createLayerItem(tileset);
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

// Crear item de capa
function createLayerItem(tileset) {
  const item = document.createElement('div');
  item.className = 'layer-item';
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'layer-checkbox';
  checkbox.checked = tileset.visible;
  checkbox.id = `layer-${tileset.id}`;
  
  const color = document.createElement('span');
  color.className = 'layer-color';
  
  // Obtener color según el tipo de geometría
  if (tileset.type === 'circle') {
    color.style.backgroundColor = tileset.paint['circle-color'];
  } else if (tileset.type === 'line') {
    color.style.backgroundColor = tileset.paint['line-color'];
  } else if (tileset.type === 'fill') {
    color.style.backgroundColor = tileset.paint['fill-color'];
  }
  
  const label = document.createElement('label');
  label.className = 'layer-name';
  label.htmlFor = `layer-${tileset.id}`;
  label.textContent = tileset.name;
  
  checkbox.addEventListener('change', () => {
    toggleLayer(tileset, checkbox.checked);
    item.classList.toggle('active', checkbox.checked);
  });
  
  item.appendChild(checkbox);
  item.appendChild(color);
  item.appendChild(label);
  
  return item;
}

// Toggle de capa
function toggleLayer(tileset, visible) {
  const visibility = visible ? 'visible' : 'none';
  
  if (map.getLayer(tileset.id)) {
    map.setLayoutProperty(tileset.id, 'visibility', visibility);
  }
}

// Cargar capas cuando el mapa esté listo
map.on('load', () => {
  CONFIG.tilesets.forEach(tileset => {
    // Agregar source
    map.addSource(tileset.id, {
      type: 'vector',
      url: `mapbox://${tileset.tilesetId}`
    });
    
    // Agregar layer
    const layerConfig = {
      id: tileset.id,
      type: tileset.type,
      source: tileset.id,
      'source-layer': tileset.sourceLayer,
      layout: {
        visibility: tileset.visible ? 'visible' : 'none'
      },
      paint: tileset.paint
    };
    
    map.addLayer(layerConfig);
    
    // Agregar popup al hacer click
    map.on('click', tileset.id, (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: [tileset.id]
      });
      
      if (!features.length) return;
      
      const feature = features[0];
      createPopup(feature, tileset, e.lngLat);
    });
    
    // Cambiar cursor al pasar sobre features
    map.on('mouseenter', tileset.id, () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    
    map.on('mouseleave', tileset.id, () => {
      map.getCanvas().style.cursor = '';
    });
  });
});

// Crear popup
function createPopup(feature, tileset, lngLat) {
  const properties = feature.properties;
  
  let popupContent = `<h3>${tileset.name}</h3>`;
  
  tileset.popupFields.forEach(field => {
    if (properties[field] !== undefined && properties[field] !== null && properties[field] !== '') {
      popupContent += `
        <div class="popup-field">
          <strong>${formatFieldName(field)}:</strong>
          <span>${properties[field]}</span>
        </div>
      `;
    }
  });
  
  new mapboxgl.Popup()
    .setLngLat(lngLat)
    .setHTML(popupContent)
    .addTo(map);
}

// Formatear nombre de campo
function formatFieldName(field) {
  // Capitalizar primera letra y reemplazar guiones bajos con espacios
  return field
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Crear barra de búsqueda
function createSearchBox() {
  const container = document.createElement('div');
  container.className = 'search-container';
  
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'search-box';
  input.placeholder = 'Buscar ubicación...';
  
  container.appendChild(input);
  document.body.appendChild(container);
  
  // Geocoding simple (opcional)
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchLocation(input.value);
    }
  });
}

// Buscar ubicación
async function searchLocation(query) {
  if (!query) return;
  
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${CONFIG.mapboxToken}&country=CL&limit=1`
    );
    
    const data = await response.json();
    
    if (data.features && data.features.length > 0) {
      const [lng, lat] = data.features[0].center;
      
      map.flyTo({
        center: [lng, lat],
        zoom: 12,
        duration: 2000
      });
      
      // Agregar marcador temporal
      new mapboxgl.Marker({ color: '#3b82f6' })
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup().setHTML(`<h3>${data.features[0].place_name}</h3>`)
        )
        .addTo(map);
    }
  } catch (error) {
    console.error('Error al buscar ubicación:', error);
  }
}

// Crear leyenda
function createLegend() {
  const legend = document.createElement('div');
  legend.className = 'legend';
  legend.innerHTML = '<h4>Leyenda</h4>';
  
  // Mostrar solo categorías activas
  const activeLayers = CONFIG.tilesets.filter(t => t.visible);
  
  if (activeLayers.length === 0) {
    legend.innerHTML += '<p style="color: #666; font-size: 12px;">No hay capas activas</p>';
  } else {
    activeLayers.forEach(tileset => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      
      const color = document.createElement('span');
      color.className = 'legend-color';
      
      if (tileset.type === 'circle') {
        color.style.backgroundColor = tileset.paint['circle-color'];
      } else if (tileset.type === 'line') {
        color.style.backgroundColor = tileset.paint['line-color'];
      } else if (tileset.type === 'fill') {
        color.style.backgroundColor = tileset.paint['fill-color'];
      }
      
      item.appendChild(color);
      item.appendChild(document.createTextNode(tileset.name));
      legend.appendChild(item);
    });
  }
  
  document.body.appendChild(legend);
}

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', () => {
  createControlPanel();
  createSearchBox();
  // createLegend(); // Opcional: descomentar si quieres leyenda
});

// Manejar errores del mapa
map.on('error', (e) => {
  console.error('Error en el mapa:', e);
});

// Log cuando el mapa está completamente cargado
map.on('load', () => {
  console.log('Mapa cargado correctamente con estilo oscuro');
  console.log(`${CONFIG.tilesets.length} capas configuradas`);
});
