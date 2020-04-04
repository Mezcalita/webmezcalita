<template>
    <div class="container  text-center mt-4" style="max-width:1920px;background-color: black;">
<div class="container text-center" style="max-width:800px">
<carousel  :nav="false" :dots="false" :autoplay="false" :responsive="{0:{items:2, stagePadding:50},578:{items:9},1366:{items:9},1920:{items:9}}">
     <div v-for="tipo in tipos_destilado" 
                     :key="tipo.id"  >
                         <a class="subtab" 
                         :class="{subtabclick: tipodes === tipo}" 
                         @click="activarsubtabdes(tipo)"
                          href="#menu_mezcalita" >
                         {{tipo}}</a>
     </div>
       </carousel>
</div>
<br>
  <div v-for="destilado in destilados " :key="destilado.id"> 
  <h5 class="text-center" id="parrafob" v-if="destilado.tipo === tipodes"  >{{destilado.nombre}}</h5>

  </div>


</div>

</template>
<script>
import {mapState, mapMutations} from 'vuex';
import carousel from 'vue-owl-carousel';

export default {
    name: 'destilados',
    components:
    {
      carousel
    },
     computed:
    {
      ...mapState(['destilados','tipos_destilado','subtabdes','tipodes'])
    },
     methods:
     { 
    ...mapMutations(['activarsubtabdes']),

    }
}
</script>