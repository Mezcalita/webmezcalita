<template>
 <div class="container  text-center" >
            <h5 id="tituloc"  >deportes</h5>
          <h5 class="rectangulo"></h5>
          <br>
           <h5 id="parrafoa"  >¡Sigue los mejores eventos deportivos minuto a minuto!</h5>
 <div class="nomovil">
 <div class="container d-flex mt-4 " id="deportes"   > 
         
          <br>
 <br>
     <b-row  cols="3"   no-gutters  style="max-width:1200px;">

<b-col  v-for="deporte in deportes" 
                     :key="deporte.id_deporte"  >
<div>
  <b-card no-body class="overflow-hidden mt-4  border-0" style="max-width: 400px;"  bg-variant="transparent" >
    <b-row >
      <b-col md="6" class="nomovil" >
        <img :src="deporte.imagen_deporte" class="rounded-0">
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
</b-col>
     </b-row>


 
  </div>
 </div>
 <!-- version movil -->
 <div class="simovil">
<carousel  id="carouseldeportes"   :nav="false" :dots="true" :autoplay="true" :responsive="{0:{items:1, stagePadding:75},578:{items:2},1366:{items:3},1920:{items:4}}">

<div v-for="deporte in deportes" 
                     :key="deporte.id_deporte"  >
<div>
  <b-card no-body class="overflow-hidden mt-3 ml-2" style="max-width: 400px;" border-0 bg-variant="transparent">
    <b-row >
      <b-col md="6"  >
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
</div>


</carousel>
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