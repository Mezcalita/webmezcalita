<template>
<div>
 <div class="container  text-center" >
            <h5 id="tituloc"  >deportes</h5>
          <h5 class="rectangulo"></h5>
          <br>
           <h5 id="subtituloa"  >¡Sigue los mejores eventos deportivos minuto a minuto!</h5>
                     <br>
        

 </div>
 <div class="container fluid d-flex  " id="deportes">
   <div class="nomovil container" style="max-width:1366px">
 <div class="container  d-flex text-center  "   id="carouseldeportes"  > 
         <div class="container  "  style="max-width:1200px">
     <b-row  cols="3"  class="mb-2" >

<b-col  class="mb-4" v-for="deporte in deportes" 
                     :key="deporte.id_deporte"  >
<div>
  <b-card no-body class="overflow-hidden  border-0" style="max-width: 380px;"  bg-variant="transparent" >
    <b-row >
      <b-col md="4" class="borderight" >
        <img :src="deporte.imagen_deporte" class="rounded-0">
      </b-col>
      <b-col md="5">
          <b-card-text > 
          <h5 id="titulodeporte">{{deporte.fecha}}</h5>
          <h5 id="parrafoc">{{deporte.titulo}}</h5>
          <h5 id="parrafoc">{{deporte.hora}}</h5>
          </b-card-text>
      </b-col>
    </b-row>
  </b-card>
</div>
</b-col>
     </b-row>

         </div>
 </div>
   </div>
 <!-- version movil -->
 <div class="simovil container text-center" id="carouseldeportes">
<carousel     :nav="false" :dots="true" :autoplay="true" :responsive="{0:{items:1, stagePadding:20},578:{items:2,stagePadding:20},1024:{items:3},1920:{items:4}}">

<div v-for="deporte in deportes" 
                     :key="deporte.id_deporte"  >
<div>
  <b-card no-body class="overflow-hidden mt-3 " style="max-width: 240px;" border-0 bg-variant="transparent">
    <b-row >
      <b-col class="borderight" >
        <img :src="deporte.imagen_deporte" class="rounded-0  ">
      </b-col>
      <b-col >
          <b-card-text > 
          <h5 id="titulodeporte">{{deporte.fecha}}</h5>
          <h5 id="parrafoc">{{deporte.titulo}}</h5>
          <h5 id="parrafoc">{{deporte.hora}}</h5>
          </b-card-text>
      </b-col>
    </b-row>
  </b-card>
</div>


</div>


</carousel>
 </div>
  </div>
   </div>




</template>
<script>
import carousel from 'vue-owl-carousel';

import {mapState, mapMutations} from 'vuex';

export default {
    name: 'deportes',
      computed:
    {
      ...mapState(['deportes','cat_deportes','tabdep'])
    },
     methods:
  { 
    ...mapMutations(['activartab','activartabdep'])


    },
     components:
    { 
      carousel 
    }
}



</script>