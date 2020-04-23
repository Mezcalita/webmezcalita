<template>
 
<carousel :autoplay="true" :nav="false" :dots="true"  :responsive="{0:{items:1},578:{items:2},1366:{items:3}}">

<div v-for="destilado in destilados " :key="destilado.id"  >
<div>
  <b-card no-body class="overflow-hidden " style="max-width: 640px;" bg-variant="transparent">
    <b-row  >
      <b-col md="6" >
        <img src="" class="rounded-0" style="width:100%">
      </b-col>
      <b-col md="6" >
          <b-card-text>
          <p id="tituloproducto">{{destilado.nombre}}  </p>
          <h5 id="parrafob">{{destilado.marcas}}</h5>
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