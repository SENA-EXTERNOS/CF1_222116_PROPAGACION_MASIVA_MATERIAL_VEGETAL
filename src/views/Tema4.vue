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
            p.p-4 Hemos venido aprendiendo sobre temas que incorporan el manejo de los riesgos en los laboratorios; estos peligros se pueden reducir en la medida en que se utilicen, de manera correcta, los protocolos de seguridad. Conoceremos algunos contaminantes a los que podemos estar expuestos en los laboratorios.
  
        .col-lg-7
          .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
            img(src="@/assets/curso/imagen-agentes-contaminantes-y-su-manejo.png")

        p.p-2 Para el desarrollo de actividades en el laboratorio de biotecnología vegetal, en sus respectivas secciones de trabajo, los procedimientos generan unos contaminantes que, si bien alteran los resultados en las prácticas, también pueden ser contaminantes del medio ambiente en general. Estos contaminantes, como también las sustancias, son catalogados como agentes químicos, agentes biológicos o agentes físicos; a continuación, se pueden observar algunos ejemplos.
        h3.mb-5 Tipos de agentes contaminantes en el laboratorio
      
      .row.justify-content-center
      
        .col-lg-4.d-none.d-lg-flex
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/imagen-acordeon-agentes-contaminantes.png", alt="alt").m-auto

        .col-lg-8
          

          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris").tarjeta.color-fondo-reactivos-o-insumos
            
            .row(titulo="Agentes químicos")
              
              
              
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
                        | Reactivos.
                      li
                        i.fas.fa-atom
                        | Detergentes.
                      li
                        i.fas.fa-atom
                        | Óxidos.
                      br

            
            .row(titulo="Agentes biológicos")
                
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
                            | Bacterias.
                          li
                            i.fas.fa-atom
                            | Hongos.
                          li
                            i.fas.fa-atom
                            | Virus.
                          
                          br

            .row(titulo="Agentes físicos")

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
                            | Vidrio. 
                          li
                            i.fas.fa-atom
                            | Polvo.
                          li
                            i.fas.fa-atom
                            | Hisopos.
                          
                          br


        p Para el manejo adecuado de los agentes contaminantes, se han socializado los riesgos por sustancias ya clasificadas, así como también se ha nombrado una amplia cantidad de elementos que integran el equipamiento del laboratorio y que pueden generar un riesgo si no son manipulados con los debidos procedimientos, como se presenta a continuación.
          
                
        .tarjeta.ft.p-4.mb-4
          SlyderA(tipo="b")
            
          
            .row.justify-content-center.align-items-center.mx-5
              .col-md-7
                p.bloque-texto-slider Si los agentes contaminantes son de tipo químico, como sustancias volátiles o disolventes que generan vapores, se hace necesario contar con atuendos de protección, que incluyen gafas y mascarillas, para proteger el sistema respiratorio.

              .col-md-5
                
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/imagen1-slider-tema4.svg', alt='Texto que describa la imagen').imagen-slider-tema4
                  //figcaption Leyenda de la imagen

            .row.justify-content-center.align-items-center.mx-5
              
              .col-md-7
                p.bloque-texto-slider Si los agentes contaminantes son físicos, objetos cortopunzantes como jeringas o bisturís que pueden generar cortes, deben requerir de guantes especiales, por si se producen fluidos biológicos, como la sangre. Estos guantes también son de gran utilidad si se manipulan agentes biológicos como bacterias, de tal manera, que se mantengan aislados de la primera línea de defensa del cuerpo, como es la piel.

              .col-md-5
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/imagen2-slider-tema4.png', alt='Texto que describa la imagen').imagen-slider-tema4
                  //figcaption Leyenda de la imagen


            .row.justify-content-center.align-items-center.mx-5
              
              .col-md-7
                p.bloque-texto-slider Los agentes contaminantes como se indica anteriormente, pueden alterar de manera negativa el desarrollo de una muestra importante en el laboratorio; por esta razón, según su manipulación y la concentración para ejecutarlos, se puede prevenir la contaminación, o también deshacerse de estos agentes.

              .col-md-5
                figure
                  img(data-aos="fade-left")(src='@/assets/curso/imagen-3-slider-tema4.png', alt='Texto que describa la imagen').imagen-slider-tema4
                  //figcaption Leyenda de la imagen
    
      
      .row.justify-content-around.align-items-center

        h3  Contaminación cruzada
          
        .row        
          .col-lg-6
            .bloque-texto-mitad-color-izquierda-contaminacion-cruzada.p-1
                p.p-4 La bioseguridad aplica, no solo en cuanto a agentes contaminante, sino, también, en cuanto al manejo de instrumentos presentes; por consiguiente, es importante tener claridad que, si no se tiene la asepsia adecuada, las superficies del laboratorio pueden ser reservas de microorganismos y, en algunos casos, de patógenos. Por eso es importante la esterilización de instrumentos y otros materiales.
                  br
                  br
                  |La contaminación cruzada se define como: el paso de microorganismos de un elemento a otro, contaminando productos o espacios que van a ser utilizados, o sea, un intercambio de agentes biológicos de un elemento a otro.

          .col-lg-6
              .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
                img(src="@/assets/curso/imagen-contaminacion-cruzada.png")
      
      .row.justify-content-around
        
        .row.align-items-center        

          .col-lg-5
              .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
                img(src="@/assets/curso/imagen2-contaminacion-cruzada.png")

          .col-lg-7
                p.p-4 La contaminación cruzada puede darse de manera #[em in vivo] o directa, en el laboratorio, cuando se han dejado muestras de ensayo sobre el objeto de estudio, o #[em ex vivo] o indirecta, cuando la muestra a trabajar se ha dejado expuesta sin ningún tipo de control; la contaminación cruzada puede iniciar con el ingreso de un trabajador que no lleva a cabo el protocolo de limpieza adecuado. Tener definidos los procesos de limpieza y las secuencias de la misma, la selección de agentes de limpieza, más los protocolos de manipulación, permitirá contrarrestar la contaminación cruzada y permitir la trazabilidad en los procesos que se lleven a cabo en la práctica de laboratorio.
        
       

      .row.justify-content-around.align-items-center

        h3 Residuos y tipos de residuos
          
        .row.align-items-center        
          .col-lg-6
            .bloque-texto-mitad-color-izquierda-residuos-y-tipos-de-residuos.p-1
                p.p-4 En todos los procedimientos o actividades, incluidas las prácticas de laboratorio y mediante el uso de materiales o elementos, pueden quedar excedentes; a este resultado, bien sea una parte sólida o líquida, que se pueda tener en un recipiente, se le conoce como residuo.

          .col-lg-6
              .tarjeta.tarjeta--blanca.p-3(data-aos="fade-left")
                img(src="@/assets/curso/imagen-tipos-de-residuos.png")
          
        p Así como los agentes contaminantes pueden ser de diferentes tipos, los residuos también suelen ser clasificados en el laboratorio; entre los residuos más comunes se pueden encontrar los siguientes:


      .container.tarjeta.tarjeta--blanca.p-4.p-md-5

          ImagenInfografica.color-acento-contenido
            template(v-slot:imagen)
              figure
                img(data-aos="flip-left")(src='@/assets/curso/imagen-residuos-y-tipos-de-residuos.png', alt='Texto que describa la imagen')
                

            .tarjeta.tarjeta--blanca.p-3(x="58%" y="50%" numero="+")
              .h5.mb-2 Líquidos, disolventes y disoluciones.
              //p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

            .tarjeta.tarjeta--blanca.p-3(x="83%" y="40%" numero="+")
              .h5.mb-2 Sólidos orgánicos e inorgánicos.
              //p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

            .tarjeta.tarjeta--blanca.p-3(x="78%" y="19%" numero="+")
              .h5.mb-2 Material desechable contaminado.
              //p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
            
            .tarjeta.tarjeta--blanca.p-3(x="31%" y="59%" numero="+")
              .h5.mb-2 Productos especiales como reactivos.
              //p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
            
            .tarjeta.tarjeta--blanca.p-3(x="14%" y="25%" numero="+")
              .h5.mb-2 Biopeligrosos, aquellos contaminados de algún agente biológico patógeno o fluidos internos.
              //p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
      
      .row.justify-content-around.align-items-center

          .row
            .col-lg-5
              figure
                img(src="@/assets/curso/imagen3-residuos-y-tipos.png").imagen-texto-destacado-tema4
            
            .col-lg-7.color-texto-destacado-tema4
              p.bloque-texto-destacado-tema4.p-3 Al revisar el listado anterior, que puede ser más amplio, puntualizando en una práctica de laboratorio como propagación de material vegetal #[em in vitro], se podrían generar algunos residuos líquidos como sustancias químicas sulfatadas o nitratos. Residuos semisólidos como geles o agares, o quizás medios de cultivos contaminados con microorganismos sólidos, como detergentes, muestras vegetales y, por qué no, algunos residuos como vidrio, si es el caso de un inconveniente técnico.

     

      .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        .row.justify-content-around.align-items-center

          h3 Disposición adecuada de residuos en laboratorios
          
          p.mb-5 El manejo de los residuos en el laboratorio, al igual que en cualquier otro ambiente, debe estar previamente establecido desde su separación, hasta la disposición final del mismo; según su clasificación, tendrá sus respectivos protocolos de recolección y traslado, como se observa en la imagen. La disposición adecuada de residuos, es todo un proceso de gran importancia en cuanto a bioseguridad, pues al no manejar de manera adecuada los residuos, previamente a su vertimiento, pueden generar un impacto negativo en el medio ambiente.

          h3 Ruta de residuos generados en laboratorio, hasta su disposición final
      .row.justify-content-center.mb-5
        .col-lg-11       
          img(src='@/assets/curso/temas/c1.svg', alt='')



  
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
