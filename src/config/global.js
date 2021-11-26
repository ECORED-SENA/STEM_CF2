export default {
  global: {
    componenteFormativo: 'Prospectiva de la educación en Colombia',
    descripcionCurso:
      'En el presente componente se plantean temas referentes a la forma en cómo se compone la educación en Colombia, se abordan los distintos bloques educativos de los estudiantes en Colombia. Se definen conceptos del diseño universal de aprendizaje, el cual describe la educación inclusiva, también se tratan temas como el pensamiento de diseño, que ofrecerá una perspectiva de aplicación en la educación. Finalmente, se exponen los diferentes ambientes educativos que se aplican en la actualidad con el apoyo de las distintas herramientas tecnológicas, ofreciendo un ambiente innovador para el entorno educativo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.png'),
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
        titulo: 'Sistema educativo colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Generalidades',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño universal para el aprendizaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Origen',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Definición',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Principios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Pensamiento de diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Metodología',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Fases',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ambientes educativos innovadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Ambientes de aprendizaje multimodales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Ambientes de aprendizaje digitales',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Ambientes híbridos <em>(Blended Learning)</em>',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Ambientes móviles <em>(Mobile Learning)</em>',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
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
  complementario: [
    {
      texto:
        'Cáceres, C. A. (2019). Educación virtual un nuevo desafío. Revista Reto.',
      tipo: 'PDF',
      descarga: 'downloads/Educacion_virtual_un_nuevo_desafio.pdf',
    },
    {
      texto: 'CAST. (2018). Las pautas de UDL.',
      tipo: 'Página web',
      link: 'http://udlguidelines.cast.org',
    },
    {
      texto:
        'Audiovisuales UNED. (2019). DUA. Diseño universal para el aprendizaje – educación inclusiva y modelo pedagógico',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=u8tK8UkoAmM',
    },
    {
      texto: '<em>Design Thinking</em>. (2020) Comunidad online de apoyo.',
      tipo: 'Página web de recursos de apoyo',
      link: 'https://www.designthinking.services/',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente educativo',
      significado:
        'Es un entorno físico en el cual se encuentran los aprendices, reciben información, interactúan y se comunican entre ellos mediante actividades de aprendizaje.',
    },
    {
      termino: 'Diseño',
      significado: 'Actividad creativa innovadora que proyecta objetos útiles.',
    },
    {
      termino: 'Kinestésico',
      significado:
        'prendizaje basado en el procesamiento de la información asociada con los movimientos y sensaciones del cuerpo. ',
    },
    {
      termino: 'Prototipo',
      significado: 'Modelo original y primer ensamblaje de un producto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alba, C. (2012). Aportaciones del diseño universal para el aprendizaje y de los materiales digitales en el logro de la enseñanza accesible. Universidad Complutense de Madrid. ',
    },
    {
      referencia:
        'Alba, C., Sánchez, J. & Zubillaga, A. (2011). Diseño universal para el aprendizaje (DUA) Pautas para su introducción en el currículo. ',
      link: 'https://www.educadua.es/doc/dua/dua_pautas_intro_cv.pdf',
    },
    {
      referencia:
        'Brown, T. (2008). Design Thinking. Harvard Business Review. ',
      link: 'https://hbr.org/2008/06/design-thinking',
    },
    {
      referencia:
        'Cáceres, C. A. (2019). Educación virtual un nuevo desafío. Revista RETO, 6(1), p. 11-19. ',
      link: 'https://doi.org/10.23850/23338059.1896',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2018). La educación en Colombia. DNP. ',
      link:
        'https://www.dnp.gov.co/programas/desarrollo-social/subdireccion-de-educacion/Paginas/subdireccion-de-educacion.aspx',
    },
    {
      referencia:
        'Espinoza-Poves, J., Miranda-Vílchez, W. & Chafloque-Céspedes, R. (2019). Los estilos de aprendizaje Vark en estudiantes universitarios de las escuelas de negocios. Propósitos y Representaciones, 7(2), p. 384-414. ',
      link: 'https://dx.doi.org/10.20511/pyr2019.v7n2.254',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Sistema educativo colombiano. Mineducación. ',
      link:
        'https://www.mineducacion.gov.co/portal/Preescolar-basica-y-media/Sistema-de-educacion-basica-y-media/233839:Sistema-educativo-colombiano',
    },
    {
      referencia:
        'Osorio, L. (2010). Ambientes híbridos de aprendizaje: elementos para su diseño e implementación. Revista Sistemas de la Asociación Colombiana de Ingenieros de Sistemas (Acis), (117), p. 73.',
    },
    {
      referencia:
        'Santiago, R. (2015). Mobile learning: nuevas realidades en el aula. Grupo Océano.',
    },
    {
      referencia:
        'Serrano, M. & Blázquez, P. (2014). Design Thinking. Lidera el presente. Crea el futuro. ESIC Editorial.',
    },
    {
      referencia:
        'Tobón, S. (2005). Formación basada en competencias. Pensamiento complejo, diseño curricular y didáctica. ECOE Ediciones. ',
    },
    {
      referencia:
        'Troncoso, K. (2017). Diseño universal para el Aprendizaje (DUA). Una educación inclusiva y para todos. Educación Escuela Viva. ',
      link:
        'https://centroescuelaviva.wixsite.com/centroescuelaviva/post/__dua',
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
      {
        nombre: 'Iván Mauricio González',
        cargo: 'Instructor',
        centro:
          'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura – Regional Santander',
      },
      {
        nombre: 'María Cristina Hurtado Zúñiga',
        cargo: 'Experta temática',
        centro:
          'Centro de Diseño Tecnológico Industrial (DCTI) – Regional Valle',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja – Regional Tolima',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
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
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
