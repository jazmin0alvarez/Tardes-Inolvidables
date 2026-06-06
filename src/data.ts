import { Recipe, GrandparentReview } from "./types";

export const RECIPES_DATA: Recipe[] = [
  {
    id: "receta-1",
    name: "Budín Esponjoso de Limón 'Nubes de Azúcar'",
    duration: "25 min prep. + 30 min horno",
    difficulty: "Muy Fácil",
    description: "Un clásico riquísimo e infalible, de esos que perfuman toda la casa con aroma a cítrico y hacen arrugar la nariz de felicidad. Con ingredientes simples que ya tenés en la alacena.",
    tags: ["El favorito de siempre", "Super esponjoso", "Con glaseado fácil"],
    isGlutenFree: false,
    imageAlt: "Budín de limón dorado con glaseado blanco goteando por los costados"
  },
  {
    id: "receta-2",
    name: "Cookies Crujientes con Pepas de Chocolate 'Mágicas'",
    duration: "15 min prep. + 12 min horno",
    difficulty: "Fácil",
    description: "Ideales para hacer bollitos con los nietos. No requieren molde ni estirar. Ellos van a amar colocar los 'ojitos' de chocolate encima antes de que entren al horno templado.",
    tags: ["Divertido para hacer con las manos", "Mucha diversión", "Se hornea volando"],
    isGlutenFree: false,
    imageAlt: "Cookies redondas doradas con abundantes chips de chocolate"
  },
  {
    id: "receta-3",
    name: "Super Budincito de Manzana y Canela 'Otoño Cálido'",
    duration: "20 min prep. + 35 min horno",
    difficulty: "Práctico",
    description: "Una variante llena de sabor que convence a cualquier chiquito. Es super húmedo gracias a las manzanas ralladas y le da ese toque mágico y nostálgico con la canela.",
    tags: ["Húmedo natural", "Perfuma la casa", "Fruta camuflada"],
    isGlutenFree: false,
    imageAlt: "Budín húmedo de manzanas con trozos dorados en la superficie"
  },
  {
    id: "receta-4",
    name: "Cookies Suaves de Maicena y Coco (Sin TACC)",
    duration: "15 min prep. + 10 min horno",
    difficulty: "Muy Fácil",
    description: "Súper livianas, se deshacen en la boca. Una opción deliciosa y segura si en la familia hay celíacos o si preferís evitar la harina de trigo tradicional. Quedan divinas con dulce de leche.",
    tags: ["Sin Trigo (Apto Celíacos)", "Suavidad total", "Con dulce de leche"],
    isGlutenFree: true,
    imageAlt: "Alfajorcitos o cookies de maizena y coco rallado"
  },
  {
    id: "receta-5",
    name: "Bizcochuelo Arcoíris con Dulce de Leche (Sin TACC)",
    duration: "20 min prep. + 30 min horno",
    difficulty: "Práctico",
    description: "Un bizcocho de vainilla esponjoso con fécula de maíz, libre de gluten, decorado con granas de colores que entusiasmarán a tus nietos. ¡El compañero ideal del mate y el vasito de leche!",
    tags: ["Especial celíacos", "Colores divertidos", "Clásico argentino"],
    isGlutenFree: true,
    imageAlt: "Torta esponjosa de vainilla con granas de colores de fiesta"
  }
];

export const FRUIT_DESIGNS = [
  {
    id: "fruta-1",
    name: "El León del Sol (Súper Vitamina C)",
    difficulty: "¡En 5 minutos!",
    ingredients: "Mandarina o Naranja + Banana + Arándano",
    description: "Gajitos de mandarina forman la melena del león alrededor de una rodaja gruesa de banana que será su carita traviesa. ¡Una forma irresistible de comer cítricos sin protestar!"
  },
  {
    id: "fruta-2",
    name: "La Oruga Glotona de Uvas",
    difficulty: "Súper divertido",
    ingredients: "Uvas sin semilla + Kiwi + Dulce de leche (para pegar ojitos)",
    description: "Uvas verdes puestas una al lado de la otra en curva forman el cuerpito de una alegre oruguita sobre una alfombra de rodajas de kiwi verde brillante."
  },
  {
    id: "fruta-3",
    name: "Monstruito Dentudo de Manzana",
    difficulty: "Éxito asegurado",
    ingredients: "Gajo de manzana roja + Frutilla + Semillas de girasol",
    description: "Un gajo de manzana ahuecado actúa como una gran boca abierta, las semillas de girasol son los dientes torcidos y una rodajita de frutilla es la lengua que dice ¡hola!"
  }
];

