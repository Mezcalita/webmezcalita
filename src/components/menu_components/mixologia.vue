<template>
<carousel :autoplay="true" :nav="false" :dotsEach="true" :autoplayHoverPause="true" :autoplayTimeout="10000" :responsive="{0:{items:1},578:{items:2},1366:{items:3}}">

<div v-for="mix in mixologia" 
                     :key="mix.id"  >
<div>
  <b-card no-body class="overflow-hidden " style="max-width: 640px;" bg-variant="transparent">
    <b-row  >

      <b-col md="6" >
        <img :src="mix.imagen" class="rounded-0" style="width:100%">
      </b-col>
      <b-col md="6" >
          <b-card-text>
          
        
          <p id="tituloproducto">{{mix.nombre}} {{mix.precio}}</p>
          <h5 id="parrafob">{{mix.descripcion}}</h5>
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
    name: 'mixologia',
     computed:
    {
      ...mapState(['mixologia'])
    },
   
   components:
    { 
      carousel 
    }
}
</script>