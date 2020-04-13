<template>
    
  
       <div class="container-fluid d-flex  " id="musicaenvivo">
           
             <div class="container text-center  " style="max-width:1920px;" > 
          <h5 id="tituloc"  >música en vivo</h5>
          <h5 class="rectangulo"></h5>
         
         <select v-model="selected" class="mb-3">
        <option disabled value="">Escoge tu sucursal</option>
        <option  v-for="sucursal in sucursales" 
                     :key="sucursal.id" >                        
                     {{sucursal.nombre}}
                     </option>
      </select>
     <br>
          <br>
   <carousel  :margin="3" :nav="false" :dots="true" :autoplay="true" :responsive="{0:{items:1},768:{items:2},1366:{items:3}}">

<div v-for="musica in musicaenvivo" 
                     :key="musica.id_musica"  >
   <b-col v-if="selected === musica.sucursal || predeterminado === musica.sucursal">
       <p class="text-center" id="titulomusica">{{musica.fecha}}</p>
        <img :src="musica.imagen_musica" width="100%" >
   </b-col>
</div>


</carousel>
 
   
  </div>
</div>   
</template>
<script>
import carousel from 'vue-owl-carousel';
import {mapState} from 'vuex';
export default {
    name: 'musicaenvivo',
     data() {
    return {
       selected: '',
      predeterminado: 'Tetlan'

    };
  },
     computed:
    {
      ...mapState(['musicaenvivo','sucursales'])
    },
   components:
    { 
      carousel 
    }
}
</script>

