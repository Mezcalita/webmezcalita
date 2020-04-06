<template>
    <div class="container text-center" style="max-width:1920px;"> 
    
                <h5 id="tituloc"  >el mejor ambiente</h5>
                <h5 class="rectangulo"  ></h5>
                  <h5 id="parrafoa"  >¡Síguenos en nuestras redes sociales!</h5>


<br>


     <b-row cols="2" cols-md="4" no-gutters>

    <b-col v-for="(item, index) in carrusel" 
         :key="index"  >
         
   <div class="carrusel container d-flex " v-if="id == index" :style="{ 'background-image': 'url(' + item.instagram + ')' }" @mouseover="showhover(index)" @mouseout="dontshow()"  >
   </div>
   <div class="carrusel"  v-if="id != index" :style="{ 'background-image': 'url(' + item.imagen + ')' }"  @mouseover="showhover(index)"  @mouseout="dontshow()" >
   </div>
   </b-col>
     </b-row>
    </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    name: 'carrusel',
    data(){
    return { 
      id: -1
    }
    },
    computed:
    {
      ...mapState(['carrusel'])
    },
    methods:
    {
       showhover(selected)
        {
            this.id = selected
        },
        dontshow()
        {
          this.id = -1
        }

    }
}
</script>