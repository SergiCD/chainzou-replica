# Hyrule — The Legend of Zelda

Landing en React + TypeScript + Vite dedicada a **Tears of the Kingdom**. Conserva la estructura narrativa y los patrones de movimiento estudiados en ChainZoku, con contenido en español, imágenes de Zelda y una dirección visual de piedra, verde y dorado.

## Ramas y desarrollo

- Repositorio: [SergiCD/chainzou-replica](https://github.com/SergiCD/chainzou-replica).
- `main`: conserva la landing original inspirada en ChainZoku.
- `feat/zelda-landing`: contiene esta versión de Zelda y es la rama de trabajo para continuarla.
- Las dos versiones se mantienen separadas. No fusionar Zelda en `main` ni sustituir la landing original sin una petición expresa.
- Subir cambios a GitHub no implica desplegar la web; el hosting requiere una petición específica.
- El registro antiguo `.openai/hosting.json` no implica que esta versión esté publicada.

```sh
npm install
npm run dev
```

Vista previa habitual: http://127.0.0.1:5173/

```sh
npm run build
npm run format:check
```

## Recorrido

1. Portada de Hyrule con imagen panorámica, tipografía monumental y parallax.
2. Introducción con texto que se revela progresivamente al hacer scroll.
3. Universo: ilustraciones oficiales de Link, Zelda y Ganondorf, sello y cinta animada.
4. Vídeo panorámico local a pantalla completa y tres fichas interactivas: cielo, tierra y abismo.
5. Carrusel de cuatro habilidades, con imágenes y títulos editoriales.
6. Galería de paisajes con selector y ampliación en diálogo.
7. Carrusel horizontal de personajes.
8. Guía con acordeón y cierre con llamada a seguir explorando.
9. Acceso fijo al tráiler oficial, con una vista previa y enlace a YouTube.

Se han retirado las redes, vídeos, personajes y enlaces de la identidad anterior, así como minting, mercados NFT, precios, whitelist y cualquier llamada a comprar. Las acciones principales recorren el contenido de esta página.

## Contenido y recursos

- `src/data/content.ts`: textos, personajes, mundos, habilidades y preguntas.
- `src/App.tsx`: navegación, carruseles, galería, diálogos y animaciones GSAP.
- `src/styles.css`: diseño, movimiento y adaptación móvil.
- `public/assets/zelda/`: selección coherente de arte y capturas de **una misma entrega**. Los manifiestos en esa carpeta recogen la procedencia y resolución de los archivos.
- `public/assets/`: las cuatro tipografías locales de la referencia siguen proporcionando el contraste entre titulares condensados y texto editorial. Los demás recursos antiguos se conservan como material de referencia, pero la página no los carga.
- `PROMPT_LANDING.md`: documento de la fase inicial; describe la referencia estructural, no la temática actual.
- `scripts/download-assets.mjs`: importador histórico de ChainZoku; no ejecutar para sustituir la selección actual.

Las imágenes y el vídeo de Zelda se sirven desde el proyecto. El vídeo solo se reproduce cuando está visible, se puede pausar y respeta el movimiento reducido. El tráiler se abre en YouTube; la vista previa del diálogo es local. La página identifica el proyecto como homenaje no oficial; arte, personajes y marcas de Zelda pertenecen a Nintendo.

## Accesibilidad

Navegación por teclado, foco contenido en los diálogos y menú móvil, cierre con Escape, enlaces para saltar al contenido y estados accesibles en los selectores. Se respeta `prefers-reduced-motion`; el pie permite pausar las animaciones ambientales y el retrato tiene su propio control de pausa.
