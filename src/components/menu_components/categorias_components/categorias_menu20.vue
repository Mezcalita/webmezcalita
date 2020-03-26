<template>

    <div  v-if="tab==0" class="container text-center mt-4 " style="max-width:1920px;" > 


<div v-if="subtab==0">
<tacos></tacos>
  </div>
<div v-if="subtab==1">
<tostadas></tostadas>
  </div>
<div v-if="subtab==2">
<tortitas></tortitas>
  </div>
 <div v-if="subtab==3">
<sopes></sopes>
  </div>
<div v-if="subtab==4">
<botanas></botanas>
  </div>
<div v-if="subtab==5">
<postres></postres>
  </div>
<div v-if="subtab==6">
<snacks></snacks>
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
      snacks

    },
     computed:
    {
      ...mapState(['subtab','tab'])
    }
}
</script>