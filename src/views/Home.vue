<template>
  <div class="home">

    <a name="Hero"></a>
      <headercomp></headercomp> 

    <a name="nosotros"></a>
     <nosotros></nosotros>
                 <a name="menu_mezcalita"></a>
              <br>
              <br>
              <br>
              <br>

<menu2></menu2>
     <a name="promociones"></a>
 <div class="container nomovil ">
         <br>
              <br>
              <br>
              <br>
              <br>
              <br>
 </div>

     <promociones></promociones>
        <!-- <a name="musicaenvivo"></a>

     <h5 class="espacio"></h5>

 <musicaenvivo></musicaenvivo>
      <a name="deportes"></a>

     <h5 class="espacio"></h5>

  <deportes></deportes> -->
  <br>
     <br>
     <br>
     <br>
 
        <a name="reservaciones"></a>

      <div class="container nomovil ">
           <h5 class="espacio"></h5>
          
      </div>
     <reservaciones></reservaciones>
          <h5 class="espacio"></h5>

  <carrusel></carrusel>
        <a name="franquicia"></a>

 <div class="container nomovil ">
       <h5 class="espacio"></h5>
 </div>
 <br>
 <br>
  <franquicias></franquicias>
           <a name="sucursales"></a>
           <br>
 <div class="container nomovil ">
         <h5 class="espacio"></h5>
 </div>

       <sucursales></sucursales>
                               <a name="contacto"></a>
                        <a name="bolsayfacturacion"></a>

      <div class="container nomovil ">
              <h5 class="espacio"></h5>
      </div>
      <br>
      <br>
      <br>
       <bolsayfacturacion></bolsayfacturacion>

                     <h5 class="espacio"></h5>
      <contacto></contacto>
                           <h5 class="espacio"></h5>
                               <hr>

<footercomp></footercomp>
 
  </div>
</template>

<script>
import headercomp from '@/components/headercomp.vue'
import nosotros from '@/components/nosotros.vue'
import reservaciones from '@/components/reservaciones.vue'
import menu2 from '@/components/menu2.vue'
import promociones from '@/components/promociones.vue'
import carrusel from '@/components/carrusel.vue'
import franquicias from '@/components/franquicias.vue'
import sucursales from '@/components/sucursales.vue'

import bolsayfacturacion from '@/components/bolsayfacturacion.vue'
import musicaenvivo from '@/components/musicaenvivo.vue'

import deportes from '@/components/deportes.vue'
import contacto from '@/components/contacto.vue'
import footercomp from '@/components/footercomp.vue'

export default {
  name: 'Home',
  components:{
    headercomp,
    nosotros,
    menu2,
    reservaciones,
    promociones,
    carrusel,
    franquicias,
    sucursales,
    bolsayfacturacion,
    musicaenvivo,
    deportes,
    contacto,
    footercomp
  },
  
}
</script>