export const REVIEWS_DATA: GrandparentReview[] = [
  {
    id: "rev-1",
    name: "Marta Gómez",
    age: 62,
    location: "Belgrano, CABA",
    avatarColor: "bg-rose-100 text-rose-700",
    comment: "Mis nietas de 5 y 8 años venían a casa y se quedaban pegadas a las pantallitas de la tablet. Con este kit encontré una forma de que amasen conmigo. Se deleitaron comiendo y se pasaron la tarde pintando los dibujos del librito sin pedir el teléfono ni una sola vez. ¡El budín de limón sale perfecto siempre!",
    stars: 5,
    date: "Hace 3 días",
    relationship: "Abuela de Martina (5) y Sofi (8)",
    verified: true
  },
  {
    id: "rev-2",
    name: "Graciela Fernández",
    age: 58,
    location: "Córdoba Capital",
    avatarColor: "bg-teal-100 text-teal-700",
    comment: "Tengo mellizos de 6 años que son un terremoto. La guía de frutas divertidas con monstruos de manzana los volvió locos: ¡comieron fruta por primera vez sin quejarse ni rezongar! Una inversión hermosa para tener recuerdos reales de cuando eran chiquitos. Muy fácil de enterder y aplicar.",
    stars: 5,
    date: "Hace una semana",
    relationship: "Abuela de Dante y Lucas (6)",
    verified: true
  },
  {
    id: "rev-3",
    name: "Liliana Rosales",
    age: 67,
    location: "San Miguel, GBA Norte",
    avatarColor: "bg-amber-100 text-amber-700",
    comment: "Me daba culpa estar cansada y terminar encendiéndoles los dibujitos en la tele para poder descansar. Este manual me salvó las tardes. Es práctico, cortito y las recetas son con lo que una tiene a mano, no hay que salir a comprar cosas caras ni raras.",
    stars: 5,
    date: "Hace 12 días",
    relationship: "Abuela de Toti (4) y Juani (7)",
    verified: true
  },
  {
    id: "rev-4",
    name: "Mirta Varela",
    age: 64,
    location: "Rosario, Santa Fe",
    avatarColor: "bg-blue-100 text-blue-700",
    comment: "Mis nietos mellizos tienen celiaquía, así que las recetas sin TACC añadidas me vinieron bárbaro. Es un gran alivio cocinar algo que sé con total seguridad que les hace bien y que encima les fascina comer. El diploma de Mini Chef lo imprimimos y lo tienen en la heladera.",
    stars: 5,
    date: "Hace 15 días",
    relationship: "Abuela de Facu y Benja (5)",
    verified: true
  }
];

export const FAQS = [
  {
    id: "faq-1",
    question: "¿Cómo recibo el material una vez que hago el pago?",
    answer: "¡Súper fácil y al instante! Una vez confirmado el pago, te llega un correo electrónico con un enlace para abrirlo y guardarlo en tu computadora, celular o tablet. Práctico, rápido y sin complicarte con nada raro."
  },
  {
    id: "faq-2",
    question: "No soy muy buena con la tecnología, ¿voy a poder abrirlo?",
    answer: "¡Claro que sí! Está pensado exactamente para que sea simple de abrir. Solo hacés un clic en el botón azul o verde de tu correo y ya se abre el recetario con las letras bien grandes para que puedas leerlo cómodamente. Además, podés compartirlo por WhatsApp con un solo botón."
  },
  {
    id: "faq-3",
    question: "Las actividades y los dibujos, ¿hay que imprimirlos sí o sí?",
    answer: "No es obligatorio, pero sí muy recomendable. El diploma de Mini Chef y las hojas para colorear están diseñados en blanco y negro de manera muy limpia para que consuman poquísima tinta al imprimirse en cualquier impresora común del barrio, ¡o podés usarlos de guía para dibujar vos misma con ellos!"
  },
  {
    id: "faq-4",
    question: "¿Las recetas llevan ingredientes muy complicados o caros?",
    answer: "¡Para nada! Un buen budín o unas cookies se hacen con lo básico: harina, azúcar, un huevo, aceite o manteca, y ralladura de frutas. Buscamos que cocines con lo que ya tenés en la despensa, cuidando el bolsillo y evitando complicaciones."
  },
  {
    id: "faq-5",
    question: "¿Qué pasa si mis nietos son chiquitos (ej. de 2 o 3 años)?",
    answer: "¡Está pensado justamente para ellos! En las recetas te sugerimos ideas paso a paso para que los más chiquitos de 2 o 3 años puedan participar de forma segura (como aplastar la banana o agregar las chispas de chocolate) y los más grandes se encarguen de amasar o decorar, logrando que todos colaboren sin peligro."
  },
  {
    id: "faq-6",
    question: "¿Qué garantía tengo de que me guste?",
    answer: "Confiamos tanto en esta propuesta para unir a tu familia que te damos una Garantía de Satisfacción Total de 30 días. Si lo abrís y sentís que no es lo que esperabas, nos mandás un mensajito o un mail y te devolvemos el 100% de tu dinero inmediatamente, sin preguntas incómodas."
  }
];
