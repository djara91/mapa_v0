// Configuración embebida
const config = {
  mapboxToken: 'pk.eyJ1IjoiZGphcmF2OTEiLCJhIjoiY21nMHRrOTFyMDc4eDJrb2s4MXFteHB4MiJ9.Ohh3xFjsIeEKhGbQRXs4jA',
  mapStyle: 'mapbox://styles/mapbox/dark-v11',
  center: [-71.5430, -33.0472],
  zoom: 5,
  layers: [
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
    },
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
    //Residuos - Tonos grises
    {
      id: 'rsd-activos',
      name: 'Residuos sólidos domiciliarios activos',
      category: 'Residuos',
      tilesetId: 'djarav91.ae8u3um9',
      sourceLayer: 'rsd_activo-52r0tx',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#71717a',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'sitio_disp', label: 'Nombre' },
        { field: 'tipo', label: 'Tipo' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'propietari', label: 'Propietario' },
        { field: 'operador', label: 'Operador' },
        { field: 'estado', label: 'Estado' }
      ]
    },
    {
      id: 'rsd-cerrados',
      name: 'Residuos sólidos domiciliarios cerrados',
      category: 'Residuos',
      tilesetId: 'djarav91.4xnusz3q',
      sourceLayer: 'rsd_cerrados-2wrvi1',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#52525b',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'sitio_disp', label: 'Nombre' },
        { field: 'tipo', label: 'Tipo' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'operacion', label: 'Operación' },
        { field: 'estado', label: 'Estado' }
      ]
    },
    {
      id: 'rsd-intermedios',
      name: 'Residuos sólidos domiciliarios intermedios',
      category: 'Residuos',
      tilesetId: 'djarav91.2j3ex1g9',
      sourceLayer: 'rsd_intermedios-1py2td',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#3f3f46',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'sitio_disp', label: 'Nombre' },
        { field: 'tipo', label: 'Tipo' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'propietari', label: 'Propietario' },
        { field: 'operador', label: 'Operador' },
        { field: 'estado', label: 'Estado' }
      ]
    },
    {
      id: 'rsd-planificados',
      name: 'Residuos sólidos domiciliarios planificados',
      category: 'Residuos',
      tilesetId: 'djarav91.8w7474au',
      sourceLayer: 'rsd_planificados-2xbazg',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#a1a1aa',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'sitio_disp', label: 'Nombre' },
        { field: 'tipo', label: 'Tipo' },
        { field: 'comuna', label: 'Comuna' },
        { field: 'propietari', label: 'Propietario' },
        { field: 'operador', label: 'Operador' },
        { field: 'estado', label: 'Estado' }
      ]
    },
    {
      id: 'vertederos-ilegales',
      name: 'Vertederos ilegales R.M.',
      category: 'Residuos',
      tilesetId: 'djarav91.9nqjwp5e',
      sourceLayer: 'vertederos_ilegales-2d3uak',
      type: 'circle',
      paint: {
        'circle-radius': 6,
        'circle-color': '#18181b',
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff',
        'circle-opacity': 0.8
      },
      popupFields: [
        { field: 'ubicacion', label: 'Ubicación' }
      ]
    },
  ]
};

// ============================================
// VARIABLES GLOBALES
// ============================================

// Iconos para categorías
const categoryIcons = {
  'Predios': '🏘️',
  'Minería': '⛏️',
  'Infraestructura': '🏗️',
  'Educación': '🎓',
  'Salud': '🏥',
  'SPPC': '⚠️',
  'Residuos': '🏭'
};

// Variables para filtro de comunas
let selectedComunas = [];

// ⭐ NUEVO: Variables para filtro de Sitios Priorizados
let sitiosPriorizadosFilter = {
    nombre: [],
    empresa: [],
    actividad: [],
    proceso: [],
    contaminante: []
};

let sitiosPriorizadosData = {
    nombres: [],
    empresas: [],
    actividades: [],
    procesos: [],
    contaminantes: []
};

// ============================================
// FUNCIONES DE CATEGORÍAS Y CAPAS
// ============================================

