<template>
    <div class="container-fluid d-flex  " id="reservaciones">
    <div class="container transparencia " style="max-width:720px">
    
      <ul class="list-group bg-transparent border-0  pt-2" >
        <li class="list-group-item  bg-transparent border-0  text-center ">
          <br>
          <br>
          <br>
          <h5 id="titulob">haz tu reservación</h5>
          <br>

<h5 id="parrafoa" style="font-size:21px" >
  ¡No hagas fila y aparta una mesa para que puedas festejar y diviertirte sin esperar!<br>
  Disfruta del mejor ambiente, los platillos mas ricos y las bebidas mas exóticas en tu mezcalita favorita

   
</h5>
<br>
<br>
        </li>
    
        <li class="list-group-item  bg-transparent border-0 text-center ">
          <select v-model="selected" class="mb-2">
                    <option disabled value="">Escoge tu sucursal</option>
        <option  v-for="sucursal in sucursales" 
                     :key="sucursal.id" >                        
                     {{sucursal.nombre}}
                     </option>
      </select>
        <button @click="RedireccionarReserva(selected)" class="buttonrojo ml-2">RESERVA AQUÍ</button>

        </li>
        
      </ul>
      <br>
      <br>
    

  </div>
</div>   
</template>
<script>
import {mapState, mapMutations} from 'vuex';

export default {
    name: 'reservaciones',
     data() {
    return {
       selected: ''
    };
  },
     computed:
    {
      ...mapState(['sucursales'])
    },
    methods:
  { 
 RedireccionarReserva(NombreSucursal)
    {
 if (NombreSucursal==="Tetlan") {
  window.open('https://reservations.yupoints.com/mezcalita_tetlan', '_blank')
 }
 else if(NombreSucursal==="Manzanillo"){
window.open('https://reservations.yupoints.com/mezcalita_manzanillo', '_blank')
 }
 else if(NombreSucursal==="Rio Nilo"){
alert("Estamos muy próximos a abrir esta sucursal, enterate de la fecha exacta en nuestro facebook")
window.open('https://www.facebook.com/lamezcalitarionilo/', '_blank')
 }
 
    

    }


    }
}
</script>