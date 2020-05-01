<template>
    <div class="container-fluid" style="background-color: black;">
   <div class="container-fluid "   id="menu">

    <div class="container text-center" style="max-width:800px">
   
              <div class="container transparencia " style="max-width:720px">
    
      <ul class="list-group bg-transparent border-0  pt-2" >
        <li class="list-group-item  bg-transparent border-0  text-center ">
          <h5 id="titulob">Pide a domicilio</h5>
<h5 id="subtituloa" >
    Pide tus platillos y bebidas favoritas de <b>La Mezalita</b> desde la comodidad de tu casa, oficina o reunion! <img src="\imagenes\party-icon.png" width="30px">
</h5>

        </li>
    
        <li class="list-group-item  bg-transparent border-0 text-center ">
          <select v-model="selected" class="mb-2" >
                    <option disabled value="Escoge tu sucursal">Escoge tu sucursal</option>
        <option  v-for="sucursal in sucursales" 
                     :key="sucursal.id" >                        
                     {{sucursal.nombre}}
                     </option>
      </select>
        <button class="buttonrojo ml-2">Pedir a domicilio</button>

        </li>
        
      </ul>
      
    

  </div>
              <br>
                <h5 class="rectangulo mt-4"  ></h5>
                <div class="nomovil">
<ul class="nav justify-content-center "> 
    <li class="nav-item ml-4 "   v-for="(categoria, index) in categorias_principal" 
                     :key="categoria.id"  >

                         <a  href="#menu_mezcalita"  class="tab"
                         :class="{tabclick: tab==index}" 
                         @click="activartab(index)"
                        >
                           
        <img :src="categoria.icono" width="20px" height="17px">
      
      
          {{categoria.nombre}}
  
    </a>
        </li>
        </ul>
                </div>
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
    <div class="container nomovil text-center mt-4 mb-4" style="max-width:1920px;background-color: black;">
<div v-if=" tab==0 " >
<div class="container  text-center"  style="max-width:1000px">
          <ul class="nav justify-content-center "> 
    <li class="nav-item ml-4 "  v-for="(cat20, index) in cat_menu20" 
                     :key="cat20.id"  >
                
                         <a class="subtab  ml-4 " 
                         :class="{subtabclick: subtab==index}" 
                         @click="activarsubtab(index)"
                          href="#menu_mezcalita" >
                         {{cat20.nombre}}</a>
       </li>
      </ul>
</div>
 <c_20></c_20>
</div>

<div v-if="tab==1">
  <bebidas></bebidas>
</div>
<div v-if="tab==2">
    <mixologia></mixologia>

</div>
<div v-if="tab==3">
    <destilados></destilados>

</div>
<br>
<!--
<br>
  <h5 id="parrafoa"  >¡Lo llevamos hasta tu casa!</h5>
<br>
      <img src="iconos/menu/boton-rappi.svg" width="220" >
  -->
    </div>


 <!-- version movil -->
 <div class="container simovil text-center mt-4" style="max-width:1920px;background-color: black;">
 <div v-if="selected === 'Comida'"  >
<div class="container  text-center"  style="max-width:1000px">
       <carousel  :nav="false" :dots="false" :autoplay="false" :responsive="{0:{items:2, stagePadding:50},578:{items:8},1366:{items:8},1920:{items:8}}">
     <div v-for="(cat20, index) in cat_menu20" 
                     :key="cat20.id"  >
                
                         <a class="subtab" 
                         :class="{subtabclick: subtab==index}" 
                         @click="activarsubtab(index)"
                          href="#menu_mezcalita" >
                         {{cat20.nombre}}</a>
     </div>
       </carousel>

</div>
 <c_20></c_20>
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
 
 import bebidas from '@/components/menu_components/bebidas.vue'
 import mixologia from '@/components/menu_components/mixologia.vue'
 import destilados from '@/components/menu_components/destilados.vue'
 import combobox from '@/components/menu_components/combobox.vue'


export default {
    name: 'menu2', 
    data() {
    return {
       selected: 'Comida'
    };
  },
    components:{
c_20,
        bebidas,
        mixologia,
        destilados,
        carousel,
        combobox

    },
    computed:
    {
      ...mapState(['tab','subtab','cat_menu20','categorias_principal','sucursales'])
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
