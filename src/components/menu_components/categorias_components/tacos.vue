<template>
 <carousel :autoplay="true" :nav="false" :dots="true"  :responsive="{0:{items:1},578:{items:2},1366:{items:3}}">

<div v-for="taco in tacos" 
                     :key="taco.id_taco"  >
<div>
  <b-card no-body class="overflow-hidden ml-1" style="max-width: 640px;" bg-variant="transparent">
    <b-row  >
      <b-col md="6" >
        <img :src="taco.imagen_taco" class="rounded-0" style="width:100%">
      </b-col>
      <b-col md="6" >
          <b-card-text>
          <p id="tituloproducto">{{taco.nombre_taco}}  {{taco.precio}}</p>
          <h5 id="parrafob">{{taco.descripcion_taco}}</h5>
          </b-card-text>
      </b-col>
    </b-row>
  </b-card>
</div>
</div>



</carousel>
    
</template>
<script>
import carousel from 'vue-owl-carousel';
import {mapState} from 'vuex';

export default {
    name: 'tacos',
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