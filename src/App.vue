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
    <headercomp></headercomp>

  <h5 class="espacio"></h5>

      <a name="nosotros"></a>
     <nosotros></nosotros>
          <h5 class="espacio"></h5>

      <a name="menu_mezcalita"></a>
<menu2></menu2>
<br>
     <h5 class="espacio"></h5>
      <a name="promociones"></a>

     <promociones></promociones>
     <h5 class="espacio"></h5>
           <a name="musicaenvivo"></a>

<musicaenvivo></musicaenvivo>
     <h5 class="espacio"></h5>
      <a name="deportes"></a>

  <deportes></deportes>
     <h5 class="espacio"></h5>
      <a name="reservaciones"></a>

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

<footercomp></footercomp>


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

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";

  } else {
    document.getElementById("nav").style.top = "-75px";

  }
  prevScrollpos = currentScrollPos;
}
</script>
