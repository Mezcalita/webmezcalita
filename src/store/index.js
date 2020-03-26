import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: 0,
    subtab: 0,
    tabsuc: 0,
    tabdep: 0,
    categorias_principal:[
      {
        id:1,
        nombre:'Menu 20',
        icono: 'iconos/menu/platillos.svg'

      },
      {
        id:2,
        nombre:'Especiales',
        icono: 'iconos/menu/especiales.svg'

      },
      {
        id:3,
        nombre:'Bebidas',
        icono: 'iconos/menu/bebidas.svg'

      },
      {
        id:4,
        nombre:'Mixología',
        icono: 'iconos/menu/mixologia.svg'

      },
      {
        id:5,
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
      nombre: 'Chicharron prensado ',
      descripcion:'tortitas',
      imagen:'imagenes/fotos menu/tortitas/chicharron-prensado.jpg'
    },
    {
      id:3,
      nombre: 'Cochinita pibil ',
      descripcion:'tortita',
      imagen:'imagenes/fotos menu/tortitas/cochinita-pibil.jpg'
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
      nombre:'Chicharron prensado',
      descripcion:'sope',
      imagen:'imagenes/fotos menu/sopes/chicharron-prensado.jpg'
    },
    {
      id:3,
      nombre:'Cochinita pibil',
      descripcion:'sope',
      imagen:'imagenes/fotos menu/sopes/cochinita-pibil.jpg'
    }
  
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
      imagen:'imagenes/fotos menu/mixologia/durazno.jpg'
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
  tipos_destilado:['mezcal','whisky','ginebra','mezcal sabor','tequila','ron','vodka','brandy','licores','otros'],
  destilados:[
    {
      id:1,
      tipo:'mezcal',
      nombre:'Chupacabras 750ml'
    },
    {
      id:2,
      tipo:'mezcal',
      nombre:'Bruxo 750ml'
    },
    {
      id:3,
      tipo:'mezcal',
      nombre:'Zignum 750ml'
    },
    {
      id:4,
      tipo:'mezcal',
      nombre:'Union 750ml'
    },
    {
      id:5,
      tipo:'mezcal',
      nombre:'400 Conejos 750ml'
    },
    {
      id:6,
      tipo:'mezcal',
      nombre:'Montelobos 750ml'
    },
    {
      id:7,
      tipo:'mezcal',
      nombre:'Alipús 750ml'
    },
    {
      id:8,
      tipo:'mezcal',
      nombre:'Mexcalito maracuya 750ml'
    },
    {
      id:9,
      tipo:'mezcal',
      nombre:'Mexcalito coco 750ml'
    },
    {
      id:10,
      tipo:'mezcal',
      nombre:'Agua maldita 750ml'
    },
    {
      id:11,
      tipo:'whisky',
      nombre:'Black & white 750ml'
    },
    {
      id:12,
      tipo:'whisky',
      nombre:'Etiqueta roja 750ml'
    },
    {
      id:13,
      tipo:'whisky',
      nombre:'Jack daniel´s 700ml'
    },
    {
      id:14,
      tipo:'whisky',
      nombre:'Buchanan´s 750ml'
    },
    {
      id:15,
      tipo:'whisky',
      nombre:'Black & white 750ml'
    },
    {
      id:16,
      tipo:'mezcal sabor',
      nombre:'Tamarindo'
    },
    {
      id:17,
      tipo:'mezcal sabor',
      nombre:'Jamaica'
    },
    {
      id:18,
      tipo:'mezcal sabor',
      nombre:'Maracuya'
    },
    {
      id:19,
      tipo:'mezcal sabor',
      nombre:'Mango'
    },
    {
      id:20,
      tipo:'mezcal sabor',
      nombre:'Piña colada'
    },
    {
      id:21,
      tipo:'mezcal sabor',
      nombre:'Capuchino'
    },
    {
      id:22,
      tipo:'mezcal sabor',
      nombre:'Arandano'
    },
    {
      id:23,
      tipo:'mezcal sabor',
      nombre:'Chocolate'
    },
    {
      id:24,
      tipo:'ginebra',
      nombre:'Tanqueray 750ml'
    },
    {
      id:25,
      tipo:'ginebra',
      nombre:'Bombay 750ml'
    },
    {
      id:26,
      tipo:'ginebra',
      nombre:'Bulldog 750ml'
    },
    {
      id:27,
      tipo:'tequila',
      nombre:'Centenario plata 700ml'
    },
    {
      id:28,
      tipo:'tequila',
      nombre:'Centenario reposado 700ml'
    },
    {
      id:29,
      tipo:'tequila',
      nombre:'Antiguo plata 700ml'
    },
    {
      id:30,
      tipo:'tequila',
      nombre:'Antiguo reposado 700ml'
    },
    {
      id:31,
      tipo:'tequila',
      nombre:'Tradicional plata 695ml'
    },
    {
      id:32,
      tipo:'tequila',
      nombre:'Tradicional reposado 695ml'
    },
    {
      id:33,
      tipo:'tequila',
      nombre:'7 leguas 750ml'
    },
    {
      id:34,
      tipo:'tequila',
      nombre:'Don julio blanco 750ml'
    },
    {
      id:35,
      tipo:'tequila',
      nombre:'Herradura plata 700ml'
    },
    {
      id:36,
      tipo:'tequila',
      nombre:'Herradura reposado 700ml'
    },
    {
      id:37,
      tipo:'tequila',
      nombre:'Maestro dobel 750ml'
    },
    {
      id:38,
      tipo:'tequila',
      nombre:'Herradura ultra 700ml'
    },
    {
      id:39,
      tipo:'tequila',
      nombre:'Don julio 70 750ml'
    },
    {
      id:40,
      tipo:'ron',
      nombre:'Appleton especial 750ml'
    },
    {
      id:41,
      tipo:'ron',
      nombre:'Bacardi 750ml'
    },
    {
      id:42,
      tipo:'ron',
      nombre:'Capitan morgan 750ml'
    },
    {
      id:43,
      tipo:'vodka',
      nombre:'Sky 750ml'
    },
    {
      id:44,
      tipo:'vodka',
      nombre:'Absolut 750ml'
    },
    {
      id:45,
      tipo:'vodka',
      nombre:'Sotlchnaya 750ml'
    },
    {
      id:46,
      tipo:'brandy',
      nombre:'Torres 10 700ml'
    },
    {
      id:47,
      tipo:'licores',
      nombre:'Jaggermelster 700ml'
    },
    {
      id:48,
      tipo:'otros',
      nombre:'Red bull'
    },
    {
      id:49,
      tipo:'otros',
      nombre:'Cigarros'
    },
   
  ],
  carrusel: ['imagenes/carrusel/carrusel-1.jpg','imagenes/carrusel/carrusel-2.jpg','imagenes/carrusel/carrusel-3.jpg','imagenes/carrusel/carrusel-4.jpg'],

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
      nombre:'La Mezcalita Tetlan',
      direccion:'Gigantes #4029 Guadalajara.',
      telefono:'33 2536 8221 ',
      maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.22730004252!2d-103.28093418558028!3d20.6603295861991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3482000140f%3A0xae632908a9dd103b!2sLa%20Mezcalita%20(Tetl%C3%A1n)!5e0!3m2!1sen!2smx!4v1583876377731!5m2!1sen!2smx',
      fblink:'https://www.facebook.com/tetlanlamezcalita/?ref=br_rs'
    },
    {
      sucid:2 ,
      nombre:'La Mezcalita Rio Nilo',
      direccion:'Rio Nilo #2329 Tlaquepaque. ',
      telefono:'33 2536 8221 ',
      maps:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14934.300867201864!2d-103.3110188!3d20.6461643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22805b250d127728!2sLa%20Mezcalita%20Tlaquepaque!5e0!3m2!1sen!2smx!4v1585254012252!5m2!1sen!2smx',
     fblink:'https://www.facebook.com/lamezcalitarionilo/?ref=br_rs'

    },
    {
      sucid:3,
      nombre:'La Mezcalita Manzanillo',
      direccion:'Elías Zamora 2114-A Manzanillo. ',
      telefono:'33 2536 8221 ',
      maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9367229093564!2d-104.31845858509834!3d19.110431687068175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8424d5e613b8369f%3A0x89f99ccd9c36899e!2sLa%20Mezcalita%20Manzanillo!5e0!3m2!1sen!2smx!4v1583877742315!5m2!1sen!2smx',
      fblink:'https://www.facebook.com/lamezcalitamanzanillo/'
    },
    {
      sucid:4,
      nombre:'La La Mezcalita CDMX',
      direccion:'Gigantes #4029 Guadalajara. ',
      telefono:'33 2536 8221 ',
    }
  ],
  musicaenvivo:[

    {
      id_musica:1,
      imagen_musica:'imagenes/musica en vivo/musica-1.jpg',
      fecha: 'jueves 18'

    },
    {
      id_musica:2,
      imagen_musica:'imagenes/musica en vivo/musica-2.jpg',
      fecha: 'jueves 22'

    },
    {
      id_musica:3,
      imagen_musica:'imagenes/musica en vivo/musica-3.jpg',
      fecha: 'jueves 20'

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
    }
  
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
    },
    activartabdep(state, selectedtab)
    {
      state.tabdep=selectedtab
    }
  },
  actions: {
  },
  modules: {
  }
})
