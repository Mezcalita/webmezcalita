<template>
   <div class="container-fluid "  >
 <div class="container text-center nomovil " style="max-width:1200px;"> 
<b-row cols="1" cols-md="2" > 
<b-col md="4"> 
      <h5 id="tituloc" class="text-left ">sucursales</h5>
  <ul class="nav flex-column text-left"  >
<li class=" nav-item  " v-for="(sucursal, index) in sucursales" 
                     :key="sucursal.sucid" >
       <a class="nav-link tabsuc" :class="{tabsucclick: tabsuc==index}"   @click="activartabsuc(index)"  href="#sucursales"  >
                <i class="fas fa-map-marker-alt"></i>La Mezcalita      {{sucursal.nombre}} 
                       <h5 class="sucdireccion" :class="{sucdireccionclick: tabsuc==index}">{{sucursal.direccion}}</h5>
                       <h5 class="sucdireccion" :class="{sucdireccionclick: tabsuc==index}"> 
                         <a class="sucdireccion" :class="{sucdireccionclick: tabsuc==index}" :href="sucursal.wplink" target="_blank"><i class="fab fa-whatsapp"></i> {{sucursal.telefono}}</a></h5>
                        <h5 class="sucdireccion" :class="{sucdireccionclick: tabsuc==index}"> 
                         <a class="sucdireccion" :class="{sucdireccionclick: tabsuc==index}" :href="sucursal.fblink" target="_blank"><i class="fab fa-facebook"></i> La Mezcalita {{sucursal.nombre}}</a></h5>
                     </a>
      
                     </li>
  </ul>
</b-col>



<b-col md="6" class="mt-4">
<b-row cols="1" md="2" no-gutters  v-for="(sucursal, index) in sucursales" 
                     :key="sucursal.sucid"> 
<b-col md="5" >
 <img v-if="tabsuc==index" :src="sucursal.imagen" width="233" >
</b-col>


<b-col md="6">

<iframe  :src="sucursal.maps" 
v-if="tabsuc==index"
class="nomovil" width="580" height="355" 
frameborder="0" style="border:0;" 
allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

</b-col>

</b-row>
</b-col>
</b-row>
    </div>



<!-- version movil -->

  <div class="container text-center simovil" > 
<b-row cols="1" > 
<b-col md="6"> 
      <h5 id="tituloc" class="text-center ">sucursales</h5>
      <br>
      <select v-model="selected">
                <option disabled value="">Escoge tu sucursal</option>
        <option  v-for="sucursal in sucursales" 
                     :key="sucursal.id"  >                        
                     {{sucursal.nombre}}
                     </option>
      </select>
      <br>
<div v-for="sucursal in sucursales" 
                     :key="sucursal.sucid" >
        
       <p class="sucdireccionclick"  v-if="selected === sucursal.nombre || (predeterminado === sucursal.nombre &&  selected === '') " >
            <br> {{sucursal.direccion}}<br>
          <a  class="sucdireccionclick" :href="sucursal.wplink" target="_blank"><i class="fab fa-whatsapp"></i> {{sucursal.telefono}}</a>
            <br>               
             <a  class="sucdireccionclick" :href="sucursal.fblink" target="_blank"><i class="fab fa-facebook"></i>La mezcalita {{sucursal.nombre}}</a>
</p>
  </div>
</b-col>



<b-col md="6">

<div class="container" v-for="sucursal in sucursales" 
                     :key="sucursal.sucid" >
          <transition name="fade">
<b-embed 
class=""
v-if="selected === sucursal.nombre || (predeterminado === sucursal.nombre &&  selected === '')"
    type="iframe"
    aspect="1by1"
    :src="sucursal.maps"
    allowfullscreen
  ></b-embed>
            </transition>

</div>



</b-col>
</b-row>
    </div>






</div>
</template>
<script>
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'sucursales',
    data() {
    return {
       selected: '',
       predeterminado: 'Tetlan'
    };
  },

     computed:
    {
      ...mapState(['sucursales','tabsuc','imagen_sucursal'])
    },
    methods:
  { 
    ...mapMutations(['activartabsuc']),
    actualizarpredeterminado(eleccion)
    {
      this.predeterminado = eleccion;

    }

    }

}
</script>