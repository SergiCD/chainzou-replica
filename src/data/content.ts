// A single visual universe: official artwork from Tears of the Kingdom.
// Asset provenance is documented in public/assets/zelda/.
export const brand = {
  name: "The Legend of Zelda",
  tagline: "EL REINO HA CAMBIADO.",
  intro:
    "Hyrule vuelve a abrirse ante ti. Pero esta vez tendrás que mirar hacia arriba… y hacia abajo. Sobre las nubes, entre las ruinas y bajo la tierra, el reino esconde caminos que todavía están por descubrir.",
  about:
    "El Hyrule que conocías ha cambiado. Hay islas sobre las nubes, ruinas que guardan secretos y un mundo entero bajo tus pies. Aquí no hay un único camino. Hay uno que todavía no has encontrado.",
};
export const sections = [
  {
    id: "universo",
    label: "Universo",
  },
  {
    id: "mundos",
    label: "Mundos",
  },
  {
    id: "poderes",
    label: "Poderes",
  },
  {
    id: "galeria",
    label: "Galería",
  },
  {
    id: "personajes",
    label: "Personajes",
  },
  {
    id: "faq",
    label: "Guía",
  },
];
export const worlds = [
  {
    name: "Cielo",
    image: "world-sky.jpg",
    color: "#7b9f9d",
    label: "01 / MÁS ALLÁ DEL CIELO",
    subtitle: "EL CIELO NO ES EL LÍMITE.",
    description:
      "Deja el suelo atrás. Entre islas flotantes, ruinas ancestrales y caminos suspendidos, cada salto puede llevarte a un lugar que no aparecía en tu mapa.",
  },
  {
    name: "Tierra",
    image: "world-surface.jpg",
    color: "#496752",
    label: "02 / EL Hyrule QUE CONOCES",
    subtitle: "UN REINO. INFINITOS CAMINOS.",
    description:
      "Hyrule sigue ahí. Bosques, montañas, pueblos y caminos que parecen familiares… hasta que decides desviarte. Porque a veces la aventura empieza cuando dejas atrás el camino marcado.",
  },
  {
    name: "Abismo",
    image: "world-depths.jpg",
    color: "#352e3c",
    label: "03 / MÁS ALLÁ DE LA OSCURIDAD",
    subtitle: "BAJO TUS PIES HAY OTRO MUNDO.",
    description:
      "Bajo Hyrule existe otro mundo. La oscuridad cambia las reglas y cada paso cuenta. Enciende una luz, sigue una señal y descubre qué se esconde donde nunca llega el sol.",
  },
];
export const gallery = worlds.map((world, i) => ({
  ...world,
  image:
    i === 0
      ? "world-sky-islands.jpg"
      : i === 1
        ? "world-paraglider.jpg"
        : world.image,
}));
export const powers = [
  {
    name: "Ultramano",
    image: "ability-ultrahand.jpg",
    word: "CONSTRUYE",
    description:
      "Si no existe un camino, constrúyelo. Une objetos, improvisa y convierte una idea absurda en la solución perfecta.",
  },
  {
    name: "Combinación",
    image: "ability-fuse.jpg",
    word: "FUSIONA",
    description:
      "Una espada. Una roca. Una flecha. Combínalos y descubre hasta dónde puede llegar una buena idea.",
  },
  {
    name: "Infiltración",
    image: "ability-ascend.jpg",
    word: "ATRAVIESA",
    description:
      "¿Un techo? ¿Un obstáculo? Quizá solo sea otro camino. Atraviesa la superficie y aparece donde menos te lo esperas.",
  },
  {
    name: "Retroceso",
    image: "ability-recall.jpg",
    word: "VUELVE ATRÁS",
    description:
      "Lo que acaba de ocurrir no tiene por qué ser definitivo. Devuelve un objeto sobre sus pasos y cambia lo que viene después.",
  },
];
export const characters = [
  {
    name: "Link",
    role: "EL HÉROE QUE SIGUE ADELANTE",
    image: "link.webp",
    color: "#467862",
    description:
      "Link vuelve a recorrer Hyrule. El reino ha cambiado, pero su determinación sigue intacta. Esta vez, tendrá que encontrar nuevas formas de avanzar.",
  },
  {
    name: "Zelda",
    role: "EL PASADO DE HYRULE",
    image: "zelda.webp",
    color: "#bdad77",
    description:
      "Zelda busca respuestas en la historia de Hyrule. Su pasado y el destino del reino están más unidos que nunca.",
  },
  {
    name: "Ganondorf",
    role: "EL MAL HA DESPERTADO",
    image: "ganondorf.webp",
    color: "#814c40",
    description:
      "Una antigua amenaza ha regresado. Y esta vez, su presencia vuelve a poner el destino de Hyrule en juego.",
  },
];
export const faqs = [
  [
    "¿QUÉ HYRULE ESTAMOS EXPLORANDO?",
    "Esta página recorre el universo de The Legend of Zelda: Tears of the Kingdom: sus paisajes, personajes y algunas de las ideas que hacen único este Hyrule.",
  ],
  [
    "¿NECESITO CONOCER LA HISTORIA ANTERIOR?",
    "No hace falta. Esta página está pensada como un recorrido visual por Tears of the Kingdom y presenta sus mundos, habilidades y protagonistas sin exigir que conozcas toda la historia anterior.",
  ],
  [
    "¿HAY SPOILERS?",
    "No encontrarás grandes revelaciones de la historia. Nos centramos en el mundo, las habilidades y los personajes para que puedas explorar la página sin arruinarte los descubrimientos más importantes.",
  ],
  [
    "¿QUÉ PUEDO DESCUBRIR AQUÍ?",
    "Explora el cielo, la tierra y el abismo. Descubre las cuatro habilidades, recorre la galería y conoce a Link, Zelda y Ganondorf. Y, si quieres ver Hyrule en movimiento, tienes el tráiler en la esquina.",
  ],
  [
    "¿DE DÓNDE SALE EL ARTE?",
    "El arte y las capturas proceden de los sitios oficiales de Nintendo para Tears of the Kingdom. Se han reunido aquí como parte de este proyecto de homenaje no oficial.",
  ],
  [
    "¿ESTA ES UNA PÁGINA OFICIAL DE NINTENDO?",
    "No. Es un proyecto de homenaje hecho por un fan y no está afiliado a Nintendo. The Legend of Zelda y sus personajes, imágenes y marcas pertenecen a Nintendo.",
  ],
];
