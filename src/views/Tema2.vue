<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Diseño universal para el aprendizaje

    img(src='@/assets/curso/t2/f1.jpg' alt='Jóvenes en clase').float-left
    .col-lg-10.boxShadow.border24.mt_1_5rem.p-5.fblanco.floatRight
      p.mb-0 La inclusión en la educación es uno de los puntos de vista en los que a nivel nacional e internacional se hace énfasis cuando se trata de mejorar los currículos académicos para llegar a una población diversa, en aspectos como el cultural, social y laboral. Desde las distintas instituciones del sistema se trabaja en la forma de mejorar o rediseñar los procesos para transformar la metodología de enseñanza de la educación actual, replanteando cómo llegar a todos los habitantes de las distintas poblaciones y con diversas características para hacerlos partícipes de un modelo de educación sin discriminación o exclusiones, generando como resultado la educación inclusiva.
    .mb-5.clear

    #t_2_1.titulo-segundo
      h2 2.1 Origen
    
    p.mb-5 El concepto original se tomó de la arquitectura y se adaptó a la educación como medio para incluir a más actores en este formato:
    .row.justify-content-center.mb-5
      .col-lg-5.col-md-4.fcs.border134.p-5.mx-2
        p.text-center <i class="fas fa-quote-left cac text-big"></i>
        p.texto-blanco.text-center El Diseño Universal para el Aprendizaje (DUA) no es un concepto original del ámbito educativo, sino que surgió en el campo de la arquitectura en la década de 1970 en Estados Unidos. Fue Ron Mace, fundador del Centro para el Diseño Universal (CUD), quien lo usó por primera vez, definiéndolo como el diseño de productos y entornos que cualquier persona pueda utilizar, en la mayor medida posible, sin necesidad de una adaptación posterior destinada a un público específico.
        div.floatRight
          h6 <span class='text-white'>(CUD, 1997).</span> <i class="fas fa-square cac ms-4" style='font-size: 2rem; vertical-align:middle;'></i>
      .col-lg-5.col-md-4.fcs.border234.p-5.mx-2
        p.text-center <i class="fas fa-quote-left cac text-big"></i>
        p.texto-blanco.text-center El concepto del DUA recogía las ideas esenciales del movimiento arquitectónico en auge por aquella época en EE. UU., cuyo objetivo principal era diseñar y construir edificios y espacios públicos pensados desde el principio para atender la variedad de necesidades de acceso, comunicación y uso de los potenciales usuarios.
        div.floatRight
          h6 <span class='text-white'>(Alba et al., 2011).</span> <i class="fas fa-square cac ms-4" style='font-size: 2rem; vertical-align:middle;'></i>

    .row.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/t2/f2.png' alt='Niños en clase')
      .col-lg-6
        p El enfoque DUA fue desarrollado por el Centro de Tecnología Especial Aplicada (CAST) con el propósito de aplicar y desarrollar tecnologías que apoyen el proceso de aprendizaje en personas discapacitadas, mediante el diseño de un currículo en el que se incluya a todos los estudiantes partiendo de la diversidad, de forma que todos participen y aprendan,  es un enfoque flexible desde las necesidades y las capacidades individuales, así mismo, y a partir de las investigaciones sobre el cerebro se identifican tres redes cerebrales que intervienen en el proceso de aprendizaje, teniendo en cuenta la evidencia de la variabilidad interpersonal como se puede ver:

    ImagenInfograficaB.color-secundario.mb-5
      template(v-slot:imagen)
        img(src='@/assets/curso/t2/f3.svg', alt='imagen relacionada')
      .row.align-items-center.fcs.justify-content-center(y="39.5%" x="34.3%" tooltip="tooltip de max 35 caracteres")
        .col-lg-6.texto-blanco
          h4 Redes de conocimiento
          p El <b>qué</b> del aprendizaje. 
          p Especializadas en percibir información y asignarle significado.
          p En la práctica estas redes permiten  reconocer letras, números, símbolos, palabras y objetos, además de otros patrones más complejos como el estilo literario de un escritor y conceptos abstractos como la libertad.
          p Adaptado de: Rose & Meyer, 2002; citado por Alba, 2012
        .col-lg-4
          figure
            img(src='@/assets/curso/t2/f4.svg', alt='imagen relacionada')
      .row.align-items-center.fcs.justify-content-center(y="32.2%" x="47.3%" tooltip="tooltip de max 35 caracteres")
        .col-lg-6.texto-blanco
          h4 Redes estratégicas
          p El <b>cómo</b> del aprendizaje.
          p Especializadas en planificar, ejecutar y monitorizar las tareas motrices y mentales. 
          p En la práctica estas redes permiten a las personas, desde sacar un libro de una mochila hasta diseñar una estructura y la escritura de un comentario de texto.
          p Adaptado de: Rose & Meyer, 2002; citado por Alba, 2012
        .col-lg-4
          figure
            img(src='@/assets/curso/t2/f5.svg', alt='imagen relacionada')
      .row.align-items-center.fcs.justify-content-center(y="51%" x="75.5%" tooltip="tooltip de max 35 caracteres")
        .col-lg-6.texto-blanco
          h4 Redes afectivas
          p El porqué del aprendizaje 
          p Especializadas en asignar significados emocionales a las tareas. Están relacionadas con  la motivación y la implicación en el propio aprendizaje. 
          p En la práctica estas redes están influidas por los intereses de las personas, el estado de ánimo o las experiencias previas.
          p Adaptado de: Rose & Meyer, 2002; citado por Alba, 2012
        .col-lg-4
          figure
            img(src='@/assets/curso/t2/f6.svg', alt='imagen relacionada')

    Separador
    #t_2_2.titulo-segundo
      h2 2.2 Definición

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3
          p.mb-0 El Diseño Universal del Aprendizaje en el ámbito educativo es definido por Alba (2011) como: 
        .col-lg-6
          .bloque-texto-a__texto.p-4
            p.mb-0 “Un enfoque basado en la investigación para el diseño del currículo -es decir, objetivos educativos, métodos, materiales y evaluación- que permite a todas las personas desarrollar conocimientos, habilidades y motivación e implicación con el aprendizaje” (p. 9).
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/t2/f7.svg' alt='imagen relacionada')

    Separador
    #t_2_3.titulo-segundo
      h2 2.3 Principios

    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t2/f8.png' alt='imagen relacionada')
      .col-lg-7
        p La motivación es uno de los puntos de partida esenciales al momento de impartir formación, mediante la aplicación de distintas técnicas de enseñanza aprendizaje se logra mantener atraído al estudiante sobre un tema específico, además se requiere de planteamientos, de acciones o actividades que permitan mantener la concentración del estudiante en su entorno educativo, de forma que el proceso de aprendizaje se dé de forma sutil y amena, mediante acciones en las que el estudiante interactúa consigo mismo y con el proceso de aprendizaje.  
        p Para diseñar un modelo educativo ajustado a la diversidad de la estructura y configuración cerebral de los estudiantes que se manifiesta en los diversos estilos de aprendizaje es necesario contemplar la singularidad de cada alumno. Por otra parte, los medios digitales y su flexibilidad posibilitan la personalización del currículo, siendo parte importante de la aplicación del DUA. 
    .mb-5

      .col-lg-10.mx-auto.bg2.mb-5
        .row.justify-content-center.ofVisible
          .col-lg-6.col-md-4.fcs.border134.desfaseTL.p-5
            p.text-center <i class="fas fa-quote-left cac text-big"></i>
            p.texto-blanco.text-center El CAST desarrolló el marco de implementación del DUA estructurado en tres principios básicos, cada uno de los cuales se desarrolla a través de tres pautas de aplicación y de varias claves o puntos de verificación. Cada principio se corresponde con una de las tres redes cerebrales implicadas en el aprendizaje e indican que es necesario que los docentes ofrezcan al alumnado un amplio rango de opciones para acceder al aprendizaje.
            div.floatRight
              h6 <span class='text-white'>Según lo indica Alba (2011) (p.18 -19).</span> <i class="fas fa-square cac ms-4" style='font-size: 2rem; vertical-align:middle;'></i>
          .col-lg-5.p-5
            figure
              img(src='@/assets/curso/t2/f9.svg' alt='imagen relacionada')

    p.mb-4 Dichos principios son:
    .row.justify-content-center.mb-5
      .col-lg-4.ms-auto.me-0(style='background-color:#BED0ED')
        .p-4
          img(src='@/assets/curso/t2/f10.svg' alt='icono relacionado').w73px.mb-4
          h4 Principio I.
          h5 Proporcionar múltiples formas de representación
          p Se fundamenta en las diferencias que tienen los estudiantes en la forma de comprensión y percepción de la información. Los estudiantes con discapacidades requieren formas diferentes de presentarle la información para acceder a los contenidos, de acuerdo con sus patrones individuales. Es necesario proporcionar variedad de opciones de acceso, para que el alumno utilice las que se adaptan y responden a sus capacidades. 
      .col-lg-4.mx-0(style='background-color:#CEDBEF')
        .p-4
          img(src='@/assets/curso/t2/f10.svg' alt='icono relacionado').w73px.mb-4
          h4 Principio II.
          h5 Proporcionar múltiples medios de acción y expresión
          p Se relaciona con la forma de interacción que tiene el estudiante con la información, sus conocimientos y la forma de expresar el aprendizaje obtenido, (el cómo ocurre el aprendizaje), para ello es necesario que existan opciones para que cada alumno pueda aprender y expresar su aprendizaje.
      .col-lg-4.me-auto.ms-0(style='background-color:#BED0ED')
        .p-4
          img(src='@/assets/curso/t2/f10.svg' alt='icono relacionado').w73px.mb-4
          h4 Principio III. 
          h5 Proporcionar múltiples formas de implicación
          p Este principio se basa en la activación de los aspectos afectivos a partir de la existencia de una red cerebral que interviene en el aprendizaje y explica el porqué de este. También considera la motivación como un factor que activa el aprendizaje en la persona, de forma que se debe proporcionar opciones para implicarse en el aprendizaje, de acuerdo con las capacidades y preferencias.
    p.mb-5 A su vez, de estos principios surgen las pautas para la práctica de las propuestas del CAST, tal como se puede observar:
    #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
      .carousel-inner
        .carousel-item.active
          .row.justify-content-center
            .col-lg-1.col-md-2
            .col-lg-10.col-md-8.col-auto
              .row.align-items-center.justify-content-center
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t2/f11.svg' alt='imagen relacionada')
                .col-8.col-sm-8.col-md-7
                  h4 Pautas Principio I: 
                  ul.lista-ul.ms-4
                    li 
                      i.fas.fa-robot.cp.me-4
                      | Proporcionar diferentes opciones relacionadas con la percepción de la información (personalización, información auditiva, visual o táctil). 
                    li 
                      i.fas.fa-robot.cp.me-4
                      | Proporcionar múltiples opciones para el lenguaje y los símbolos.
                    li 
                      i.fas.fa-robot.cp.me-4
                      | Proporcionar opciones que faciliten la comprensión, como pueden ser la activación de los conocimientos previos o destacar las ideas principales.
            .col-lg-1.col-md-2
        .carousel-item
          .row.justify-content-center
            .col-lg-1.col-md-2
            .col-lg-10.col-md-8.col-auto
              .row.align-items-center.justify-content-center
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t2/f12.svg' alt='imagen relacionada')
                .col-8.col-sm-8.col-md-7
                  h4 Pautas Principio II: 
                  ul.lista-ul.ms-4
                    li 
                      i.fas.fa-robot.cp.me-4
                      | Proporcionar múltiples medios físicos de acción, diferentes opciones para que el estudiante se exprese o elabore sus trabajos y los pueda exponer.
                    li 
                      i.fas.fa-robot.cp.me-4
                      | Dar al estudiante diferentes opciones y apoyos para llevar a cabo el proceso de la tarea a realizar o del aprendizaje.
            .col-lg-1.col-md-2
        .carousel-item
          .row.justify-content-center
            .col-lg-1.col-md-2
            .col-lg-10.col-md-8.col-auto
              .row.align-items-center.justify-content-center
                .col-lg-4.col-md-3
                  figure
                    img(src='@/assets/curso/t2/f13.svg' alt='imagen relacionada')
                .col-8.col-sm-8.col-md-7
                  h4 Pautas Principio III: 
                  ul.lista-ul.ms-4
                    li 
                      i.fas.fa-robot.cp.me-4
                      | Proporcionar diferentes opciones para captar el interés del estudiante con relación al aprendizaje a lograr, para que logre mantener el esfuerzo y persista en la tarea y para autorregularse en el desempeño de la misma. 
                    li 
                      i.fas.fa-robot.cp.me-4
                      | Promover expectativas y creencias en relación con la motivación.
            .col-lg-1.col-md-2
      button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true').align-items-center
        span.visually-hidden Previous
      button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.visually-hidden Next

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
