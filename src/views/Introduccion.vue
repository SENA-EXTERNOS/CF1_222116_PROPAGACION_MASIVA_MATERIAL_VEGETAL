<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info.bloque-texto-color-blanco
      h1 Introducción
    
    .row.justify-content-around.align-items-center

      .col-md.col-lg-7
        
        p.p-1 Apreciado aprendiz, bienvenido a este componente formativo, donde se trabajará en torno a temáticas relacionadas con la implementación de espacios y técnicas en biotecnología vegetal, como aporte al desarrollo agrícola y mejoramiento del sector agroindustrial. Durante este proceso se va a aprender sobre la biotecnología como área interdisciplinar y en laboratorios. También se explica el ambiente de praxis de la biotecnología, seguido de agentes contaminantes y su manejo en prácticas de laboratorio. Finalmente, se describe la prevención básica en procedimientos de laboratorio. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
        
      
      .col-md.col-lg-5
        img(src="@/assets/curso/imagen-introduccion.svg")

    br
    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        //figcaption Video: Leyenda del video
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
