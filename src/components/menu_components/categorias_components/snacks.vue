<template>
 <carousel :autoplay="true" :nav="false" :dots="true" :autoplayHoverPause="true" :autoplayTimeout="10000" :responsive="{0:{items:1},578:{items:2},1366:{items:3}}">

<div v-for="snack in snacks" 
                     :key="snack.id"  >
<div>
  <b-card no-body class="overflow-hidden ml-1" style="max-width: 640px;" bg-variant="transparent">
    <b-row  >
      <b-col md="6" >
        <img :src="snack.imagen" class="rounded-0" style="width:100%">
      </b-col>
      <b-col md="6" >
          <b-card-text>
          <p id="tituloproducto">{{snack.nombre}} {{snack.precio}} </p>
          <h5 id="parrafob">{{snack.descripcion}}</h5>
          </b-card-text>
      </b-col>
    </b-row>
  </b-card>
</div>
</div>



</carousel>
    
</template>
<script>
import carousel from 'vue-owl-carousel'
import {mapState} from 'vuex';

export default {
    name: 'snacks',
     computed:
    {
      ...mapState(['snacks','subtab'])
    },
   
   components:
    { 
      carousel 
    }
}
</script>