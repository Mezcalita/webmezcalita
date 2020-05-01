<template>
    <div class="container text-center" style="max-width:1920px;"> 
    
                <h5 id="tituloc"  >Siguenos en Instagram</h5>
                <h5 class="rectangulo"  ></h5>
                  <h5 id="parrafoa"  >El mejor contenido de <b>La Mezcalita</b> al momento</h5>


<br>


     <b-row cols="2" cols-md="4" no-gutters>

    <b-col v-for="(item, index) in carrusel" 
         :key="index"  >
   <a href="https://www.instagram.com/lamezcalitamx/"  target="_blank"  @mouseout="dontshow()" > <img class=" card-img  " v-if="id == index" :src="item.instagram"
 ></a>      
  
   <img class="card-img"  v-if="id != index" :src="item.imagen"  
   @mouseover="showhover(index)"  >
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