# Chainzou

Recreación de la landing de [ChainZoku](https://chainzoku.io/) en React + TypeScript + Vite. Animaciones de scroll con GSAP/ScrollTrigger, estilos propios y recursos locales de la referencia.

## Desarrollo

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
npm run format:check
```

## Cambiar el contenido

- `src/data/content.ts`: marca, textos, clanes, tarjetas de visión, equipo, preguntas y enlaces.
- `src/App.tsx`: estructura y comportamiento de las secciones.
- `src/styles.css`: tipografías, colores, composición, transiciones y responsive.
- `public/assets/`: imágenes, tipografías y vídeos de referencia.
- `public/assets/sources.json`: procedencia de los recursos.
- `scripts/download-assets.mjs`: descarga reproducible de imágenes, fuentes y vídeos públicos de referencia. El SVG de la cinta se conserva directamente desde el HTML original.

## Interacciones incluidas

Portada con nubes animadas y parallax; navegación fija con sección activa; aparición progresiva del relato; retratos cambiantes; fichas de clanes; carrusel de ocho tarjetas; vídeo de personalización; carrusel del equipo; FAQ con acordeón; tráiler y menú móvil.

Se respeta la preferencia de movimiento reducido. Los diálogos permiten cerrar con Escape y devuelven el foco. El menú móvil bloquea el fondo y contiene el foco del teclado.

## Alcance

Esta fase reproduce la landing y conserva temporalmente la identidad de ChainZoku. Las páginas Box Reveal, Lore, My Zoku y Jumps enlazan a la web original; no se implementan minting, wallets, juego ni un editor 3D. La sección de personalización reproduce el vídeo de la referencia. El vídeo de Vimeo, la miniatura animada del tráiler y el reproductor de YouTube requieren conexión a sus servicios originales.

La apertura de clanes se adapta a diálogos accesibles y la animación de retratos usa una secuencia de imágenes con máscara CSS. El contenido y los recursos están separados para su posterior sustitución.

Los gráficos, fuentes y marca originales pertenecen a sus respectivos titulares. No se incluye una licencia sobre esos recursos.

## Validación

- Compilación TypeScript y build de producción.
- Revisión visual a 1280 × 720 y 390 × 844.
- Navegación, carrusel Vision, acordeón FAQ, diálogos de clan y cierre con Escape.
- Menú móvil: bloqueo de scroll, foco y cierre.
- Recursos gráficos sin imágenes rotas y sin scroll horizontal de página.

El proyecto genera un `dist/` estático, portable a cualquier hosting para SPA. `.openai/hosting.json` identifica la vista privada de Sites.
