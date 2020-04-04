<template>
  <div id="app" class="fluid">


<b-container  fluid class="bv-example-row fixed-top " id="nav">
 <b-row  style="background-color: black" > 
    <b-col class="text-center" >
      <img src="iconos/header/logo-header.svg"  
    width="38" id="logoa" class="nomovil mt-4" >
     <b-row>
      <div class="container  " style="max-width:1400px" id="menu"> 

  <b-navbar bg-transparent toggleable="lg" class="px-auto " type="dark"   >
    <b-navbar-brand id="brand" ><img src="iconos/header/logo-header.svg"  height="42"
    width="53" id="logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
      <b-navbar-nav  >
   
        <b-nav-item   href="#menu_mezcalita" > Menú</b-nav-item>
          <b-nav-item href="#promociones" >Promociones</b-nav-item>
         <b-nav-item  href="#musicaenvivo" >Eventos</b-nav-item>
        <b-nav-item   href="#reservaciones"  > Reservaciones</b-nav-item>
                <b-nav-item   href="#franquicias"  > Franquicias</b-nav-item>
         <b-nav-item  href="#sucursales"  >Sucursales</b-nav-item>
         <b-nav-item  href="#contacto" >Contacto</b-nav-item>

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


      <a name="nosotros"></a>

     <nosotros></nosotros>
                 <a name="menu_mezcalita"></a>

               <h5 class="espacio"></h5>


<menu2></menu2>
<br>      <a name="promociones"></a>

     <h5 class="espacio"></h5>

     <promociones></promociones>
        <a name="musicaenvivo"></a>

     <h5 class="espacio"></h5>

<musicaenvivo></musicaenvivo>
      <a name="deportes"></a>

     <h5 class="espacio"></h5>

  <deportes></deportes>
        <a name="reservaciones"></a>

     <h5 class="espacio"></h5>

     <reservaciones></reservaciones>
          <h5 class="espacio"></h5>

  <carrusel></carrusel>
        <a name="franquicias"></a>

       <h5 class="espacio"></h5>

  <franquicias></franquicias>
                               <a name="sucursales"></a>

         <h5 class="espacio"></h5>

       <sucursales></sucursales>
                               <a name="contacto"></a>
                        <a name="bolsayfacturacion"></a>

              <h5 class="espacio"></h5>
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
    footercomp,
  },
  
}

</script>
