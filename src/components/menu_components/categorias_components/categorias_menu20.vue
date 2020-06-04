<template>

    <div  class="container text-center mt-4 " style="max-width:1920px;" > 


<div v-if="subtab==0">
<tacos></tacos>
  </div>

<div v-if="subtab==1">
  <especiales></especiales>
  </div>

<div v-if="subtab==2">
  <botanas></botanas>
  </div>

 <div v-if="subtab==3">
   <tostadas></tostadas>
  </div>

<div v-if="subtab==4">
<sopes></sopes>
  </div>

<div v-if="subtab==5">
<tortitas></tortitas>
  </div>

 <div v-if="subtab==6">
<postres></postres>
  </div> 
  
  </div>
</template>
<script>

import carousel from 'vue-owl-carousel';
import {mapState} from 'vuex';


 import tacos from '@/components/menu_components/categorias_components/tacos.vue'
 import tostadas from '@/components/menu_components/categorias_components/tostadas.vue'
  import tortitas from '@/components/menu_components/categorias_components/tortitas.vue'
  import sopes from '@/components/menu_components/categorias_components/sopes.vue'
  import botanas from '@/components/menu_components/categorias_components/botanas.vue'
  import postres from '@/components/menu_components/categorias_components/postres.vue'
  import snacks from '@/components/menu_components/categorias_components/snacks.vue'
  import especiales from '@/components/menu_components/categorias_components/especiales.vue'



export default {
    name: 'categorias_menu20',
    components:
    {
      tacos,
      tostadas,
      tortitas,
      sopes,
      botanas,
      postres,
      snacks,
      especiales

    },
     computed:
    {
      ...mapState(['subtab','tab'])
    }
}
</script>