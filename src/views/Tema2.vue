<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Bioseguridad en laboratorios
      
    .row.justify-content-around.align-items-center

        .col-md.col-lg-8
          p Antes de avanzar al conocimiento práctico de la propagación de material vegetal, es importante reconocer todas las implicaciones en cuanto al cuidado propio, y el de los demás, en actividades que requieren manejo de sustancias, herramientas o instrumentos programados en los laboratorios o, simplemente realizar un protocolo de ingreso adecuado en zonas de importante atención.
          .cajon.color-primario.p-3
            p En este orden de ideas, es importante reconocer inicialmente los conceptos básicos involucrados en la biotecnología a partir de algunos documentos legales normativos. En el documento: Lineamientos generales de la bioseguridad y la bio contención para los laboratorios de la red Nacional de laboratorios, el Ministerio de salud y protección social (Min salud, 2020, p. 9) relaciona el siguiente concepto:
            br
            .bloque-texto-f.pt-4.px-5.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
                h4.text-regular.bloque-texto-f__texto 
                  span.text-bold La bioseguridad describe los principios de contención, tecnologías y las prácticas en el manejo de agentes biológicos o de materiales que potencialmente puedan contenerlos y que se implementan para prevenir la exposición no intencional a agentes biológicos y toxinas, o bien su liberación accidental.
          
          
        .col-lg-4
          .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
            img(src="@/assets/curso/imagen1-bioseguridad-en-laboratorios.png")
    br
    br    
    p Todas las normas para proteger la salud y la integridad física, mientras se llevan a cabo funciones desarrolladas en laboratorios, deben ser interiorizadas, así que todas las herramientas aquí dispuestas, serán de gran utilidad para una formación integral, pues la normatividad básica, en cualquier nivel de laboratorio, contiene las normas en bioseguridad propias para el desarrollo de sus objetivos, algunos ejemplos se relacionan a continuación.


    .row.tarjeta.tarjeta--blanca.p-3
        
        
        .row.justify-content-around.align-items-center
          
          .col-lg-7
            .tarjeta.tarjeta--blanca.p-3
              //(data-aos="fade-left")
              img(src="@/assets/curso/imagen2-bioseguridad-en-laboratorios.png")
          
          .col-lg-5
            .col-sm.mb-5.mb-sm-0
              
              ul.lista-ul--color
                h4 De tipo personal:
                li 
                  i.fas.fa-atom
                  | No usar accesorios.
                
                br

                h4 De tipo procedimental como:
                li 
                  i.fas.fa-atom
                  | Uso de equipo de protección individual.
                li 
                  i.fas.fa-atom
                  | Conocer las características de riesgo de las sustancias que se usarán.
                li 
                  i.fas.fa-atom
                  | Manejo de productos que reaccionan de manera inflamable.
                li 
                  i.fas.fa-atom
                  | Estricto conocimiento y manejo de los instrumentos.
                li 
                  i.fas.fa-atom
                  | No hacer pruebas organolépticas que impliquen el contacto de sustancias con el cuerpo o el rostro.
          separador

    .row.tarjeta.tarjeta--blanca.p-3
      
      #Niveles_riesgos_y_seguridad_en_laboratorios
      .titulo-segundo.color-acento-contenido
        h2 2.1 Niveles, riesgos y seguridad en laboratorios

      .row.justify-content-around.align-items-center

      
        .col-lg-5
          .bloque-texto-mitad-color-izquierda-niveles-riesgo.p-1
            p.p-4 Si bien, son muchos los objetivos que reúnen una práctica de laboratorio, no todos estos deben cumplir con el mismo protocolo de bioseguridad, sus características y alcances pueden determinar el nivel al que pertenece. La seguridad, dependiendo del riesgo que alcance su desarrollo en el laboratorio, clasifica el nivel de bioseguridad al que éste pertenece, lo cual indica qué nivel de contención requiere para no tener ese riesgo, por consiguiente, este tipo de descripción no solamente indica el nivel de bioseguridad, sino también especifica el tipo de técnica microbiológica apropiada y el equipamiento personal requerido. Si el número de riesgo aumenta, quiere decir que allí se realiza una práctica de mayor complejidad con técnicas microbiológicas más complejas, y esto incide en un nivel de bioseguridad más alto. Estos riesgos se clasifican de la siguiente manera:

        .col-lg-7
          .tarjeta.tarjeta--blanca.p-3(data-aos="flip-left")
            img(src="@/assets/curso/imagen1-niveles-riesgos-lab.png")
    
      .row.tarjeta.tarjeta--blanca.p-3

                
        figure.imagen-de-fondo-tipos-riesgo
          img(src='@/assets/curso/fondo-tipos-de-riesgo.png', alt='Texto que describa la imagen')
      
        .row.justify-content-around.align-items-center.p-4
          p Podrá referenciarse tres tipos de riesgos.
          p Es deber de todo el personal de laboratorio reconocer las características del mismo, para llevar a cabo el protocolo adecuado en temas de bioseguridad. Usted puede profundizar sobre los tipos de riesgos en laboratorio en el documento Bioseguridad en el laboratorio: medidas importantes para el trabajo seguro de la revista Bioquimia, la cual encuentra en el material complementario.
        
      h4 Tipos de riesgo
        
        br

        .row.justify-content-center.mb-5
          .col-lg-9.position-relative
          
            .tarjeta.tarjetas-tipos-de-riesgo.py-4.p-4
              .row.align-items-center
                .col-1
                  figure
                    img(src="@/assets/curso/imagen-tipos-riesgo-biologico.svg", alt="alt").img100.imagen-tarjetas-tipos-de-riesgo-1
                .col-7
                  h5 Biológicos:
                  p riesgo por algún microorganismo.
            br
            br

            .tarjeta.tarjetas-tipos-de-riesgo.py-4.p-4
              .row.align-items-center
                .col-1
                  figure
                    img(src="@/assets/curso/imagen-tipos-riesgo-quimico.svg", alt="alt").img100.imagen-tarjetas-tipos-de-riesgo-2
                .col-7
                  h5 Químicos:
                  p riesgo por alguna sustancia o estado de la misma.
            br
            br

            .tarjeta.tarjetas-tipos-de-riesgo.py-4.p-4
              .row.align-items-center
                .col-1
                  figure
                    img(src="@/assets/curso/imagen-tipos-riesgo-fisicos.svg", alt="alt").img100.imagen-tarjetas-tipos-de-riesgo-3
                .col-10
                  h5 Físicos:
                  p en las interacciones en el espacio, se pueden presentar accidentes eléctricos, dado el gran número de aparatos y equipos como centrífugas, hornos, agitadores magnéticos, riesgos por cortes con vidrios o material corto punzante, quemaduras ante el uso de mecheros, calentadores o por emisión de vapor, durante algún procedimiento, entre otros.
    
    .container.tarjeta--blanca.justify-content-center.mb-5

        figure
          img(src="@/assets/curso/imagen-fondo-grupos-de-riesgo.png", alt="alt").img100.imagen-fondo-tipos-riesgo

        TabsC.color-primario
          .py-3.py-md-4(titulo="Grupo de riesgo 1").tipos-de-riesgo
            .row
              
              p.texto-descripcion-grupos-de-riesgo Detalladamente, los riesgos pueden describirse de la siguiente manera a partir de la adaptación del Manual de bioseguridad en el laboratorio (OMS, 2005).
              
              .col-md-6.mb-4.mb-md-0.bloque-texto-vineta3-tipos-riesgo
                br
                br
                br
                ul.lista-ul--color.lista-ul--separador
                  
                    li
                    li
                      .row.p-4
                        .col-2
                          img(src="@/assets/curso/viñeta-nivel-de-seguridad.svg", alt="alt").img100.vineta3-tipos-riesgo
                        .col-11
                          h5 Nivel de seguridad 
                          p Básico. Nivel 1.
                          br
                  
                    li
                      .row.p-4
                        .col-2
                          img(src="@/assets/curso/viñeta-tipo-laboratorio.svg", alt="alt").img100.vineta4-tipos-riesgo
                        .col-11
                          h5 Tipo de laboratorio
                          p Enseñanza básica, investigación.

                    
            
              .col-md-6.mb-4.mb-md-0.bloque-texto-vineta4-tipos-riesgo
                  br
                  br
                  br
                  ul.lista-ul--color.lista-ul--separador
                      li
                      li
                        .row.p-4
                          .col-2
                            img(src="@/assets/curso/viñeta-practicas-laboratorio.svg", alt="alt").img100.vineta3-tipos-riesgo
                          .col-11
                            h5 Prácticas de laboratorio 
                            p Técnicas Microbiológicas Apropiadas - TMA.

                      li
                        .row.p-4
                          .col-2
                            img(src="@/assets/curso/viñeta-equipo-de-seguridad.svg", alt="alt").img100.vineta4-tipos-riesgo
                          .col-11
                            h5 Equipo de seguridad
                            p Ninguno, trabajo en mesa de laboratorio al descubierto.
                            


                
                
          .py-3.py-md-4(titulo="Grupo de riesgo 2").tipos-de-riesgo
            .row
                
                p.texto-descripcion-grupos-de-riesgo Se describe a continuación el grupo de riesgo 2 a partir de la adaptación del Manual de bioseguridad en el laboratorio (OMS, 2005).
                
                
                .col-md-6.mb-4.mb-md-0.bloque-texto-vineta3-tipos-riesgo
                  br
                  br
                  br
                  ul.lista-ul--color.lista-ul--separador
                      
                      li  
                      li
                        .row.p-4
                          .col-2
                            img(src="@/assets/curso/viñeta-nivel-de-seguridad2.svg", alt="alt").img100.vineta3-tipos-riesgo
                          .col-11
                            h5 Nivel de seguridad
                            p Básico. Nivel 2.
                            br
                            


                      li
                        .row.p-4
                          .col-2
                            img(src="@/assets/curso/viñeta-tipo-laboratorio2.svg", alt="alt").img100.vineta4-tipos-riesgo
                          .col-11
                            h5 Tipo de laboratorio
                            p Servicios de atención primaria, diagnóstico, investigación.

                  
                      
                      
              
                .col-md-6.mb-4.mb-md-0.bloque-texto-vineta4-tipos-riesgo
                    br
                    br
                    br
                    ul.lista-ul--color.lista-ul--separador
                      li
                      li
                        .row.p-4
                          .col-2
                            img(src="@/assets/curso/viñeta-practicas-laboratorio2.svg", alt="alt").img100.vineta3-tipos-riesgo
                          .col-11
                            h5 Prácticas de laboratorio 
                            p.texto-columna-grupos-de-riesgo Técnicas Microbiológicas Apropiadas - TMA y ropa protectora, señal de riesgo biológico.

                      li
                        .row.p-4
                          .col-2
                            img(src="@/assets/curso/viñeta-equipo-de-seguridad2.svg", alt="alt").img100.vineta4-tipos-riesgo
                          .col-11
                            h5 Equipo de seguridad
                            p.texto-columna-grupos-de-riesgo Trabajo en mesa al descubierto y Cámara de Seguridad Biológica - CSB para posibles aerosoles.


          
          .py-3.py-md-4(titulo="Grupo de riesgo 3").tipos-de-riesgo
            .row

                p.texto-descripcion-grupos-de-riesgo Se describe a continuación el grupo de riesgo 3, a partir de la adaptación del Manual de bioseguridad en el laboratorio (OMS, 2005).
                

                .col-md-6.mb-4.mb-md-0.bloque-texto-vineta3-tipos-riesgo

                  br
                  br
                  br

                  ul.lista-ul--color.lista-ul--separador
                      li
                      li
                        .row.p-4
                          .col-2
                            img(src="@/assets/curso/viñeta-nivel-de-seguridad3.svg", alt="alt").img100.vineta3-tipos-riesgo
                          .col-11
                            h5 Nivel de seguridad
                            p Contención. Nivel 3.
                            br
                            

                      li
                        .row.p-4
                          .col-2
                            img(src="@/assets/curso/viñeta-tipo-laboratorio3.svg", alt="alt").img100.vineta4-tipos-riesgo
                          .col-11
                            h5 Tipo de laboratorio
                            p Diagnóstico especial, investigación.


                .col-md-6.mb-4.mb-md-0.bloque-texto-vineta4-tipos-riesgo

                  br
                  br
                  br
  
                  ul.lista-ul--color.lista-ul--separador
                    li
                    li
                      .row.p-4
                        .col-2
                          img(src="@/assets/curso/viñeta-practicas-laboratorio3.svg", alt="alt").img100.vineta3-tipos-riesgo
                        .col-11
                          h5 Prácticas de laboratorio 
                          p.texto-columna-grupos-de-riesgo Prácticas de nivel 2, más ropa especial, acceso controlado y flujo direccional del aire.

                    li
                      .row.p-4
                        .col-2
                          img(src="@/assets/curso/viñeta-equipo-de-seguridad3.svg", alt="alt").img100.vineta4-tipos-riesgo
                        .col-11
                          h5 Equipo de seguridad
                          p.texto-columna-grupos-de-riesgo Cámara de Seguridad Biológica - CSB además de otros medios de contención primaria para todas las actividades.



          .py-3.py-md-4(titulo="Grupo de riesgo 4").tipos-de-riesgo
            .row
                
                p.texto-descripcion-grupos-de-riesgo Se describe a continuación el grupo de riesgo 4, a partir de adaptación del Manual de bioseguridad en el laboratorio (OMS, 2005).
                
                .col-md-6.mb-4.mb-md-0.bloque-texto-vineta3-tipos-riesgo
                  br
                  br
                  br

                  ul.lista-ul--color.lista-ul--separador
                      li
                      li
                        .row.p-4
                          .col-2
                            img(src="@/assets/curso/viñeta-nivel-de-seguridad4.svg", alt="alt").img100.vineta3-tipos-riesgo
                          .col-11
                            h5 Nivel de seguridad
                            p Contención máxima. Nivel 4.
                            br
                            

                      li
                        .row.p-4
                          .col-2
                            img(src="@/assets/curso/viñeta-tipo-laboratorio4.svg", alt="alt").img100.vineta4-tipos-riesgo
                          .col-11
                            h5 Tipo de laboratorio
                            p Unidades de patógenos peligrosos.
                            br
                            

    

                .col-md-6.mb-4.mb-md-0.bloque-texto-vineta4-tipos-riesgo
                  br
                  br
                  br
                  ul.lista-ul--color.lista-ul--separador
                    li
                    li
                      .row.p-4
                        .col-2
                          img(src="@/assets/curso/viñeta-practicas-laboratorio4.svg", alt="alt").img100.vineta3-tipos-riesgo
                        .col-12
                          h5 Prácticas de laboratorio 
                          p.texto-columna-grupos-de-riesgo Prácticas de nivel 3, más cámaras de entrada con cierre hermético, salida con ducha y eliminación especial de residuos.

                    li
                      .row.p-4
                        .col-2
                          img(src="@/assets/curso/viñeta-equipo-de-seguridad4.svg", alt="alt").img100.vineta4-tipos-riesgo
                        .col-12
                          h5 Equipo de seguridad
                          p.texto-columna-grupos-de-riesgo Cámara de Seguridad Biológica - CSB de clase III o trajes presurizados junto con CSB de clase II, autoclave de doble puerta (a través de la pared), aire filtrado.
    separador
    .row.tarjeta.tarjeta--blanca.p-3
      
      #Clasificacion_de_sustancias_en_laboratorios
      .titulo-segundo.color-acento-contenido
        h2 2.2  Clasificación de sustancias en laboratorios

      .row.justify-content-around.align-items-center

      
        .col-lg-4
          .bloque-texto-mitad-color-izquierda-clasificacion-sustancias.p-1
            p.p-4 Para avanzar en el conocimiento y manejo de las sustancias como un material requerido en las prácticas del laboratorio, y partiendo de saber cómo son las sustancias simples o compuestas, y el tipo de mezclas que éstas generan, se resalta que su disposición y su uso en laboratorio, requieren de clasificaciones y manejos prudentes de las mismas, teniendo en cuenta sus características para el almacenamiento y su manipulación.

        .col-lg-8
          .tarjeta.tarjeta--blanca.p-3(data-aos="flip-left")
            img(src="@/assets/curso/imagen-clasificacion-sustancias-lab.png")
            .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      br
      br

      p Estas  sustancias pueden ser clasificadas con respecto a su peligrosidad, entre éstas puede observarse características como: explosivas, inflamables, tóxicas, corrosivas, irritantes, entre otras más específicas. Sin embargo, siguiendo el concepto de bioseguridad, estas deberán estar identificadas y referenciadas en cuanto a su manejo y almacenamiento y ser visibilizadas a través de pictogramas que muestran su peligrosidad como se observa en los siguientes iconos. Para ampliar su conocimiento sobre los tipos de sustancias químicas y su peligrosidad, puede visitar el Manual de uso de productos químicos de la Universidad Pública de Navarra - UPNA, el cual lo encuentra en el material complementario.

      
      .imagen-fondo-punto-caliente-tema2
        figure
            img(src='@/assets/curso/fondo-infografia-punto-caliente.svg', alt='Texto que describa la imagen')

      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/imagen-infografia-punto-caliente.svg', alt='Texto que describa la imagen')
            //figcaption Leyenda de la imagen

        .tarjeta.tarjeta--blanca.p-3(x="18%" y="22%" numero="1")
          .h5.mb-2 Peligro de explosivos.
          //p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

        .tarjeta.tarjeta--blanca.p-3(x="36.5%" y="22%" numero="2")
          .h5.mb-2 Inflamable.
          //p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

        .tarjeta.tarjeta--blanca.p-3(x="55.5%" y="22%" numero="3")
          .h5.mb-2 Carburante.
          //p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        
        .tarjeta.tarjeta--blanca.p-3(x="74%" y="22%" numero="4")
          .h5.mb-2 Gases bajo presión.
          //p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

        .tarjeta.tarjeta--blanca.p-3(x="9.5%" y="61%" numero="5")
          .h5.mb-2 Corrosión.
          //p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

        .tarjeta.tarjeta--blanca.p-3(x="28%" y="61%" numero="6")
          .h5.mb-2 Toxicidad.
          //p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
        
        .tarjeta.tarjeta--blanca.p-3(x="47%" y="61%" numero="7")
          .h5.mb-2 Químico nocivo.
          //p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

        .tarjeta.tarjeta--blanca.p-3(x="65%" y="61%" numero="8")
          .h5.mb-2 Daño al medio ambiente.
          //p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

        .tarjeta.tarjeta--blanca.p-3(x="84%" y="61%" numero="9")
          .h5.mb-2 Peligro para la salud.
          //p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus


</template>

<script>
import Separador from 'ecored-base-pkg/src/components/Separador.vue'
export default {
  name: 'Tema2',
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
