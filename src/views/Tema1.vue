<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Biotecnología como área interdisciplinar

    .row.justify-content-around.align-items-center
          .col-md.col-lg-8
            .cajon.color-primario.p-4
              p.p-4 Para iniciar el aprendizaje sobre propagación de material vegetal <em>in vitro</em>, debe conocer las bases teóricas de la biotecnología, la cual es un referente de las ciencias que involucra un gran número de disciplinas o áreas temáticas para desarrollar su contenido, como lo es la ingeniería genética y la microbiología, así se convierte la biotecnología en una ciencia que ha revolucionado al mundo con sus prácticas y que ha sido una herramienta de las compañías multinacionales para generar grandes beneficios, y quizá también problemas a la humanidad, tales como una mayor deforestación por la agricultura intensiva 
                span.text-bold (Espinoza, 2018).
            br
            p La participación de la microbiología en desarrollos biotecnológicos resulta indispensable, pues es a partir de ésta que se obtiene la información del microorganismo que se pretende utilizar en determinado proceso; la microbiología, unida a la ingeniería genética, da origen a integraciones que permiten determinar las características que presenta cada tipo de biotecnología como lo son la biotecnología animal, la vegetal, la forense, la médica, entre otras; por consiguiente, la biotecnología se clasifica por colores, dependiendo de sus aplicaciones y líneas de trabajo más representativas.
            
          
          .col-md.col-lg-4
            .tarjeta.tarjeta--blanca
              img(data-aos="fade-left")(src="@/assets/curso/imagen-intro-tema1.svg")
          separador
        

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      #Tipos_de_biotecnologia
      .titulo-segundo.color-acento-contenido
        h2 1.1 Tipos de biotecnología 
              
      figure
        img(src='@/assets/curso/fondo-tipos-biotecnologia.png', alt='Texto que describa la imagen').imagen-fondo-tipos-bio

        p.introduccion-tipos-biotecnologia De acuerdo con los saberes mencionados que integra la biotecnología y la aplicación a la cual se dirige, esta se encuentra determinada por una coloración específica.
        
        .row
          .col-sm-3.col-lg-2.mb-2.mb-lg-0
            .tarjeta--boton.tarjeta--boton-1.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/imagen1-tipos-biotecnologia.png', alt='Texto que describa la imagen')

              //h3.text-center Intuition important
              p.text-small.text-tarjeta--boton-fondo-tipos-bio.bloque-texto-color-blanco #[strong Roja,] si la biotecnología aporta al desarrollo en la medicina.
              br

          .col-sm-3.col-lg-2.mb-2.mb-lg-0
            .tarjeta--boton.tarjeta--boton-2.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/imagen2-tipos-biotecnologia.png', alt='Texto que describa la imagen')

              //h3.text-center Intuition important
              p.text-small.text-tarjeta--boton-fondo-tipos-bio #[strong Blanca,] para todo el desarrollo industrial.
              br
              br
              

          .col-sm-3.col-lg-2.mb-2.mb-lg-0
            .tarjeta--boton.tarjeta--boton-3.text-white--hover.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/imagen3-tipos-biotecnologia.png', alt='Texto que describa la imagen')

              //h3.text-center Intuition important
              p.text-small.text-tarjeta--boton-fondo-tipos-bio.bloque-texto-color-blanco #[strong Verde,] para procesos agrícolas.
              br
              br
              

          .col-sm-3.col-lg-2.mb-2.mb-lg-0
            .tarjeta--boton.tarjeta--boton-4.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/imagen4-tipos-biotecnologia.png', alt='Texto que describa la imagen')

              //h3.text-center Intuition important
              p.text-small.text-tarjeta--boton-fondo-tipos-bio.bloque-texto-color-blanco #[strong Azul,] para todos aquellos procedimientos que tienen que ver con la vida marina.
              br
          
          .col-sm-3.col-lg-2.mb-2.mb-lg-0
            .tarjeta--boton.tarjeta--boton-5.p-4
              .row.justify-content-center.mb-3
                .col-10
                  figure
                    img(src='@/assets/curso/imagen5-tipos-biotecnologia.png', alt='Texto que describa la imagen')

              //h3.text-center Intuition important
              p.text-small.text-tarjeta--boton-fondo-tipos-bio #[strong Gris,] hace parte del trabajo biotecnológico en biorremediación de ecosistemas.  
              
        br
        br
        br
        br
        br
        .bloque-texto-destacado-tipos-bio
          .bloque-texto-g.color-secundario.texto-destacado-tipos-bio.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/imagen-texto-destacado-tipos-bio.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 En este orden de ideas, se reconoce la relación de la biotecnología vegetal con la clasificación de color verde en procesos agrícolas, pues de esta manera se puede comprender los motivos que generan investigación como la protección en cultivos, el mejoramiento de características nutricionales y los rendimientos en la producción. A continuación se describen detalladamente los principales aspectos de la biotecnología vegetal.
        separador

  .container.tarjeta.tarjeta--blanca.p-4.mb-5

        #Biotecnologia_vegetal_y_cultivo_de_plantas_in_vitro
        .titulo-segundo.color-acento-contenido
          h2 1.2 Biotecnología vegetal y cultivo de plantas <em>in vitro</em>

        .row.justify-content-around.align-items-center
          
          .col-lg-7
            
            .bloque-texto-color-rojo.p-1
              p.bloque-texto-mitad-color-izquierda.p-4 A escala mundial, el recurso vegetal es históricamente mejorado en aspectos de fenotipo y genotipo en búsqueda de adaptaciones al medio ambiente, o a las disposiciones que demanda la alimentación. En la actualidad, esto se logra con la aplicación de la biotecnología vegetal, la cual aporta positivamente al sector agrícola permitiendo el control de variables ambientales, en busca de cualidades genéticas de una manera más precisa.
            p A través del tiempo, la biotecnología ha tenido importantes desarrollos como se explica a continuación.
            p Con un recorrido de tiempo importante desde el uso de los tejidos vegetales, la biotecnología vegetal implementa el método del cultivo de plantas <em>in vitro</em>, y fue a partir de la evolución del conocimiento, que en el pasado permitió reproducir de manera asexual una especie vegetal, que hoy en día, bajo la manipulación de tejidos vegetales diferenciados, se logra obtener plantas iguales a aquellas que presentan sus mejores expresiones fenotípicas, y aún más, bajo el uso de ésta técnica se pueden articular tratamientos fisiológicos en su medio de cultivo para condiciones controladas de crecimiento.  
          .col-lg-5
            .tarjeta.tarjeta--blanca.text-center.p-3
              img(src="@/assets/curso/imagen-1.2-biotecnologia-vegetal.png")
              //(data-aos="fade-right")
        br

        figure.imagen-de-fondo-linea-de-tiempo
          img(src='@/assets/curso/imagen-fondo-linea-de-tiempo.png', alt='Texto que describa la imagen')

        //Linea de tiempo vertical
        .row
          .col-12
            LineaTiempoE.color-acento-contenido.mb-5
              .row(titulo="10 000 a. C.")
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(data-aos="flip-right").imagen-linea-de-tiempo.img200(src='@/assets/curso/imagen1-linea-de-tiempo-vertical.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  //h4 Declaración Universal de los Derechos Humanos (DUDH) de la ONU
                  p.texto-linea-de-tiempo-1 Para llegar a lo que hoy la biotecnología vegetal desarrolla, recuerde que en el paso del tiempo se conoce a la agricultura como una actividad de hace más de 10.000 a.C. Que está relacionada por completo a la alimentación no solamente humana, y desde entonces empieza a registrar eventos de cambio.
              .row(titulo="8 000 a. C.")
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(data-aos="flip-right").img200(src='@/assets/curso/imagen2-linea-de-tiempo-vertical.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  //h4 Convenio de 1983 de la Organización Internacional del Trabajo (OIT)
                  p.texto-linea-de-tiempo Posteriormente, siguiendo la ruta del tiempo, en el año 8 000 a.C., se lleva a cabo la selección de las semillas de los mejores fenotipos con las características idóneas.
              .row(titulo="1 700 d. C.")
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(data-aos="flip-right").img200(src='@/assets/curso/imagen3-linea-de-tiempo-vertical.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  //h4 Convención sobre los Derechos de las Personas con Discapacidad 
                  p.texto-linea-de-tiempo-3 Más cercano en el tiempo, años 1.700 d. C., se conocieron avances que promovieron los cruces genéticos a partir de la polinización cruzada.
              .row(titulo="1 900 d. C.")
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(data-aos="flip-right").img200(src='@/assets/curso/imagen4-linea-de-tiempo-vertical.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  //h4 Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas
                  p.texto-linea-de-tiempo Posteriormente, en los años 1 900 d. C., comienza a darse el uso de los tejidos vegetales.
              .row(titulo="1980 d. C.")
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(data-aos="flip-right").img200(src='@/assets/curso/imagen5-linea-de-tiempo-vertical.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  //h4 Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas
                  p.texto-linea-de-tiempo En 1980 d. C., a pasos acelerados, la ingeniería genética presenta la modificación de los genes. 
              .row(titulo="Siglo XXI.")
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(data-aos="flip-right").img200(src='@/assets/curso/imagen6-linea-de-tiempo-vertical.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  //h4 Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas
                  p.texto-linea-de-tiempo Hoy, siglo XXI, gracias a todos estos eventos, otros procesos se han venido innovando a través de la biotecnología vegetal, como el cultivo de plantas <em>in vitro, la transgénesis</em> entre otras. Uno de los aspectos en los que la biotecnología ha incursionado en los laboratorios;  Veamos…
                            
        



</template>

<script>
import Muestras from '../components/Muestras'
import Separador from 'ecored-base-pkg/src/components/Separador.vue' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras,
    Separador,
  },
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