// Función para crear categoría CON "Seleccionar todos"
function createCategory(categoryName, layers) {
  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'category';
  
  // Obtener el ícono de la categoría
  const icon = categoryIcons[categoryName] || '📍';
  
  // Header de la categoría
  const categoryHeader = document.createElement('div');
  categoryHeader.className = 'category-header';
  categoryHeader.innerHTML = `
    <span class="category-icon">${icon}</span>
    <span class="category-name">${categoryName}</span>
    <span class="category-count">${layers.length}</span>
    <span class="category-arrow">▼</span>
  `;
  
  // Contenedor de capas
  const categoryLayers = document.createElement('div');
  categoryLayers.className = 'category-layers';
  
  // ⭐ NUEVO: Agregar "Seleccionar todos" solo si hay más de 1 capa
  let selectAllDiv = null;
  let selectAllCheckbox = null;
  
  if (layers.length > 1) {
    selectAllDiv = document.createElement('div');
    selectAllDiv.className = 'layer-item select-all-item';
    selectAllDiv.innerHTML = `
      <input type="checkbox" class="layer-checkbox select-all-checkbox" id="select-all-${categoryName.replace(/\s+/g, '-')}">
      <span class="layer-name" style="font-weight: 600; color: #60a5fa;">Seleccionar todos</span>
    `;
    categoryLayers.appendChild(selectAllDiv);
    selectAllCheckbox = selectAllDiv.querySelector('.select-all-checkbox');
  }
  
  // Agregar cada capa
  layers.forEach(layer => {
    const layerItem = document.createElement('div');
    layerItem.className = 'layer-item';
    layerItem.innerHTML = `
      <input type="checkbox" class="layer-checkbox" id="${layer.id}">
      <div class="layer-color" style="background-color: ${layer.color || layer.paint['circle-color'] || '#3b82f6'}"></div>
      <span class="layer-name">${layer.name}</span>
    `;
    
    const checkbox = layerItem.querySelector('.layer-checkbox');
    
    // Toggle visibilidad al hacer clic
    layerItem.addEventListener('click', (e) => {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      
      const visibility = checkbox.checked ? 'visible' : 'none';
      if (map.getLayer(layer.id)) {
        map.setLayoutProperty(layer.id, 'visibility', visibility);
      }
      
      layerItem.classList.toggle('active', checkbox.checked);
      
      // Actualizar estado del "Seleccionar todos" solo si existe
      if (selectAllCheckbox) {
        updateSelectAllState();
      }
    });
    
    categoryLayers.appendChild(layerItem);
  });
  
  // ⭐ NUEVO: Función para actualizar el estado de "Seleccionar todos"
  function updateSelectAllState() {
    if (!selectAllCheckbox) return; // Si no existe, no hacer nada
    
    const allCheckboxes = Array.from(categoryLayers.querySelectorAll('.layer-checkbox:not(.select-all-checkbox)'));
    const allChecked = allCheckboxes.every(cb => cb.checked);
    const someChecked = allCheckboxes.some(cb => cb.checked);
    
    selectAllCheckbox.checked = allChecked;
    selectAllCheckbox.indeterminate = someChecked && !allChecked;
  }
  
  // ⭐ NUEVO: Eventos para "Seleccionar todos" solo si existe
  if (selectAllDiv && selectAllCheckbox) {
  selectAllDiv.addEventListener('click', (e) => {
    if (e.target !== selectAllCheckbox) {
      selectAllCheckbox.checked = !selectAllCheckbox.checked;
    }
    
    const newState = selectAllCheckbox.checked;
    
    // Marcar/desmarcar todas las capas de esta categoría
    const allCheckboxes = categoryLayers.querySelectorAll('.layer-checkbox:not(.select-all-checkbox)');
    allCheckboxes.forEach(checkbox => {
      checkbox.checked = newState;
      const layerItem = checkbox.closest('.layer-item');
      layerItem.classList.toggle('active', newState);
      
      // Aplicar visibilidad en el mapa
      const layerId = checkbox.id;
      const visibility = newState ? 'visible' : 'none';
      if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, 'visibility', visibility);
      }
    });
    
    selectAllDiv.classList.toggle('active', newState);
  });
  
  selectAllCheckbox.addEventListener('change', () => {
    const newState = selectAllCheckbox.checked;
    
    // Marcar/desmarcar todas las capas de esta categoría
    const allCheckboxes = categoryLayers.querySelectorAll('.layer-checkbox:not(.select-all-checkbox)');
    allCheckboxes.forEach(checkbox => {
      checkbox.checked = newState;
      const layerItem = checkbox.closest('.layer-item');
      layerItem.classList.toggle('active', newState);
      
      // Aplicar visibilidad en el mapa
      const layerId = checkbox.id;
      const visibility = newState ? 'visible' : 'none';
      if (map.getLayer(layerId)) {
        map.setLayoutProperty(layerId, 'visibility', visibility);
      }
    });
    
    selectAllDiv.classList.toggle('active', newState);
  });
  } // Cierre del if (selectAllDiv && selectAllCheckbox)
  
  // Toggle expandir/colapsar categoría
  categoryHeader.addEventListener('click', () => {
    categoryHeader.classList.toggle('active');
    categoryLayers.classList.toggle('expanded');
  });
  
  categoryDiv.appendChild(categoryHeader);
  categoryDiv.appendChild(categoryLayers);
  
  return categoryDiv;
}

// ============================================
// INICIALIZAR MAPA
// ============================================

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

// ============================================
// SELECTOR DE ESTILOS DE MAPA
// ============================================

const basemapToggle = document.getElementById('basemapToggle');
const basemapDropdown = document.getElementById('basemapDropdown');

// Toggle del dropdown
basemapToggle.addEventListener('click', () => {
  basemapDropdown.classList.toggle('show');
});

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!e.target.closest('.basemap-selector')) {
    basemapDropdown.classList.remove('show');
  }
});

