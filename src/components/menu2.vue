<template>
    <div class="container-fluid" style="background-color: black;">
   <div class="container-fluid "   id="menu">

    <div class="container text-center" style="max-width:800px">
   
              <h5 id="tituloc" >menu</h5>
                <h5 class="rectangulo"  ></h5>
       <carousel   :nav="false" :dots="false" :autoplay="false" :responsive="{0:{items:2, stagePadding:40},578:{items:5},1366:{items:5},1920:{items:5}}">
     <carousel-item v-for="(categoria, index) in categorias_principal" 
                     :key="categoria.id"  >

                         <button class="tab" 
                         :class="{tabclick: tab==index}" 
                         @click="activartab(index)"
                          href="#menu_mezcalita" >
                           <b-row no-gutters>
      <b-col md="2">
        <img :src="categoria.icono" width="17px" height="17px">
      </b-col>
      <b-col md="9">
      
          <b-card-text>
          {{categoria.nombre}}
          </b-card-text>
      </b-col>
    </b-row>
    </button>
     </carousel-item>
       </carousel>
      <!-- <ul class="nav justify-content-center mb-1 "  >
  <li class="nav-item " >
    <a class="nav-link active tab" :class="{tabclick: tab==1}" @click="activartab(1)" href="#menu_mezcalita" >Menu de 20</a>
  </li>
  <li class="nav-item ml-4">
    <a class="nav-link tab" :class="{tabclick: tab==2}"  @click="activartab(2)" href="#menu_mezcalita"   >Especiales</a>
  </li>
    <li class="nav-item ml-4">
    <a class="nav-link tab " :class="{tabclick: tab==3}"  @click="activartab(3)" href="#menu_mezcalita"  >Bebidas</a>
  </li>
    <li class="nav-item ml-4">
    <a class="nav-link tab" :class="{tabclick: tab==4}"  @click="activartab(4)" href="#menu_mezcalita"  >Mixología</a>
  </li>
    <li class="nav-item ml-4">
    <a class="nav-link tab" :class="{tabclick: tab==5}"  @click="activartab(5)" href="#menu_mezcalita"  >Destilados</a>
  </li>
</ul> -->

    

  </div>
    </div>

    <div class="container  text-center mt-4" style="max-width:1920px;background-color: black;">

<div v-if="tab==0" class="container  text-center"  style="max-width:800px">
       <carousel  :nav="false" :dots="false" :autoplay="false" :responsive="{0:{items:3, stagePadding:40},578:{items:7},1366:{items:7},1920:{items:7}}">
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


export default {
    name: 'menu2', 
  
    components:{
c_20,
        especiales,
        bebidas,
        mixologia,
        destilados,
        carousel

    },
    computed:
    {
      ...mapState(['tab','subtab','cat_menu20','categorias_principal'])
    },
    methods:
  { 
    ...mapMutations(['activartab','activarsubtab'])


    }

    
}

</script>
