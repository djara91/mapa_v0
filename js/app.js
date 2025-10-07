// Configuración embebida 
const config = {
  mapboxToken: 'pk.eyJ1IjoiZGphcmF2OTEiLCJhIjoiY21nMHRrOTFyMDc4eDJrb2s4MXFteHB4MiJ9.Ohh3xFjsIeEKhGbQRXs4jA',
  mapStyle: 'mapbox://styles/mapbox/dark-v11',
  center: [-71.5430, -33.0472],
  zoom: 5,
  layers: [
    {
      id: 'predios-araucania',
      name: 'Predios Araucanía',
      category: 'Predios',
      tilesetId: 'djarav91.3j46o3kh',
      sourceLayer: 'predios_araucania-d3cw1d',
      type: 'fill',
      paint: {
        'fill-color': '#3b82f6',
        'fill-opacity': 0.3,
        'fill-outline-color': '#1e40af'
      },
      popupFields: [
        { field: 'comuna', label: 'Comuna' },
        { field: 'area_metros2', label: 'Área (m²)' }
      ]
    },
    {
      id: 'predios-antofagasta',
      name: 'Predios Antofagasta',
      category: 'Predios',
      tilesetId: 'djarav91.c1r3ealb',
      sourceLayer: 'predios_antofagasta-as3bzw',
      type: 'fill',
      paint: {
        'fill-color': '#3b82f6',
        'fill-opacity': 0.3,
        'fill-outline-color': '#1e40af'
      },
      popupFields: [
        { field: 'comuna', label: 'Comuna' },
        { field: 'area_metros2', label: 'Área (m²)' }
      ]
    },
    {
      id: 'predios-magallanes',
      name: 'Predios Magallanes',
      category: 'Predios',
      tilesetId: 'djarav91.dw89gmxz',
      sourceLayer: 'predios_magallanes-5ydzq2',
      type: 'fill',
      paint: {
        'fill-color': '#3b82f6',
        'fill-opacity': 0.3,
        'fill-outline-color': '#1e40af'
      },
      popupFields: [
        { field: 'comuna', label: 'Comuna' },
        { field: 'area_metros2', label: 'Área (m²)' }
      ]
    },
    {
      id: 'minas-abandonadas',
      name: 'Minas abandonadas',
      category: 'Minería',
      tilesetId: 'djarav91.1sr0ur4o',
      sourceLayer: 'minas_abandonadas-2k3oqh',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#ef4444',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'nombre_faena', label: 'Faena' },
        { field: 'nombre_empresa', label: 'Empresa' },
        { field: 'comuna_faena', label: 'Comuna' },
        { field: 'estado', label: 'Estado' }
      ]
    },
    {
      id: 'yacimientos-mineros',
      name: 'Yacimientos mineros',
      category: 'Minería',
      tilesetId: 'djarav91.8jjzpdva',
      sourceLayer: 'yacimientos_mineros-2f6y2t',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#f59e0b',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'nombre', label: 'Nombre' },
        { field: 'tipo_recur', label: 'Tipo Recurso' },
        { field: 'comuna', label: 'Comuna' }
      ]
    },
    {
      id: 'socioterritorial-relaves',
      name: 'Estudio socioterritorial de relaves',
      category: 'Minería',
      tilesetId: 'djarav91.3f111u9l',
      sourceLayer: 'socioterritorial_relaves-3382fu',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#8b5cf6',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'name instalation', label: 'Instalación' },
        { field: 'municipalities', label: 'Municipios' }
      ]
    },
    {
      id: 'geoquimica-relaves',
      name: 'Geoquímica de relaves',
      category: 'Minería',
      tilesetId: 'djarav91.3jcbqus1',
      sourceLayer: 'geoquimica_relaves-512o2z',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#ec4899',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'empresa o dueno', label: 'Empresa' },
        { field: 'faena', label: 'Faena' },
        { field: 'comuna', label: 'Comuna' }
      ]
    },
    {
      id: 'catastro-relaves',
      name: 'Catastro de relaves',
      category: 'Minería',
      tilesetId: 'djarav91.701mn9ag',
      sourceLayer: 'catastro_relaves-4lfctk',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#14b8a6',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'nombre_faena', label: 'Faena' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'estado_instalacion', label: 'Estado' }
      ]
    },
    {
      id: 'red-aeroportuaria',
      name: 'Red aeroportuaria',
      category: 'Infraestructura',
      tilesetId: 'djarav91.7t6njre4',
      sourceLayer: 'red_aeroportuaria-a9fyuv',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#06b6d4',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'nombre', label: 'Nombre' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'tipo', label: 'Tipo' }
      ]
    },
    {
      id: 'puentes',
      name: 'Puentes',
      category: 'Infraestructura',
      tilesetId: 'djarav91.3jvviqv6',
      sourceLayer: 'puentes-1403sw',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#10b981',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'nombre_pue', label: 'Nombre' },
        { field: 'provincia', label: 'Provincia' }
      ]
    },
    {
      id: 'ciclovias',
      name: 'Ciclovías',
      category: 'Infraestructura',
      tilesetId: 'djarav91.cizyhgi0',
      sourceLayer: 'ciclovias-b8d470',
      type: 'line',
      paint: {
        'line-color': '#84cc16',
        'line-width': 3
      },
      popupFields: [
        { field: 'comuna', label: 'Comuna' },
        { field: 'km', label: 'Kilómetros' }
      ]
    },
    {
      id: 'estaciones-servicio',
      name: 'Estaciones de servicio',
      category: 'Infraestructura',
      tilesetId: 'djarav91.dxxxpf11',
      sourceLayer: 'estaciones_servicio-2gbr05',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#eab308',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'distribuid', label: 'Distribuidor' },
        { field: 'comuna', label: 'Comuna' }
      ]
    },
    {
      id: 'educacion-parvularia',
      name: 'Establecimiento ed. parvularia',
      category: 'Educación',
      tilesetId: 'djarav91.9kpqrlt6',
      sourceLayer: 'educacion_parvularia-bieolz',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#f97316',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'nom_estab', label: 'Establecimiento' },
        { field: 'nom_com_es', label: 'Comuna' }
      ]
    },
    {
      id: 'educacion-escolar',
      name: 'Establecimiento ed. escolar',
      category: 'Educación',
      tilesetId: 'djarav91.5qsfpd17',
      sourceLayer: 'educacion_escolar-5gjq7k',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#fb923c',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'nom_rbd', label: 'Establecimiento' },
        { field: 'nom_com_rb', label: 'Comuna' }
      ]
    },
    {
      id: 'educacion-superior',
      name: 'Establecimiento ed. superior',
      category: 'Educación',
      tilesetId: 'djarav91.1m8w7uhs',
      sourceLayer: 'educacion_superior-defplc',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#fbbf24',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'nombre_ins', label: 'Institución' },
        { field: 'comuna', label: 'Comuna' }
      ]
    },
    {
      id: 'directorio-educacion',
      name: 'Directorio oficial est. educación',
      category: 'Educación',
      tilesetId: 'djarav91.dydbrgue',
      sourceLayer: 'directorio_educacion-6v38jv',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#facc15',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'nom_rbd', label: 'Establecimiento' },
        { field: 'nom_com_rbd', label: 'Comuna' }
      ]
    },
    {
      id: 'establecimientos-salud',
      name: 'Establecimientos de salud',
      category: 'Salud',
      tilesetId: 'djarav91.2ys756q3',
      sourceLayer: 'establecimientos_salud-bzrouy',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#22c55e',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'establecimientoglosa', label: 'Establecimiento' },
        { field: 'comunaglosa', label: 'Comuna' }
      ]
    },
    {
      id: 'sitios-priorizados',
      name: 'Sitios priorizados potencialmente contaminados',
      category: 'SPPC',
      tilesetId: 'djarav91.8do6dm2u',
      sourceLayer: 'sitios_priorizados-9y3v4s',
      type: 'circle',
      paint: {
        'circle-radius': 7,
        'circle-color': '#dc2626',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
      },
      popupFields: [
        { field: 'nombre sppc', label: 'Nombre' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'prioridad', label: 'Prioridad' }
      ]
    }
  ]
};

// Iconos para categorías
const categoryIcons = {
  'Predios': '🏘️',
  'Minería': '⛏️',
  'Infraestructura': '🏗️',
  'Educación': '🎓',
  'Salud': '🏥',
  'SPPC': '⚠️'
};

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
  const categoryDiv = createCategory(categoryName, categories[categoryName]);
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
        createPopup(e.features[0], layer);
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

function createCategory(name, layers) {
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
    const layerItem = createLayerItem(layer);
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

function createLayerItem(layer) {
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

function createPopup(feature, layer) {
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
