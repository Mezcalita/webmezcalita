<template>
<div class="container text-center">
<b-row cols="1" cols-md="2" no-gutters  >
<b-col  v-for="tipo in tipos_destilado" 
                     :key="tipo.id"  >
           <h5 id="titulob">{{tipo}}</h5>
  <div v-for="destilado in destilados " :key="destilado.id"> 
  <h5 class="text-center" id="parrafob" v-if="destilado.tipo === tipo"  >{{destilado.nombre}}</h5>

  </div>

  
</b-col>
<br>





</b-row>
</div>

</template>
<script>
import {mapState} from 'vuex';

export default {
    name: 'destilados',
     computed:
    {
      ...mapState(['destilados','tipos_destilado'])
    },
}
</script>