// Cambiar estilo de mapa
document.querySelectorAll('.basemap-option').forEach(btn => {
  btn.addEventListener('click', function() {
    const newStyle = this.getAttribute('data-style');
    
    // Guardar las capas actuales
    const currentLayers = [];
    
    config.layers.forEach(layer => {
      if (map.getLayer(layer.id)) {
        currentLayers.push({
          id: layer.id,
          visibility: map.getLayoutProperty(layer.id, 'visibility')
        });
      }
    });
    
    // Cambiar el estilo del mapa
    map.setStyle(newStyle);
    
    // Cuando el nuevo estilo cargue, restaurar las capas
    map.once('style.load', () => {
      // NUEVO: Recargar imagen del pin amarillo
      map.loadImage(
        './images/pin-amarillo.png',
        (error, image) => {
          if (error) {
            console.error('Error cargando imagen:', error);
            return;
          }
          map.addImage('sitios-marker', image);
        }
      );
      config.layers.forEach(layer => {
        if (!map.getSource(layer.id)) {
          map.addSource(layer.id, {
            type: 'vector',
            url: `mapbox://${layer.tilesetId}?v=${new Date().getTime()}`
          });
        }
        
        if (!map.getLayer(layer.id)) {
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
          // NUEVO: Configurar pin amarillo para sitios priorizados
          if (layer.id === 'sitios-priorizados') {
            layerConfig.type = 'symbol';
            layerConfig.layout = {
              'icon-image': 'sitios-marker',
              'icon-size': [
                'interpolate',
                ['linear'],
                ['zoom'],
                1, 0.1,
                5, 0.2,
                10, 0.5,
                15, 0.7,
                20, 1
              ],
              'icon-allow-overlap': true,
              'visibility': 'none'
            };
            delete layerConfig.paint;
          }
          
          map.addLayer(layerConfig);
          // NUEVO: Mover sitios priorizados al tope
          if (layer.id === 'sitios-priorizados') {
            map.moveLayer('sitios-priorizados');
          }
          // NUEVO: Tamaño responsivo de puntos con zoom
          if (layer.type === 'circle' && layer.id !== 'sitios-priorizados') {
            map.setPaintProperty(layer.id, 'circle-radius', [
              'interpolate',
              ['linear'],
              ['zoom'],
              1, 0.5,
              5, 1,
              10, 2,
              15, 3,
              20, 4
            ]);
            map.setPaintProperty(layer.id, 'circle-stroke-width', [
              'interpolate',
              ['linear'],
              ['zoom'],
              1, 0,
              5, 0.5,
              10, 1,
              15, 1.5,
              20, 2
            ]);
          }
          
          // Restaurar visibilidad
          const savedLayer = currentLayers.find(l => l.id === layer.id);
          if (savedLayer) {
            map.setLayoutProperty(layer.id, 'visibility', savedLayer.visibility);
          }
        }
      });
    });
    
    // Actualizar botón activo
    document.querySelectorAll('.basemap-option').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Cerrar dropdown
    basemapDropdown.classList.remove('show');
  });
});

// ============================================
// CUANDO EL MAPA CARGUE
// ============================================

