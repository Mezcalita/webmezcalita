<template>
<div class="container-fluid  d-flex    "   >
  
  <div class="container text-center nomovil " style="max-width:800px;"> 
        <b-row cols="1" cols-md="2"  >
         <b-col class="text-left">

    <form>
      <input  type="text" name="nombre" id="nombre_contacto" placeholder="Nombre">
      <br>
      <input type="text" name="email" id="email_contacto" placeholder="Email">
      <br>
      <input type="text" name="telefono" id="telefono_contacto" placeholder="Telefono">
      <br>
<textarea name="mensaje" id="mensaje_contacto" rows="20" cols="50" placeholder="Mensaje" style="resize:none;">
</textarea>    
<button  class="buttonbordeblanco mt-4 ">ENVIAR</button>

</form>
         </b-col>
         <b-col>
    <ul class="list-group text-left">
  <li class="list-group-item bg-transparent border-0 nomovil" id="titulocontacto">contacto</li>
  <li class="list-group-item bg-transparent border-0 ">
       <img src="iconos/header/logo-header.svg"  
    width="90" id="logoa">
  </li>
  <li class="list-group-item bg-transparent border-0"> <a href="https://www.facebook.com/lamezcalitamx/"> <img src="iconos/contacto/facebook-contacto.svg"  
    width="17" id="logoa"></a> <a href="https://www.instagram.com/lamezcalitamx/">  <img src="iconos/contacto/instagram-contacto.svg"  
    width="17" id="logoa"></a></li>
  <li class="list-group-item bg-transparent border-0" id="tituloe">Servicio a clientes</li>
  <li class="list-group-item bg-transparent border-0" id="parrafod">hola@lamezcalita.mx</li>
    <li class="list-group-item bg-transparent border-0" id="parrafod"><i class="fab fa-whatsapp"></i>+52 554 5667 453</li>

  
</ul>
 
         </b-col>

        </b-row>
    </div>    


      <div class="container text-center simovil " style="max-width:600px;"> 
        <b-row cols="1"   >
         <b-col >
           <h5 id="titulocontacto">contacto</h5>
         <h5 class="text-center " id="tituloe">Servicio a clientes</h5>
<!-- fomulario -->
    <form >
     <input  type="text" name="nombre" id="nombre_contactomovil"  v-model="nombre_contactomovil" placeholder="Nombre">
      <br>
      <input type="text" name="email" id="email_contactomovil"  v-model="email_contactomovil" placeholder="Email">
      <br>
      <input type="text" name="telefono" id="telefono_contactomovil" v-model="telefono_contactomovil" placeholder="Telefono">
      <br>
<textarea name="mensaje" id="mensaje_contactomovil" rows="20" cols="50"  v-model="mensaje_contactomovil" placeholder="Mensaje" style="resize:none;">
</textarea>   

    <button  class="buttonbordeblanco mt-4 " v-on:click="senWhats">
      ENVIAR 
    </button>

</form>
<br>
         </b-col>
         <b-col>
    <ul class="list-group text-center">
  <li class="list-group-item bg-transparent border-0 ">
       <img src="iconos/header/logo-header.svg"  
    width="90" id="logoa">
  </li>
  <li class="list-group-item bg-transparent border-0"> <img src="iconos/contacto/facebook-contacto.svg"  
    width="25" id="logoa">  <img class="ml-1" src="iconos/contacto/instagram-contacto.svg"  
    width="25" id="logoa"></li>
  <li class="list-group-item bg-transparent border-0 text-center" id="parrafod">hola@lamezcalita.mx</li>
    <li class="list-group-item bg-transparent border-0 text-center" id="parrafod"><i class="fab fa-whatsapp"></i>+52 554 5667 453</li>

  
</ul>
 
         </b-col>

        </b-row>
        
        
        
    </div>    
        
    </div>
</template>
<script>

  export default {
      name: 'contacto',
  
    methods: {
      senWhats: function (){

        var text = 'Nombre:'+this.nombre_contactomovil + ', Email:' + this.email_contactomovil 
                  +', Telefono:'+ this.telefono_contactomovil + ', Mensaje:' +this.mensaje_contactomovil;

        window.open("https://api.whatsapp.com/send?phone=523315127354&text="+text,'_blank');
      },
      onSubmit(evt) {
        
        evt.preventDefault()
        alert(JSON.stringify(this.form))

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      
    }
  }

</script>
