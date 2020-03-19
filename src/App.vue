<template>
  <div id="app">


<b-container  fluid class="bv-example-row fixed-top " id="nav">
 <b-row  style="background-color: black" > 
    <b-col class="text-center" >
      <img src="iconos/header/logo-header.svg"  
    width="38" id="logoa" class="nomovil" >
     <b-row>
      <div class="container  " style="max-width:1200px" id="menu"> 

  <b-navbar bg-transparent toggleable="lg" class="px-auto " type="dark"   >
    <b-navbar-brand id="brand" ><img src="iconos/header/logo-header.svg"  height="42"
    width="53" id="logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
      <b-navbar-nav  >
   
        <b-nav-item class="pl-3"  href="#menu_mezcalita" > Menú</b-nav-item>
        <b-nav-item  class="pl-3" > Resrvaciones</b-nav-item>
         <b-nav-item class="pl-3"  >Eventos</b-nav-item>
         <b-nav-item class="pl-3"   >Franquicias</b-nav-item>
         <b-nav-item class="pl-3"  >Promociones</b-nav-item>
         <b-nav-item class="pl-3"  >Bolsa de trabajo</b-nav-item>
         <b-nav-item class="pl-3"  >Facturación</b-nav-item>
         <b-nav-item class="pl-3"  >Contacto</b-nav-item>

      </b-navbar-nav>
  
    </b-collapse>
  </b-navbar>

           </div> 
             </b-row>
       </b-col>

   
  </b-row>
</b-container>
<br>
<br>
<br>
    
<router-view/>

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
  name: 'app',

}


</script>
