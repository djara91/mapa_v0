// Configuración embebida
const config = {
  mapboxToken: 'pk.eyJ1IjoiZGphcmF2OTEiLCJhIjoiY21nMHRrOTFyMDc4eDJrb2s4MXFteHB4MiJ9.Ohh3xFjsIeEKhGbQRXs4jA',
  mapStyle: 'mapbox://styles/mapbox/dark-v11',
  center: [-71.5430, -33.0472],
  zoom: 5,
  layers: [
    // PREDIOS - Tonos morados
    {
      id: 'predios-araucania',
      name: 'Predios Araucanía',
      category: 'Predios',
      tilesetId: 'djarav91.3j46o3kh',
      sourceLayer: 'predios_araucania-d3cw1d',
      type: 'fill',
      paint: {
        'fill-color': '#8b5cf6',
        'fill-opacity': 0.5
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
        'fill-color': '#a78bfa',
        'fill-opacity': 0.5
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
        'fill-color': '#c4b5fd',
        'fill-opacity': 0.5
      },
      popupFields: [
        { field: 'comuna', label: 'Comuna' },
        { field: 'area_metros2', label: 'Área (m²)' }
      ]
    },
    
    // MINERÍA - Tonos naranjas/rojos
    {
      id: 'minas-abandonadas',
      name: 'Minas Abandonadas',
      category: 'Minería',
      tilesetId: 'djarav91.1sr0ur4o',
      sourceLayer: 'minas_abandonadas-2k3oqh',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#dc2626',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'nombre_faena', label: 'Nombre Faena' },
        { field: 'nombre_empresa', label: 'Empresa' },
        { field: 'comuna_faena', label: 'Comuna' },
        { field: 'nombre_instalacion', label: 'Instalación' },
        { field: 'tipo_instalacion', label: 'Tipo Instalación' },
        { field: 'recurso_principal', label: 'Recurso Principal' },
        { field: 'estado', label: 'Estado' }
      ]
    },
    {
      id: 'yacimientos-mineros',
      name: 'Yacimientos Mineros',
      category: 'Minería',
      tilesetId: 'djarav91.8jjzpdva',
      sourceLayer: 'yacimientos_mineros-2f6y2t',
      type: 'circle',
      paint: {
        'circle-radius': 7,
        'circle-color': '#f59e0b',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'nombre', label: 'Nombre' },
        { field: 'tipo_recur', label: 'Tipo Recurso' },
        { field: 'grupo_recu', label: 'Grupo Recurso' },
        { field: 'tamaño_yac', label: 'Tamaño Yacimiento' },
        { field: 'actividad_', label: 'Actividad' },
        { field: 'propietari', label: 'Propietario' },
        { field: 'observacio', label: 'Observación' },
        { field: 'comuna', label: 'Comuna' }
      ]
    },
    {
      id: 'socioterritorial-relaves',
      name: 'Estudio Socioterritorial de Relaves',
      category: 'Minería',
      tilesetId: 'djarav91.3f111u9l',
      sourceLayer: 'socioterritorial_relaves-3382fu',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#ea580c',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'name instalation', label: 'Instalación' },
        { field: 'municipalities', label: 'Municipios' }
      ]
    },
    {
      id: 'geoquimica-relaves',
      name: 'Geoquímica de Relaves',
      category: 'Minería',
      tilesetId: 'djarav91.3jcbqus1',
      sourceLayer: 'geoquimica_relaves-512o2z',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#fb923c',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'empresa o dueno', label: 'Empresa o Dueño' },
        { field: 'faena', label: 'Faena' },
        { field: 'deposito', label: 'Depósito' },
        { field: 'recurso', label: 'Recurso' },
        { field: 'estado', label: 'Estado' },
        { field: 'origen', label: 'Origen' },
        { field: 'comuna', label: 'Comuna' }
      ]
    },
    {
      id: 'catastro-relaves',
      name: 'Catastro de Relaves',
      category: 'Minería',
      tilesetId: 'djarav91.701mn9ag',
      sourceLayer: 'catastro_relaves-4lfctk',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#fdba74',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'nombre_empresa_o_productor_minero', label: 'Empresa' },
        { field: 'nombre_faena', label: 'Faena' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'nombre_instalacion', label: 'Instalación' },
        { field: 'tipo_deposito', label: 'Tipo Depósito' },
        { field: 'recurso', label: 'Recurso' },
        { field: 'tipo_mineria', label: 'Tipo Minería' },
        { field: 'estado_instalacion', label: 'Estado' },
        { field: 'metodo_constructivo_muro', label: 'Método Constructivo' }
      ]
    },
    
    // INFRAESTRUCTURA - Tonos azules/cyan
    {
      id: 'red-aeroportuaria',
      name: 'Red Aeroportuaria',
      category: 'Infraestructura',
      tilesetId: 'djarav91.7t6njre4',
      sourceLayer: 'red_aeroportuaria-a9fyuv',
      type: 'circle',
      paint: {
        'circle-radius': 7,
        'circle-color': '#0ea5e9',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'administra', label: 'Administrador' },
        { field: 'nombre', label: 'Nombre' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'localidad', label: 'Localidad' },
        { field: 'red', label: 'Red' },
        { field: 'tipo', label: 'Tipo' },
        { field: 'uso', label: 'Uso' },
        { field: 'propiedad', label: 'Propiedad' },
        { field: 'cod_oaci', label: 'Código OACI' }
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
        'circle-color': '#06b6d4',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'nombre_pue', label: 'Nombre Puente' },
        { field: 'nombre_cam', label: 'Nombre Camino' },
        { field: 'piso', label: 'Piso' },
        { field: 'est_puente', label: 'Estado Puente' },
        { field: 'tipo_estru', label: 'Tipo Estructura' },
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
        'line-color': '#22d3ee',
        'line-width': 3,
        'line-opacity': 0.8
      },
      popupFields: [
        { field: 'comuna', label: 'Comuna' },
        { field: 'eje_via', label: 'Eje Vía' },
        { field: 'km', label: 'Kilómetros' },
        { field: 'tipo', label: 'Tipo' },
        { field: 'carac_func', label: 'Característica Funcional' },
        { field: 'emplaza_te', label: 'Emplazamiento Técnico' },
        { field: 'etapa', label: 'Etapa' },
        { field: 'etapa_det', label: 'Detalle Etapa' },
        { field: 'cartera', label: 'Cartera' }
      ]
    },
    {
      id: 'estaciones-servicio',
      name: 'Estaciones de Servicio',
      category: 'Infraestructura',
      tilesetId: 'djarav91.dxxxpf11',
      sourceLayer: 'estaciones_servicio-2gbr05',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#67e8f9',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'distribuid', label: 'Distribuidor' },
        { field: 'calle', label: 'Calle' },
        { field: 'numero', label: 'Número' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'ben_93', label: 'Bencinera 93' },
        { field: 'ben_95', label: 'Bencinera 95' },
        { field: 'ben_97', label: 'Bencinera 97' },
        { field: 'diesel', label: 'Diesel' },
        { field: 'glp', label: 'GLP' },
        { field: 'gnc', label: 'GNC' },
        { field: 'kerosene', label: 'Kerosene' }
      ]
    },
    
    // EDUCACIÓN - Tonos verdes
    {
      id: 'educacion-parvularia',
      name: 'Establecimiento Ed. Parvularia',
      category: 'Educación',
      tilesetId: 'djarav91.9kpqrlt6',
      sourceLayer: 'educacion_parvularia-bieolz',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#10b981',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'nom_estab', label: 'Establecimiento' },
        { field: 'nom_com_es', label: 'Comuna' },
        { field: 'direccion', label: 'Dirección' },
        { field: 'numero', label: 'Número' }
      ]
    },
    {
      id: 'educacion-escolar',
      name: 'Establecimiento Ed. Escolar',
      category: 'Educación',
      tilesetId: 'djarav91.5qsfpd17',
      sourceLayer: 'educacion_escolar-5gjq7k',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#34d399',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'nom_rbd', label: 'Establecimiento' },
        { field: 'nom_com_rb', label: 'Comuna' },
        { field: 'direccion', label: 'Dirección' },
        { field: 'numero', label: 'Número' }
      ]
    },
    {
      id: 'educacion-superior',
      name: 'Establecimiento Ed. Superior',
      category: 'Educación',
      tilesetId: 'djarav91.1m8w7uhs',
      sourceLayer: 'educacion_superior-defplc',
      type: 'circle',
      paint: {
        'circle-radius': 7,
        'circle-color': '#6ee7b7',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'tipo_inst', label: 'Tipo Institución' },
        { field: 'nombre_ins', label: 'Institución' },
        { field: 'nombre_inm', label: 'Inmueble' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'direccion', label: 'Dirección' },
        { field: 'numero', label: 'Número' }
      ]
    },
    {
      id: 'directorio-educacion',
      name: 'Directorio Oficial Est. Educación',
      category: 'Educación',
      tilesetId: 'djarav91.dydbrgue',
      sourceLayer: 'directorio_educacion-6v38jv',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#a7f3d0',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'nom_rbd', label: 'Establecimiento' },
        { field: 'nom_com_rbd', label: 'Comuna' },
        { field: 'mat_total', label: 'Matrícula Total' },
        { field: 'pago_matricula', label: 'Pago Matrícula' },
        { field: 'pago_mensual', label: 'Pago Mensual' }
      ]
    },
    
    // SALUD - Tonos rosas/magenta
    {
      id: 'establecimientos-salud',
      name: 'Establecimientos de Salud',
      category: 'Salud',
      tilesetId: 'djarav91.2ys756q3',
      sourceLayer: 'establecimientos_salud-bzrouy',
      type: 'circle',
      paint: {
        'circle-radius': 7,
        'circle-color': '#ec4899',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'establecimientoglosa', label: 'Establecimiento' },
        { field: 'seremisaludglosa_serviciodesaludglosa', label: 'Servicio de Salud' },
        { field: 'tipoestablecimientoglosa', label: 'Tipo' },
        { field: 'dependenciaadministrativa', label: 'Dependencia' },
        { field: 'nivelatencionestabglosa', label: 'Nivel Atención' },
        { field: 'comunaglosa', label: 'Comuna' },
        { field: 'tipourgencia', label: 'Tipo Urgencia' },
        { field: 'estadofuncionamiento', label: 'Estado' },
        { field: 'nivelcomplejidadestabglosa', label: 'Nivel Complejidad' },
        { field: 'tipoatencionestabglosa', label: 'Tipo Atención' }
      ]
    },
    
    // SPPC - Tonos amarillos
    {
      id: 'sitios-priorizados',
      name: 'Sitios Priorizados Potencialmente Contaminados',
      category: 'SPPC',
      tilesetId: 'djarav91.8do6dm2u',
      sourceLayer: 'sitios_priorizados-9y3v4s',
      type: 'circle',
      paint: {
        'circle-radius': 7,
        'circle-color': '#eab308',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'nombre sppc', label: 'Nombre SPPC' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'nombre empresa o titular', label: 'Empresa/Titular' },
        { field: 'tipo propiedad (privada/fiscal)', label: 'Tipo Propiedad' },
        { field: 'act potencial contaminante i', label: 'Actividad Contaminante' },
        { field: 'id proc indust pot contaminantes i', label: 'Proceso Industrial' },
        { field: 'potenciales contaminantes i', label: 'Contaminantes' },
        { field: 'condición (activo, inactivo, abandonado)', label: 'Condición' },
        { field: 'estado de investigación', label: 'Estado Investigación' },
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
  
  console.log('Mapa cargado correctamente con', config.layers.length, 'capas');
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
  
  let popupHTML = `<div class="popup-header">${layer.name}</div><div class="popup-body">`;
  
  layer.popupFields.forEach(fieldConfig => {
    const value = properties[fieldConfig.field];
    if (value !== undefined && value !== null && value !== '') {
      popupHTML += `
        <div class="popup-row">
          <span class="popup-label">${fieldConfig.label}:</span>
          <span class="popup-value">${value}</span>
        </div>
      `;
    }
  });
  
  popupHTML += '</div>';
  
  // Obtener coordenadas según el tipo de geometría
  let coordinates;
  if (feature.geometry.type === 'Point') {
    coordinates = feature.geometry.coordinates;
  } else if (feature.geometry.type === 'LineString') {
    // Para líneas, usar el punto medio
    const coords = feature.geometry.coordinates;
    const midIndex = Math.floor(coords.length / 2);
    coordinates = coords[midIndex];
  } else if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
    // Para polígonos, usar el centroide aproximado del primer anillo
    const coords = feature.geometry.type === 'Polygon' 
      ? feature.geometry.coordinates[0] 
      : feature.geometry.coordinates[0][0];
    
    // Calcular centroide simple
    let sumLng = 0, sumLat = 0;
    coords.forEach(coord => {
      sumLng += coord[0];
      sumLat += coord[1];
    });
    coordinates = [sumLng / coords.length, sumLat / coords.length];
  }
  
  new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(popupHTML)
    .addTo(map);
}
