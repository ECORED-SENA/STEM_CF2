<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Ambientes educativos innovadores

    .row.justify-content-center
      .col-lg-12(data-aos='fade-right')
        img(src='@/assets/curso/t4/f1.jpg' alt='Libro y lápices').float-left
      .mt_1_5rem.p-5.fblanco.floatRight.border24.boxShadow.col-lg-10
        p.mb-0 Los ambientes educativos son una herramienta esencial en la adquisición del conocimiento para el estudiante, es un entorno que le permite enfocar ideas y pensamientos, para poder desarrollar las capacidades y aptitudes individuales y de esta manera generar conocimiento; guiados por sus instructores o docentes que a su vez aportan nuevas estrategias de cambio y de transformación para facilitar el aprendizaje.
    .mb-5.clear

    #t_4_1.titulo-segundo
      h2 4.1 Ambientes de aprendizaje multimodales

    p.mb-5 Son ambientes de aprendizaje presenciales que utilizan elementos tecnológicos y recursos multimedia apoyados en el uso de las Tecnologías de la Información y la Comunicación (TIC), en este sentido el aprendiz utiliza los estímulos visuales, auditivos, lectoescritura, apoyados no en mayor medida con un estilo kinestésico.
    .row.justify-content-center.mb-4
      .col-lg-3.col-md-4.col-sm-6.col-8.mb-4
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t4/f2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center(style='background-color: #CEDBEF')
              h4 Visual 
              p Diagramas<br>Gráficas<br>Colores<br>Cuadros<br>Textos escritos
      .col-lg-3.col-md-4.col-sm-6.col-8.mb-4
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t4/f3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center(style='background-color: #CEDBEF')
              h4 Auditivo 
              p Debates<br>Discusiones<br>Audios<br>Música
      .col-lg-3.col-md-4.col-sm-6.col-8.mb-4
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t4/f4.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center(style='background-color: #CEDBEF')
              h4 Lectoescritor
              p Libros - textos<br>Lecturas<br>Toma de notas<br>Ensayos<br>Bibliografía 
      .col-lg-3.col-md-4.col-sm-6.col-8.mb-4
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t4/f5.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center(style='background-color: #CEDBEF')
              h4 Kinestésico 
              p Ejemplos de vida<br>Demostraciones<br>Actividad física<br>Construcciones<br>Juego de roles
    figcaption Fuente: Espinoza-Poves et al. 2019

    Separador
    #t_4_2.titulo-segundo
      h2  4.2 Ambientes de aprendizaje digitales

    .row.align-items-center.mb-5
      .col-lg-7
        p Son ambientes alojados en la red, por medio de plataformas o aplicaciones que proporcionan contenido de aprendizaje con base al desarrollo de un programa curricular, los cuales están elaborados de manera que tanto el estudiante interactúe de forma atemporal o temporal con el instructor o docente que guía la formación, apoyándose en herramientas digitales para administrar el aprendizaje, proponiendo actividades en una secuencia de tiempo y nivel.
        .bg4
          p De acuerdo con Cáceres. (2019) “la educación virtual a través de la sociedad de la información utiliza recursos combinando la investigación, el conocimiento y la innovación, lo cual permite avanzar en el proceso formativo. La virtualización como nueva tendencia educativa fomenta el aprendizaje centrado en actividades donde el protagonista de la formación es el estudiante, el cual de manera simultánea genera cambio de mentalidad, creatividad, autocontrol y disciplina.
          p El Servicio Nacional de Aprendizaje SENA ofrece formación virtual y a distancia como una modalidad de enseñanza basada en el uso de herramientas tecnológicas, que abren la posibi­lidad a los aprendices de desarrollar sus cono­cimientos en un ambiente flexible en el manejo del tiempo y el espacio.
      .col-lg-5
        figure(data-aos='fade-left')
          img(src='@/assets/curso/t4/f6.png' alt='imagen relacionada')

    p.mb-4 En la siguiente figura se observa el <em>banner</em> utilizado en las páginas del SENA para promocionar este tipo de aprendizaje. 

    .col-lg-7.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido
        span <em>Banner</em> SENA
      img(src='@/assets/curso/t4/f7.jpg' alt='imagen relacionada')

    Separador
    #t_4_3.titulo-segundo
      h2 4.3 Ambientes híbridos <em>(Blended Learning)</em>

    .row.align-items-center.mb-5
      .col-lg-5(data-aos='fade-right')
        img(src='@/assets/curso/t4/f8.png' alt='imagen relacionada')
      .col-lg-7
        p Este tipo de ambiente es la combinación de dos tipos de educación, presencial y virtual, en la que los aprendices se reúnen en el aula, cumpliendo un horario para desarrollar actividades de la modalidad, adicionalmente incluyen actividades virtuales que se realizarán de manera asincrónica o sincrónica, permitiendo la flexibilidad en el aprendizaje. 
        p Según Osorio (2010) <span class="fgc">“la expansión del ambiente del aprendizaje, compuesto por actividades educativas se desarrolla en situaciones presenciales, virtuales y autónomas, que se articulan estratégicamente buscando el enriquecimiento del proceso educativo”</span> (p.73) tal como se observa en la siguiente figura:
        
    .col-lg-5.mx-auto.mb-5
      img(src='@/assets/curso/t4/f9.svg', alt='imagen relacionada', data-aos='flip-left').mb-4
      figcaption Nota. Tomado de Osorio (2010).

    Separador
    #t_4_4.titulo-segundo
      h2 4.4 Ambientes móviles <em>(Mobile Learning)</em>

    .row.align-items-center
      .col-lg-7
        .cajon-b.color-secundario.p-4
          p.mb-0 Es un método de enseñanza y aprendizaje práctico, en el que se permite la posibilidad de enseñar y aprender mediante los dispositivos móviles, smartphones, tabletas o equipos electrónicos que cuenten con una conexión a Internet y que soportan las distintas plataformas de aprendizaje. 
        p.px-4 En la práctica se diseña y entrega al usuario una experiencia para adquirir conocimiento en cualquier momento y lugar. Esto le permite al estudiante acceder a una gran cantidad de información en formatos digitales, teniendo una opción diferente a obtenerlos en forma física, dando la posibilidad de tener un acceso más eficiente a la información.
      .col-lg-5(data-aos='fade-left')
        img(src='@/assets/curso/t4/f10.png' alt='imagen relacionada')
  
</template>

<script>
export default {
  name: 'Tema4',
  components: {},
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