map.on('load', () => {
  // Ocultar loading
  document.getElementById('loadingOverlay').classList.add('hidden');
  
  //Pin amarillo para sppc
  map.loadImage(
    './images/pin-amarillo.png',
    (error, image) => {
      if (error) {
        console.error('Error cargando imagen:', error);
        return;
      }
      map.addImage('sitios-marker', image);
    }
  );
  
  // Agregar todas las capas
  config.layers.forEach(layer => {
    // Agregar source
    map.addSource(layer.id, {
      type: 'vector',
      url: `mapbox://${layer.tilesetId}?v=${new Date().getTime()}`
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
    // Icono SPPC como marcador
    if (layer.id === 'sitios-priorizados') {
      layerConfig.type = 'symbol';
      layerConfig.layout = {
        'icon-image': 'sitios-marker', // Ícono de marcador
        'icon-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          1, 0.1,
          5, 0.2,
          10, 0.5,
          15, 0.7,
          20, 1
        ],
        'icon-allow-overlap': true,
        'visibility': 'none'
      };
      delete layerConfig.paint; // Los símbolos no usan paint como los círculos
    }
    
    map.addLayer(layerConfig);
    // Sitios priorizados al incio
    if (layer.id === 'sitios-priorizados') {
      map.moveLayer('sitios-priorizados');
    }
    // Cambiar tamaño punto zoom-out
    if (layer.type === 'circle' && layer.id !== 'sitios-priorizados') {
      map.setPaintProperty(layer.id, 'circle-radius', [
        'interpolate',
        ['linear'],
        ['zoom'],
        1, 0.5,
        5, 1,
        10, 2,
        15, 3,
        20, 4
      ]);
      map.setPaintProperty(layer.id, 'circle-stroke-width', [
        'interpolate',
        ['linear'],
        ['zoom'],
        1, 0,      // Sin borde en zoom muy alejado
        5, 0.5,    // Borde muy delgado
        10, 1,     // Borde normal
        15, 1.5,   // Borde más grueso
        20, 2      // Borde grueso en zoom cercano
      ]);
    
    }
          
    // Cambiar cursor
    map.on('mouseenter', layer.id, () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    
    map.on('mouseleave', layer.id, () => {
      map.getCanvas().style.cursor = '';
    });
  });
  
  // Evento de click global para todas las capas
  map.on('click', (e) => {
    // Cerrar popups existentes primero
    const existingPopups = document.getElementsByClassName('mapboxgl-popup');
    while(existingPopups[0]) {
      existingPopups[0].remove();
    }
    
    // Obtener todas las capas visibles
    const visibleLayers = config.layers
      .filter(layer => map.getLayoutProperty(layer.id, 'visibility') === 'visible')
      .map(layer => layer.id);
    
    if (visibleLayers.length === 0) return;
    
    // Buscar features en todas las capas visibles
    const features = map.queryRenderedFeatures(e.point, {
      layers: visibleLayers
    });
    
    if (features.length > 0) {
      createMultiPopup(features, e.lngLat);
    }
  });
  
  // ⭐ NUEVO: Inicializar filtros
  initializeFilters();
  setupSitiosPriorizadosFilter();
  loadSitiosPriorizadosData();
  
  console.log('Mapa cargado correctamente con', config.layers.length, 'capas');
});

// Manejo de errores
map.on('error', (e) => {
  console.error('Error en el mapa:', e);
});

// ============================================
// FUNCIONES DE POPUP
// ============================================

function createMultiPopup(features, lngLat) {
  let popupHTML = '';
  
  // Header principal con contador si hay múltiples features
  if (features.length > 1) {
    popupHTML += `<div class="popup-main-header">
      ${features.length} elementos en esta ubicación
    </div>`;
  }
  
  // Un solo contenedor con scroll para TODO el contenido
  popupHTML += '<div class="popup-scroll-container">';
  
  features.forEach((feature, index) => {
    // Encontrar la configuración de la capa
    const layer = config.layers.find(l => l.id === feature.layer.id);
    if (!layer) return;
    
    const properties = feature.properties;
    
    // Agregar separador entre features (excepto antes del primero)
    if (index > 0) {
      popupHTML += '<div class="popup-separator"></div>';
    }
    
    // Obtener color de la capa
    let layerColor = '#ffffff';
    if (layer.type === 'circle') layerColor = layer.paint['circle-color'];
    else if (layer.type === 'fill') layerColor = layer.paint['fill-color'];
    else if (layer.type === 'line') layerColor = layer.paint['line-color'];
    
    // Header de cada feature (sin scroll propio)
    popupHTML += `<div class="popup-section-header">
      <span style="color: ${layerColor}; font-size: 16px;">●</span> 
      <span style="margin-left: 8px;">${layer.name}</span>
    </div>`;
    
    // Contenido de la feature
    popupHTML += '<div class="popup-section-content">';
    
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
    
    popupHTML += '</div>'; // Cierra popup-section-content
  });
  
  popupHTML += '</div>'; // Cierra popup-scroll-container
  
  new mapboxgl.Popup({ 
    maxWidth: '340px',
    closeButton: true,
    closeOnClick: false
  })
    .setLngLat(lngLat)
    .setHTML(popupHTML)
    .addTo(map);
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

// ==========================================
// SISTEMA DE FILTROS POR COMUNA 
// ==========================================

// Función auxiliar para normalizar texto (quitar tildes y convertir a minúsculas)
function normalizeText(text) {
    if (!text) return '';
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, ''); // Quita tildes
}

// Lista completa de comunas de Chile
const comunasChile = [
  // REGIÓN DE ARICA Y PARINACOTA
    "Arica", "Camarones", "General Lagos", "Putre",
  
  // REGIÓN DE TARAPACÁ
    "Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte",
  
  // REGIÓN DE ANTOFAGASTA
    "Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", 
    "Sierra Gorda", "Taltal", "Tocopilla",
  
  // REGIÓN DE ATACAMA
    "Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", 
    "Huasco", "Tierra Amarilla", "Vallenar",
  
  // REGIÓN DE COQUIMBO
    "Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", 
    "Los Vilos", "Monte Patria", "Ovalle", "Paiguano", "Punitaqui", "Río Hurtado", 
    "Salamanca", "Vicuña",
  
  // REGIÓN DE VALPARAÍSO
    "Algarrobo", "Cabildo", "Calera", "Calle Larga", "Cartagena", "Casablanca", "Catemu", 
    "Concón", "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", 
    "La Cruz", "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmué", 
    "Panquehue", "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", 
    "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", 
    "Santo Domingo", "Valparaíso", "Villa Alemana", "Viña del Mar", "Zapallar",
  
  // REGIÓN METROPOLITANA
    "Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", 
    "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", 
    "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", 
    "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", 
    "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", 
    "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", 
    "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", 
    "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", 
    "Tiltil", "Vitacura",
  
  // REGIÓN DEL LIBERTADOR GENERAL BERNARDO O'HIGGINS
    "Chépica", "Chimbarongo", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", 
    "La Estrella", "Las Cabras", "Litueche", "Lolol", "Machalí", "Malloa", "Marchihue", 
    "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", 
    "Pichidegua", "Pichilemu", "Placilla", "Pumanque", "Quinta de Tilcoco", "Rancagua", 
    "Rengo", "Requínoa", "San Fernando", "San Vicente", "Santa Cruz",
  
  // REGIÓN DEL MAULE
    "Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", 
    "Hualañé", "Licantén", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", 
    "Pelluhue", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", 
    "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquén", 
    "Villa Alegre", "Yerbas Buenas",
  
  // REGIÓN DE ÑUBLE
    "Bulnes", "Chillán", "Chillán Viejo", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", 
    "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", 
    "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay",
  
  // REGIÓN DEL BIOBÍO
    "Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", 
    "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", 
    "Los Álamos", "Los Ángeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", 
    "Quilaco", "Quilleco", "San Pedro de la Paz", "San Rosendo", "Santa Bárbara", 
    "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel",
  
  // REGIÓN DE LA ARAUCANÍA
    "Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", 
    "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", 
    "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", 
    "Pitrufquén", "Pucón", "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", 
    "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica",
  
  // REGIÓN DE LOS RÍOS
    "Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos", "Mariquina", 
    "Máfil", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia",
  
  // REGIÓN DE LOS LAGOS
    "Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", 
    "Dalcahue", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", 
    "Maullín", "Osorno", "Palena", "Puerto Montt", "Puerto Octay", "Puerto Varas", "Puqueldón", 
    "Purranque", "Puyehue", "Queilén", "Quellón", "Quemchi", "Quinchao", "Río Negro", 
    "San Juan de la Costa", "San Pablo",
  
  // REGIÓN DE AYSÉN
    "Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", 
    "O'Higgins", "Río Ibáñez", "Tortel",
  
  // REGIÓN DE MAGALLANES
    "Antártica", "Cabo de Hornos", "Laguna Blanca", "Natales", "Porvenir", "Primavera", 
    "Punta Arenas", "Río Verde", "San Gregorio", "Timaukel", "Torres del Paine"
].sort();

// Función para obtener el nombre de columna de comuna desde popupFields
function getComunaColumnForLayer(layer) {
    // Si no tiene popupFields, usar 'comuna' por defecto
    if (!layer.popupFields || layer.popupFields.length === 0) {
        return 'comuna';
    }
    // Posibles labels que indican que es un campo de comuna
    const comunaLabels = ['comuna', 'municipio', 'municipality', 'ciudad'];
    // Buscar en popupFields el campo que tiene label "Comuna" o similar
    const comunaField = layer.popupFields.find(fieldObj => {
        if (fieldObj.label) {
            const labelLower = fieldObj.label.toLowerCase();
            return comunaLabels.some(variant => labelLower.includes(variant));
        }
        return false;
    });
    if (comunaField && comunaField.field) {
        return comunaField.field;
    }
    // Fallback: buscar por nombre de campo
    const comunaFieldByName = layer.popupFields.find(fieldObj => {
        if (fieldObj.field) {
            const fieldLower = fieldObj.field.toLowerCase();
            return fieldLower.includes('comuna') || 
                   fieldLower.includes('municipality') || 
                   fieldLower.includes('municipalities') ||
                   fieldLower.includes('nom_com');
        }
        return false;
    });
    if (comunaFieldByName && comunaFieldByName.field) {
        return comunaFieldByName.field;
    }
    // Por defecto usar 'comuna'
    return 'comuna';
}

// Aplicar filtros a las capas del mapa (VERSIÓN COMPATIBLE CON MAPBOX GL JS)
function applyFiltersToComunas() {
    if (!map) {
        console.error('❌ El mapa no está inicializado');
        return;
    }
    const layersToFilter = config.layers.filter(layer => 
        layer.category !== 'Predios'
    );
    console.log(`🔍 Aplicando filtros a ${layersToFilter.length} capas (excluyendo Predios)`);
    if (selectedComunas.length === 0) {
        layersToFilter.forEach(layer => {
            if (map.getLayer(layer.id)) {
                map.setFilter(layer.id, null);
            }
        });
        console.log('✓ Filtros removidos - mostrando todas las features');
        
        // ⭐ NUEVO: Re-aplicar filtros de sitios priorizados si existen
        const hasSitiosFilters = Object.values(sitiosPriorizadosFilter).some(arr => arr.length > 0);
        if (hasSitiosFilters) {
            applySitiosPriorizadosFilters();
        }
        return;
    }
    
    let filteredCount = 0;
    
    layersToFilter.forEach(layer => {
        if (!map.getLayer(layer.id)) {
            return;
        }
        const comunaColumn = getComunaColumnForLayer(layer);
        
        try {
            // Crear variantes de cada comuna (con/sin tildes, mayúsculas/minúsculas)
            const allVariants = [];
            
            selectedComunas.forEach(comuna => {
                // Generar variantes posibles
                const variants = generateComunaVariants(comuna);
                allVariants.push(...variants);
            });
            // Crear filtro con todas las variantes
            const filter = [
                'in',
                ['get', comunaColumn],
                ['literal', allVariants]
            ];
            
            map.setFilter(layer.id, filter);
            filteredCount++;
            console.log(`  ✓ ${layer.name} (columna: ${comunaColumn}, ${allVariants.length} variantes)`);
            
        } catch (error) {
            console.warn(`  ⚠️ Error al filtrar ${layer.name}:`, error.message);
        }
    });
    
    console.log(`✅ Filtros aplicados a ${filteredCount} capas`);
    
    // ⭐ NUEVO: Re-aplicar filtros de sitios priorizados si existen
    const hasSitiosFilters = Object.values(sitiosPriorizadosFilter).some(arr => arr.length > 0);
    if (hasSitiosFilters) {
        applySitiosPriorizadosFilters();
    }
}

// Función auxiliar para generar variantes de una comuna
function generateComunaVariants(comuna) {
    const variants = new Set();
    
    // Variantes de mayúsculas/minúsculas
    variants.add(comuna); // Original
    variants.add(comuna.toLowerCase()); // minúsculas
    variants.add(comuna.toUpperCase()); // MAYÚSCULAS
    variants.add(comuna.charAt(0).toUpperCase() + comuna.slice(1).toLowerCase()); // Capitalizado
    
    // Variantes con/sin tildes
    const withoutAccents = comuna
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    
    variants.add(withoutAccents);
    variants.add(withoutAccents.toLowerCase());
    variants.add(withoutAccents.toUpperCase());
    variants.add(withoutAccents.charAt(0).toUpperCase() + withoutAccents.slice(1).toLowerCase());
    
    // Variantes con tildes en mayúsculas
    const upperWithAccents = comuna.toUpperCase();
    variants.add(upperWithAccents);
    
    return Array.from(variants);
}

// Inicializar filtros cuando el DOM esté listo
function initializeFilters() {
    const searchInput = document.getElementById('comunaSearchInput');
    const dropdown = document.getElementById('comunaDropdown');
    const dropdownContent = document.getElementById('comunaDropdownContent');
    const selectedTagsContainer = document.getElementById('selectedComunasTags');
    const clearSearchBtn = document.getElementById('clearComunaSearch');
    const summaryDiv = document.getElementById('comunaSummary');
    const filterCountSpan = document.getElementById('comunaFilterCount');
    const clearAllBtn = document.getElementById('clearAllComunas');
    const applyBtn = document.getElementById('applyFiltersBtn');
    
    if (!searchInput) {
        console.warn('⚠️ Elementos del filtro no encontrados en el DOM');
        return;
    }
    
    // Función para renderizar el dropdown
    function renderDropdown(filter = '') {
        const filtered = comunasChile.filter(comuna => 
            comuna.toLowerCase().includes(filter.toLowerCase()) &&
            !selectedComunas.includes(comuna)
        );
        
        if (filtered.length === 0) {
            dropdownContent.innerHTML = '<div class="no-results">No se encontraron comunas</div>';
            return;
        }
        
        // Mostrar máximo 50 resultados para mejor performance
        const results = filtered.slice(0, 50).map(comuna => 
            `<div class="dropdown-item" data-comuna="${comuna}">${comuna}</div>`
        ).join('');
        
        if (filtered.length > 50) {
            dropdownContent.innerHTML = results + `<div class="no-results">+${filtered.length - 50} resultados más...</div>`;
        } else {
            dropdownContent.innerHTML = results;
        }
        
        // Event listeners para cada item
        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                selectComuna(item.dataset.comuna);
            });
        });
    }
    
    // Seleccionar una comuna
    function selectComuna(comuna) {
        if (!selectedComunas.includes(comuna)) {
            selectedComunas.push(comuna);
            updateUI();
            updateFilterBadge();
            searchInput.value = '';
            dropdown.classList.remove('visible');
            searchInput.focus();
        }
    }
    
    // Remover una comuna
    function removeComuna(comuna) {
        selectedComunas = selectedComunas.filter(c => c !== comuna);
        updateUI();
        updateFilterBadge();
    }
    
    // Actualizar UI
    function updateUI() {
        // Tags de comunas seleccionadas
        if (selectedComunas.length > 0) {
            selectedTagsContainer.innerHTML = selectedComunas.map(comuna => `
                <div class="comuna-tag">
                    <span>${comuna}</span>
                    <button class="remove-comuna" data-comuna="${comuna}" title="Quitar ${comuna}">×</button>
                </div>
            `).join('');
            
            // Event listeners para remover
            document.querySelectorAll('.remove-comuna').forEach(btn => {
                btn.addEventListener('click', () => {
                    removeComuna(btn.dataset.comuna);
                });
            });
        } else {
            selectedTagsContainer.innerHTML = '';
        }
        
        // Summary
        if (selectedComunas.length > 0) {
            summaryDiv.classList.add('visible');
            const plural = selectedComunas.length === 1 ? 'a' : 's';
            filterCountSpan.textContent = selectedComunas.length;
        } else {
            summaryDiv.classList.remove('visible');
        }
        
        // Clear search button
        if (searchInput.value.length > 0) {
            clearSearchBtn.classList.add('visible');
        } else {
            clearSearchBtn.classList.remove('visible');
        }
    }
    
    // Actualizar badge con número de filtros
    function updateFilterBadge() {
        const badge = document.getElementById('filterBadge');
        if (badge) {
            if (selectedComunas.length > 0) {
                badge.textContent = selectedComunas.length;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }
    }
    
    // Event: Input en búsqueda
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value.length > 0) {
            renderDropdown(value);
            dropdown.classList.add('visible');
        } else {
            dropdown.classList.remove('visible');
        }
        updateUI();
    });
    
    // Event: Focus en input
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.length > 0) {
            renderDropdown(searchInput.value);
            dropdown.classList.add('visible');
        }
    });
    
    // Event: Click fuera del dropdown
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            dropdown.classList.remove('visible');
        }
    });
    
    // Event: Limpiar búsqueda
    clearSearchBtn?.addEventListener('click', () => {
        searchInput.value = '';
        dropdown.classList.remove('visible');
        updateUI();
        searchInput.focus();
    });
    
    // Event: Limpiar todos los filtros
    clearAllBtn?.addEventListener('click', () => {
        selectedComunas = [];
        updateUI();
        updateFilterBadge();
        applyFiltersToComunas(); // Aplicar inmediatamente
    });
    
    // Event: Aplicar filtros
    applyBtn?.addEventListener('click', () => {
        applyFiltersToComunas();
    });
    
    // Tecla Enter para seleccionar primera opción
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (dropdown.classList.contains('visible')) {
                const firstItem = dropdown.querySelector('.dropdown-item');
                if (firstItem) {
                    selectComuna(firstItem.dataset.comuna);
                }
            }
        }
        // Tecla Escape para cerrar dropdown
        if (e.key === 'Escape') {
            dropdown.classList.remove('visible');
            searchInput.blur();
        }
    });
    
    console.log('✅ Sistema de filtros de comunas inicializado correctamente');
}

