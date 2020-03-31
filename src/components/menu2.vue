<template>
    <div class="container-fluid" style="background-color: black;">
   <div class="container-fluid "   id="menu">

    <div class="container text-center" style="max-width:800px">
   
              <h5 id="tituloc" >menu</h5>
                <h5 class="rectangulo"  ></h5>
       <carousel class="nomovil" :dots="false" :autoplay="false" :responsive="{0:{items:2, stagePadding:10},578:{items:5},1366:{items:5},1920:{items:5}}">
     <carousel-item v-for="(categoria, index) in categorias_principal" 
                     :key="categoria.id"  >

                         <button class="tab" 
                         :class="{tabclick: tab==index}" 
                         @click="activartab(index)"
                          href="#menu_mezcalita" >
                           <b-row cols="2" no-gutters>
      <b-col sm="2"  >
        <img :src="categoria.icono" width="20px" height="17px">
      </b-col>
      <b-col sm="9">
      
          {{categoria.nombre}}
      </b-col>
    </b-row>
    </button>
     </carousel-item>
       </carousel>
       <!-- version movil -->
<div class="simovil ">
<select v-model="selected">
        <option  v-for="categoria in categorias_principal" 
                     :key="categoria.id" >   
                     {{categoria.nombre}}
                     </option>
      </select>

</div>

 

  </div>



    </div>

    <div class="container nomovil text-center mt-4" style="max-width:1920px;background-color: black;">
<div v-if=" tab==0 " >
<div class="container  text-center"  style="max-width:800px">
       <carousel  :nav="false" :dots="false" :autoplay="false" :responsive="{0:{items:2, stagePadding:50},578:{items:7},1366:{items:7},1920:{items:7}}">
     <carousel-item v-for="(cat20, index) in cat_menu20" 
                     :key="cat20.id"  >
                
                         <a class="subtab" 
                         :class="{subtabclick: subtab==index}" 
                         @click="activarsubtab(index)"
                          href="#menu_mezcalita" >
                         {{cat20.nombre}}</a>
     </carousel-item>
       </carousel>
</div>
 <c_20></c_20>
</div>

<div v-if="tab==1">
  <especiales></especiales>
</div>
<div v-if="tab==2">
  <bebidas></bebidas>
</div>
<div v-if="tab==3">
  <mixologia></mixologia>
</div>
<div v-if="tab==4">
  <destilados></destilados>
</div>
<br>
  <h5 id="parrafoa"  >¡Lo llevamos hasta tu casa!</h5>
      <img src="iconos/menu/boton-rappi.svg" width="161" >
    </div>


 <!-- version movil -->
 <div class="container simovil text-center mt-4" style="max-width:1920px;background-color: black;">
 <div v-if="selected === 'Menu 20'"  >
<div class="container  text-center"  style="max-width:800px">
       <carousel  :nav="false" :dots="false" :autoplay="false" :responsive="{0:{items:2, stagePadding:50},578:{items:7},1366:{items:7},1920:{items:7}}">
     <carousel-item v-for="(cat20, index) in cat_menu20" 
                     :key="cat20.id"  >
                
                         <a class="subtab" 
                         :class="{subtabclick: subtab==index}" 
                         @click="activarsubtab(index)"
                          href="#menu_mezcalita" >
                         {{cat20.nombre}}</a>
     </carousel-item>
       </carousel>

</div>
 <c_20></c_20>
 </div>
<div v-if="selected === 'Especiales'">
  <especiales></especiales>
</div>
<div v-if="selected === 'Bebidas'">
  <bebidas></bebidas>
</div>
<div v-if="selected === 'Mixología'">
  <mixologia></mixologia>
</div>
<div v-if="selected === 'Destilados'">
  <destilados></destilados>
</div>
<br>
 <h5 id="parrafoa"  >¡Lo llevamos hasta tu casa!</h5>
  <h5 id="parrafoa"  ><img  src="iconos/menu/boton-rappi.svg" width="161" ></h5>
   
    </div>
    
    </div>
</template>
<script>
import carousel from 'vue-owl-carousel';

import {mapState, mapMutations} from 'vuex';
 import c_20 from '@/components/menu_components/categorias_components/categorias_menu20.vue'
 
 import especiales from '@/components/menu_components/especiales.vue'
 import bebidas from '@/components/menu_components/bebidas.vue'
 import mixologia from '@/components/menu_components/mixologia.vue'
 import destilados from '@/components/menu_components/destilados.vue'
 import combobox from '@/components/menu_components/combobox.vue'


export default {
    name: 'menu2', 
    data() {
    return {
       selected: 'Menu 20'
    };
  },
    components:{
c_20,
        especiales,
        bebidas,
        mixologia,
        destilados,
        carousel,
        combobox

    },
    computed:
    {
      ...mapState(['tab','subtab','cat_menu20','categorias_principal'])
    },
    methods:
  { 
    ...mapMutations(['activartab','activarsubtab']),
     setNewSelectedOption(selectedOption) {
      this.config.placeholder = selectedOption.value;

    }


    }

    
}

</script>
