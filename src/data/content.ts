// A single visual universe: official artwork from Tears of the Kingdom.
// Asset provenance is documented in public/assets/zelda/.
export const brand = {
  name: "The Legend of Zelda",
  tagline: "El cielo es solo el principio.",
  intro:
    "Hay lugares que no se olvidan. Una silueta en el horizonte, el sonido del viento, un camino que todavía no has recorrido. Hyrule vuelve a abrirse ante ti. Esta vez, la aventura no termina en la tierra: continúa entre las nubes y se adentra en lo desconocido.",
  about:
    "Un reino suspendido entre su pasado y su futuro. Islas que flotan sobre las nubes, ruinas que guardan historias y una oscuridad bajo tus pies. En Tears of the Kingdom, cada desvío puede ser el comienzo de tu propia aventura.",
};
export const sections = [
  { id: "universo", label: "Universo" },
  { id: "mundos", label: "Mundos" },
  { id: "poderes", label: "Poderes" },
  { id: "galeria", label: "Galería" },
  { id: "personajes", label: "Personajes" },
  { id: "faq", label: "Guía" },
];
export const worlds = [
  {
    name: "Cielo",
    image: "world-sky.jpg",
    color: "#7b9f9d",
    label: "01 / Sobre las nubes",
    subtitle: "La aventura toma altura.",
    description:
      "Deja el suelo atrás. Las islas celestes esconden construcciones ancestrales, senderos suspendidos y perspectivas imposibles. Mira a tu alrededor, prepara el salto y descubre hasta dónde puedes llegar.",
  },
  {
    name: "Tierra",
    image: "world-surface.jpg",
    color: "#496752",
    label: "02 / Un reino por recorrer",
    subtitle: "Un horizonte. Mil caminos.",
    description:
      "El Hyrule que recuerdas tiene nuevas historias. Entre bosques, montañas y poblados, los pequeños encuentros dan sentido al viaje. A veces, la mejor ruta es la que todavía no aparece en tu mapa.",
  },
  {
    name: "Abismo",
    image: "world-depths.jpg",
    color: "#352e3c",
    label: "03 / Bajo la superficie",
    subtitle: "Encuentra tu propia luz.",
    description:
      "Bajo la tierra se extiende otro mundo. La oscuridad transforma la exploración en una búsqueda de señales, luz y orientación. Avanza con cuidado: aquí cada descubrimiento se siente distinto.",
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
      "Mueve, gira y une objetos para dar forma a tus ideas. Un puente improvisado, un vehículo inesperado o una solución que solo se te habría ocurrido a ti. La creatividad también es una herramienta.",
  },
  {
    name: "Combinación",
    image: "ability-fuse.jpg",
    word: "IMAGINA",
    description:
      "Dos objetos. Una posibilidad nueva. Combina materiales con armas, escudos o flechas y experimenta con el resultado. Mira lo cotidiano de otra manera: cualquier hallazgo puede cambiar tu siguiente encuentro.",
  },
  {
    name: "Infiltración",
    image: "ability-ascend.jpg",
    word: "ASCIENDE",
    description:
      "Cuando el camino parece terminar, mira hacia arriba. Atraviesa techos y emerge al otro lado para descubrir una nueva perspectiva. El paisaje deja de ser una barrera y se convierte en una oportunidad.",
  },
  {
    name: "Retroceso",
    image: "ability-recall.jpg",
    word: "REBOBINA",
    description:
      "Haz que un objeto recorra de nuevo su trayectoria, esta vez en sentido contrario. Observa su movimiento, encuentra el momento y transforma lo que acaba de ocurrir en tu próximo paso.",
  },
];
export const characters = [
  {
    name: "Link",
    role: "El valor de seguir",
    image: "link.webp",
    color: "#467862",
    description:
      "Un héroe de pocas palabras y una curiosidad sin límites. Frente a un reino transformado, sus nuevas habilidades abren caminos donde antes no los había.",
  },
  {
    name: "Zelda",
    role: "La luz de Hyrule",
    image: "zelda.webp",
    color: "#bdad77",
    description:
      "La princesa de Hyrule mira al pasado para comprender el presente. Su vínculo con el reino está en el corazón de esta historia.",
  },
  {
    name: "Ganondorf",
    role: "La sombra que regresa",
    image: "ganondorf.webp",
    color: "#814c40",
    description:
      "Una presencia antigua y amenazadora. Su regreso proyecta una sombra sobre Hyrule y pone en marcha una nueva lucha por su destino.",
  },
];
export const faqs = [
  [
    "¿Qué Hyrule estamos explorando?",
    "Esta página está dedicada al universo de The Legend of Zelda: Tears of the Kingdom. Su arte, personajes y paisajes pertenecen a una misma entrega, para que todo forme parte del mismo viaje visual.",
  ],
  [
    "¿Necesito conocer la historia anterior?",
    "Puedes disfrutar de este recorrido visual sin conocer la saga. Tears of the Kingdom continúa el mundo de Breath of the Wild, pero aquí presentamos sus ideas y protagonistas de forma sencilla.",
  ],
  [
    "¿Encontraré spoilers importantes?",
    "El recorrido se centra en los paisajes, las habilidades y los personajes de la presentación del juego. Evitamos explicar giros de la historia, el final o cómo resolver los grandes misterios.",
  ],
  [
    "¿Qué puedo explorar en esta página?",
    "Abre las fichas de los tres mundos, recorre las cuatro habilidades, cambia de paisaje en la galería y descubre a los personajes. También puedes abrir el tráiler desde el botón de la esquina.",
  ],
  [
    "¿De dónde salen las imágenes?",
    "El arte y las capturas proceden de los sitios oficiales de Nintendo para Tears of the Kingdom. Hemos reunido paisajes e ilustraciones de esta misma aventura para mantener una identidad visual coherente.",
  ],
  [
    "¿Es una página oficial de Nintendo?",
    "No. Es un proyecto de homenaje hecho por un fan. The Legend of Zelda y sus personajes, imágenes y marcas pertenecen a Nintendo.",
  ],
];
