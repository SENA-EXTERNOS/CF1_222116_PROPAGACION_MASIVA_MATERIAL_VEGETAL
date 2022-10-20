<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Agentes contaminantes y su manejo en prácticas de laboratorios
  
      .row.justify-content-around.align-items-center
  
        
        .col-lg-5
          .bloque-texto-mitad-color-izquierda-agentes-contaminantes.p-1
            p.p-4 En los apartados anteriores se han tratado temas que integran el hacer en laboratorios con los riesgos, estos se pueden reducir en la medida que se empleen de manera correcta los protocolos de seguridad. Ahora se describen algunos contaminantes a los que se puede estar expuesto en los laboratorios.
  
        .col-lg-7
          .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
            img(src="@/assets/curso/imagen-agentes-contaminantes-y-su-manejo.png")

        p.p-2 En el desarrollo de las actividades en el laboratorio de biotecnología vegetal, en sus respectivas secciones de trabajo, dichos procedimientos generan unos contaminantes que si bien, alteran los resultados en las prácticas, también pueden ser contaminantes del medio ambiente en general. Estos contaminantes, así como las sustancias, son catalogados como agentes químicos, agentes biológicos o agentes físicos, a continuación, se pueden observar algunos ejemplos.
        p.p-2 Tipos de agentes contaminantes en el laboratorio.
      
      .row.justify-content-center
      
        .col-lg-4.d-none.d-lg-flex
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/imagen-acordeon-agentes-contaminantes.png", alt="alt").m-auto

        .col-lg-8
          

          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris").tarjeta.color-fondo-reactivos-o-insumos
            
            .row(titulo="Agentes químicos:")
              
              
              
              .col-lg-6
                .linea-superior-lista-agentes-contaminantes    
                figure
                  img(src="@/assets/curso/imagen-agentes-quimicos.svg", alt="alt").imagen-agentes-quimicos
                .linea-inferior-lista-agentes-contaminantes
              
              .col-lg-6
                
                .col-sm.mb-5.mb-sm-0
                  
                  .lista-agentes-contaminantes  
                    ul.lista-ul--color
                      
                      //h4 Agentes químicos:
                      
                      li 
                        i.fas.fa-atom
                        | Reactivos
                      li
                        i.fas.fa-atom
                        | Detergentes
                      li
                        i.fas.fa-atom
                        | Óxidos
                      br

            
            .row(titulo="Agentes biológicos:")
                
                .col-lg-6
                    .linea-superior-lista-agentes-contaminantes
                    figure
                      img(src="@/assets/curso/imagen-agentes-biologicos.svg", alt="alt").imagen-agentes-quimicos
                  
                    .linea-inferior-lista-agentes-contaminantes

                .col-lg-6
                    .col-sm.mb-5.mb-sm-0
                      .lista-agentes-contaminantes  
                        ul.lista-ul--color
                          //h4 Agentes biológicos:
                          li 
                            i.fas.fa-atom
                            | Bacterias
                          li
                            i.fas.fa-atom
                            | Hongos
                          li
                            i.fas.fa-atom
                            | Virus
                          
                          br

            .row(titulo="Agentes físicos:")

                .col-lg-6

                      .linea-superior-lista-agentes-contaminantes
                      figure
                        img(src="@/assets/curso/imagen-agentes-fisicos.svg", alt="alt").imagen-agentes-quimicos
                      .linea-inferior-lista-agentes-contaminantes      
                      

                .col-lg-6
                    .col-sm.mb-5.mb-sm-0
                      .lista-agentes-contaminantes  
                        ul.lista-ul--color
                          //h4 Agentes físicos:
                          li 
                            i.fas.fa-atom
                            | Vidrio 
                          li
                            i.fas.fa-atom
                            | Polvo
                          li
                            i.fas.fa-atom
                            | Hisopos
                          
                          br
        br
        br

        .container.justify-content-center
          
          br
          br
          figure
            img(src='@/assets/curso/imagen-fondo-slider-tema4.png', alt='Texto que describa la imagen').imagen-fondo-slider-tema4

          p Para el manejo adecuado de los agentes contaminantes, se han socializado los riesgos por sustancias, las cuales presentan su clasificación, así como se ha nombrado un amplio número de elementos que integran el equipamiento del laboratorio, y pueden generar un riesgo si no son manipulados con sus debidos procedimientos.
          
          .tarjeta.color-fondo-reactivos-o-insumos.tarjetas-slider-tema4.p-4
            figure
                img(src='@/assets/curso/imagen-fondo-slider1-tema4.svg', alt='Texto que describa la imagen').imagen-fondo-slider-pequeno-tema4
                

            SlyderA(tipo="b")
              
            
              .row.justify-content-center.align-items-center.my-lg-4
                .col-md-5
                  p.bloque-texto-slider Si los agentes contaminantes son de tipo químico, como sustancias volátiles o disolventes que generan vapores, es necesario contar con atuendos de protección que incluyen gafas y mascarillas para proteger el sistema respiratorio.

                .col-md-6
                  
                  figure
                    img(data-aos="fade-left")(src='@/assets/curso/imagen1-slider-tema4.svg', alt='Texto que describa la imagen').imagen-slider-tema4
                    //figcaption Leyenda de la imagen

              .row.justify-content-center.align-items-center.my-lg-4
                
                .col-md-5
                  p.bloque-texto-slider Si los agentes contaminantes son físicos, objetos cortopunzantes como jeringas o bisturís que pueden generar cortes, deben requerir de guantes especiales por si se producen fluidos biológicos como la sangre. Estos guantes también son de gran utilidad si se manipulan agentes biológicos como bacterias, de tal manera, que se mantengan aislados de la primera línea de defensa del cuerpo como lo es la piel.

                .col-md-6
                  figure
                    img(data-aos="fade-left")(src='@/assets/curso/imagen2-slider-tema4.png', alt='Texto que describa la imagen').imagen-slider-tema4
                    //figcaption Leyenda de la imagen


              .row.justify-content-center.align-items-center.my-lg-4
                
                .col-md-5
                  p.bloque-texto-slider Los agentes como se muestran anteriormente, pueden alterar de manera negativa el desarrollo de una muestra importante en el laboratorio, por lo cual, su manipulación y la concentración para ejecutarlos, previene la contaminación, o que este tipo de agentes salgan de allí, sin haber presentado una disposición adecuada. 

                .col-md-6
                  figure
                    img(data-aos="fade-left")(src='@/assets/curso/imagen-3-slider-tema4.png', alt='Texto que describa la imagen').imagen-slider-tema4
                    //figcaption Leyenda de la imagen
        separador
      
      
      .row.justify-content-around.align-items-center

        #Caracteristicas_fisicas
        .titulo-segundo.color-acento-contenido
          h2 4.1  Contaminación cruzada
          
        .row        
          .col-lg-6
            .bloque-texto-mitad-color-izquierda-contaminacion-cruzada.p-1
                p.p-4 Para llevar a cabo una práctica de laboratorio, retome los conceptos profundizados en las unidades anteriores, la bioseguridad aplica, no sólo en cuanto a agentes contaminantes, sino también, al manejo de instrumentos allí presentes, por consiguiente, es importante tener claridad de que, si no se tiene la asepsia adecuada, las superficies del laboratorio pueden ser reservas de microorganismos, en algunos casos patógenos. Es de allí la importancia de la esterilización de instrumentos y otros materiales. En la práctica, podrá generarse el paso de microorganismos de un elemento a otro, contaminando productos o espacios que van a ser utilizados, a este intercambio de agentes biológicos de un elemento a otro se le conoce como contaminación cruzada.

          .col-lg-6
              .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
                img(src="@/assets/curso/imagen-contaminacion-cruzada.png")
      
      .row.justify-content-around
        
        .row.align-items-center        

          .col-lg-5
              .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
                img(src="@/assets/curso/imagen2-contaminacion-cruzada.png")

          .col-lg-7
                p.p-4 En el laboratorio la contaminación cruzada, podrá darse de manera <em>in vivo</em> o directa, cuando se ha dejado muestras de ensayo sobre el objeto de estudio, o <em>ex vivo</em> o indirecta, cuando la muestra a trabajar se ha dejado expuesta sin ningún tipo de control, la contaminación cruzada podrá empezar con el ingreso de un trabajador o practicante que no realizó el protocolo de limpieza adecuado. Tener definidos los procesos de limpieza, las secuencias de limpieza, selección de agentes de limpieza, más los protocolos de manipulación, permitirán contrarrestar la contaminación cruzada y permitir la trazabilidad en los procesos que se lleven a cabo en la práctica de laboratorio.
        
        separador

      .row.justify-content-around.align-items-center

        #Caracteristicas_fisicas
        .titulo-segundo.color-acento-contenido
          h2 4.2  Residuos y tipos de residuos
          
        .row.align-items-center        
          .col-lg-6
            .bloque-texto-mitad-color-izquierda-residuos-y-tipos-de-residuos.p-1
                p.p-4 En todos los procedimientos o actividades, incluidas las prácticas de laboratorio y mediante el uso de materiales o elementos, pueden quedar sobrantes del mismo, a este resultado, bien sea una parte sólida o líquida que se puedan tener en un recipiente, se le conoce como residuo.

          .col-lg-6
              .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
                img(src="@/assets/curso/imagen-tipos-de-residuos.png")
          
        p Así como los agentes contaminantes pueden ser de diferentes tipos, los residuos también suelen estar clasificados en el laboratorio, entre los más generados se pueden encontrar.


      .container.tarjeta.tarjeta--blanca.p-4.p-md-5

          ImagenInfografica.color-primario
            template(v-slot:imagen)
              figure
                img(data-aos="flip-left")(src='@/assets/curso/imagen-residuos-y-tipos-de-residuos.png', alt='Texto que describa la imagen')
                

            .tarjeta.tarjeta--blanca.p-3(x="58%" y="50%" numero="1")
              .h5.mb-2 Líquidos, disolventes y disoluciones.
              //p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

            .tarjeta.tarjeta--blanca.p-3(x="83%" y="40%" numero="2")
              .h5.mb-2 Sólidos orgánicos e inorgánicos.
              //p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

            .tarjeta.tarjeta--blanca.p-3(x="78%" y="19%" numero="3")
              .h5.mb-2 Material desechable contaminado.
              //p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
            
            .tarjeta.tarjeta--blanca.p-3(x="31%" y="59%" numero="4")
              .h5.mb-2 Productos especiales como reactivos.
              //p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
            
            .tarjeta.tarjeta--blanca.p-3(x="14%" y="25%" numero="5")
              .h5.mb-2 Bio-peligrosos, aquellos contaminados de algún agente biológico patógeno o fluidos internos.
              //p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
      
      .row.justify-content-around.align-items-center

          .row
            .col-lg-5
              figure
                img(src="@/assets/curso/imagen3-residuos-y-tipos.png").imagen-texto-destacado-tema4
            
            .col-lg-7.color-texto-destacado-tema4
              p.bloque-texto-destacado-tema4.p-3 Al revisar el listado anterior, que puede ser más amplio, puntualizando en una práctica de laboratorio como propagación de material vegetal <em>in vitro</em>, se podrían generar algunos residuos líquidos como sustancias químicas sulfatadas o nitratos. Residuos semisólidos como geles o agares, o quizás medios de cultivos contaminados con microorganismos, sólidos como detergentes, muestras vegetales y por qué no, algunos residuos como vidrio si es el caso de un inconveniente técnico.

      separador

      .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        .row.justify-content-around.align-items-center

          #Caracteristicas_fisicas
          .titulo-segundo.color-acento-contenido
            h2 4.2  Disposición adecuada de residuos en laboratorios
          
          p El manejo de los residuos en el laboratorio, al igual que en cualquier otro tipo de ambiente, debe estar previamente establecido desde su separación hasta la disposición final del mismo, dado su tipo, este tendrá sus respectivos protocolos de recolección y traslado como se observa en la imagen. La disposición adecuada de residuos es todo un proceso de gran importancia en cuanto a bioseguridad, pues él no tratar de manera adecuada los residuos previamente a su vertimiento, pueden generar un impacto negativo en el medio ambiente.

          .subtitulo-ruta-de-residuos
            h5 Ruta de Residuos generados en laboratorio, hasta su disposición final
            
          .row.imagen-fila--ruta-residuos-1
            .col-12
              figure
                img(src="@/assets/curso/imagen-fila-imagenes-ruta-residuos.png")
              
            p.texto1-ruta-de-residuos Generación de residuos
            p.texto2-ruta-de-residuos Clasificación
            p.texto3-ruta-de-residuos Envasado y registro de bitácora
            p.texto4-ruta-de-residuos Recolección interna
            
          br
          br

          
          .row.imagen-fila--ruta-residuos-2
            
            
            .col-12
            p.texto5-ruta-de-residuos Almacén temporal
            p.texto6-ruta-de-residuos Embalaje
            p.texto7-ruta-de-residuos Recolección externa
            p.texto8-ruta-de-residuos Disposición final

              figure
                img(src="@/assets/curso/imagen-fila2-imagenes-ruta-residuos.png")
                .lista-disposicion-final
                  .col-sm.mb-5.mb-sm-0
                    ol.lista-ol--cuadro
                      .linea1-disposicion-final
                      li
                        .lista-ol--cuadro__vineta 
                          i.fas.fa-angle-right
                        p.p-1 Incineración
                      .linea2-disposicion-final
                      li
                        .lista-ol--cuadro__vineta 
                          i.fas.fa-angle-right
                        p.p-1 Encapsulado
                      .linea3-disposicion-final
                      li
                        .lista-ol--cuadro__vineta 
                          i.fas.fa-angle-right
                        p.p-1 Confinamiento
                      li 
                        .lista-ol--cuadro__vineta
                          i.fas.fa-angle-right
                        p.p-1 Combustible alterno




  
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
