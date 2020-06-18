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
      nombre:'Tacos'
    },
    {
      id:2,
      nombre: 'Especiales'
    },
    {
      id:3,
      nombre:'Botanas '
    },
    {
      id:4,
      nombre:'Tostadas'
    },
    {
      id:5,
      nombre:'Sopes '
    },
    {
      id:6,
      nombre:'Tortitas'
    },
    {
      id:7,
      nombre: 'Postres'
    },
  ],
  
  tacos:[
    {
      id_taco:1,
      nombre_taco:'Arrachera',
      precio:'$22',
      descripcion_taco:'Ricos trozos de arrachera marinada estilo la mezcalita, acompañado con cilantro y cebolla',
      imagen_taco:'imagenes/fotos menu/tacos/arrachera.jpg',
    },
    {
      id_taco:2,
      nombre_taco:'Camarón capeado',
      precio:'$22',
      descripcion_taco:'Exquisitos camarones capeados estilo La Paz acompañados de ensalada de zanahoria, col y crema de cilantro',
      imagen_taco:'imagenes/fotos menu/tacos/camaroncapeado.jpg',

    },
    {
      id_taco:3,
      nombre_taco:'Chicharrón',
      precio:'$22',
      descripcion_taco:'Delicioso chicharrón prensado, se sirve con cilantro y cebolla, acompañado de una rica salsa martajada',
      imagen_taco:'imagenes/fotos menu/tacos/chicharron2.jpg'
    },
    {
      id_taco:4,
      nombre_taco:'Guacamole con chapulines',
      precio:'$22',
      descripcion_taco:'Delicioso guacamole con chapulines, sabor único de la gastronomia de Oaxaca',
      imagen_taco:'imagenes/fotos menu/tacos/chapulines2.jpg'
    },
    {
      id_taco:5,
      nombre_taco:'Barbacoa',
      precio:'$22',
      descripcion_taco:'Sabroso taco de barbacoa estilo Hidalgo acompañado de cilantro y cebolla',
      imagen_taco:'imagenes/fotos menu/tacos/barbacoa.jpg'
    },

    {
      id_taco:6,
      nombre_taco:'Carnitas',
      precio:'$22',
      descripcion_taco:'Taco de tradición, deliciosas carnitas de puerco estilo Michoacan',
      imagen_taco:'imagenes/fotos menu/tacos/carnitas.jpg'
    },
    {
      id_taco:7,
      nombre_taco:'Cochinita pibil',
      precio:'$22',
      descripcion_taco:'Taco de cochinita, acompañado de cilantro y cebolla, con el sazón único de la mezcalita',
      imagen_taco:'imagenes/fotos menu/tacos/cochinita.jpg'
    }
 
  ],
  tostadas: [
    {
      id:1,
      nombre: 'Aguachile mango',
      precio:'$22',
      descripcion:'Camarones frescos bañados de salsa de mango habanero, acompañados de pepino, cebolla morada y aguacate',
      imagen:'imagenes/fotos menu/tostadas/aguachile-mango.jpg'
    },
    {
      id:2,
      nombre: 'Aguachile negro',
      precio:'$22',
      descripcion:'Camarones frescos bañados de salsas negras, acompañados de pepino, cebolla morada y aguacate',
      imagen:'imagenes/fotos menu/tostadas/aguachile-negro.jpg'
    },
    {
      id:3,
      nombre: 'Aguachile rojo',
      precio:'$22',
      descripcion:'Camarones frescos bañados de salsa aguachile rojo preparada a base de  chiles de arbol y limon',
      imagen:'imagenes/fotos menu/tostadas/aguachile-rojo.jpg'
    },
    {
      id:4,
      nombre: 'Aguachile verde',
      precio:'$22',
      descripcion:'Camarones frescos con la tradicional salsa de chile serrano, cebolla morada, aguacate y pepino',
      imagen:'imagenes/fotos menu/tostadas/aguachile-verde.jpg'
    },
    {
      id:5,
      nombre: 'Ceviche de camarón',
      precio:'$22',
      descripcion:'Trocitos de camaron, cilantro, cebolla, jitomate y limon, con la original receta la mezcalita',
      imagen:'imagenes/fotos menu/tostadas/ceviche.jpg'
    },
    {
      id:6,
      nombre: 'Cochinita',
      precio:'$22',
      descripcion:'Tradicional tostada de cochinita servida con cebolla morada y un toque de limon',
      imagen:'imagenes/fotos menu/tostadas/cochinita-pibil.jpg'
    }

  ],
  tortitas : [
    {
      id:1,
      nombre: 'Chicharron prensado',
      precio:'$22',
      descripcion:'Riquisima tortita de chicharron prensado, servida con un toque de crema de cilantro',
      imagen:'imagenes/fotos menu/tortitas/chicharron-prensado.jpg'
    },
    {
      id:2,
      nombre: 'Ahogada de carnitas ',
      precio:'$22',
      descripcion:'Tortita de carnitas bañada con salsa de jitomate, acompañada de cebolla morada y limón, tradicional de Guadalajara.',
      imagen:'imagenes/fotos menu/tortitas/tortita-ahogada.jpg'
    },
    {
      id:3,
      nombre: 'Camaron bañado ',
      precio:'$22',
      descripcion:'Tortita de camaron bañada con una riquisima salsa de crema de chile chipotle y acompañada de aguacate',
      imagen:'imagenes/fotos menu/tortitas/camaron-bañado.jpg'
    },

    {
      id:4,
      nombre: 'Cochinita pibil ',
      precio:'$22',
      descripcion:'Tortita de cochinita pibil servida con cebolla morada, limon y un toque de crema de cilantro',
      imagen:'imagenes/fotos menu/tortitas/cochinita-pibil.jpg'
    },



  ],
  sopes:[
    {
      id:1,
      nombre:'Arrachera',
      precio:'$22',
      descripcion:'Sope frito con trozos de arrachera marinada acompañada con cilantro y cebolla',
      imagen:'imagenes/fotos menu/sopes/arrachera.jpg',
    },
    {
      id:2,
      nombre:'Chicharron prensado',
      precio:'$22',
      descripcion:'Sope frito de chicharrón prensado acompañado de cilantro y cebolla',
      imagen:'imagenes/fotos menu/sopes/chicharron-prensado.jpg'
    },
    {
      id:3,
      nombre:'Cochinita pibil',
      precio:'$22',
      descripcion:'Sope frito con cochinita pibil acompañado de cilantro y cebolla',
      imagen:'imagenes/fotos menu/sopes/cochinita-pibil.jpg'
    },
  
  
  ],
  botanas:[
    {
      id:1,
      nombre:'Cacahuates',
      precio:'$22',
      descripcion:'Mix de cacahuates acompañados de salsa valentina y limon',
      imagen:'imagenes/fotos menu/botanas/cacahuates.jpg',
    },
    {
      id:2,
      nombre:'Papas caseras',
      precio:'$22',
      descripcion:'Papas caseras acompañadas de salsa valentina y limon',
      imagen:'imagenes/fotos menu/botanas/papas-caseras.jpg'
    },
    {
      id:3,
      nombre:'Chicharrones',
      precio:'$22',
      descripcion:'Chicharrones crujientes servidos con salsa valentina y limon',
      imagen:'imagenes/fotos menu/botanas/chicharrones.jpg'
    },
 
    {
      id:4,
      nombre:'Orden de cueritos',
      precio:'$22',
      descripcion:'Cueritos en salsas negras, una botana de tradición cantinera',
      imagen:'imagenes/fotos menu/botanas/cueritos.jpg'
    },
    {
      id:5,
      nombre:'Verduras salteadas',
      precio:'$22',
      descripcion:'Deliciosas calabacitas, zanahorias y brocoli salteadas a la mantequilla y salsas negras',
      imagen:'imagenes/fotos menu/botanas/verdurassalteadas.jpg'
    },
    {
      id:6,
      nombre:'Papas a la francesa',
      precio:'$22',
      descripcion:'Papas a la francesa espolvoreadas con pimienta/limón acompañadas con catsup',
      imagen:'imagenes/fotos menu/botanas/papasalafrancesa.jpg'
    },
    {
      id:7,
      nombre:'Papas gajo',
      precio:'$22',
      descripcion:'Ricas papas gajo adobadas acompañadas con un dip de queso cheddar derretido',
      imagen:'imagenes/fotos menu/botanas/papas-gajo.jpg'
    },
    {
      id:8,
      nombre:'Alitas',
      precio:'$49',
      descripcion:'Deliciosas alitas de pollo bañadas en la salsa de tu elección (Hot, BBQ, Cajún ó Lemon pepper), acompañadas de aderezo ranch',
      imagen:'imagenes/fotos menu/snacks/alitas.jpg'
    },
    {
      id:9,
      nombre:'Boneless',
      precio:'$49',
      descripcion:'Ricos trozos de pechuga empanizados, bañados  en la salsa de tu elección (Hot, BBQ, Cajún ó Lemon pepper), acompañadas de aderezo ranch',
      imagen:'imagenes/fotos menu/snacks/boneless.jpg'
    },
    {
      id:10,
      nombre:'Dedos de queso',
      precio:'$49',
      descripcion:'Dedos de queso mozzarella empanizados, servidos con salsa pomodoro, deliciosos para botanear',
      imagen:'imagenes/fotos menu/snacks/dedos-de-queso.jpg'
    }
  
  ],
  postres:
  [
    {
      id:1,
      nombre:'Nieve de vainilla y chocolate',
      precio:'$22',
      descripcion:'Dos bolas de deliciosa y refrescante nieve de vainilla y chocolate',
      imagen:'imagenes/fotos menu/postres/nieve-vainilla-chocolate.jpg'
    },
    {
      id:2,
      nombre:'Platanos con lechera',
      precio:'$22',
      descripcion:'Deliciosos plátanos fritos servidos con "La lechera" y una pizca de canela',
      imagen:'imagenes/fotos menu/postres/platanosconlechera.jpg'
    }
  ],
  especiales:[
    {
      id:1,
      nombre:'Nachos La Mezcalita',
      precio:'$49',
      descripcion:'Nuestros tradicionales nachos compuestos por totopos, frijoles puercos, arrachera, queso gratinado y pico de gallo receta especial de La Mezcalita',
      imagen:'imagenes/fotos menu/especiales/nachos-la-mezcalita.jpg'
    },
    {
      id:2,
      nombre:'Botana mixta',
      precio:'$49',
      descripcion:'Botana de cecina, salchichas, cacahuates, papas caseras  y cueritos acompañados de salsa valentina y limon.',
      imagen:'imagenes/fotos menu/especiales/botana-mixta.jpg'
    },
    {
      id:3,
      nombre:'Guacamole con chapulines',
      precio:'$49',
      descripcion:'Guacamole con jitomate, cebolla, cilantro y chapulines, sabor unico de Oaxaca con el toque de La Mezcalita',
      imagen:'imagenes/fotos menu/especiales/guacamole-con-chapulines.jpg'
    },
    {
      id:4,
      nombre:'Guacamole con cecina',
      precio:'$49',
      descripcion:'Guacamole con jitomate, cebolla, cilantro y cecina de res, acompañado de totopos fritos',
      imagen:'imagenes/fotos menu/especiales/guacamole-con-cecina.jpg'
    },

    {
      id:5,
      nombre:'Botana cecina',
      precio:'$49',
      descripcion:'Para los amantes de la carne seca, traemos la mejor cecina de la región acompañada con salsa valentina',
      imagen:'imagenes/fotos menu/especiales/botana-cecina.jpg'
    },
    {
      id:6,
      nombre:'Torre de mariscos',
      precio:'$49',
      descripcion:'Tostada de mariscos en aguachile negro, camaron cocido y atún, en una cama de pepino y aguacate, acompañado de cebolla morada y limon',
      imagen:'imagenes/fotos menu/especiales/torremariscos.jpg'
    },
    {
      id:7,
      nombre:'Tostada de atún fresco',
      precio:'$49',
      descripcion:'Tostada de atún fresco en salsas negras acompañado de aguacate, pepino y cebolla capeada',
      imagen:'imagenes/fotos menu/especiales/tostada-atun-fresco.jpg'
    },
    {
      id:8,
      nombre:'Bowl aguachile verde',
      precio:'$49',
      descripcion:'Camarones en aguachile bañados en salsa verde de chiles serranos, servidos con pepino, cebolla y cilantro, tradicional de la cocina sinaloense',
      imagen:'imagenes/fotos menu/especiales/bowl-aguachileverde.jpg'
    },
    {
      id:9,
      nombre:'Bowl aguachile rojo',
      precio:'$49',
      descripcion:'Camarones en aguachile bañados en salsa roja, servidos con pepino, cebolla y cilantro',
      imagen:'imagenes/fotos menu/especiales/bowl-aguachilerojo.jpg'
    },
    {
      id:10,
      nombre:'Bowl aguachile negro',
      precio:'$49',
      descripcion:'Camarones en aguachile bañados en salsas negras, servidos con pepino, cebolla y cilantro.',
      imagen:'imagenes/fotos menu/especiales/bowl-aguachilenegro.jpg'
    },
    {
      id:11,
      nombre:'Bowl aguachile mango habanero',
      precio:'$49',
      descripcion:'Camarones en aguachile bañados en salsa mango y habanero, servidos con pepino, cebolla y cilantro',
      imagen:'imagenes/fotos menu/especiales/bowl-aguachilemango.jpg'
    },





  ],
  mixologia:
  [
    {
      id:1,
      nombre:'Mezcalita mandarina',
      precio:'$65',
      descripcion:'Exquisita mezcla de mandarina, mango, hojas de menta y mezcal que te harán sentir una experiencia fresca con toques cítricos',
      imagen:'imagenes/fotos menu/mixologia/mandarina.jpg'
    },
    {
      id:2,
      nombre:'Mezcalita fresa',
      precio:'$65',
      descripcion:'Fresa, kiwi, limón y mezcal hacen una combinación exacta de dulce, cítrico y frutal',
      imagen:'imagenes/fotos menu/mixologia/fresa.jpg'
    },
    {
      id:3,
      nombre:'Mezcalita durazno',
      precio:'$65',
      descripcion:'Fusion de durazno albahaca, mango habanero y mezcal crean una mezcla de notas dulces y frescas con un toque picosito',
      imagen:'imagenes/fotos menu/mixologia/durazno.jpg'
    },
    {
      id:4,
      nombre:'Mezcalita maracuya',
      precio:'$65',
      descripcion:'Delicioso sabor maracuyá con té de manzanilla y mezcal, déjate llevar por la infusión de un relajante sabor tropical',
      imagen:'imagenes/fotos menu/mixologia/maracuya.jpg'
    },
    {
      id:5,
      nombre:'Mezcalita toronja',
      precio:'$65',
      descripcion:'Toronja, té de limón, vino blanco, agua tónica y mezcal, disfrutarás de un sabor suave, elegante y refrescante',
      imagen:'imagenes/fotos menu/mixologia/toronja.jpg'
    },
    {
      id:6,
      nombre:'Mezcalita papaya',
      precio:'$65',
      descripcion:'Papaya, hierba ruda, un toqué de limón y mezcal crean una refrescante combinación de sabores ancestrales',
      imagen:'imagenes/fotos menu/mixologia/papaya.jpg'
    },
    {
      id:7,
      nombre:'Mezcalita pepino',
      precio:'$65',
      descripcion:'Pepino con té negro y mezcal es una sabrosa infusión de sabores suaves, frescos y semiamargos',
      imagen:'imagenes/fotos menu/mixologia/pepino.jpg'
    },
    {
      id:8,
      nombre:'Mezcalillo',
      precio:'$65',
      descripcion:'Intensa y aromática combinación de sabores, ideal para amantes del café con mezcal',
      imagen:'imagenes/fotos menu/mixologia/mezcalillo.jpg'
    },


  
  ],
  destilados:[
    {
       
       nombre: 'Mezcal',
       imagen:'imagenes/fotos menu/destilados/mezcal.jpg',
       descripcion1: 'Mezcal de la casa',
       precio1:'Tragos $22',
       descripcion2:'Chupacabras $650 , Bruxo $790, Union $720, 400 Conejos $790',
       precio2:'Tragos $35',
       descripcion3:'Agua Maldita $890, Mexcalito maracuya $890, Mexcalito coco $890, Montelobos $950, Alipús $1050',
       precio3:'Tragos $45'
   
    },
    {
    
      nombre: 'Tequila',
      imagen:'imagenes/fotos menu/destilados/tequila.jpg',
      descripcion1: 'Centenario plata y reposado $450, Antiguo plata y reposado $450, Tradicional plata y reposado $450 ',
      precio1:'Tragos $22',
      descripcion2:'7 Leguas $790, Don Julio blanco $790, Herradura plata y reposado $790/$850',
      precio2:'Tragos $35',
      descripcion3:'Maestro Dobel $950, Herradura Ultra $1050, Don Julio 70 $1050',
      precio3:'Tragos $45'
    
    },
    {
   
      nombre: 'Whisky',
      imagen:'imagenes/fotos menu/destilados/whisky.jpg',
      descripcion1: 'Black and white $450, JW Etiqueta roja $490',
      precio1:'Tragos $22',
      descripcion2:'Jack Daniels $790',
      precio2:'Tragos $35',
      descripcion3:'Buchanans $990, JW Etiqueta negra $990',
      precio3:'Tragos $45'
    
    },
    {

      nombre: 'Ron',
      imagen:'imagenes/fotos menu/destilados/ron.jpg',
      descripcion1: 'Appleton Especial $450, Bacardi $450, Captain Morgan $450',
      precio1:'Tragos $22',

    
    },
    {
   
      nombre: 'Vodka',
      imagen:'imagenes/fotos menu/destilados/vodka.jpg',
      descripcion1: 'SKYY $450, Absolut $490, Stolichnaya $520',
      precio1:'Tragos $22',

    
    },
    {
  
      nombre: 'Ginebra',
      imagen:'imagenes/fotos menu/destilados/gin.jpg',
      descripcion2:'Tanqueray $750',
      precio2:'Tragos $35',
      descripcion3:'Bombay $850, Bulldog $950',
      precio3:'Tragos $45'
    
    },
    {
  
      nombre: 'Brandy',
      imagen:'imagenes/fotos menu/destilados/brandy.jpg',
      descripcion1: 'Torres 10 $690',
      precio1:'Tragos $35',

    
    },
    {
  
      nombre: 'Licores y otros',
      imagen:'imagenes/fotos menu/destilados/licor.jpg',
      descripcion1: 'Jagermeister $750',
      precio1:'Tragos $35',
      descripcion2:'Redbull $70, Cajetilla Marlboro Rojos/Blancos $90',
      precio2:'Otros productos',
  
    
    },
  ],
  bebidas:[
    {
      id:1,
      nombre:'Chela + Mezcal',
      precio:'$39',
      descripcion1:'El favorito de La Mezcalita',
      descripcion2:'Nuestro mezcal de la casa servido en jicarita, con naranjitas espolvoreadas con sal de gusano y acompañado de una chela de $22',
      imagen:'imagenes/fotos menu/bebidas/chela + mezcal.jpg'

    }, 
    {
      id:2,
      nombre:'Mezcal con alacrán',
      precio:'$99',
      descripcion1:'"Poco veneno no mata solo ataranta"',
      descripcion2:'Nuestro emblemático shot de 2 oz de mezcal de la casa con un alacrán real',
      imagen:'imagenes/fotos menu/bebidas/mezcal-alacran.jpg'

    }, 
    {
      id:3,
      nombre:'Mezcales de sabor',
      precio:'$35',
      descripcion1:'Deliciosos mezcales curados de sabores',
      descripcion2:'Maracuya, mango, piña colada, capuccino, tamarindo, arandano y jamaica',
      imagen:'imagenes/fotos menu/bebidas/mezcal-maracuya.jpg'

    },

    {
      id:4,
      nombre:'Cocteles',
      precio:'$22',
      descripcion1:'¡Refrescantes y deliciosas bebidas preparadas!',
      descripcion2:'Cantarito, paloma, vampirito, piña colada, pitufo, mojito, margarita, hierbabuena y gin pepino',
      imagen:'imagenes/fotos menu/bebidas/cocteles.jpg'

    },
    {
      id:5,
      nombre:'¡Ronda de chupitos!',
      precio:'$150',
      descripcion1:'Nada mas divertido que festejar con chupitos',
      descripcion2:'8 shots de 2 oz de chupitos preparados',
      imagen:'imagenes/fotos menu/bebidas/chupitos.jpg'

    },
    {
      id:6,
      nombre:'Micheladas',
      precio:'$22',
      descripcion1:'variedad de micheladas para todos los gustos',
      descripcion2:'Pepino, camarón seco, clamato, cielo rojo, salsas negras, rusa',
      imagen:'imagenes/fotos menu/bebidas/michelada2.jpg'

    },   

    {
      id:7,
      nombre:'Caguamas',
      precio1:'$45',
      precio2:'$55',
      precio3:'$65',
      descripcion1:'Tecate roja 940ml, Tecate light 940ml, Carta blanca 940ml',
      descripcion2:'XX Lager 1200ml, XX Ambar 1200ml',
      descripcion3:'Miller Highlife 946ml, Heineken 1000ml',
      imagen:'imagenes/fotos menu/bebidas/caguamas.jpg'

    },
    {
      id:8,
      nombre:'Cervezas',
      precio1:'$22',
      precio2:'$35',
      descripcion1:'Tecate light, Tecate roja, XX lagger, XX ambar, Carta blanca, Indio',
      descripcion2:'Bohemia clara, Bohemia oscura, Miller Highlife, Heineken, Amstel ultra',
      imagen:'imagenes/fotos menu/bebidas/cervezas.jpg'

    },

    {
      id:9,
      nombre:'Sin alcohol',
      precio:'$22',
      descripcion1:'Para el abstemio, los niños y las botellas',
      descripcion2:'Naranjada, limonada, refresco, agua del dia, jugo, agua natural',
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
      preview_imagen:'imagenes/imagenes promo/preview/preview-godinez.jpg',
      info_imagen:'imagenes/imagenes promo/info/info-godinez.jpg'
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
