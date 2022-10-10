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
              p En los apartados anteriores se ha resaltado la importancia en temas relacionados con protocolos, o medidas que aseguren las condiciones de higiene en instalaciones de laboratorio, instrumentación, procesos y prácticas, las cuales permiten una muestra de calidad en el desarrollo biotecnológico, el personal deberá tener claridad en trabajar con seguridad, ser responsable de sus acciones, seguir normas de higiene y ejecutar sus tareas con orden y limpieza. Algunas de las acciones preventivas en cuanto a su proceder y lo aprendido será, realizar prudentemente, el transporte de sustancias, manipular responsablemente instrumentos de vidrio, aparatos eléctricos, realizar el manejo adecuado de temperaturas y hacer una disposición final adecuada de los residuos dada su clasificación. 
              p No tomará decisiones y se debe ceñir a las guías de laboratorios indicada por docentes o expertos encargados de la práctica.
              p En el material complementario se encuentra el documento Prevención de Riesgos en Laboratorios de Investigación y de Prácticas, en donde usted puede relacionar aquellas acciones referidas a la seguridad en el laboratorio. 
    
          .col-lg-5
            .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
              img(src="@/assets/curso/imagen-prevencion-procedimientos-lab.png")
          
          separador
  
        .row.justify-content-around.align-items-center

          #Caracteristicas_fisicas
          .titulo-segundo.color-acento-contenido
            h2 5.1  Acciones de asepsia en laboratorios
  
          .col-lg-6
            figure
              img(src="@/assets/curso/imagen-asepsia-en-laboratorios.png", alt="alt").m-auto
  
          .col-lg-6
            p.p-4 Hacer parte de un objetivo biotecnológico permite una formación íntegra de quien realiza una práctica en un laboratorio de biotecnología vegetal, desde el ingreso al laboratorio debe tener la claridad que la asepsia es parte del protocolo que debe seguir antes, durante y después de las prácticas, el diccionario virtual de la Real Academia Española versión en línea 2014, define textualmente la asepsia como un conjunto de procedimientos destinados a preservar de gérmenes infecciosos el organismo, aplicados principalmente a la esterilización del material quirúrgico.
          separador 
        
        .row.justify-content-around.align-items-center

          #Caracteristicas_fisicas
          .titulo-segundo.color-acento-contenido
            h2 5.2 Desinfección, limpieza personal

          .col-lg-6
            p.p-4 Uno de los inicios en el desarrollo de las prácticas de laboratorios, consiste en la desinfección personal, se da claridad al iniciar este apartado cómo es correcto decir desinfección y no esterilización personal, pues solo se esterilizan objetos o instrumentos mientras se desinfectan objetos o tejidos vivos; dejando claro lo anterior, el practicante antes de iniciar, siempre debe usar bata anti fluidos, gafas, guantes, zapatos cerrados,  cabello recogido, lavarse las manos, así como mantener limpia las mesas antes y después del procedimiento. Usted puede obtener más información sobre esta unidad, consultando el Manual de Normas de Bioseguridad y Riesgos Asociados-Fondecyt-CONICYT, en el capítulo seguridad en el laboratorio que se relaciona en el material complementario.
  
          .col-lg-6
            figure
              img(src="@/assets/curso/imagen-desinfeccion-personal.png", alt="alt").m-auto
  
          separador 
  
        .row.justify-content-around.align-items-center
          
          #Caracteristicas_fisicas
          .titulo-segundo.color-acento-contenido
            h2 5.3  Desinfección de material en laboratorio
          
          p En el caso del material del laboratorio, este no solo se puede y debe desinfectar, sino también esterilizar, puesto que son objetos inanimados. Para llevar a cabo este procedimiento se tienen presente algunas técnicas como: uso de calor en hornos especiales para ello, como se observa en la imagen 61, o con productos químicos, de ésta manera se podrá garantizar que las muestras están libres de microorganismos.

          p Los materiales o instrumentos de laboratorio deberán estar esterilizados antes de las prácticas y así mismo después de ellas.
          
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

        .row.justify-content-around.align-items-center
          
          .col-lg-12
            .cajon.color-acento-botones.cajon-de-texto-desinfeccion-de-material.p-4
              p De esta manera se concluye el componente formativo de biotecnología vegetal.  Recuerde explorar los demás recursos que se encuentran disponibles aquí, para ello diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, material complementario, entre otros.


    
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
