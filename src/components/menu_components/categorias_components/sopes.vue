<template>
 <carousel :autoplay="true" :nav="false" :dots="true"  :responsive="{0:{items:1},578:{items:2},1366:{items:3}}">

<div v-for="sope in sopes" 
                     :key="sope.id"  >
<div>
  <b-card no-body class="overflow-hidden ml-1" style="max-width: 640px;" bg-variant="transparent">
    <b-row  >
      <b-col md="6" >
        <img :src="sope.imagen" class="rounded-0" style="width:100%">
      </b-col>
      <b-col md="6" >
          <b-card-text>
          <p id="tituloproducto">{{sope.nombre}}  </p>
          <h5 id="parrafob">{{sope.descripcion}}</h5>
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
    name: 'sopes',
     computed:
    {
      ...mapState(['sopes','subtab'])
    },
   
   components:
    { 
      carousel 
    }
}
</script>