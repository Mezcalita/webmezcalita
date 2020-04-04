<template>
   <div class="container-fluid "   >
 <div class="container text-center sucursales " style="max-width:1200px;"> 
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
                         <a class="sucdireccion" :class="{sucdireccionclick: tabsuc==index}" :href="sucursal.wplink"><i class="fab fa-whatsapp"></i> {{sucursal.telefono}}</a></h5>
                        <h5 class="sucdireccion" :class="{sucdireccionclick: tabsuc==index}"> 
                         <a class="sucdireccion" :class="{sucdireccionclick: tabsuc==index}" :href="sucursal.fblink"><i class="fab fa-facebook"></i> La Mezcalita{{sucursal.nombre}}</a></h5>
                     </a>
      
                     </li>
  </ul>
</b-col>


<b-col class="mt-4" md="6">
<b-row cols="1" md="2" no-gutters> 

<b-col md="5" >
 <img src="imagenes/sucursales/sucursal.jpg" width="100%" height="375" >
</b-col>


<b-col md="6">
<div v-for="(sucursal, index) in sucursales" 
                     :key="sucursal.sucid" >
<iframe  :src="sucursal.maps" 
v-if="tabsuc==index"
class="nomovil" width="170%" height="375" 
frameborder="0" style="border:0;" 
allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>


</div>
</b-col>
</b-row>
</b-col>
</b-row>
    </div>



<!-- version movil -->

  <div class="container text-center sucursalesmovil" > 
<b-row cols="1" > 
<b-col md="6"> 
      <h5 id="tituloc" class="text-center ">sucursales</h5>
      <select v-model="selected">
                <option disabled value="">Escoge tu sucursal</option>
        <option  v-for="sucursal in sucursales" 
                     :key="sucursal.id" >                        
                     {{sucursal.nombre}}
                     </option>
      </select>
<div v-for="sucursal in sucursales" 
                     :key="sucursal.sucid" >
          <transition name="fade">
       <p class="sucdireccionclick"  v-if="selected === sucursal.nombre" >
            <br> {{sucursal.direccion}}<br>
          <a  class="sucdireccionclick" :href="sucursal.wplink"><i class="fab fa-whatsapp"></i> {{sucursal.telefono}}</a>
            <br>               
             <a  class="sucdireccionclick" :href="sucursal.fblink"><i class="fab fa-facebook"></i>La mezcalita {{sucursal.nombre}}</a>
</p>
          </transition>
  </div>
</b-col>



<b-col md="6">

<div class="container" v-for="sucursal in sucursales" 
                     :key="sucursal.sucid" >
          <transition name="fade">
<b-embed 
class=""
v-if="selected === sucursal.nombre"
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
       selected: 'Tetlan'
    };
  },

     computed:
    {
      ...mapState(['sucursales','tabsuc'])
    },
    methods:
  { 
    ...mapMutations(['activartabsuc'])


    }

}
</script>