// Toggle panel de filtros
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleFilterPanel');
    const closeBtn = document.getElementById('closeFilterPanel');
    const panel = document.getElementById('filter-comuna-panel');
    
    toggleBtn?.addEventListener('click', () => {
        panel?.classList.add('open');
    });
    
    closeBtn?.addEventListener('click', () => {
        panel?.classList.remove('open');
    });
});

// ==========================================
// ⭐ NUEVO: SISTEMA DE FILTROS PARA SITIOS PRIORIZADOS
// ==========================================

function loadSitiosPriorizadosData() {
    console.log('🔍 Cargando datos de Sitios Priorizados...');
    
    // Esperar a que la capa esté lista
    const checkLayer = setInterval(() => {
        if (map.getLayer('sitios-priorizados')) {
            clearInterval(checkLayer);
            
            try {
                const features = map.querySourceFeatures('sitios-priorizados', {
                    sourceLayer: 'sitios_priorizados-9y3v4s'
                });
                
                console.log(`📊 Encontradas ${features.length} features`);
                
                const sets = {
                    nombres: new Set(),
                    empresas: new Set(),
                    actividades: new Set(),
                    procesos: new Set(),
                    contaminantes: new Set()
                };
                
                features.forEach(feature => {
                    const props = feature.properties;
                    
                    if (props['nombre sppc']) {
                        sets.nombres.add(props['nombre sppc']);
                    }
                    if (props['nombre empresa o titular']) {
                        sets.empresas.add(props['nombre empresa o titular']);
                    }
                    if (props['act potencial contaminante i']) {
                        sets.actividades.add(props['act potencial contaminante i']);
                    }
                    if (props['id proc indust pot contaminantes i']) {
                        sets.procesos.add(props['id proc indust pot contaminantes i']);
                    }
                    if (props['potenciales contaminantes i']) {
                        sets.contaminantes.add(props['potenciales contaminantes i']);
                    }
                });
                
                sitiosPriorizadosData = {
                    nombres: Array.from(sets.nombres).sort(),
                    empresas: Array.from(sets.empresas).sort(),
                    actividades: Array.from(sets.actividades).sort(),
                    procesos: Array.from(sets.procesos).sort(),
                    contaminantes: Array.from(sets.contaminantes).sort()
                };
                
                console.log('✅ Datos cargados:', {
                    nombres: sitiosPriorizadosData.nombres.length,
                    empresas: sitiosPriorizadosData.empresas.length,
                    actividades: sitiosPriorizadosData.actividades.length,
                    procesos: sitiosPriorizadosData.procesos.length,
                    contaminantes: sitiosPriorizadosData.contaminantes.length
                });
                
                populateSitiosPriorizadosSelects();
                
            } catch (error) {
                console.error('❌ Error cargando datos:', error);
            }
        }
    }, 500);
    
    // Timeout de seguridad
    setTimeout(() => clearInterval(checkLayer), 10000);
}

