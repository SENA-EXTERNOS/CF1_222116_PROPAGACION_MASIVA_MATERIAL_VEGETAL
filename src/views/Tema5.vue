<template lang="pug">
.curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 5
          h1 Prevención básica en procedimientos de laboratorio
    
        .row.justify-content-around.align-items-center
    
          
          .col-lg-7
            .bloque-texto-mitad-color-izquierda-prevencion-procedimientos-lab.p-4
              p En temas anteriores, se ha resaltado la importancia de los protocolos, o medidas que aseguren las condiciones de higiene en instalaciones de laboratorio, instrumentación, procesos y prácticas, las cuales permiten una muestra de calidad en el desarrollo biotecnológico; el personal deberá tener claridad para trabajar con seguridad, ser responsable de sus acciones, seguir normas de higiene y ejecutar sus tareas con orden y limpieza. Algunas de las acciones preventivas, serán las de realizar prudentemente el transporte de sustancias, manipular responsablemente instrumentos de vidrio, aparatos eléctricos, realizar el manejo adecuado de temperaturas y realizar una disposición final adecuada de los residuos, según su clasificación.
                br
                br
                |En el material complementario, se encuentra el documento Prevención de Riesgos en Laboratorios de Investigación y de Prácticas, en donde puede relacionar, aquellas acciones que se refieren a la seguridad en el laboratorio. 
    
          .col-lg-5
            .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
              img(src="@/assets/curso/imagen-prevencion-procedimientos-lab.png")
          
          separador
  
        .row.justify-content-around.align-items-center

          h3 Acciones de asepsia en laboratorios
  
          .col-lg-6
            figure
              img(src="@/assets/curso/imagen-asepsia-en-laboratorios.png", alt="alt").m-auto
  
          .col-lg-6
            p.p-4 El diccionario virtual de la Real Academia Española, versión en línea 2014, define textualmente la asepsia como un conjunto de procedimientos destinados a preservar de gérmenes infecciosos el organismo, aplicados principalmente a la esterilización del material quirúrgico.
              br
              br
              |Hacer parte de un objetivo biotecnológico, permite una formación íntegra de quien realiza una práctica en un laboratorio de biotecnología vegetal; desde el ingreso al laboratorio, se debe tener claridad que, la asepsia, es parte del protocolo que debe seguir antes, durante, y después de las prácticas.
          separador 
        
        .row.justify-content-around.align-items-center

          h3 Desinfección, limpieza personal

          .col-lg-6
            p.p-4 Uno de los inicios en el desarrollo de las prácticas de laboratorio, consiste en la desinfección personal; se debe tener claridad que es correcto decir desinfección y no esterilización personal, porque solo se esterilizan objetos o instrumentos, mientras que se desinfectan objetos o tejidos vivos; dejando claro lo anterior, antes de iniciar, siempre se debe usar bata antifluidos, gafas, guantes, zapatos cerrados, cabello recogidolavarse las manos, así como también, mantener limpias las mesas antes y después del procedimiento. 
              br
              |Puede obtener más información sobre esta temática, consultando el Manual de Normas de Bioseguridad y Riesgos Asociados-Fondecyt-CONICYT, en el capítulo sobre seguridad en el laboratorio, que se relaciona en el material complementario.
  
          .col-lg-6
            figure
              img(src="@/assets/curso/imagen-desinfeccion-personal.png", alt="alt").m-auto
  
          separador 
  
        .row.justify-content-around.align-items-center
          
          h3  Desinfección de material en laboratorio
          
          p En el caso del material de laboratorio, este no solo se puede y debe desinfectar, sino también esterilizar, puesto que son objetos inanimados. Para llevar a cabo este procedimiento, se tienen presente algunas técnicas como: uso de calor en hornos especiales como se observa en la imagen, o con productos químicos y, de esta manera, se podrá garantizar que las muestras están libres de microorganismos.
            br
            br
            |Los materiales o instrumentos de laboratorio, deberán estar esterilizados antes de las prácticas, y lo mismo después de ellas.

          
          .subtitulo-desinfeccion-de-material
            h4 Autoclave, herramienta de esterilización en laboratorios

          br
          br

          .imagen-fondo-desinfeccion-de-material
            figure
              img(src="@/assets/curso/fondo-desinfeccion-material-lab.png", alt="alt")

        
          br
          .row
            .col-12
              figure
                img(src="@/assets/curso/imagen-autoclave.png", alt="alt").m-auto

        .row.justify-content-around.align-items-cente.mt-5
          
          .col-lg-10
            .cajon.color-acento-botones.p-4(style="background-color: #e9f2d8")
              p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a resolver la actividad didáctica para reforzar los conceptos estudiados en el componente formativo.


    
</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema4',
  components: { Separador },
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
