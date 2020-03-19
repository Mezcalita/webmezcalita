<template>
  <div class="home">
 <headercomp></headercomp>

  <h5 class="espacio"></h5>

      <a name="nosotros"></a>
     <nosotros></nosotros>
          <h5 class="espacio"></h5>

    
 
     <reservaciones></reservaciones>
          <h5 class="espacio"></h5>

      <a name="carrusel"></a>

  <carrusel></carrusel>
       <h5 class="espacio"></h5>
      <a name="franquicias"></a>

  <franquicias></franquicias>

         <h5 class="espacio"></h5>

                 <a name="sucursales"></a>


       <sucursales></sucursales>
              <h5 class="espacio"></h5>
       <bolsayfacturacion></bolsayfacturacion>
                     <h5 class="espacio"></h5>
      <contacto></contacto>
                           <h5 class="espacio"></h5>
                               <hr>

 
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
  },
  
}
</script>