function setupSitiosPriorizadosFilter() {
    const filterTypes = [
        { id: 'nombre', label: 'nombre SPPC' },
        { id: 'empresa', label: 'empresa/titular' },
        { id: 'actividad', label: 'actividad' },
        { id: 'proceso', label: 'proceso' },
        { id: 'contaminante', label: 'contaminante' }
    ];
    
    filterTypes.forEach(type => {
        const select = document.getElementById(`sitios-${type.id}-select`);
        const search = document.getElementById(`sitios-${type.id}-search`);
        
        if (!select || !search) {
            console.warn(`⚠️ No se encontraron elementos para ${type.id}`);
            return;
        }
        
        search.addEventListener('input', () => filterSitiosOptions(type.id));
        
        select.addEventListener('change', (e) => {
            const value = e.target.value;
            if (value && !sitiosPriorizadosFilter[type.id].includes(value)) {
                sitiosPriorizadosFilter[type.id].push(value);
                updateSelectedSitiosFilters();
                applySitiosPriorizadosFilters();
            }
            e.target.value = '';
            search.value = '';
        });
    });
    
    console.log('✅ Filtro de Sitios Priorizados inicializado');
}

function populateSitiosPriorizadosSelects() {
    const mapping = {
        nombre: { data: sitiosPriorizadosData.nombres, label: 'nombre' },
        empresa: { data: sitiosPriorizadosData.empresas, label: 'empresa' },
        actividad: { data: sitiosPriorizadosData.actividades, label: 'actividad' },
        proceso: { data: sitiosPriorizadosData.procesos, label: 'proceso' },
        contaminante: { data: sitiosPriorizadosData.contaminantes, label: 'contaminante' }
    };
    
    Object.keys(mapping).forEach(type => {
        const select = document.getElementById(`sitios-${type}-select`);
        if (!select) return;
        
        select.innerHTML = `<option value="">Selecciona ${mapping[type].label}</option>`;
        
        mapping[type].data.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            select.appendChild(option);
        });
    });
    
    console.log('✅ Selects poblados con datos');
}

