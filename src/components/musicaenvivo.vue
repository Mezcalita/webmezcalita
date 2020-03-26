<template>
    
  
    
       <div class="container-fluid d-flex  " id="musicaenvivo">
           
             <div class="container text-center mt-4 " style="max-width:1920px;" > 
          <h5 id="tituloc"  >música en vivo</h5>
          <h5 class="rectangulo"></h5>
           <select id="select" class="buttonbordeblanco mb-4">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
   <carousel  :margin="3" :nav="false" :dots="true" :autoplay="true" :responsive="{0:{items:1},768:{items:2},1366:{items:3}}">

<carousel-item v-for="musica in musicaenvivo" 
                     :key="musica.id_musica"  >
   <b-col >
       <p class="text-center" id="parrafoa">{{musica.fecha}}</p>
        <img :src="musica.imagen_musica" class="rounded-0 " width="100%" >
   </b-col>
</carousel-item>



</carousel>
 

   
  </div>
</div>   
</template>
<script>
import carousel from 'vue-owl-carousel';
import {mapState} from 'vuex';

export default {
    name: 'musicaenvivo',
     computed:
    {
      ...mapState(['musicaenvivo'])
    },
   components:
    { 
      carousel 
    }
}
</script>