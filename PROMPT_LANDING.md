# Prompt maestro para reproducir la landing de ChainZoku

> Referencia visual y funcional: <https://chainzoku.io/>. Proyecto: React + TypeScript + Vite. Este documento describe el objetivo de reproducción, la composición observada en la referencia y las adaptaciones que ya existen en este repositorio. Se ha redactado a partir del código del proyecto, su inventario de recursos y la auditoría previa del HTML, CSS, JavaScript y recursos de la referencia. Una descripción escrita no garantiza una coincidencia píxel a píxel: las capturas y la comparación de los estados de interacción forman parte del trabajo.

## Contexto del repositorio y rama de trabajo

- Repositorio: [SergiCD/chainzou-replica](https://github.com/SergiCD/chainzou-replica).
- Remoto de Git: `origin`, con URL `https://github.com/SergiCD/chainzou-replica.git`.
- Rama de trabajo: `main`, vinculada a `origin/main`. Continúa en esta rama salvo que el usuario indique otra.
- Antes de editar, comprueba el estado local y el remoto. Conserva los cambios ajenos, integra cualquier avance compatible y evita sobrescribir el historial.
- Al terminar un cambio autorizado, guarda el resultado y actualiza esta rama. Crear otro repositorio o publicar en un servicio de hosting requiere una petición específica.

## Cómo utilizar este documento

Copia este documento completo como instrucción para el agente que vaya a construir o continuar la landing. Completa las variables del apartado de contenidos cuando se cambie la temática. Mientras no haya nuevos contenidos aprobados, conserva los existentes en `src/data/content.ts` y los recursos de referencia disponibles en `public/assets/`.

La prioridad es mantener el lenguaje visual, las proporciones, el ritmo de scroll y la personalidad de la referencia. Cambiar la temática no significa rediseñar la página como una landing comercial genérica. Los apartados marcados como **referencia** describen comportamientos observados; los marcados como **implementación actual** explican decisiones de esta réplica. Los requisitos de calidad y la arquitectura propuesta son instrucciones para el trabajo posterior, no afirmaciones de que todo esté ya implementado.

---

## 1. Encargo y resultado esperado

Construye una landing editorial e inmersiva en React que reproduzca con mucha fidelidad el estilo de ChainZoku. Debe sentirse como la entrada a un universo de personajes, cultura urbana, anime, moda, coleccionismo y videojuegos: una pieza de dirección artística que se explora con el scroll.

La experiencia debe dar prioridad a ilustraciones y personajes 3D de gran formato, una portada cinematográfica con varias capas, tipografía muy expresiva, cambios contundentes de color, composiciones asimétricas, cintas gráficas inclinadas y controles pequeños pero reconocibles. El resultado ha de conservar una identidad visual continua desde la portada hasta el footer.

Entrega una página real y navegable. Implementa la navegación interna, los estados de selección, los carruseles, los detalles de clanes o categorías, el acordeón de preguntas, el menú móvil y el reproductor de tráiler. Todos los botones y enlaces visibles deben tener una función definida. Mantén textos, rutas y recursos desacoplados de la maquetación para poder cambiar el contenido más adelante sin reescribir las secciones.

No presentes la entrega como una copia exacta basándote solo en haber seguido este texto. Comprueba las proporciones y los estados contra la referencia y documenta cualquier adaptación pendiente.

### Alcance de esta página

- Portada, introducción, presentación del universo, interludio de vídeo, selección de tres clanes, carrusel de visión, demostración de personalización, equipo, FAQ y footer.
- Cabecera fija, navegación lateral de secciones en escritorio y navegación superpuesta en móvil.
- Animaciones de entrada, movimiento ambiental y animaciones ligadas al progreso de scroll.
- Recursos locales cuando estén disponibles y recursos externos identificados cuando dependan de terceros.
- Preparación para sustituir marca, personajes, mensajes, categorías, equipo y enlaces.

La landing no incluye por sí sola un sistema de minting, conexión de wallets, contratos, cuentas de usuario, juego, editor 3D ni las páginas externas Box Reveal, Lore, My Zoku y Jumps. El vídeo de personalización es una demostración pregrabada, no un editor interactivo. No inventes esas funciones al describir o construir la página.

## 2. Dirección artística que debe permanecer

La página combina la intensidad de un póster de cultura urbana con una puesta en escena de videojuego. El carácter surge de la relación entre ilustración, tipografía y espacio; no de añadir muchos efectos indiscriminadamente.

Conserva estas decisiones:

1. **Escala extrema.** La marca ocupa casi todo el ancho de la primera pantalla. Los personajes y objetos pueden ser mayores que su contenedor y quedar cortados de forma deliberada.
2. **Titulares compactos.** Usa letras muy condensadas, pesadas y altas para las grandes declaraciones. Los títulos de apoyo usan una grotesca negra e inclinada. Las etiquetas pequeñas son anchas, mayúsculas y espaciadas con precisión.
3. **Capas con profundidad.** Fondo, niebla o nubes, marca y escena principal se mueven a velocidades diferentes. El scroll revela físicamente la escena antes de entrar en el contenido editorial.
4. **Ritmo irregular.** Alterna escenas a todo ancho, bloques de lectura, grandes recortes de personajes, tarjetas superpuestas y secciones oscuras. No conviertas todas las secciones en una misma cuadrícula.
5. **Contraste de materiales.** Fondos crema, tinta oscura, azul profundo y lavanda apagado conviven con acentos lima y rosa muy vivos. Los gráficos tienen presencia táctil: cartas, pegatinas, cintas, recortes y objetos.
6. **Asimetría controlada.** Inclina cartas y cintas, desplaza algunas tarjetas de equipo y corta sus bordes inferiores. Conserva la legibilidad y una alineación clara para el texto.
7. **Movimiento con propósito.** Usa el scroll para contar la historia, señalar un cambio de sección o reforzar la profundidad. Usa transiciones más breves para responder a la interacción.

Evita la estética de plantilla SaaS: no añadas un hero de texto y botón junto a una captura de dashboard, tarjetas uniformes para cada párrafo, degradados violetas arbitrarios, fondos de partículas genéricos, superficies de cristal por todas partes, precios o testimonios inventados. Tampoco sustituyas los personajes protagonistas por iconos pequeños ni reduzcas la portada a un banner convencional de una pantalla si se busca el comportamiento de escritorio de la referencia.

## 3. Sistema visual

### 3.1 Paleta y función de cada color

Estos valores están documentados en la referencia o en los datos actuales. Usa variables semánticas y mantén explícita la diferencia entre ambos estados.

| Token o zona             | Valor                 | Función y procedencia                                                                                                                         |
| ------------------------ | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Crema principal          | `#fffff7`             | Fondo editorial y texto claro; referencia y valor final actual de `--paper`.                                                                  |
| Tinta de referencia      | `#1c1616`             | Negro cálido para texto y tarjetas de equipo en la referencia.                                                                                |
| Tinta de la réplica      | `#14132d`             | Valor actual de `--ink`; se usa también como fondo de Vision y en otros elementos de la réplica. No confundirlo con el negro cálido original. |
| Lima                     | `#cdfb52`             | Resaltados, pegatinas y controles; referencia y valor final actual de `--lime`.                                                               |
| Rosa                     | `#f756a3`             | Acento secundario, asteriscos y detalles; referencia y valor final actual de `--pink`.                                                        |
| Cielo                    | `#5c97ce`             | Base de la portada de referencia, complementada por su imagen de fondo.                                                                       |
| Oni                      | `#4c542e`             | Verde oliva del primer clan en los datos actuales.                                                                                            |
| Bunraku                  | `#a51e13`             | Rojo del segundo clan en los datos actuales.                                                                                                  |
| Boso                     | `#d5b0d1`             | Lila del tercer clan en los datos actuales.                                                                                                   |
| Interludio Bunraku       | `#4f2a62`             | Fondo de la sección de vídeo en la referencia; la réplica usa crema detrás del vídeo.                                                         |
| Marco de personalización | `#8ba9cc`             | Azul exterior registrado en la referencia. La réplica muestra una sección crema con una superficie de respaldo `#67bcce` para el vídeo.       |
| Equipo                   | `#282e67`             | Fondo azul oscuro de referencia y valor final actual.                                                                                         |
| Tarjetas de equipo       | `#1c1616`             | Fondo cálido oscuro de cada ficha.                                                                                                            |
| Transición FAQ           | `#a2b6cf` → `#c4c1c6` | Degradado exterior de la FAQ de referencia; su contenido está dentro de un panel crema. La FAQ actual usa un fondo crema uniforme.            |
| Footer                   | `#c4c1c6`             | Lavanda grisáceo de referencia y valor final actual.                                                                                          |

Para alcanzar mayor fidelidad al original, usa los valores de referencia de forma consciente y revisa el contraste al ajustar la tinta global. No copies todas las declaraciones antiguas de `src/styles.css`: el archivo contiene reglas posteriores que sustituyen valores iniciales. Al consolidar estilos, calcula los valores efectivos antes de eliminar o mover reglas.

El lima debe guiar la mirada. Resérvalo para los fragmentos de título destacados, la selección de navegación, flechas circulares, smileys y etiquetas de acción. Los bloques de color de los clanes constituyen una composición a todo ancho, no pequeños acentos dentro de tarjetas blancas.

### 3.2 Tipografía

Las fuentes locales disponibles son parte esencial de la identidad. Cárgalas con `@font-face` y `font-display: swap`.

| Recurso local        | Fuente de referencia                      | Uso                                                                                                                               |
| -------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `display.woff2`      | Druk Heavy                                | Titulares monumentales en mayúsculas, números grandes, CTA final y rótulo Play. Alias actual: `ZokuDisplay`.                      |
| `body.woff2`         | Neue Haas Grotesk Display 76 Bold Italic  | Texto narrativo con inclinación característica. Alias actual: `ZokuText`.                                                         |
| `black-italic.woff2` | Neue Haas Grotesk Display 96 Black Italic | Navegación principal, títulos de Vision, nombres y roles del equipo, preguntas del FAQ y título Zokus. Alias actual: `ZokuBlack`. |
| `extended.woff2`     | Akzidenz Grotesk Bold Extended            | Subtítulos, navegación lateral, etiquetas, pequeñas llamadas a la acción y créditos. Alias actual: `ZokuExtended`.                |

La inclinación está incorporada en varios archivos de fuente. No apliques una segunda cursiva sintética que deforme la forma original. Comprueba el resultado del navegador y evita pesos simulados si se dispone de la variante exacta.

- Grandes titulares: interlineado aproximado de `0.87–0.95`, líneas cortas y ocupación amplia del espacio. Mantén el ancho de los caracteres; no los comprimas artificialmente para que quepan.
- Texto narrativo de referencia: aproximadamente `18px / 120%`, con bloques grandes de `23px` y un tracking cercano a `-0.02em`. El bloque introductorio de la réplica escala de `24px` a `48px` y tiene más protagonismo.
- Etiquetas de referencia: aproximadamente `12px`, mayúsculas, aspecto ancho.
- Titulares de selección de clan y personalización: escala con el viewport y saltos de línea deliberados. La réplica usa aproximadamente `14vw` para el título de clanes en escritorio.
- Los resaltados son tiras lima detrás de una palabra, ligeramente sesgadas o rotadas. No uses todos los títulos con el mismo tratamiento.

En un cambio de idioma, revisa de nuevo los saltos de línea. Una traducción más larga no debe romper el peso visual de una composición; reformula el titular o ajusta su escala dentro de un intervalo coherente.

### 3.3 Márgenes, capas y geometría

La referencia documenta márgenes exteriores de unos `45px` en escritorio, `35px` en tablet y `25px` en móvil. La réplica utiliza en varios puntos `3.5vw` como margen exterior. La navegación lateral necesita una reserva horizontal: las secciones de texto no deben quedar debajo de ella.

Usa superficies amplias, pocos bordes decorativos y esquinas mayoritariamente rectas. Los círculos corresponden a controles y smileys. Las fotos del equipo admiten un radio cercano a `10px`. Las tarjetas pueden terminar en una diagonal, por ejemplo `polygon(0 0,100% 0,100% 100%,0 90%)` en la referencia; la réplica corta el último vértice al `95%`.

Establece un orden de capas explícito: fondo de la sección, arte ambiental, personaje, contenido legible, controles locales, navegación fija y diálogos. Las capas decorativas deben usar `pointer-events: none` cuando corresponda. Las imágenes que sobresalen necesitan un recorte controlado de su sección, sin provocar scroll horizontal global.

## 4. Estructura completa de la página

Mantén este orden narrativo. Los identificadores actuales son `home`, `intro`, `zokus`, `clans`, `vision`, `customize`, `team` y `faq`. El interludio de vídeo y el footer no necesitan aparecer en la navegación lateral.

### 4.1 Cabecera fija y navegación lateral

La cabecera se superpone a la escena. Coloca la marca pequeña a la izquierda, la navegación principal centrada y los iconos sociales a la derecha. Los enlaces actuales son Home, Box Reveal, Lore, My Zoku y Jumps. El estado seleccionado y el hover de navegación usan una pequeña cápsula lima con texto oscuro.

Mantén la cabecera ligera y transparente en escritorio. Adapta el color de marca, enlaces y navegación lateral al fondo de la sección que se encuentra bajo ellos. Sobre fondos claros deben volverse oscuros; sobre escenas oscuras deben ser crema. En la implementación actual esa selección depende de `data-theme` y del scroll; debe verificarse durante los límites entre secciones.

La navegación lateral está fija en el margen izquierdo y centrada verticalmente. Es una columna de etiquetas pequeñas en mayúsculas: Zokus, Clans, Vision, Customize, Team y FAQ. Una línea fina con extremos curvos y pequeñas marcas horizontales conecta visualmente los enlaces. Destaca la sección activa mediante subrayado o el tratamiento ya utilizado. Al pulsar, desplaza la página a la sección y lleva el foco a su destino sin ocultar el contenido bajo la cabecera.

En móvil, oculta la navegación principal y lateral. Muestra un botón de menú que abre una capa de navegación con números de sección, nombres grandes y flechas diagonales. Cambia el botón a cierre. Al seleccionar una sección, cierra el menú y navega. Impide que el scroll del fondo siga funcionando mientras la capa esté abierta.

### 4.2 Portada cinematográfica

La primera pantalla está dominada por una marca blanca muy grande sobre un cielo ilustrado. Acompáñala de un subtítulo breve en mayúsculas. Más abajo aparece una escena vertical con personajes y una máquina expendedora, parcialmente envuelta en nubes. Las distintas capas deben conservar su profundidad y no parecer una sola imagen de fondo plana.

Recursos actuales:

- `sky.jpg`: cielo o fondo atmosférico.
- `logo.png`: marca blanca original, con proporción fuente `2880 × 1080`.
- `hero.webp`: escena vertical principal. El HTML de referencia declaraba `2880 × 3770`, mientras que el archivo descargado se identificó como `2880 × 3924`. Conserva la relación de aspecto intrínseca del recurso utilizado y calibra el encuadre visual; no lo deformes para forzar las dimensiones declaradas.
- `cloud-1.webp`, `cloud-2.webp`, `cloud-3.webp`: nubes separadas para las capas posterior y frontal.

La geometría documentada de escritorio usa `height: calc(130vw + 25vh)` y `min-height: 210vh`. La escena está anclada abajo, aproximadamente a `-1px`, a todo ancho. La marca ocupa el ancho disponible dentro de la primera pantalla y se coloca para que su parte visible quede equilibrada, teniendo en cuenta el espacio transparente del PNG. No evalúes su posición mirando solo el rectángulo del archivo.

La referencia mueve las nubes de forma muy lenta mediante conjuntos duplicados y bucles de aproximadamente `100s` y `130s`. El parallax documentado desplaza el contenedor de nubes alrededor de `0.25 × scroll`, el de la marca `0.45 × scroll` y la escena interior `0.05 × scroll`. Reproduce la relación de velocidades y comprueba el sentido de cada capa; esos coeficientes dependen de los contenedores originales y no son instrucciones para acumular transforms incompatibles.

La entrada de escena de referencia parte de un desplazamiento vertical de media pantalla y llega a su sitio en unos `1.25s`, con `power3.out`, comenzando alrededor de `0.45s`. La réplica ya usa entrada de marca, subtítulo y un parallax simplificado: la marca baja, se reduce y desaparece al avanzar el scroll; la escena y las nubes frontales también se desplazan.

Incluye una señal discreta para descubrir el contenido: flecha descendente dentro de un contorno vertical redondeado, centrada y con un movimiento suave. Debe funcionar como botón real que lleva a la introducción. No añadas grandes botones comerciales que compitan con la marca y la escena.

### 4.3 Introducción narrativa y objeto giratorio

Cambia a un fondo crema y ofrece una pausa visual tras la portada. En escritorio combina un objeto animado a la izquierda y un párrafo grande a la derecha. El recurso actual es una lata giratoria en `can.mp4`, con `can.png` como poster. El vídeo debe integrarse en el fondo sin mostrar un marco de reproductor sobre la composición; la réplica emplea `mix-blend-mode: multiply`.

El texto presenta el mundo de Tōdai y el comienzo de la historia. Sustitúyelo por el relato equivalente cuando cambie la temática. Conserva un único bloque narrativo con longitud y densidad semejantes, sin convertirlo en varias tarjetas de características.

Las palabras comienzan en un gris claro y se van oscureciendo siguiendo el scroll. La lectura debe sentirse progresiva, con un ritmo vinculado al avance de la página, no como texto que aparece automáticamente sin relación con la posición del usuario. La réplica usa un trigger entre `top 80%` y `bottom 60%`, `scrub: 1` y un stagger de `0.14` por palabra.

En móvil, coloca primero el objeto y después el texto. Mantén un tamaño de lectura generoso y suficiente aire alrededor. El contenido debe seguir siendo completamente legible con movimiento reducido o sin ejecutarse una animación.

### 4.4 Presentación de personajes o universo: Zokus

Continúa sobre crema. Cruza la sección con una cinta gráfica inclinada (`ribbon.svg`) que sugiera una banda impresa o una señal urbana. Sitúa el retrato principal centrado, dentro de un recorte irregular de estrella o explosión. Debajo, coloca el nombre del universo en una tipografía negra inclinada, un fragmento destacado en lima, un párrafo centrado y una llamada pequeña para descubrir los clanes.

El tamaño de arte documentado es aproximadamente `50vw` en escritorio, `70vw` en tablet y `90vw` en móvil. El texto centrado no debe extenderse indefinidamente; usa un ancho que mantenga la lectura y el peso visual del bloque.

**Referencia:** el retrato usa una máscara en canvas, una secuencia de diez imágenes rellenas y sus diez recortes transparentes correspondientes. La máscara gira de `0°` a `90°` según el progreso de la sección mientras el personaje permanece erguido. El retrato transparente se vuelve a dibujar en la zona superior para permitir que parte del personaje sobresalga. El ciclo recorre diez frames en aproximadamente `1.4s`, se pausa al hacer hover y cuando está fuera de pantalla.

**Implementación actual:** se alternan tres archivos `zoku-1.webp` a `zoku-3.webp`, uno cada `1.4s`, dentro de un `clip-path` CSS de estrella. Se pausa al hacer hover y con movimiento reducido. La animación de entrada y el giro ligado al scroll son aproximaciones. `zokus.webp` corresponde a la máscara original; no debe mostrarse como si fuera un retrato. La disponibilidad de `zoku-cutout-1.webp` no equivale a disponer de toda la secuencia original.

Para reproducir el comportamiento original, incorpora la secuencia completa y reconstruye la composición de máscara y recorte. Si se mantiene la versión actual, descríbela como adaptación y conserva su calidad visual; no afirmes que tiene los diez retratos ni que pausa automáticamente al salir de pantalla.

### 4.5 Interludio de vídeo Bunraku

Inserta una escena de vídeo amplia entre la explicación del universo y la selección de clan. Su función es cambiar el ritmo y mostrar un personaje en movimiento sin exigir lectura. El recurso local es `bunraku-rotation.mp4`.

En la referencia se documenta un fondo morado `#4f2a62`. En la réplica, el vídeo ocupa una sección con altura aproximada de `80vh`, un mínimo de `450px` y un máximo de `900px`, sobre crema. En móvil se reduce a unos `55vh` con mínimo de `360px`.

El vídeo ambiental debe estar silenciado, reproducirse inline y poder repetir sin controles intrusivos. Con movimiento reducido, presenta un poster y permite una reproducción voluntaria cuando corresponda. Ajusta el encuadre observando al personaje: `object-fit: cover` no debe cortar su parte esencial por accidente.

### 4.6 Selección de tres clanes o categorías

Crea una sección de gran impacto que ocupe aproximadamente una pantalla de escritorio, con un mínimo actual de `740px`. Divide el ancho en tres zonas de color: verde oliva, rojo y lila. Inclina ligeramente las separaciones para evitar una cuadrícula rígida. Los tres personajes son grandes recortes transparentes anclados a la parte inferior, superpuestos a su fondo y parcialmente cortados por el borde.

Coloca un titular condensado de enorme tamaño, en dos líneas, sobre las tres zonas: “Pick / your clan” o su equivalente de longitud similar. La composición tiene que permitir ver el título y reconocer los personajes a la vez.

Cada zona contiene una pegatina circular lima con smiley, una etiqueta pequeña “Learn more” y el nombre del clan. Al hacer hover, el personaje puede subir unos `20px` y crecer muy ligeramente; el smiley rota y el nombre aparece. Ofrece un estado equivalente al navegar con teclado; la interacción no puede depender solo del hover.

Los clanes actuales son OniZoku, Bunraku y BosoZoku. Cada uno tiene nombre, color, imagen, lema y descripción. En un cambio de temática pueden ser tres facciones, productos, disciplinas o universos, siempre con recursos visuales equivalentes en formato y peso.

**Referencia de escritorio:** al seleccionar un clan, su columna se expande y las otras se desplazan. El texto entra por letras desde abajo con stagger. Las entradas de los tres personajes llegan desde izquierda, abajo y derecha, respectivamente. Cerrar devuelve la composición a tres zonas.

**Implementación actual:** al seleccionar una zona se abre un diálogo accesible con el color del clan, personaje, nombre gigante de contorno al fondo, lema, descripción y cierre. Es una adaptación funcional. Para una réplica más literal, desarrolla la expansión dentro de la sección; para mantener esta rama sin cambiar el comportamiento, conserva el diálogo y documenta la diferencia.

En móvil, apila las tres zonas verticalmente, manteniendo un personaje grande y una acción legible por panel. La réplica usa paneles de unos `540px`; revisa esa medida según el alto real de pantalla. Ningún texto o botón debe quedar detrás del personaje.

### 4.7 Vision: cartas ilustradas y manifiesto

Cambia a una sección oscura y espaciosa. En escritorio, el lado izquierdo contiene una pila de cartas ilustradas y el derecho el texto del elemento seleccionado. No dibujes una lista de ocho tarjetas al mismo tiempo: la relación de una carta y un argumento visible es parte del diseño.

La carta frontal tiene proporción aproximada `991:1344`, una inclinación suave de unos `3°` y dos cartas de respaldo visibles en ángulos diferentes. Coloca las flechas circulares lima a ambos lados de la carta, a media altura. Su tamaño actual es de `50px`. Las cartas actuales son `vision-1.webp` a `vision-8.webp`.

El contenido derecho combina un número grande de dos cifras, un título corto resaltado en lima y un párrafo de manifiesto. Debajo, muestra ocho marcas pequeñas de paginación. Las categorías actuales son Play, Custom, Product, Trust, Community, Team, Ecosystem y Growth.

Al cambiar de elemento, actualiza sincronizadamente imagen, número, título, párrafo e indicador. La carta entra con desplazamiento horizontal y rotación; el texto entra con desplazamiento vertical y opacidad. La réplica usa aproximadamente `0.6s` para la carta y `0.45s` para el texto. El carrusel es circular: avanzar desde el último vuelve al primero y retroceder desde el primero muestra el último.

Las flechas y la paginación deben ser botones con nombres accesibles. Anuncia el contenido nuevo de manera discreta con una región viva. En móvil, apila carta y texto y conserva las flechas junto al arte. No provoques un salto de página al cambiar entre descripciones de longitudes distintas.

### 4.8 Customize: demostración visual

Vuelve a una zona clara. Abre con un titular monumental en dos líneas, “Customize / your Zoku”, resaltando la palabra final con una tira lima algo girada. Debajo coloca un vídeo de demostración de gran tamaño, centrado y con una composición limpia.

La referencia documenta un área de vídeo de hasta unos `1080px` y proporción `16:9`, con azul exterior `#8ba9cc`. La réplica lo sitúa dentro de una sección crema y añade una etiqueta lima inferior “3D customisation” con flecha diagonal. En móvil, la réplica pasa el contenedor a `4:3`; comprueba el encuadre para no perder información relevante.

El vídeo actual procede de Vimeo y se configura en `brand.customizationVideo`. Contempla un poster o imagen de respaldo si no carga. Al pulsar la demostración, el usuario abre el personalizador externo configurado en `links.customizer`.

No simules controles de un editor que no funciona. Si la nueva temática requiere un producto interactivo real, delimita ese trabajo por separado. Esta sección comunica posibilidades mediante una demo audiovisual y una salida clara hacia la herramienta.

### 4.9 Equipo: carrusel editorial horizontal

Usa un fondo azul profundo `#282e67` con un carrusel de fichas oscuras `#1c1616`. Cada ficha contiene un retrato cuadrado, nombre, rol y una biografía breve. Algunos perfiles pueden incluir un pequeño botón circular de enlace externo sobre la foto.

Las tarjetas no se alinean todas por arriba: desplaza las alternas unos `65px` en escritorio y `35px` en móvil. Conserva las esquinas redondeadas de las imágenes y un recorte diagonal en el borde inferior de la ficha. Los nombres y roles tienen una fuente negra inclinada y tratamiento de subrayado. La biografía es más pequeña y compacta; en móvil debe recuperar un tamaño cómodo para leer.

En la réplica de escritorio cada tarjeta mide alrededor de `22vw`, la separación es de `6.6vw` y el carrusel empieza tras un margen izquierdo amplio. Los botones se sitúan hacia los extremos de la sección. En móvil, cada ficha ocupa alrededor de `78vw`, con `22px` de separación y controles encima de la pista. El título de sección está presente semánticamente, aunque visualmente oculto en la composición actual.

Permite desplazamiento horizontal nativo con ajuste `scroll-snap`. Los botones avanzan una tarjeta más su separación. Desactiva la flecha izquierda al principio y la derecha al final, calculándolo a partir de la posición real de scroll. No hagas circular este carrusel si ello contradice el comportamiento actual.

El orden actual es Korky, Florent, Crisis, Wehiwehi, Dunkel, Dr. Baked, Miinded Studio y Nui Vagab, con imágenes `team-1.webp` a `team-8.webp`. Si cambia el contenido, conserva un rango semejante de longitud en nombres, roles y biografías para mantener la altura y el ritmo de las fichas.

### 4.10 FAQ y transición hacia el cierre

La sección FAQ debe combinar una zona legible de preguntas con un personaje decorativo de gran escala en el lateral derecho. Cruza su parte superior con una cinta gráfica inclinada que conecte el lenguaje del bloque Zokus con la zona inferior de la página.

En la referencia existe un fondo exterior en degradado de `#a2b6cf` a `#c4c1c6`, un panel interior crema con radio aproximado de `10px` y solapamiento con la sección anterior. La réplica presenta una sección crema continua y sitúa el personaje recortado hacia el borde derecho. Son composiciones distintas: si el objetivo es la referencia literal, reconstruye el panel y el solapamiento tras comparar sus capturas.

El título FAQ es muy grande, condensado y acompañado por un pequeño acento de asterisco. Las preguntas usan una fuente negra inclinada, subrayado, separadores de puntos y un icono de suma a la derecha. Al abrir una pregunta, la suma gira `45°` y la respuesta expande su altura con una transición de aproximadamente `0.4s`. Solo hay una respuesta abierta a la vez; pulsar la misma pregunta vuelve a cerrarla.

Usa botones reales en cada encabezado, `aria-expanded`, `aria-controls` y un panel identificado. El contenido cerrado no debe ser alcanzable con teclado. El personaje `faq.webp` es decorativo y no debe interceptar clics ni ocultar respuestas. En móvil baja o desplaza el arte al final de la sección, reservando su espacio para que no se monte sobre el acordeón.

### 4.11 Footer con llamada a comunidad

Termina con un fondo lavanda grisáceo `#c4c1c6`, una llamada enorme a unirse a la comunidad y un personaje situado a la derecha. El texto actual es “Join / Discord”: la segunda línea está dibujada en contorno y se rellena al hacer hover. Añade una flecha diagonal de gran tamaño como parte del enlace.

La composición debe sentirse como el último póster de la página. No la reduzcas a un footer de enlaces diminutos. En escritorio deja una zona central alta; la referencia documenta alrededor de `90vh`. La réplica usa un bloque principal con mínimo de `540px`, además de márgenes y enlaces inferiores.

Bajo la llamada principal, sitúa una línea fina, la marca pequeña, navegación secundaria y enlaces sociales. Añade un texto de derechos o créditos discreto. Usa `footer.webp` para la ilustración actual. En móvil conserva el gran titular, desplaza el personaje hacia un lateral y permite que los enlaces se distribuyan en más de una fila.

### 4.12 Botón persistente y reproducción del tráiler

Mantén un acceso al tráiler fijo en la esquina inferior derecha. Es una miniatura de vídeo con la palabra “Play” en gran tipografía condensada, un botón circular lima y un corte diagonal sutil. La réplica usa aproximadamente `240 × 130px` en escritorio y `104 × 62px` en móvil. En hover, el control circular se desplaza hacia el centro.

La miniatura de referencia es un vídeo silenciado en bucle; no existe una imagen estática de tráiler definida como equivalente. La implementación actual usa `https://delivery.chainzoku.io/Global/mp4/bunrakuvideo_1.mp4` para la miniatura y abre el vídeo de YouTube `s71UP-5dQ50` al pulsar.

El diálogo de reproducción debe tener cierre visible, Escape, foco contenido y devolución del foco al botón inicial. Al cerrarlo, desmonta o detén el reproductor para que no continúe el audio. Mantén un enlace alternativo al vídeo si el reproductor incrustado no está disponible.

La referencia también contiene una apertura con un vídeo de glitch y botón Skip; el archivo local `trailer.mp4` corresponde a esa apertura. La réplica actual no monta ese loader. No confundas el archivo con el tráiler de Bunraku ni añadas una pantalla bloqueante sin reconstruir su comportamiento y su opción de omitirla.

## 5. Coreografía de movimiento e interacción

Trabaja con tres capas de movimiento independientes: ambientación lenta, respuesta al scroll y feedback inmediato de interfaz. Evita que una capa sobrescriba el transform de otra; utiliza contenedores anidados si una misma pieza debe desplazarse, rotar y animarse por motivos diferentes.

| Elemento                 | Disparador              | Comportamiento que debe percibirse                                                      |
| ------------------------ | ----------------------- | --------------------------------------------------------------------------------------- |
| Marca y escena inicial   | Entrada de página       | Llegada suave, con desplazamiento y opacidad; orden de capas preservado.                |
| Nubes                    | Tiempo y scroll         | Movimiento lento continuo combinado con profundidad de scroll.                          |
| Marca de portada         | Scroll de hero          | Se separa visualmente de la escena y deja paso al contenido.                            |
| Palabras de introducción | Progreso del bloque     | El texto pasa gradualmente de gris a tinta.                                             |
| Elementos editoriales    | Entrada en viewport     | Desplazamiento corto desde abajo y fundido, una vez.                                    |
| Retrato recortado        | Tiempo, hover y scroll  | Cambio de identidad y movimiento de máscara; versión actual simplificada.               |
| Clan                     | Hover, foco y selección | Personaje y smiley responden; selección abre detalle o expande zona según modo elegido. |
| Carta de Vision          | Flechas o paginación    | Carta, texto e indicador cambian juntos.                                                |
| Equipo                   | Flechas o gesto         | Desplazamiento horizontal con ajuste a fichas.                                          |
| FAQ                      | Activación de pregunta  | Altura y opacidad de respuesta cambian; icono indica apertura.                          |
| CTA final                | Hover o foco            | La palabra en contorno se rellena y mantiene su legibilidad.                            |
| Tráiler                  | Hover y clic            | Control se desplaza; clic abre reproducción.                                            |

La réplica usa GSAP con ScrollTrigger para parallax y revelados. Los elementos `data-reveal` parten de unos `55px` de desplazamiento y opacidad cero, con `0.85s`, `power3.out` y comienzo al alcanzar aproximadamente el `90%` del viewport. Son parámetros actuales de partida; ajústalos por percepción visual, no por aplicar el mismo preset a todo.

Conserva el scroll nativo. No secuestres la rueda ni obligues a avanzar pantalla a pantalla. Recalcula los triggers al terminar de cargar fuentes o recursos que cambien alturas. Limpia timers, listeners, observadores y contextos de GSAP cuando se desmonten los componentes. Evita duplicar animaciones al montar en modo estricto de React.

## 6. Responsive y composición por tamaño

El móvil requiere una composición propia, manteniendo los mismos elementos protagonistas. No consiste en encoger toda la vista de escritorio.

- **Escritorio:** portada alta, escena vertical completa, cabecera con enlaces y redes, navegación lateral, introducción en dos columnas, tres clanes en paralelo, Vision en dos columnas y varias fichas de equipo visibles.
- **Tablet:** reduce márgenes y tamaños, conserva las proporciones del arte y reserva espacio para navegación. La referencia documenta cambios alrededor de `1023px` y `699px`; la réplica usa reglas principales en `1050px` y `760px`. Elige puntos de ruptura por necesidad de composición y no mezcles ambos sistemas sin comprobarlos.
- **Móvil:** menú superpuesto, navegación lateral oculta, columnas apiladas, retrato casi a todo ancho, clanes verticales, Vision vertical, equipo horizontal con una ficha dominante, FAQ a ancho completo y personaje desplazado hacia abajo.

La portada móvil de la referencia reduce su altura hasta una pantalla en el breakpoint más pequeño y anima posteriormente la marca hacia arriba. La réplica usa `125vh` con un mínimo de `800px`, amplía la escena al `125%` de ancho y la centra con recorte lateral. Documenta esta diferencia si se conserva; no la presentes como una medida original.

Comprueba al menos `1440 × 900`, `1280 × 720`, una tablet cercana a `768 × 1024`, `390 × 844` y una anchura pequeña de `360px`. Prueba también cambio de orientación y una altura de ventana reducida. Los diálogos no deben desbordar el viewport; usa unidades dinámicas donde resulte útil y permite scroll dentro de contenidos largos.

No permitas scroll horizontal en la página completa. El desplazamiento horizontal solo pertenece a componentes que lo necesitan, como el equipo. Conserva las zonas táctiles cómodas aunque el icono visual sea pequeño; evita que el botón persistente de tráiler tape las acciones de otra sección.

## 7. Recursos y tratamiento de imágenes

Usa `public/assets/` como inventario local. Mantén su procedencia en `public/assets/sources.json` y conserva el script reproducible de descarga en `scripts/download-assets.mjs`.

| Grupo                  | Recursos disponibles                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Identidad y atmósfera  | `logo.png`, `sky.jpg`, `hero.webp`, `cloud-1.webp` a `cloud-3.webp`.                                                |
| Relato y universo      | `can.mp4`, `can.png`, `ribbon.svg`, `zoku-1.webp` a `zoku-3.webp`, `zoku-cutout-1.webp`, `zokus.webp` como máscara. |
| Clanes y escena        | `oni.webp`, `bunraku.webp`, `boso.webp`, `bunraku-rotation.mp4`.                                                    |
| Vision                 | `vision-1.webp` a `vision-8.webp`.                                                                                  |
| Equipo                 | `team-1.webp` a `team-8.webp`.                                                                                      |
| Cierre                 | `faq.webp`, `footer.webp`.                                                                                          |
| Apertura de referencia | `trailer.mp4`; no confundir con el reproductor del tráiler de Bunraku.                                              |
| Fuentes                | `display.woff2`, `body.woff2`, `extended.woff2`, `black-italic.woff2`.                                              |

Preserva transparencia, proporción y resolución suficiente para el tamaño final. Los personajes recortados necesitan espacio transparente alrededor para trabajar con superposiciones. No añadas fondos rectangulares involuntarios ni reemplaces el recorte por un `border-radius` genérico.

Si se cambia la temática, prepara un paquete visual equivalente: una escena vertical de portada, un logo amplio, varias capas atmosféricas, un objeto o vídeo de introducción, retratos para el recorte, tres protagonistas de cuerpo suficiente para los paneles, ocho cartas ilustradas, fotos de equipo y personajes o composiciones para FAQ y footer. Mantén la función compositiva de cada recurso incluso si cambia lo que representa.

Los recursos originales y sus fuentes pertenecen a sus respectivos titulares; el repositorio no declara una licencia sobre ellos. Al sustituir la identidad, actualiza también el inventario de recursos, su procedencia y las referencias que queden dentro de SVG, posters o vídeos.

## 8. Contenido variable y cambio de temática

Separa lo que define el diseño de lo que define el tema. Los nombres, textos, URLs e imágenes deben poder cambiar sin modificar las animaciones ni los componentes principales.

Completa este contrato editorial antes de sustituir contenidos:

```text
MARCA_NOMBRE = ChainZoku o nueva marca
MARCA_LOGO = recurso ancho con transparencia
IDIOMA = idioma principal de la experiencia
HERO_SUBTITULO = una frase breve en mayúsculas
RELATO_INTRO = un párrafo narrativo de extensión comparable
UNIVERSO_TITULO = nombre corto que admita un resaltado
UNIVERSO_DESCRIPCION = un párrafo de presentación
UNIVERSO_CTA = texto breve para descubrir las categorías
CATEGORIAS = tres elementos con nombre, lema, descripción, color e imagen
VISION = ocho elementos con título corto, párrafo y carta ilustrada
DEMO_TITULO = dos líneas con una palabra destacada
DEMO_VIDEO = URL o recurso local
DEMO_POSTER = imagen de respaldo
DEMO_DESTINO = URL funcional de la herramienta o producto
EQUIPO = perfiles con nombre, rol, biografía, foto y enlace opcional
FAQ = preguntas y respuestas
COMUNIDAD_CTA = texto breve de gran escala
COMUNIDAD_URL = destino principal del cierre
REDES = enlaces con etiqueta accesible e icono
TRAILER_PREVIEW = vídeo corto silenciado
TRAILER_URL = destino o proveedor de reproducción
LEGAL_CREDITOS = texto real aplicable al proyecto
```

La arquitectura actual centraliza una parte importante en `src/data/content.ts`: `brand`, `sections`, `links`, `clans`, `vision`, `team` y `faqs`. Algunos valores siguen escritos directamente en `src/App.tsx`, como enlaces de navegación, textos de botones, identificadores de vídeo, copyright y etiquetas accesibles. En una sustitución integral de marca, busca y actualiza esos valores también; no asumas que editar un único archivo elimina todas las menciones anteriores.

Para una siguiente iteración, puede usarse un esquema de este tipo:

```ts
type Category = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
  imageAlt: string;
};

type VisionItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  profileUrl?: string;
};
```

Usa identificadores estables distintos de los títulos visibles para que cambiar de idioma no rompa los anclajes. Mantén configurables las opciones de reproducción, el modo de detalle de categorías y el número de elementos. La reproducción fiel comienza con tres categorías y ocho cartas; cambiar esos números exige revisar la composición y los controles.

## 9. Arquitectura React y mantenimiento

Mantén React, TypeScript y Vite, con estilos propios y GSAP/ScrollTrigger para las animaciones que lo requieran. La réplica actual utiliza React 19, GSAP 3, Lucide React e imports locales de datos. No introduzcas un framework de estilos o componentes que cambie la apariencia de controles y espacios sin necesidad.

El código actual concentra la vista en `src/App.tsx` y los estilos en `src/styles.css`. Una evolución mantenible puede extraer estos módulos sin alterar la salida visual:

```text
App
├── SiteHeader / MobileNavigation
├── SectionNavigation
├── HeroScene
├── StoryIntro
├── UniversePortrait
├── CharacterFilm
├── CategorySelector / CategoryDetail
├── VisionCarousel
├── CustomizationPreview
├── TeamCarousel
├── FaqSection
├── CommunityFooter
└── TrailerLauncher / TrailerDialog
```

Centraliza tokens de color, tipografía, z-index y tamaños compartidos. Conserva estilos locales a cada sección cuando su composición sea distinta. Evita añadir más reglas de corrección al final del CSS sin consolidar las anteriores: el resultado debe permitir entender qué valor está activo y por qué.

Usa el estado de React para menú, elemento activo de carrusel, FAQ abierta y diálogo. Usa referencias para nodos que controla GSAP, diálogos y pistas de scroll. No fuerces un render de toda la aplicación por cada píxel de scroll si la animación puede gestionarse fuera del estado React.

Organiza el código para que funcione al montar y desmontar sin fugas, soporte navegación por anclajes y permita introducir otras páginas más adelante sin convertir los enlaces de esta landing en acciones vacías.

## 10. Accesibilidad y estados alternativos

La fidelidad visual debe coexistir con una experiencia operable. Estos requisitos son criterios de implementación y revisión:

- Usa landmarks, un título principal significativo y jerarquía de encabezados coherente.
- Incluye un enlace para saltar al contenido y un foco visible en todos los controles.
- Botones para acciones; enlaces para navegación. Los iconos sin texto necesitan una etiqueta accesible.
- Mantén menú y diálogos con foco contenido, cierre mediante Escape y devolución del foco al control que los abrió. Bloquea la interacción del fondo durante la apertura.
- El acordeón comunica su estado y su relación con el panel. El texto oculto no debe seguir recibiendo foco.
- Los carruseles son utilizables con teclado y sus botones indican el propósito y el estado. Los controles desactivados del equipo corresponden al principio y al final reales.
- Distingue imágenes informativas de decorativas. Los personajes informativos necesitan un texto alternativo útil; nubes, cintas y adornos deben tener `alt=""` y ocultarse de tecnologías de asistencia cuando corresponda.
- Respeta `prefers-reduced-motion`: elimina parallax, bucles de retratos y movimientos ambientales no esenciales; muestra todo el texto; cambia a navegación sin desplazamiento animado; ofrece control voluntario de vídeos.
- Da una forma de detener movimiento continuo cuando sea necesario para la accesibilidad. Pausar únicamente al hacer hover no cubre a usuarios de teclado o táctiles.
- Revisa contraste sobre cada color de clan, sobre el vídeo y durante cambios de tema de la cabecera. La fuente o el tamaño no deben sustituir una comprobación de contraste.
- No reproduzcas audio sin una acción explícita. Una apertura o un tráiler no deben bloquear el acceso indefinidamente.

La rama actual ya incorpora soporte de movimiento reducido, cierre de diálogos con Escape, devolución del foco y bloqueo del fondo del menú. Los requisitos anteriores deben comprobarse al modificar la estructura; no supongas que se mantienen automáticamente después de un rediseño de interacciones.

## 11. Rendimiento y resiliencia

Prioriza la imagen principal de la portada. Carga de forma diferida las imágenes inferiores y evita descargar todos los vídeos al iniciar. Reserva proporciones o dimensiones para imágenes y vídeos para que la página no salte al cargarlos.

Usa WebP u otros formatos adecuados disponibles y fuentes WOFF2. No escales una imagen pequeña a varios miles de píxeles si hay un recurso original de mayor resolución. Anima principalmente `transform` y `opacity`; aplica `will-change` solo a elementos que realmente se animan.

Pausa vídeo y secuencias que queden fuera de pantalla cuando sea apropiado. Si se implementa la máscara canvas de la referencia, limita su resolución interna según el tamaño y el dispositivo para evitar consumo innecesario. La composición no debe depender de un canvas gigantesco que se vuelva a dibujar sin estar visible.

Las URLs externas pueden fallar. Conserva posters y enlaces alternativos, muestra un estado comprensible cuando no se pueda reproducir una demo y evita dejar un rectángulo vacío. La disponibilidad de Vimeo, YouTube y el dominio de entrega del tráiler es una dependencia real que debe quedar identificada en la entrega.

No impongas un loader artificial si el contenido está listo. Si se reconstruye la apertura original, permite omitirla y asegura que el acceso al contenido no depende de que el vídeo termine o cargue correctamente.

## 12. Diferencias conocidas entre referencia y réplica actual

Esta tabla evita que una adaptación se tome como la especificación exacta del original:

| Área                 | Referencia documentada                                                                                    | Implementación actual                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Retratos             | Diez frames en un ciclo de 1.4s, máscara canvas rotatoria y recortes superiores; pausa fuera de pantalla. | Tres imágenes, cambio cada 1.4s y estrella CSS; hover y movimiento reducido.        |
| Clanes de escritorio | Expansión de columna dentro de la sección y entrada de letras.                                            | Diálogo independiente para cada clan.                                               |
| Portada móvil        | Reducción a una pantalla en el breakpoint pequeño y desplazamiento específico de marca.                   | 125vh con mínimo 800px y escena ampliada.                                           |
| Nubes y parallax     | Conjuntos duplicados, bucles lentos de 100/130s y coeficientes por capa.                                  | Animación alterna CSS de 32s y parallax simplificado con GSAP.                      |
| FAQ                  | Degradado exterior, panel crema redondeado y solapamiento de secciones.                                   | Fondo crema uniforme y personaje lateral.                                           |
| Interludio           | Fondo documentado morado.                                                                                 | Fondo crema detrás del vídeo.                                                       |
| Personalización      | Demostración de vídeo con entorno azul.                                                                   | Demostración de vídeo en sección crema, franja de enlace lima y respaldo de imagen. |
| Tinta global         | Negro cálido `#1c1616`.                                                                                   | `--ink: #14132d`, con negro cálido en determinadas superficies.                     |
| Apertura             | Vídeo de glitch con Skip.                                                                                 | Recurso disponible, pero apertura no montada.                                       |

El objetivo de fidelidad exacta exige decidir y ejecutar las diferencias anteriores, además de comprobar encuadres y tiempos con la referencia. Documentarlas no significa que estén corregidas. Si el encargo es solo cambiar contenido sobre la rama actual, preserva sus comportamientos y evita modificar estas decisiones de forma accidental.

## 13. Criterios de aceptación y revisión

### Composición visual

- La portada presenta marca, cielo, nubes y escena en capas independientes, con escala comparable a la referencia.
- El scroll conserva el orden y la alternancia de secciones descritos; no se han eliminado bloques para acortar la página sin autorización.
- Las fuentes locales correctas están cargadas y los títulos conservan peso, inclinación, proporción y saltos de línea.
- Los colores se corresponden con los tokens elegidos; cualquier diferencia respecto a la referencia está documentada.
- Las ilustraciones conservan transparencia, encuadre y protagonismo. No hay máscaras mostradas como retratos ni fondos involuntarios.
- Las cartas de Vision, las fichas escalonadas del equipo, las cintas inclinadas y el CTA de contorno siguen reconocibles.

### Interacciones

- Cabecera, navegación lateral y menú móvil alcanzan las secciones correctas y muestran estados coherentes.
- Cada uno de los tres clanes abre su contenido correcto y vuelve al estado inicial al cerrar.
- Vision permite recorrer los ocho elementos en ambos sentidos, con texto, imagen y paginación sincronizados.
- El equipo se desplaza mediante botones y gesto, sin perder perfiles ni dejar controles habilitados incorrectamente en los extremos.
- FAQ abre y cierra respuestas, mantiene una abierta como máximo y actualiza su icono y estado accesible.
- La demo abre un destino real; el tráiler se reproduce tras la acción del usuario y se detiene al cerrar.
- Todos los enlaces sociales y externos corresponden al contenido vigente.

### Dispositivos y alternativas

- No hay scroll horizontal de página en las anchuras de prueba; el arte decorativo no tapa texto ni controles.
- Menú, carruseles y diálogos son operables mediante teclado y táctil.
- La preferencia de movimiento reducido produce una página estática comprensible, con todo el contenido visible.
- El contenido sigue siendo usable cuando falla un vídeo externo, cuando cambia el tamaño de ventana y cuando un texto es algo más largo.
- No aparecen errores de JavaScript, imágenes rotas, fuentes fallidas ni animaciones duplicadas al montar.

### Comprobaciones y entrega

1. Ejecuta `npm run build` y `npm run format:check` tras los cambios pertinentes.
2. Revisa la página servida, no solo los archivos. Comprueba portada, transiciones y todas las secciones a varias anchuras.
3. Compara capturas de la referencia y de la réplica con el mismo viewport, posición de scroll y estado de interacción. Para animaciones, compara también la secuencia y su velocidad; una captura no demuestra el comportamiento.
4. Corrige primero escala, alineación, encuadre, tipografía y ritmo vertical. Después ajusta detalles y tiempos.
5. Revisa los estados abiertos de clanes, menú, FAQ y tráiler, además de los extremos de los carruseles.
6. Entrega una explicación breve de lo implementado, validaciones realizadas, adaptaciones conservadas y dependencias externas. No declares una coincidencia exacta si sigue habiendo diferencias conocidas.

El resultado debe conservar el carácter de una experiencia editorial de universo creativo: escenas grandes, tipografía con personalidad, profundidad, cambios de ritmo y controles que inviten a explorar. El cambio de contenido debe utilizar esa misma estructura para contar otra historia sin diluir su diseño.
