<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Las nuevas tendencias del panorama educativo están cambiando las formas tradicionales de hacer las cosas, a continuación, verá un video con la información a desarrollar en este componente formativo:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Go3Ak2UFH6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