function filterSitiosOptions(type) {
    const search = document.getElementById(`sitios-${type}-search`);
    const select = document.getElementById(`sitios-${type}-select`);
    
    if (!search || !select) return;
    
    const searchText = search.value.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    
    const options = Array.from(select.options);
    
    options.forEach((option, index) => {
        if (index === 0) return; // Skip first option
        
        const optionText = option.textContent.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        
        option.style.display = optionText.includes(searchText) ? '' : 'none';
    });
}

function updateSelectedSitiosFilters() {
    const labels = {
        nombre: 'Nombre SPPC',
        empresa: 'Empresa',
        actividad: 'Actividad',
        proceso: 'Proceso',
        contaminante: 'Contaminante'
    };
    
    const container = document.getElementById('selected-sitios-filters');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.keys(sitiosPriorizadosFilter).forEach(type => {
        sitiosPriorizadosFilter[type].forEach(value => {
            const tag = document.createElement('span');
            tag.className = 'filter-tag';
            tag.innerHTML = `
                <small>${labels[type]}:</small> ${escapeHtml(value)}
                <button onclick="removeSitiosFilter('${type}', '${escapeHtml(value)}')">×</button>
            `;
            container.appendChild(tag);
        });
    });
}

function removeSitiosFilter(type, value) {
    // Decodificar HTML entities
    const decodedValue = unescapeHtml(value);
    sitiosPriorizadosFilter[type] = sitiosPriorizadosFilter[type].filter(v => v !== decodedValue);
    updateSelectedSitiosFilters();
    applySitiosPriorizadosFilters();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function unescapeHtml(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    return div.textContent;
}

function applySitiosPriorizadosFilters() {
    if (!map || !map.getLayer('sitios-priorizados')) {
        console.warn('⚠️ Capa sitios-priorizados no disponible');
        return;
    }
    
    const hasFilters = Object.values(sitiosPriorizadosFilter).some(arr => arr.length > 0);
    
    if (!hasFilters) {
        // Restaurar filtro de comuna si existe
        const currentFilter = map.getFilter('sitios-priorizados');
        if (currentFilter && Array.isArray(currentFilter) && currentFilter[0] === 'in') {
            // Hay un filtro de comuna activo, mantenerlo
            console.log('✅ Filtros de Sitios Priorizados removidos, manteniendo filtro de comuna');
            return;
        }
        map.setFilter('sitios-priorizados', null);
        console.log('✅ Filtros de Sitios Priorizados removidos');
        return;
    }
    
    const filters = [];
    
    // Filtro por nombre
    if (sitiosPriorizadosFilter.nombre.length > 0) {
        const conditions = sitiosPriorizadosFilter.nombre.map(v => 
            ['==', ['get', 'nombre sppc'], v]
        );
        filters.push(conditions.length === 1 ? conditions[0] : ['any', ...conditions]);
    }
    
    // Filtro por empresa
    if (sitiosPriorizadosFilter.empresa.length > 0) {
        const conditions = sitiosPriorizadosFilter.empresa.map(v => 
            ['==', ['get', 'nombre empresa o titular'], v]
        );
        filters.push(conditions.length === 1 ? conditions[0] : ['any', ...conditions]);
    }
    
    // Filtro por actividad
    if (sitiosPriorizadosFilter.actividad.length > 0) {
        const conditions = sitiosPriorizadosFilter.actividad.map(v => 
            ['==', ['get', 'act potencial contaminante i'], v]
        );
        filters.push(conditions.length === 1 ? conditions[0] : ['any', ...conditions]);
    }
    
    // Filtro por proceso
    if (sitiosPriorizadosFilter.proceso.length > 0) {
        const conditions = sitiosPriorizadosFilter.proceso.map(v => 
            ['==', ['get', 'id proc indust pot contaminantes i'], v]
        );
        filters.push(conditions.length === 1 ? conditions[0] : ['any', ...conditions]);
    }
    
    // Filtro por contaminante
    if (sitiosPriorizadosFilter.contaminante.length > 0) {
        const conditions = sitiosPriorizadosFilter.contaminante.map(v => 
            ['==', ['get', 'potenciales contaminantes i'], v]
        );
        filters.push(conditions.length === 1 ? conditions[0] : ['any', ...conditions]);
    }
    
    // Combinar con filtro de comuna si existe
    const currentFilter = map.getFilter('sitios-priorizados');
    const comunaFilter = currentFilter && Array.isArray(currentFilter) && currentFilter[0] === 'in'
        ? currentFilter
        : null;
    
    const allFilters = comunaFilter 
        ? ['all', comunaFilter, ...filters] 
        : filters.length > 1 
            ? ['all', ...filters]
            : filters[0];
    
    map.setFilter('sitios-priorizados', allFilters);
    
    console.log('✅ Filtros aplicados a Sitios Priorizados:', {
        nombre: sitiosPriorizadosFilter.nombre.length,
        empresa: sitiosPriorizadosFilter.empresa.length,
        actividad: sitiosPriorizadosFilter.actividad.length,
        proceso: sitiosPriorizadosFilter.proceso.length,
        contaminante: sitiosPriorizadosFilter.contaminante.length
    });
}
