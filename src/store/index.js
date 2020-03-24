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
        nombre:'Menu de 20',
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
      nombre:'lonches'
    },
    {
      id:4,
      nombre:'tortitas'
    },
    {
      id:5,
      nombre:'sopes '
    },
    {
      id:6,
      nombre:'botanas '
    }
  ],
  
  tacos:[
    {
      id_taco:1,
      nombre_taco:'arrachera',
      precio_taco: '$20',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/arrachera.jpg',
    },
    {
      id_taco:2,
      nombre_taco:'barbacoa',
      precio_taco: '$20',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/barbacoa.jpg'
    },
    {
      id_taco:3,
      nombre_taco:'camaron capeado',
      precio_taco: '$20',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/camaroncapeado.jpg',
      imagen_taco2:'imagenes/fotos menu/tacos/camaroncapeado.jpg'

    },
    {
      id_taco:4,
      nombre_taco:'carnitas',
      precio_taco: '$20',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/carnitas.jpg'
    },
    {
      id_taco:5,
      nombre_taco:'chicharron',
      precio_taco: '$20',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/chicharron.jpg'
    },
    {
      id_taco:6,
      nombre_taco:'cochinita',
      precio_taco: '$20',
      descripcion_taco:'preparado con tortilla taquera, cebolla y cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/cochinita.jpg'
    }
 
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
      direccion:'Gigantes #4029 Guadalajara. 33 3605 7664',
      maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.22730004252!2d-103.28093418558028!3d20.6603295861991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3482000140f%3A0xae632908a9dd103b!2sLa%20Mezcalita%20(Tetl%C3%A1n)!5e0!3m2!1sen!2smx!4v1583876377731!5m2!1sen!2smx'
    },
    {
      sucid:2 ,
      nombre:'La Mezcalita Rio Nilo',
      direccion:'Rio Nilo #2329 Tlaquepaque. 33 2536 8221 3605 7664',
    },
    {
      sucid:3,
      nombre:'La Mezcalita Manzanillo',
      direccion:'Elías Zamora 2114-A Manzanillo. 314 218 3768',
      maps:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9367229093564!2d-104.31845858509834!3d19.110431687068175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8424d5e613b8369f%3A0x89f99ccd9c36899e!2sLa%20Mezcalita%20Manzanillo!5e0!3m2!1sen!2smx!4v1583877742315!5m2!1sen!2smx'

    },
    {
      sucid:4,
      nombre:'La La Mezcalita CDMX',
      direccion:'Gigantes #4029 Guadalajara. 33 3605 7664'
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
