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
    <b-navbar-brand  id="brand" >
    <img src="iconos/header/logo-header.svg"  height="42"
    width="53" id="logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse  id="nav-collapse" is-nav>
      <b-navbar-nav  >
   
        <b-nav-item  href="/#menu_mezcalita" >Menú</b-nav-item>
          <b-nav-item  href="/#promociones" >Promociones</b-nav-item>
         <!-- <b-nav-item  href="#musicaenvivo" >Eventos</b-nav-item> -->
        <b-nav-item   href="/#reservaciones"  > Reservaciones</b-nav-item>
                <b-nav-item   href="/#franquicia"  > Franquicias</b-nav-item>
         <b-nav-item  href="/#sucursales"  >Sucursales</b-nav-item>
         <b-nav-item  href="/#contacto" >Contacto</b-nav-item>
        <!-- <b-nav-item   :to="{name: 'About' }"> about</b-nav-item>
        <b-nav-item   :to="{name: 'Home' }"> home</b-nav-item> -->

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


export default {
  name: 'app',
  components:{
    
    
  },
  
}

</script>
