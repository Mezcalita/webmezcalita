<template>
    <div class="container text-center " style="width:100%;max-width:1920px;"> 
    
                <h5 id="tituloc"  >promociones</h5>
                <h5 class="rectangulo"  ></h5>
<br>
                 <!-- <h5 id="subtituloa"  >¡Promociones todos los días!</h5>
<br>
<br>
-->
<b-row > 
 <b-col cols="3"  class="nomovil">
   <img :src="imagen" class="infopromo ">
 </b-col>
 <b-col cols="9"  class="nomovil">
     <b-row cols="3" no-gutters>

    <b-col v-for="promo in promos" 
             :key="promo.promoid"
           >
   <a ><img  :src="promo.preview_imagen" class="imagenpromo "  @mouseover="updatepreview(promo.info_imagen)"> </a>

   </b-col>
  
  </b-row>
 </b-col>
</b-row>

<div class="simovil">
<carousel    :nav="false" :dots="true" :autoplay="true" :responsive="{0:{items:1}, 578:{items:2, stagePadding:50}}">

<div v-for="promo in promos" 
                     :key="promo.id"  >
<div>
<img  :src="promo.info_imagen" class="infopromo "> 

</div>
</div>


</carousel>

</div>
    </div>
      
</template>
<script>
import carousel from 'vue-owl-carousel';

import {mapState} from 'vuex';

export default {
    name: 'promociones',
    data(){
    return {
      imagen: 'imagenes/imagenes promo/info/info-lunes.jpg'
    }
    },
     components:
    { 
      carousel 
    },
computed:{
      ...mapState(['promos'])
    },
    methods:{
        updatepreview(selectedpreview)
        {
            this.imagen = selectedpreview
        }
    }
}
</script>