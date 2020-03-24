<template>
 <div class="container-fluid d-flex  " id="deportes">
           
             <div class="container text-center mt-4 " style="max-width:1920px;" > 
          <h5 id="tituloc"  >deportes</h5>
          <h5 class="rectangulo"></h5>
         
           <br>
   <carousel id="carouseldeportes"   :nav="false" :dots="false" :autoplay="true" :responsive="{0:{items:1, stagePadding:50},578:{items:2, stagepadding:100},1366:{items:3},1920:{items:4}}">

<carousel-item v-for="deporte in deportes" 
                     :key="deporte.id_deporte"  >
<div>
  <b-card no-body class="overflow-hidden mt-3 ml-2" style="max-width: 400px;" border-0 bg-variant="transparent">
    <b-row >
      <b-col md="6" class="nomovil" >
        <b-card-img :src="deporte.imagen_deporte" class="rounded-0 card-img"></b-card-img>
      </b-col>
      <b-col md="6">
          <b-card-text > 
          <p id="titulodeporte">{{deporte.fecha}}</p>
          <h5 id="parrafoc">{{deporte.titulo}}</h5>
          <h5 id="parrafoc">{{deporte.hora}}</h5>
          </b-card-text>
      </b-col>
    </b-row>
  </b-card>
</div>
</carousel-item>


</carousel>
 
  </div>

  
</div>       


</template>
<script>
import carousel from 'vue-owl-carousel'

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