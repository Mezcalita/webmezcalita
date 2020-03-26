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

<button class="buttonbordeblanco mt-4 ">ENVIAR</button>

</form>
         </b-col>
         <b-col>
    <ul class="list-group text-left">
  <li class="list-group-item bg-transparent border-0 nomovil" id="tituloa">contacto</li>
  <li class="list-group-item bg-transparent border-0 ">
       <img src="iconos/header/logo-header.svg"  
    width="90" id="logoa">
  </li>
  <li class="list-group-item bg-transparent border-0"> <img src="iconos/contacto/facebook-contacto.svg"  
    width="17" id="logoa">  <img src="iconos/contacto/instagram-contacto.svg"  
    width="17" id="logoa"></li>
  <li class="list-group-item bg-transparent border-0" id="tituloe">Servicio a clientes</li>
  <li class="list-group-item bg-transparent border-0" id="parrafod">hola@lamezcalita.mx</li>
    <li class="list-group-item bg-transparent border-0" id="parrafod">+52 554 5667 453</li>

  
</ul>
 
         </b-col>

        </b-row>
    </div>    


      <div class="container text-center simovil " style="max-width:600px;"> 
        <b-row cols="1"   >
         <b-col >
           <h5 id="tituloa">contacto</h5>
    <form>
     <input  type="text" name="nombre" id="nombre_contacto" placeholder="Nombre">
      <br>
      <input type="text" name="email" id="email_contacto" placeholder="Email">
      <br>
      <input type="text" name="telefono" id="telefono_contacto" placeholder="Telefono">
      <br>
<textarea name="mensaje" id="mensaje_contacto" rows="20" cols="50" placeholder="Mensaje" style="resize:none;">
</textarea>   

<button class="buttonbordeblanco mt-4 ">ENVIAR</button>

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
    width="17" id="logoa">  <img src="iconos/contacto/instagram-contacto.svg"  
    width="17" id="logoa"></li>
  <li class="list-group-item bg-transparent border-0 text-center" id="parrafod">hola@lamezcalita.mx</li>
    <li class="list-group-item bg-transparent border-0 text-center" id="parrafod">+52 554 5667 453</li>

  
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
      }
    }
  }
</script>
