import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: 0,
    subtab: 0,
    tabsuc: 0,
    categorias_principal:[
      {
        id:1,
        nombre:'Comida',
        icono: 'iconos/menu/menu20.svg'

      },
      {
        id:2,
        nombre:'Bebidas',
        icono: 'iconos/menu/bebidas.svg'

      },
      {
        id:3,
        nombre:'Mixología',
        icono: 'iconos/menu/mixologia.svg'

      },
      {
        id:4,
        nombre:'Destilados',
        icono: 'iconos/menu/destilados.svg'

      },


    ],
    cat_menu20:[
    {
      id:1,
      nombre:'tacos'
    },
    {
      id:2,
      nombre:'tostadas'
    },
    {
      id:3,
      nombre:'tortitas'
    },
    {
      id:4,
      nombre:'sopes '
    },
    {
      id:5,
      nombre:'botanas '
    },
    {
      id:6,
      nombre:'postres '
    },
    {
      id:7,
      nombre: 'snacks'
    },
    {
      id:8,
      nombre: 'especiales'
    }
  ],
  
  tacos:[
    {
      id_taco:1,
      nombre_taco:'Arrachera',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/arrachera.jpg',
    },
    {
      id_taco:2,
      nombre_taco:'Barbacoa',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/barbacoa.jpg'
    },
    {
      id_taco:3,
      nombre_taco:'Camaron capeado',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/camaroncapeado.jpg',
      imagen_taco2:'imagenes/fotos menu/tacos/camaroncapeado.jpg'

    },
    {
      id_taco:4,
      nombre_taco:'Carnitas',
      precio_taco: '$20',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/carnitas.jpg'
    },
    {
      id_taco:5,
      nombre_taco:'Chicharron',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/chicharron.jpg'
    },
    {
      id_taco:6,
      nombre_taco:'Cochinita',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/cochinita.jpg'
    }
 
  ],
  tostadas: [
    {
      id:1,
      nombre: 'Aguachile mango  ',
      descripcion:'tostada',
      imagen:'imagenes/fotos menu/tostadas/aguachile-mango.jpg'
    },
    {
      id:2,
      nombre: 'Aguachile negro  ',
      descripcion:'tostada',
      imagen:'imagenes/fotos menu/tostadas/aguachile-negro.jpg'
    },
    {
      id:3,
      nombre: 'Aguachile rojo  ',
      descripcion:'tostada',
      imagen:'imagenes/fotos menu/tostadas/aguachile-rojo.jpg'
    },
    {
      id:4,
      nombre: 'Aguachile verde ',
      descripcion:'tostada',
      imagen:'imagenes/fotos menu/tostadas/aguachile-verde.jpg'
    },
    {
      id:5,
      nombre: 'Ceviche  ',
      descripcion:'tostada',
      imagen:'imagenes/fotos menu/tostadas/ceviche.jpg'
    },
    {
      id:6,
      nombre: 'Cochinita  ',
      descripcion:'tostada',
      imagen:'imagenes/fotos menu/tostadas/cochinita-pibil.jpg'
    }

  ],
  tortitas : [
    {
      id:1,
      nombre: 'Camaron bañado ',
      descripcion:'tortitas',
      imagen:'imagenes/fotos menu/tortitas/camaron-bañado.jpg'
    },
    
    {
      id:2,
      nombre: 'Cochinita pibil ',
      descripcion:'tortita',
      imagen:'imagenes/fotos menu/tortitas/cochinita-pibil.jpg'
    },
    {
      id:3,
      nombre: 'Chicharron prensado',
      descripcion:'tortitas',
      imagen:'imagenes/fotos menu/tortitas/chicharron-prensado.jpg'
    },
    {
      id:4,
      nombre: 'Tortita ahogada ',
      descripcion:'tortita',
      imagen:'imagenes/fotos menu/tortitas/tortita-ahogada.jpg'
    }

  ],
  sopes:[
    {
      id:1,
      nombre:'Arrachera',
      descripcion:'sope',
      imagen:'imagenes/fotos menu/sopes/arrachera.jpg',
    },
    
    {
      id:2,
      nombre:'Cochinita pibil',
      descripcion:'sope',
      imagen:'imagenes/fotos menu/sopes/cochinita-pibil.jpg'
    },
    {
      id:3,
      nombre:'Chicharron prensado',
      descripcion:'sope',
      imagen:'imagenes/fotos menu/sopes/chicharron-prensado.jpg'
    },
  
  ],
  botanas:[
    {
      id:1,
      nombre:'Cacahuates',
      descripcion:'cacahuates',
      imagen:'imagenes/fotos menu/botanas/cacahuates.jpg',
    },
    {
      id:2,
      nombre:'Chicharrones',
      descripcion:'chucharrones',
      imagen:'imagenes/fotos menu/botanas/chicharrones.jpg'
    },
    {
      id:3,
      nombre:'Papas a la francesa',
      descripcion:'papas',
      imagen:'imagenes/fotos menu/botanas/papasalafrancesa.jpg'
    },
    {
      id:4,
      nombre:'Papas gajo',
      descripcion:'papas ga',
      imagen:'imagenes/fotos menu/botanas/papas-gajo.jpg'
    },
    {
      id:5,
      nombre:'Verduras salteadas',
      descripcion:'verduras',
      imagen:'imagenes/fotos menu/botanas/verdurassalteadas.jpg'
    }
  
  ],
  postres:
  [
    {
      id:1,
      nombre:'Nieve de vainilla y chocolate',
      descripcion:'nieve',
      imagen:'imagenes/fotos menu/postres/nieve-vainilla-chocolate.jpg'
    },
    {
      id:2,
      nombre:'Platanos con lechera',
      descripcion:'platanos',
      imagen:'imagenes/fotos menu/postres/platanosconlechera.jpg'
    }
  ],
  snacks:[
    {
      id:1,
      nombre:'Alitas',
      descripcion:'alitas',
      imagen:'imagenes/fotos menu/snacks/alitas.jpg'
    },
    {
      id:2,
      nombre:'Boneless',
      descripcion:'platanos',
      imagen:'imagenes/fotos menu/snacks/boneless.jpg'
    },
    {
      id:3,
      nombre:'Dedos de queso',
      descripcion:'dedos',
      imagen:'imagenes/fotos menu/snacks/dedos-de-queso.jpg'
    }
  ],
  especiales:[
    {
      id:1,
      nombre:'Botana cecina',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/botana-cecina.jpg'
    },
    {
      id:2,
      nombre:'Botana mixta',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/botana-mixta.jpg'
    },
    {
      id:3,
      nombre:'Bowl aguachile negro',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/bowl-aguachilenegro.jpg'
    },
    {
      id:4,
      nombre:'Bowl aguachile mango',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/bowl-aguachilemango.jpg'
    },
    {
      id:5,
      nombre:'Bowl aguachile mango habanero',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/bowl-aguachilemangohabanero.jpg'
    },
    {
      id:6,
      nombre:'Bowl aguachile rojo',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/bowl-aguachilerojo.jpg'
    },
    {
      id:7,
      nombre:'Bowl aguachile verde',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/bowl-aguachileverde.jpg'
    },
    {
      id:8,
      nombre:'Guacamole con cecina',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/guacamole-con-cecina.jpg'
    },
    {
      id:9,
      nombre:'Guacamole con chapulines',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/guacamole-con-chapulines.jpg'
    },
    {
      id:10,
      nombre:'Torre de mariscos',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/torremtosariscos.jpg'
    },
    {
      id:11,
      nombre:'Tostada de atun fresco',
      descripcion:'botana',
      imagen:'imagenes/fotos menu/especiales/tostada-atun-fresco.jpg'
    },
  ],
  mixologia:
  [
    {
      id:1,
      nombre:'Mezcalita durazno',
      descripcion:'Fusion de durazno albahaca, mango habanero y mezcal crean una mezcla de notas dulces y frescas con un toque picosito',
      imagen:'imagenes/fotos menu/mixologia/durazno.jpg'
    },
    {
      id:2,
      nombre:'Mezcalita fresa',
      descripcion:'mezcalita',
      imagen:'imagenes/fotos menu/mixologia/fresa.jpg'
    },
    {
      id:3,
      nombre:'Mezcalita mandarina',
      descripcion:'mezcalita',
      imagen:'imagenes/fotos menu/mixologia/mandarina.jpg'
    },
    {
      id:4,
      nombre:'Mezcalita maracuya',
      descripcion:'mezcalita',
      imagen:'imagenes/fotos menu/mixologia/maracuya.jpg'
    },
    {
      id:5,
      nombre:'Mezcalillo',
      descripcion:'mezcalita',
      imagen:'imagenes/fotos menu/mixologia/mezcalillo.jpg'
    },
    {
      id:6,
      nombre:'Mezcalita papaya',
      descripcion:'mezcalita',
      imagen:'imagenes/fotos menu/mixologia/papaya.jpg'
    },
    {
      id:7,
      nombre:'Mezcalita pepino',
      descripcion:'mezcalita',
      imagen:'imagenes/fotos menu/mixologia/pepino.jpg'
    },
    {
      id:8,
      nombre:'Mezcalita toronja',
      descripcion:'mezcalita',
      imagen:'imagenes/fotos menu/mixologia/toronja.jpg'
    },
  
  ],
  destilados:[
    {
       nombre: 'Mezcal',
       marcas: 'Chupacabras 750ml , Bruxo 750ml, 400 Conejos 750ml, Montelobos 750ml, Alipús 750ml, Mexcalito maracuya 750ml, Mexcalito coco 750ml, Agua maldita 750ml '
   
    },
    {
      nombre: 'Whisky',
      marcas: 'Black & white 750ml, Etiqueta roja 750ml, Jack daniel´s 700ml , Buchanan´s 750ml, Black & white 750ml'
    
    },
    {
      nombre: 'Mezcal de sabor',
      marcas: 'Tamarindo, Jamaica, Maracuya, Mango, Piña colada, Capuchino, Arandano, Chocolate'
    
    },
    {
      nombre: 'Tequila blanco',
      marcas: 'Jamaica, 7 leguas 750ml, Herradura ultra 700ml, Maestro dobel 750ml, Don julio blanco 750ml'
    
    },
    {
      nombre: 'Tequila reposado',
      marcas: 'Centenario reposado 700ml, Antiguo reposado 700ml, Tradicional reposado 695ml, Herradura reposado 700ml'
    
    },
    {
      nombre: 'Tequila cristalino',
      marcas: 'Tamarindo, Antiguo plata 700ml, Tradicional plata 695ml, Herradura plata 700ml, Centenario plata 700ml,  Don julio 70 750ml'
    
    },
    {
      nombre: 'Ron',
      marcas: 'Appleton especial 750ml, Bacardi 750ml, Capitan morgan 750ml'
    
    },
    {
      nombre: 'Vodka',
      marcas: 'Sky 750ml, Absolut 750ml, Sotlchnaya 750ml'
    
    },
    {
      nombre: 'Brandy',
      marcas: 'Torres 10 700ml'
    
    },
    {
      nombre: 'Licores',
      marcas: 'Jaggermelster 700ml'
    
    },
    

  ],
  bebidas:[
    {
      id:1,
      nombre:'Caguamas ',
      descripcion:'Tecate roja, Miller high life, Carta blanca, XX Lagger, XX Ambar, Miller, Heineken',
      imagen:'imagenes/fotos menu/bebidas/caguamas.jpg'

    },
    {
      id:2,
      nombre:'Cervezas',
      descripcion:'Tecate light, Tecate roja, XX lagger, XX ambar, Carta blanca , Indio',
      imagen:'imagenes/fotos menu/bebidas/cervezas.jpg'

    },
    {
      id:3,
      nombre:'Micheladas',
      descripcion:'Camaron seco, Pepino, Cielo rojo, Clamato, Salsas, Rusa',
      imagen:'imagenes/fotos menu/bebidas/michelada.jpg'

    },
    {
      id:4,
      nombre:'Sin alcohol',
      descripcion:'Naranjada, limonada, Agua del dia, Jugo',
      imagen:'imagenes/fotos menu/bebidas/naranjada.jpg'

    }
  ],
  carrusel: [
    
    {
      imagen:'../imagenes/carrusel/carrusel-1.jpg',
      instagram: '../imagenes/carrusel/insta-1.png'
    },
    {
      imagen:'../imagenes/carrusel/carrusel-2.jpg',
      instagram: '../imagenes/carrusel/insta-2.png'

    },
    {
      imagen:'../imagenes/carrusel/carrusel-3.jpg',
      instagram: '../imagenes/carrusel/insta-3.png'

    },
    {
      imagen:'../imagenes/carrusel/carrusel-4.jpg',
      instagram: '../imagenes/carrusel/insta-4.png'

    },
      
     
  ],

  promos:
  [
    {
      promoid:1,
      preview_imagen:'imagenes/imagenes promo/preview/preview-lunes.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-lunes.jpg'
    },
    {
      promoid:2,
      preview_imagen:'imagenes/imagenes promo/preview/preview-martes.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-martes.jpg'
    },
    {
      id:3,
      preview_imagen:'imagenes/imagenes promo/preview/preview-miercoles.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-miercoles.jpg'
    },
    {
      promoid:4,
      preview_imagen:'imagenes/imagenes promo/preview/preview-jueves.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-jueves.jpg'
    },
    {
      promoid:5,
      preview_imagen:'imagenes/imagenes promo/preview/preview-chupitos.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-chupitos.jpg'
    },
    {
      promoid:6,
      preview_imagen:'imagenes/imagenes promo/preview/preview-cumple.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-cumple.jpg'
    },
  ],
  sucursales:[
    {
      sucid:1,
      nombre:'Tetlan',
      direccion:'Gigantes #4029 Guadalajara.',
      telefono:'33 3605 7664',
      maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.22730004252!2d-103.28093418558028!3d20.6603295861991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3482000140f%3A0xae632908a9dd103b!2sLa%20Mezcalita%20(Tetl%C3%A1n)!5e0!3m2!1sen!2smx!4v1583876377731!5m2!1sen!2smx',
      fblink:'https://www.facebook.com/tetlanlamezcalita/?ref=br_rs',
      wplink: 'https://wa.me/5213336057664',
      imagen: 'imagenes/sucursales/sucursal.jpg'
    },
    {
      sucid:2 ,
      nombre:'Rio Nilo',
      direccion:'Rio Nilo #2329 Tlaquepaque. ',
      telefono:'33 2536 8221 ',
      maps:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14934.300867201864!2d-103.3110188!3d20.6461643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22805b250d127728!2sLa%20Mezcalita%20Tlaquepaque!5e0!3m2!1sen!2smx!4v1585254012252!5m2!1sen!2smx',
     fblink:'https://www.facebook.com/lamezcalitarionilo/?ref=br_rs',
     imagen: 'imagenes/sucursales/sucursal.jpg'

    },
    {
      sucid:3,
      nombre:'Manzanillo',
      direccion:'Elías Zamora 2114-A Manzanillo. ',
      telefono:'314 218 3768',
      maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9367229093564!2d-104.31845858509834!3d19.110431687068175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8424d5e613b8369f%3A0x89f99ccd9c36899e!2sLa%20Mezcalita%20Manzanillo!5e0!3m2!1sen!2smx!4v1583877742315!5m2!1sen!2smx',
      fblink:'https://www.facebook.com/lamezcalitamanzanillo/',
      wplink: 'https://wa.me/5213142183768',
      imagen: 'imagenes/sucursales/sucursal.jpg'

    },
    
  ],
  musicaenvivo:[

    {
      id_musica:1,
      imagen_musica:'imagenes/musica en vivo/musica-1.jpg',
      fecha: 'jueves 18',
      sucursal: 'Tetlan'

    },
    {
      id_musica:2,
      imagen_musica:'imagenes/musica en vivo/musica-2.jpg',
      fecha: 'jueves 22',
      sucursal: 'Tetlan'

    },
    {
      id_musica:3,
      imagen_musica:'imagenes/musica en vivo/musica-3.jpg',
      fecha: 'jueves 20',
      sucursal: 'Tetlan'

    },
  ],
  deportes:
  [
    {
     id_deporte: 1,
     imagen_deporte: 'iconos/deportes/ligas/ligamx.svg',     
     fecha:'1 marzo',
     titulo:'chivas vs atlas',
     hora: '7:00pm'

    },
    {
      id_deporte: 2,
      imagen_deporte: 'iconos/deportes/ligas/ligamx.svg',
      fecha:'1 marzo',
      titulo:'chivas vs atlas',
      hora: '7:00pm'

    },
    {
      id_deporte: 3,
      imagen_deporte: 'iconos/deportes/ligas/ligamx.svg',
      fecha:'1 marzo',
      titulo:'chivas vs atlas',
      hora: '7:00pm'


    },
    {
    id_deporte: 4,
    imagen_deporte: 'iconos/deportes/ligas/ligamx.svg',
    fecha:'1 marzo',
    titulo:'chivas vs atlas',
    hora: '7:00pm'
    },
    {
      id_deporte: 5,
      imagen_deporte: 'iconos/deportes/ligas/ligamx.svg',
      fecha:'1 marzo',
      titulo:'chivas vs atlas',
      hora: '7:00pm'

    },
    {
      id_deporte: 6,
      imagen_deporte: 'iconos/deportes/ligas/ligamx.svg',
      fecha:'1 marzo',
      titulo:'chivas vs atlas',
      hora: '7:00pm'


    },
    {
    id_deporte: 7,
    imagen_deporte: 'iconos/deportes/ligas/ligamx.svg',
    fecha:'1 marzo',
    titulo:'chivas vs atlas',
    hora: '7:00pm'
    },
    {
      id_deporte: 8,
      imagen_deporte: 'iconos/deportes/ligas/ligamx.svg',
      fecha:'1 marzo',
      titulo:'chivas vs atlas',
      hora: '7:00pm'

    },
    {
      id_deporte: 9,
      imagen_deporte: 'iconos/deportes/ligas/ligamx.svg',
      fecha:'1 marzo',
      titulo:'chivas vs atlas',
      hora: '7:00pm'


    },
     
    
  
  ],
  
  },
  mutations: {
    activartab(state, selectedtab)
    {
      state.tab=selectedtab
    },
    activarsubtab(state, selectedtab)
    {
      state.subtab=selectedtab
    },
    activartabsuc(state, selectedtab)
    {
      state.tabsuc=selectedtab

  
    }
  },
  actions: {
  },
  modules: {
  }
})
