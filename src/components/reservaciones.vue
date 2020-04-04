<template>
    <div class="container-fluid d-flex  " id="reservaciones">
    <div class="container transparencia " style="max-width:720px">
    
      <ul class="list-group bg-transparent border-0  pt-2" >
        <li class="list-group-item  bg-transparent border-0  text-center ">
          <h5 id="titulob">haz tu reservación</h5>
<h5 id="parrafoa" >
    Es el momento de que disfrutes de los mejores platillos tradicionales, y mixología de destilados y Mezcales que tenemos para ti.
</h5>

        </li>
    
        <li class="list-group-item  bg-transparent border-0 text-center ">
          <select v-model="selected" class="mb-2">
                    <option disabled value="">Escoge tu sucursal</option>
        <option  v-for="sucursal in sucursales" 
                     :key="sucursal.id" >                        
                     {{sucursal.nombre}}
                     </option>
      </select>
        <button class="buttonrojo ml-2">RESERVA AQUÍ</button>

        </li>
        
      </ul>
      
    

  </div>
</div>   
</template>
<script>
import {mapState} from 'vuex';

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
    }
}
</script>