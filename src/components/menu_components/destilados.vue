<template>
 
<carousel :autoplay="true" :nav="false" :dotsEach="true" :autoplayHoverPause="true" :autoplayTimeout="10000" :responsive="{0:{items:1},578:{items:2},1366:{items:3}}">

<div v-for="destilado in destilados " :key="destilado.id"  >
<div>
  <b-card no-body class="overflow-hidden " style="max-width: 640px;" bg-variant="transparent">
    <b-row  >
      <b-col md="6" >
        <img :src="destilado.imagen" class="rounded-0" style="width:100%">
      </b-col>
      <b-col md="6" >
          <b-card-text>
 <p id="tituloproducto" style="margin-top:10%">{{destilado.nombre}} </p>
          <h5 id="parrafoc">{{destilado.precio1}}</h5>
          <h5 id="parrafob">{{destilado.descripcion1}}</h5>
           <h5 id="parrafoc">{{destilado.precio2}}</h5>
          <h5 id="parrafob">{{destilado.descripcion2}}</h5>
           <h5 id="parrafoc">{{destilado.precio3}}</h5>
          <h5 id="parrafob">{{destilado.descripcion3}}</h5>
          </b-card-text>
      </b-col>
    </b-row>
  </b-card>
</div>
</div>



</carousel>


</template>
<script>
import {mapState} from 'vuex';
import carousel from 'vue-owl-carousel';

export default {
    name: 'destilados',
    components:
    {
      carousel
    },
     computed:
    {
      ...mapState(['destilados','tipos_destilado'])
    },
     
}
</script>