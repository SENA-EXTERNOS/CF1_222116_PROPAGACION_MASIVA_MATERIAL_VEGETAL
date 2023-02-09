<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Ambiente de praxis en biotecnología

      .row.justify-content-around.align-items-center

      
        .col-lg-7
          .bloque-texto-mitad-color-izquierda-ambiente-praxis.p-1
            p.p-4 Los lugares específicos para realizar proyectos biotecnológicos, disponen de un escenario completo para el desarrollo de sus prácticas; es por eso que, dependiendo del tipo de biotecnología para el equipamiento del laboratorio, las condiciones de asepsia siempre son programadas y permanentes, se pueden manipular condiciones como la luz, la temperatura, la humedad entre otras y, en algunos casos, el lugar se verá relacionado o integrado con otros espacios como invernaderos, en donde se llevará a cabo la fase de aclimatación del material vegetal, si corresponde.
              br
              br
              |A continuación, se describen los principales aspectos del laboratorio de biotecnología vegetal.

        .col-lg-5
          .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
            img(src="@/assets/curso/imagen-ambiente-de-praxis-bio.png")
      
      separador

      .row.tarjeta.tarjeta--blanca.justify-content-around.align-items-center

        h3 Laboratorio de biotecnología Vegetal
      

              
        .col-lg-5
          .bloque-texto-mitad-color-izquierda-lab-biotecnologia-vegetal.p-1
            p.p-2 Es un lugar destinado, indicado e idóneo, para cumplir con un propósito; se encuentra equipado de tecnología, de material biológico como tejidos vegetales, y del equipo humano capacitado en diferentes especialidades, para desarrollar cada una de las actividades. En el laboratorio de biotecnología vegetal, se desarrollan técnicas experimentales en el cultivo de tejidos vegetales y se utilizan el mejoramiento genético y las herramientas, para la multiplicación o propagación de plantas in vitro, teniendo en cuenta todos los protocolos de seguridad, previamente establecidos para su cuidado, junto con los conocimientos requeridos para el desarrollo de las técnicas.

        .col-lg-7
          .tarjeta.tarjeta--blanca.p-3
            img(src="@/assets/curso/imagen-laboratorio-biotecnologia-vegetal.png")
      
      separador

      .row.tarjeta.tarjeta--blanca.p-2.p-md-3
        h3 Características físicas
        
        p.mb-5(data-aos='fade-right') Lo invitamos a ver el siguiente video, donde conocerá las características físicas del laboratorio de biotecnología vegetal.

        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          //figcaption Video: Leyenda del video

      separador

      .row.justify-content-around.align-items-center
        h3 Equipamiento y materiales básicos en laboratorios
      
        .col-lg-5
            p.p-4 Una vez reconocida la importancia del laboratorio dentro de las prácticas biotecnológicas, es fundamental contar con la instrumentación y las herramientas necesarias para concretar el proceso. También, se hace indispensable estar a la vanguardia en instrumentación y actualización de procedimientos, que colaboren con la integración de áreas afines con la biología vegetal como, por ejemplo, las matemáticas en el uso y conversión de unidades de medida, o la química, en la composición de sustancias, entre otras.
            p.p-4 Recopilación de materiales usados en laboratorios de biotecnología vegetal.

        .col-lg-7
          .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
            img(src="@/assets/curso/imagen-equipamiento-y-materiales-basicos-en-laboratorios.png")
      
      .tarjeta--blanca.justify-content-center.mb-5
      
        AcordionA(tipo="b" clase-tarjeta="tarjeta").tarjeta.color-fondo-reactivos-o-insumos
        
      
        
          .row(titulo="Reactivos o insumos químicos:")
                .imagen-fondo-reactivos-o-insumos
                  figure  
                  img(src="@/assets/curso/imagen-fondo-reactivos-o-insumos.png")

                .col-md-3.espacio-col-reactivos-o-insumos-1

                  ul.lista-ul--color.lista-ul--separador

                        li      
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-hormonas.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Hormonas
                              
                              //p Técnicas Microbiológicas Apropiadas - TMA y ropa protectora, señal de riesgo biológico.

                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-reguladores-de-crecimiento.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Reguladores de crecimiento
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.                  

                  
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-azucares.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Azúcares
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.                  


                
                .col-md-3

                  ul.lista-ul--color.lista-ul--separador
                        
                        li
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-agentes-gelatinizantes.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Agentes gelatinizantes
                              //p Técnicas Microbiológicas Apropiadas - TMA y ropa protectora, señal de riesgo biológico.

                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-acidos-y-bases.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Ácidos y bases
                              
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.

                        
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-reguladores-osmoticos.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Reguladores osmóticos
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.

                .col-md-3.espacio-col-reactivos-o-insumos-3
                      
                    ul.lista-ul--color.lista-ul--separador
                            
                            li
                            li
                              .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                                .col-2
                                  img(src="@/assets/curso/viñeta-sales-minerales.svg", alt="alt").img100.vineta-hormonas
                                .col-8
                                  h5.texto-vineta-reactivos-o-insumos Sales minerales
                                  
                                  //p Técnicas Microbiológicas Apropiadas - TMA y ropa protectora, señal de riesgo biológico.
      
                            li
                              .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                                .col-2
                                  img(src="@/assets/curso/viñeta-vitaminas.svg", alt="alt").img100.vineta-hormonas
                                .col-8
                                  h5.texto-vineta-reactivos-o-insumos Vitaminas
                                  
                                  //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.
                          
                            li
                              .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                                .col-2
                                  img(src="@/assets/curso/viñeta-antibioticos.svg", alt="alt").img100.vineta-hormonas
                                .col-8
                                  h5.texto-vineta-reactivos-o-insumos Antibióticos
                                  //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.

          
          
          .row(titulo="Equipos electrónicos o manuales:")

                

                .col-md-3.espacio-col-reactivos-o-insumos-1

                  ul.lista-ul--color.lista-ul--separador

                        li      
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .imagen-fondo-reactivos-o-insumos
                              figure  
                                img(src="@/assets/curso/imagen-fondo-reactivos-o-insumos.png")
                            .col-2
                              img(src="@/assets/curso/viñeta-micropipetas.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Micropipetas
                              
                              //p Técnicas Microbiológicas Apropiadas - TMA y ropa protectora, señal de riesgo biológico.

                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-microscopio.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Microscopio 
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.                  

                  
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-aire-acondicionado.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Aire acondicionado
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.

                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-estufa-de-secado.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Estufa de secado
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.                                    
                        
                        
                .col-md-3

                  ul.lista-ul--color.lista-ul--separador
                        
                        li
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-balanzas.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Balanzas
                              //p Técnicas Microbiológicas Apropiadas - TMA y ropa protectora, señal de riesgo biológico.

                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-agitador-orbital.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Agitador orbital
                              
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.

                        
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-autoclave.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Autoclave
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.

                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-medidor-de-ph.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Medidor de pH
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.

                .col-md-3.espacio-col-reactivos-o-insumos-3
                      
                    ul.lista-ul--color.lista-ul--separador
                            
                            li
                            li
                              .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                                .col-2
                                  img(src="@/assets/curso/viñeta-termometro.svg", alt="alt").img100.vineta-hormonas
                                .col-8
                                  h5.texto-vineta-reactivos-o-insumos Termómetro
                                  
                                  //p Técnicas Microbiológicas Apropiadas - TMA y ropa protectora, señal de riesgo biológico.
      
                            li
                              .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                                .col-2
                                  img(src="@/assets/curso/viñeta-medidor-de-humedad-relativa.svg", alt="alt").img100.vineta-hormonas
                                .col-8
                                  h5.texto-vineta-reactivos-o-insumos Medidor de humedad relativa
                                  
                                  //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.
                          
                            li
                              .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                                .col-2
                                  img(src="@/assets/curso/viñeta-microondas.svg", alt="alt").img100.vineta-hormonas
                                .col-8
                                  h5.texto-vineta-reactivos-o-insumos Horno microondas
                                  //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.

                            li
                              .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                                .col-2
                                  img(src="@/assets/curso/viñeta-plato-giratorio.svg", alt="alt").img100.vineta-hormonas
                                .col-8
                                  h5.texto-vineta-reactivos-o-insumos Plato giratorio
                                  //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.




          .row(titulo="Instrumentos:")

            .row(titulo="Reactivos o insumos químicos:")
                .imagen-fondo-reactivos-o-insumos
                  figure  
                  img(src="@/assets/curso/imagen-fondo-reactivos-o-insumos.png")

                .col-md-3.espacio-col-reactivos-o-insumos-1

                  ul.lista-ul--color.lista-ul--separador

                        li      
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-guantes.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Guantes
                              
                              //p Técnicas Microbiológicas Apropiadas - TMA y ropa protectora, señal de riesgo biológico.

                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-marcadores.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Marcadores
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.                  

                  
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-tabla-de-cortar.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Tabla de cortar
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.                  

                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-pinzas-quirurgicas.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Pinzas quirúrgicas
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.                  

                
                .col-md-3

                  ul.lista-ul--color.lista-ul--separador
                        
                        li
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-barras-magneticas.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Barras magnéticas
                              //p Técnicas Microbiológicas Apropiadas - TMA y ropa protectora, señal de riesgo biológico.

                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-bisturis.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Bisturís
                              
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.

                        
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-tijeras.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Tijeras
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.
                        
                        li
                          .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                            .col-2
                              img(src="@/assets/curso/viñeta-espatulas.svg", alt="alt").img100.vineta-hormonas
                            .col-8
                              h5.texto-vineta-reactivos-o-insumos Espátulas
                              //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.

                .col-md-3.espacio-col-reactivos-o-insumos-3
                      
                    ul.lista-ul--color.lista-ul--separador
                            
                            li
                            li
                              .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                                .col-2
                                  img(src="@/assets/curso/viñeta-soportes.svg", alt="alt").img100.vineta-hormonas
                                .col-8
                                  h5.texto-vineta-reactivos-o-insumos Soportes
                                  
                                  //p Técnicas Microbiológicas Apropiadas - TMA y ropa protectora, señal de riesgo biológico.
      
                            li
                              .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                                .col-2
                                  img(src="@/assets/curso/viñeta-cuchillos.svg", alt="alt").img100.vineta-hormonas
                                .col-8
                                  h5.texto-vineta-reactivos-o-insumos Cuchillos
                                  
                                  //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.
                          
                            li
                              .row.bloque-texto-vinetas-reactivos-o-insumos.p-4
                                .col-2
                                  img(src="@/assets/curso/viñeta-cristaleria.svg", alt="alt").img100.vineta-hormonas
                                .col-8
                                  h5.texto-vineta-reactivos-o-insumos Cristalería
                                  //p Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.



</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema3',
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
