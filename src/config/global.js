export default {
  global: {
    componenteFormativo: 'Biotecnología vegetal',
    descripcionCurso:
      'En este proceso podrá reconocer y desarrollar la biotecnología vegetal a través del reconocimiento de la  utilización de organismos vivos mediante la manipulación de plantas in vitro, profundizar sobre las implicaciones en el mejoramiento del recurso vegetal para la productividad agrícola, mientras articula los conocimientos sobre equipamiento, medidas de bioseguridad y manejo de residuos en laboratorios.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Biotecnología como área interdisciplinar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de biotecnología',
            hash: 'Tipos_de_biotecnologia',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Biotecnología vegetal y cultivo de plantas in vitro',
            hash: 'Biotecnologia_vegetal_y_cultivo_de_plantas_in_vitro',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Bioseguridad en laboratorios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Niveles, riesgos y seguridad en laboratorios',
            hash: 'Niveles_riesgos_y_seguridad_en_laboratorios',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación de sustancias en laboratorios',
            hash: 'Clasificacion_de_sustancias_en_laboratorios',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ambiente de Praxis en Biotecnología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Laboratorio de biotecnología Vegetal',
            hash: 'Laboratorio_de_biotecnologia_Vegetal',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características físicas',
            hash: 'Caracteristicas_fisicas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Equipamiento y materiales básicos en laboratorios',
            hash: 'Equipamiento_y_materiales_basicos_en_laboratorios',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Agentes contaminantes y su manejo en prácticas de laboratorios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Contaminación cruzada',
            hash: 'Contaminacion_cruzada',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Residuos y tipos de residuos',
            hash: 'Residuos_y_tipos_de_residuos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Disposición adecuada de residuos en laboratorios',
            hash: 'Disposicion_adecuada_de_residuos_en_laboratorios',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Prevención básica en procedimientos de laboratorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Acciones de asepsia en laboratorios',
            hash: 'Acciones_de_asepsia_en_laboratorios',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Desinfección, limpieza personal',
            hash: 'Desinfeccion_limpieza_personal',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Desinfección de material en laboratorio',
            hash: 'Desinfeccion_de_material_en_laboratorio',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Espinoza, E. F. (2018). Biotecnología para la agricultura moderna. Ciencia 69, (4) p1-6.',
      //link:
      //'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
    {
      referencia:
        'Ley 1333 de 2009, Por la cual se establece el procedimiento sancionatorio ambiental y se dictan otras disposiciones. 21 julio de 2009. D.O.No 47.417. Artículo 4.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1333_2009.html',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, Bogotá, (octubre de 2020) Lineamientos generales de la bioseguridad y la biocontención para los laboratorios de la red Nacional de laboratorios.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/VSP/psps03-lineamiento-bioseguridad-red-nal-lab.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud.(2005).Manual de Bioseguridad en el Laboratorio.3a ed.',
      link: 'https://apps.who.int/iris/handle/10665/43255',
    },
    {
      referencia:
        'Real academia española. (2014). Diccionario de la lengua española, 23aed',
      //link:
      //  'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728',
    },
  ],
  glosario: [
    {
      termino: 'Aclimatación',
      significado:
        'Adaptación a las condiciones climáticas propias de un ambiente natural.',
    },
    {
      termino: 'Asepsia',
      significado:
        'Procedimientos que tienen por objeto impedir la penetración de gérmenes en el sitio que no los contenga.',
    },
    {
      termino: 'Biotecnología',
      significado:
        'Es el uso de técnicas y procesos de ingeniería genética en la manipulación de organismos vivos.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Recopilación de normas y protocolos referidos a la prevención y acciones de protección ante riesgos en laboratorios.',
    },
    {
      termino: 'Explante',
      significado:
        'Conjunto de células somáticas que integran un tejido, para cultivo en medios artificiales.',
    },
    {
      termino: 'Fenotipo',
      significado:
        'Es la expresión de los genes en los seres vivos, a través de características físicas observables.',
    },
    {
      termino: 'in vitro',
      significado:
        'Hace referencia a ¨en vidrio¨ utilizados en técnicas de propagación.',
    },
    {
      termino: 'Manipulación',
      significado: 'Acción de usar elementos.',
    },
    {
      termino: 'Micropropagación',
      significado:
        'Técnica de reproducción asexual a través de extracción de tejidos, para lograr cantidades.',
    },
    {
      termino: 'Patógeno',
      significado: 'Agente causante de una enfermedad.',
    },
    {
      termino: 'Residuo',
      significado:
        'Materia inservible que resulta de la descomposición o destrucción de una cosa.',
    },
  ],
  complementario: [
    {
      tema: 'Bioseguridad en laboratorios.',
      referencia:
        'Universidad Pública de Navarra (2017). Manual de uso de productos químicos.',
      tipo: 'Manual',
      link:
        'http://www.unavarra.es/digitalAssets/146/146686_100000Manual-de-uso-de-productos-quimicos.pdf',
    },
    {
      tema: 'Clasificación de sustancias en laboratorios',
      referencia:
        'Manual de uso de Productos Químicos. Universidad Pública de Navarra. PDF.',
      tipo: 'Manual',
      link:
        'http://www.unavarra.es/digitalAssets/146/146686_100000Manual-de-uso-de-productos-quimicos.pdf',
    },
    {
      tema: 'Desinfección, limpieza personal',
      referencia:
        'Asociados-Fondecyt-CONICYT.(2018) Manual de Normas de Bioseguridad y Riesgos.',
      tipo: 'Manual',
      link:
        'https://www.conicyt.cl/fondecyt/files/2018/06/Manual-_Bioseguridad-_junio_2018.pdf',
    },
    {
      tema: 'Prevención básica en procedimientos de laboratorio',
      referencia:
        'Universidad de las Islas Baleares.(2016) Prevención de Riesgos en Laboratorios de Investigación y de Prácticas.',
      tipo: 'Documento',
      link:
        'https://prevencio.uib.cat/digitalAssets/192/192010_ficha-laboratorios.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
