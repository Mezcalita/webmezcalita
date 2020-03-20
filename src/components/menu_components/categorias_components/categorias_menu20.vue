<template>

    <div class="container text-center mt-4 " style="max-width:1920px;" v-if="subtab==0"> 
      
   <carousel  :nav="false" :dots="false" :autoplay="true" :responsive="{0:{items:1},578:{items:2},1366:{items:3},1920:{items:4}}">

<carousel-item v-for="taco in tacos" 
                     :key="taco.id_taco"  >
<div>
  <b-card no-body class="overflow-hidden ml-1" style="max-width: 400px;" bg-variant="transparent">
    <b-row  >
      <b-col md="6" >
        <img :src="taco.imagen_taco" class="rounded-0" style="width:100%">
      </b-col>
      <b-col md="6" >
          <b-card-text>
          <p id="tituloproducto">{{taco.nombre_taco}}        {{taco.precio_taco}} </p>
          <h5 id="parrafob">{{taco.descripcion_taco}}</h5>
          </b-card-text>
      </b-col>
    </b-row>
  </b-card>
</div>
</carousel-item>



</carousel>
 
  </div>
</template>
<script>
import carousel from 'vue-owl-carousel'
import {mapState} from 'vuex';

export default {
    name: 'categorias_menu20',
     computed:
    {
      ...mapState(['tacos','subtab'])
    },
   
   components:
    { 
      carousel 
    }
}
</script>