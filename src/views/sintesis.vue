<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  //(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-titulo-sexto
      h4.texto-titulo-sintesis Propagación masiva de material vegetal.
      p.texto-titulo-sintesis Síntesis: Biotecnología vegetal.

    br

    p A continuación, usted podrá hacer un recorrido por conceptos y temas que corresponden al desarrollo de la biotecnología vegetal.
    
    br

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/imagen-sintesis-cf1.png", alt="alt").imagen-sintesis
      .col-auto
        
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis-cf1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
