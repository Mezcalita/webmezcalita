<template>
 <carousel :autoplay="true" :nav="false" :dotsEach="true" :autoplayHoverPause="true" :autoplayTimeout="10000" :responsive="{0:{items:1},578:{items:2},1366:{items:3}}">

<div v-for="bebida in bebidas" 
                     :key="bebida.id"  >
<div>
  <b-card no-body class="overflow-hidden ml-1" style="max-width: 640px;" bg-variant="transparent">
    <b-row  >
      <b-col md="6" >
        <img :src="bebida.imagen" class="rounded-0" style="width:100%">
      </b-col>
      <b-col md="6" >
          <b-card-text>
          <p id="tituloproducto">{{bebida.nombre}} {{bebida.precio}} </p>
          <h5 id="parrafoc">{{bebida.precio1}}</h5>
          <h5 id="parrafob">{{bebida.descripcion1}}</h5>
           <h5 id="parrafoc">{{bebida.precio2}}</h5>
          <h5 id="parrafob">{{bebida.descripcion2}}</h5>
           <h5 id="parrafoc">{{bebida.precio3}}</h5>
          <h5 id="parrafob">{{bebida.descripcion3}}</h5>
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
    name: 'bebidas',
     computed:
    {
      ...mapState(['bebidas'])
    },
   
   components:
    { 
      carousel 
    }
}
</script>