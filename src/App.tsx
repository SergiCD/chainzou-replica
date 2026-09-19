import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Menu,
  Pause,
  Play,
  Plus,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  brand,
  characters,
  faqs,
  gallery,
  powers,
  sections,
  worlds,
} from "./data/content";

gsap.registerPlugin(ScrollTrigger);
const asset = (name: string) => `/assets/zelda/${name}`;
const external = { target: "_blank", rel: "noopener noreferrer" };

function Crest({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 54"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M30 0 15 26h30L30 0ZM15 27 0 53h30L15 27ZM45 27 30 53h30L45 27Z" />
    </svg>
  );
}
function Wordmark() {
  return (
    <span className="wordmark">
      <Crest />
      <span>
        <small>THE LEGEND OF</small>ZELDA
      </span>
    </span>
  );
}
function Ribbon({ className }: { className: string }) {
  return (
    <div className={`ribbon ${className}`} aria-hidden="true">
      <span>
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i}>
            HYRULE <Crest /> EXPLORE THE UNKNOWN <Crest />
          </span>
        ))}
      </span>
    </div>
  );
}

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const landscapeVideo = useRef<HTMLVideoElement>(null);
  const [filmPaused, setFilmPaused] = useState(false);
  const [filmError, setFilmError] = useState(false);
  const characterTrack = useRef<HTMLDivElement>(null);
  const pendingFocus = useRef<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [light, setLight] = useState(false);
  const [powerIndex, setPowerIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [characterStart, setCharacterStart] = useState(true);
  const [characterEnd, setCharacterEnd] = useState(false);
  const [portrait, setPortrait] = useState(0);
  const [portraitPaused, setPortraitPaused] = useState(false);
  const [portraitHovered, setPortraitHovered] = useState(false);
  const [motionPaused, setMotionPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modal, setModal] = useState<
    | { type: "world"; index: number }
    | { type: "trailer" }
    | { type: "gallery" }
    | null
  >(null);
  const staticMotion = reducedMotion || motionPaused;
  const goTo = (id: string) => {
    if (menuOpen) {
      pendingFocus.current = id;
      setMenuOpen(false);
    } else {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      document.getElementById(id)?.focus({ preventScroll: true });
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-logo", {
          y: 70,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
        });
        gsap.from(".hero-tagline", {
          y: 25,
          opacity: 0,
          duration: 1,
          delay: 0.3,
        });
        gsap.to(".hero-logo-wrap", {
          yPercent: 40,
          scale: 0.8,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "65% top",
            scrub: 1,
          },
        });
        gsap.to(".hero-scene", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".hero-mist", {
          xPercent: 15,
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(".intro-word", {
          color: "#182f2a",
          stagger: 0.14,
          ease: "none",
          scrollTrigger: {
            trigger: ".intro-copy",
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
        });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) =>
          gsap.from(el, {
            y: 55,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          }),
        );
        gsap.from(".about-art", {
          scale: 1.1,
          rotate: -8,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.fromTo(
          ".landscape-media",
          { yPercent: -8, scale: 1.14 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: ".landscape-film",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });
    }, root);
    const update = () => {
      const y = window.scrollY + 100;
      const section = Array.from(
        document.querySelectorAll<HTMLElement>("[data-theme]"),
      )
        .reverse()
        .find((el) => el.offsetTop <= y);
      setLight(section?.dataset.theme === "light");
      const current = [...sections].reverse().find(({ id }) => {
        const el = document.getElementById(id);
        return el && el.offsetTop <= window.scrollY + window.innerHeight * 0.45;
      });
      setActive(current?.id || "");
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    let mounted = true;
    const refresh = () => {
      if (mounted) ScrollTrigger.refresh();
    };
    window.addEventListener("load", refresh);
    document.fonts.ready.then(refresh);
    return () => {
      mounted = false;
      ctx.revert();
      window.removeEventListener("scroll", update);
      window.removeEventListener("load", refresh);
    };
  }, []);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (portraitPaused || portraitHovered || staticMotion) return;
    const timer = window.setInterval(
      () => setPortrait((i) => (i + 1) % 3),
      2800,
    );
    return () => window.clearInterval(timer);
  }, [portraitPaused, portraitHovered, staticMotion]);
  useEffect(() => {
    const video = landscapeVideo.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !staticMotion && !filmPaused) {
          video.play().catch(() => {
            /* Keep the poster when autoplay is unavailable. */
          });
        } else video.pause();
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    if (staticMotion || filmPaused) video.pause();
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [staticMotion, filmPaused, filmError]);
  useEffect(() => {
    if (!modal) return;
    const focusTarget = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => {
      document.body.style.overflow = oldOverflow;
      focusTarget?.focus();
    };
  }, [modal]);
  useEffect(() => {
    if (!menuOpen) {
      if (pendingFocus.current) {
        const id = pendingFocus.current;
        pendingFocus.current = null;
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
        document.getElementById(id)?.focus({ preventScroll: true });
      }
      return;
    }
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const focusables = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".menu-toggle,#mobile-navigation button,#mobile-navigation a",
      ),
    );
    focusables[1]?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggle?.focus();
      }
      if (e.key === "Tab") {
        const index = focusables.indexOf(document.activeElement as HTMLElement);
        e.preventDefault();
        focusables[
          (index + (e.shiftKey ? -1 : 1) + focusables.length) %
            focusables.length
        ]?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = overflow;
      if (!pendingFocus.current && document.activeElement === document.body)
        toggle?.focus();
    };
  }, [menuOpen, reducedMotion]);

  const moveCharacters = (direction: number) => {
    const track = characterTrack.current;
    if (!track?.firstElementChild) return;
    track.scrollBy({
      left:
        ((track.firstElementChild as HTMLElement).offsetWidth +
          (parseFloat(getComputedStyle(track).gap) || 0)) *
        direction,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };
  const updateCharacters = () => {
    const track = characterTrack.current;
    if (track) {
      setCharacterStart(track.scrollLeft <= 2);
      setCharacterEnd(
        track.scrollLeft >= track.scrollWidth - track.clientWidth - 3,
      );
    }
  };
  useEffect(() => {
    const observer = new ResizeObserver(updateCharacters);
    if (characterTrack.current) observer.observe(characterTrack.current);
    return () => observer.disconnect();
  }, []);
  const changePower = (direction: number) =>
    setPowerIndex((i) => (i + direction + powers.length) % powers.length);
  const changeGallery = (direction: number) =>
    setGalleryIndex((i) => (i + direction + gallery.length) % gallery.length);
  const navLink = ({ id, label }: { id: string; label: string }) => (
    <a
      key={id}
      href={`#${id}`}
      className={active === id ? "selected" : ""}
      onClick={(e) => {
        e.preventDefault();
        goTo(id);
      }}
    >
      {label}
    </a>
  );

  return (
    <div
      ref={root}
      className={`site-shell ${staticMotion ? "motion-paused" : ""}`}
    >
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <header className={`site-header ${light && !menuOpen ? "ink" : ""}`}>
        <a
          className="header-logo"
          href="#home"
          aria-label="Zelda, volver al inicio"
          onClick={(e) => {
            e.preventDefault();
            goTo("home");
          }}
        >
          <Wordmark />
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          {[sections[0], sections[1], sections[2], sections[4]].map(navLink)}
        </nav>
        <button className="header-explore" onClick={() => goTo("galeria")}>
          Explora Hyrule <ArrowUpRight size={16} />
        </button>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <nav
        className={`side-nav ${light ? "ink" : ""}`}
        aria-label="Secciones de la página"
        inert={menuOpen}
      >
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={active === id ? "active" : ""}
            aria-current={active === id ? "location" : undefined}
            onClick={() => goTo(id)}
          >
            {label}
          </button>
        ))}
      </nav>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Navegación móvil"
        >
          {sections.map(({ id, label }, i) => (
            <button key={id} onClick={() => goTo(id)}>
              <span>0{i + 1}</span>
              {label}
              <ArrowUpRight />
            </button>
          ))}
          <p>UN REINO. INFINITAS HISTORIAS.</p>
        </nav>
      )}
      <main id="main" tabIndex={-1} inert={menuOpen}>
        <section
          tabIndex={-1}
          id="home"
          className="hero"
          data-theme="dark"
          aria-label="The Legend of Zelda: Tears of the Kingdom"
        >
          <img
            className="hero-scene"
            src={asset("hero.jpg")}
            alt="Link contempla las islas flotantes sobre el reino de Hyrule"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-logo-wrap">
            <p className="eyebrow">THE LEGEND OF ZELDA</p>
            <h1 className="hero-logo display">
              TEARS OF THE
              <br />
              KINGDOM
            </h1>
            <p className="hero-tagline">{brand.tagline}</p>
            <span className="hero-edition">
              TEARS OF THE KINGDOM <span>✦</span> MÁS ALLÁ DE HYRULE
            </span>
          </div>
          <div className="hero-mist" aria-hidden="true" />
          <div className="hero-footnote">
            <span>01 / EL VIAJE COMIENZA</span>
            <span>VALOR · SABIDURÍA · PODER</span>
          </div>
          <button
            className="hero-scroll"
            onClick={() => goTo("intro")}
            aria-label="Descubrir Hyrule"
          >
            <ArrowDown />
          </button>
        </section>
        <section
          tabIndex={-1}
          id="intro"
          className="intro-section"
          data-theme="light"
        >
          <div className="intro-inner">
            <div className="relic-wrap" data-reveal>
              <Crest />
              <span className="relic-ring" />
              <p>
                DONDE TERMINA EL MAPA
                <br />
                COMIENZA LA AVENTURA
              </p>
            </div>
            <p className="intro-copy">
              {brand.intro.split(" ").map((word, i) => (
                <span className="intro-word" key={i}>
                  {word}{" "}
                </span>
              ))}
            </p>
          </div>
        </section>
        <section
          tabIndex={-1}
          id="universo"
          className="about-section"
          data-theme="light"
        >
          <Ribbon className="about-ribbon" />
          <div
            className="about-art"
            onMouseEnter={() => setPortraitHovered(true)}
            onMouseLeave={() => setPortraitHovered(false)}
          >
            <div className="portrait-seal" />
            <img
              key={portrait}
              className="about-portrait"
              src={asset(characters[portrait].image)}
              alt={characters[portrait].name}
              loading="lazy"
            />
            <button
              className="portrait-pause"
              onClick={() => setPortraitPaused(!portraitPaused)}
              aria-label={
                portraitPaused ? "Reanudar personajes" : "Pausar personajes"
              }
            >
              {portraitPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow">EL REINO QUE CREÍAS CONOCER</p>
            <h2>
              HYRULE
              <br />
              <span className="highlight">DESDE OTRA PERSPECTIVA.</span>
            </h2>
            <p>{brand.about}</p>
            <button className="text-link" onClick={() => goTo("mundos")}>
              ¿POR DÓNDE EMPIEZAS? <ArrowDown />
            </button>
          </div>
        </section>
        <section
          className="landscape-film"
          data-theme="dark"
          aria-label="Un horizonte de islas celestes"
        >
          {filmError ? (
            <img
              className="landscape-media"
              src={asset("world-sky.jpg")}
              alt="El cielo y las islas flotantes de Hyrule"
              loading="lazy"
            />
          ) : (
            <video
              className="landscape-media"
              ref={landscapeVideo}
              muted
              loop
              playsInline
              preload="none"
              poster={asset("world-sky.jpg")}
              aria-label="Viaje visual por Hyrule"
              onError={() => setFilmError(true)}
            >
              <source src={asset("adventure.mp4")} type="video/mp4" />
            </video>
          )}
          <div>
            <p className="eyebrow">HAY MÁS DE LO QUE PUEDES VER</p>
            <p className="display">MIRA MÁS ALLÁ.</p>
          </div>
          {!filmError && (
            <button
              className="film-control"
              onClick={() => setFilmPaused(!filmPaused)}
              aria-label={filmPaused ? "Reanudar paisaje" : "Pausar paisaje"}
              aria-pressed={filmPaused}
              disabled={staticMotion}
            >
              {filmPaused || staticMotion ? (
                <Play size={16} />
              ) : (
                <Pause size={16} />
              )}
              <span>
                {staticMotion
                  ? "IMAGEN FIJA"
                  : filmPaused
                    ? "REANUDAR"
                    : "PAUSAR"}
              </span>
            </button>
          )}
          <Crest />
        </section>
        <section
          tabIndex={-1}
          id="mundos"
          className="worlds-section"
          data-theme="dark"
        >
          <h2 className="display" data-reveal>
            TRES CAPAS.
            <br />
            UN SOLO HYRULE.
          </h2>
          <div className="world-panels">
            {worlds.map((world, i) => (
              <button
                className={`world-panel world-${i}`}
                style={{ "--world-color": world.color } as React.CSSProperties}
                key={world.name}
                onClick={() => setModal({ type: "world", index: i })}
                aria-label={`Explorar ${world.name}`}
              >
                <img src={asset(world.image)} alt="" loading="lazy" />
                <span className="world-label">{world.label}</span>
                <span className="world-name display">{world.name}</span>
                <span className="world-cta">
                  <span className="compass-badge">
                    <Compass />
                  </span>
                  <span>
                    DESCUBRIR <ArrowUpRight size={16} />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>
        <section
          tabIndex={-1}
          id="poderes"
          className="powers-section section-pad"
          data-theme="dark"
          aria-label="Las habilidades de Link"
        >
          <div className="power-art" data-reveal>
            <div className="card-back card-back-one" />
            <div className="card-back card-back-two" />
            <div key={powerIndex} className="power-card">
              <img
                src={asset(powers[powerIndex].image)}
                alt={`Link utiliza ${powers[powerIndex].name}`}
                loading="lazy"
              />
              <span className="power-card-top">
                HAZLO A TU MANERA <Crest />
              </span>
              <span className="power-card-word display">
                {powers[powerIndex].word}
              </span>
              <span className="power-card-number">0{powerIndex + 1} / 04</span>
            </div>
            <button
              className="round-button card-prev"
              onClick={() => changePower(-1)}
              aria-label="Habilidad anterior"
            >
              <ArrowLeft />
            </button>
            <button
              className="round-button card-next"
              onClick={() => changePower(1)}
              aria-label="Siguiente habilidad"
            >
              <ArrowRight />
            </button>
          </div>
          <div className="power-copy" aria-live="polite" aria-atomic="true">
            <div key={powerIndex} className="power-copy-content">
              <p className="eyebrow">NO HAY UN SOLO CAMINO</p>
              <h2>
                <span className="power-number">0{powerIndex + 1}</span>
                <span className="highlight">{powers[powerIndex].name}</span>
              </h2>
              <p>{powers[powerIndex].description}</p>
            </div>
            <div className="carousel-pagination" aria-label="Elegir habilidad">
              {powers.map((power, i) => (
                <button
                  key={power.name}
                  className={i === powerIndex ? "active" : ""}
                  aria-label={`Ver ${power.name}`}
                  aria-pressed={i === powerIndex}
                  onClick={() => setPowerIndex(i)}
                />
              ))}
            </div>
          </div>
        </section>
        <section
          tabIndex={-1}
          id="galeria"
          className="gallery-section section-pad"
          data-theme="light"
        >
          <p className="eyebrow" data-reveal>
            HAY UN HYRULE POR DESCUBRIR
          </p>
          <h2 className="display" data-reveal>
            MIRA BIEN.
            <br />
            <span className="highlight">NO TE LO PIERDAS.</span>
          </h2>
          <div className="gallery-tabs" aria-label="Elegir paisaje">
            {gallery.map((world, i) => (
              <button
                key={world.name}
                aria-pressed={galleryIndex === i}
                onClick={() => setGalleryIndex(i)}
                className={galleryIndex === i ? "selected" : ""}
              >
                0{i + 1} / {world.name}
              </button>
            ))}
          </div>
          <button
            className="gallery-preview"
            onClick={() => setModal({ type: "gallery" })}
            aria-label={`Ampliar paisaje: ${gallery[galleryIndex].name}`}
          >
            <img
              key={galleryIndex}
              src={asset(gallery[galleryIndex].image)}
              alt={gallery[galleryIndex].subtitle}
              loading="lazy"
            />
            <span className="gallery-label">
              <span>{gallery[galleryIndex].subtitle}</span>
              <span>
                AMPLIAR <ArrowUpRight />
              </span>
            </span>
          </button>
        </section>
        <section
          tabIndex={-1}
          id="personajes"
          className="characters-section section-pad"
          data-theme="dark"
        >
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">QUIENES DAN FORMA A LA LEYENDA</p>
              <h2 className="display">
                TRES DESTINOS.
                <br />
                UNA MISMA LEYENDA.<span className="asterisk">✦</span>
              </h2>
            </div>
            <div className="character-controls">
              <button
                className="round-button"
                disabled={characterStart}
                onClick={() => moveCharacters(-1)}
                aria-label="Personaje anterior"
              >
                <ArrowLeft />
              </button>
              <button
                className="round-button"
                disabled={characterEnd}
                onClick={() => moveCharacters(1)}
                aria-label="Siguiente personaje"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          <div
            ref={characterTrack}
            className="character-track"
            onScroll={updateCharacters}
            tabIndex={0}
            aria-label="Personajes de Hyrule"
          >
            {characters.map((character, i) => (
              <article
                key={character.name}
                className="character-card"
                style={
                  {
                    "--character-color": character.color,
                  } as React.CSSProperties
                }
              >
                <div className="character-photo">
                  <span className="character-index">0{i + 1}</span>
                  <img
                    src={asset(character.image)}
                    alt={character.name}
                    loading="lazy"
                  />
                </div>
                <h3>
                  {character.name}
                  <span>{character.role}</span>
                </h3>
                <p>{character.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          tabIndex={-1}
          id="faq"
          className="faq-section section-pad"
          data-theme="light"
        >
          <Ribbon className="faq-ribbon" />
          <div className="faq-content">
            <p className="eyebrow">ANTES DE PARTIR</p>
            <h2 className="display" data-reveal>
              TODO LO QUE NECESITAS SABER<span className="asterisk">✦</span>
            </h2>
            <div className="faq-list">
              {faqs.map(([question, answer], i) => (
                <div
                  className={`faq-item ${openFaq === i ? "open" : ""}`}
                  key={question}
                >
                  <h3>
                    <button
                      aria-expanded={openFaq === i}
                      aria-controls={`faq-answer-${i}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{question}</span>
                      <Plus />
                    </button>
                  </h3>
                  <div
                    id={`faq-answer-${i}`}
                    className="faq-answer"
                    inert={openFaq !== i}
                  >
                    <div>
                      <p>{answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <img
            className="faq-character"
            src={asset("zelda.webp")}
            alt="Ilustración de la princesa Zelda"
            loading="lazy"
          />
        </section>
        <footer className="footer-section section-pad" data-theme="dark">
          <div className="footer-main">
            <a
              className="footer-title display"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                goTo("home");
              }}
            >
              HAY MÁS HYRULE
              <br />
              <span>AHÍ FUERA.</span>
              <ArrowUpRight />
            </a>
            <img
              className="footer-character"
              src={asset("link.webp")}
              alt="Link, el héroe de Hyrule"
              loading="lazy"
            />
          </div>
          <div className="footer-bottom">
            <a
              href="#home"
              aria-label="Volver al inicio"
              onClick={(e) => {
                e.preventDefault();
                goTo("home");
              }}
            >
              <Wordmark />
            </a>
            <nav aria-label="Navegación del pie">
              {[sections[1], sections[2], sections[3]].map(navLink)}
            </nav>
            <button
              className="motion-toggle"
              onClick={() => setMotionPaused(!motionPaused)}
              aria-pressed={motionPaused}
              disabled={reducedMotion}
            >
              {staticMotion ? <Play size={14} /> : <Pause size={14} />}
              {reducedMotion
                ? "Movimiento reducido"
                : motionPaused
                  ? "Reanudar ambiente"
                  : "Pausar ambiente"}
            </button>
          </div>
          <p className="copyright">
            UN HOMENAJE A THE LEGEND OF ZELDA · PROYECTO NO OFICIAL
            <br />
            Personajes, ilustraciones y marcas © Nintendo.{" "}
            <a href="https://www.nintendo.com/sg/switch/axn7/" {...external}>
              Fuente del arte <ArrowUpRight size={11} />
            </a>
          </p>
        </footer>
      </main>
      <button
        inert={menuOpen}
        className="trailer-button"
        onClick={() => setModal({ type: "trailer" })}
        aria-label="Ver el tráiler de Tears of the Kingdom"
      >
        <img src={asset("hero.jpg")} alt="" />
        <span className="trailer-label">Tráiler</span>
        <span className="round-button">
          <Play fill="currentColor" size={14} />
        </span>
      </button>
      {modal && (
        <dialog
          ref={dialog}
          className={`modal modal-${modal.type}`}
          onCancel={() => setModal(null)}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModal(null);
          }}
          aria-label={
            modal.type === "trailer"
              ? "Tráiler de Tears of the Kingdom"
              : modal.type === "gallery"
                ? "Galería de Hyrule"
                : worlds[modal.index].name
          }
        >
          <button
            className="modal-close round-button"
            autoFocus
            onClick={() => setModal(null)}
            aria-label="Cerrar diálogo"
          >
            <X />
          </button>
          {modal.type === "trailer" ? (
            <a
              className="trailer-poster"
              href="https://www.youtube.com/watch?v=uHGShqcAHlQ"
              {...external}
              aria-label="Abrir el tráiler oficial en YouTube"
            >
              <img
                src={asset("hero.jpg")}
                alt="Arte oficial de Tears of the Kingdom"
              />
              <span className="trailer-poster-copy">
                <span className="round-button">
                  <Play fill="currentColor" />
                </span>
                <strong className="display">HYRULE TE ESPERA.</strong>
                <span>
                  VER TRÁILER OFICIAL EN YOUTUBE <ArrowUpRight size={16} />
                </span>
              </span>
            </a>
          ) : modal.type === "gallery" ? (
            <div className="gallery-dialog">
              <img
                src={asset(gallery[galleryIndex].image)}
                alt={gallery[galleryIndex].subtitle}
              />
              <div className="gallery-dialog-controls">
                <button
                  className="round-button"
                  onClick={() => changeGallery(-1)}
                  aria-label="Paisaje anterior"
                >
                  <ArrowLeft />
                </button>
                <p aria-live="polite">
                  0{galleryIndex + 1} / {gallery[galleryIndex].name}
                </p>
                <button
                  className="round-button"
                  onClick={() => changeGallery(1)}
                  aria-label="Siguiente paisaje"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          ) : (
            <div
              className="world-detail"
              style={{ background: worlds[modal.index].color }}
            >
              <img
                src={asset(worlds[modal.index].image)}
                alt={`Paisaje de ${worlds[modal.index].name}`}
              />
              <div className="world-detail-copy">
                <p className="eyebrow">{worlds[modal.index].label}</p>
                <h2 className="display">{worlds[modal.index].name}</h2>
                <h3>{worlds[modal.index].subtitle}</h3>
                <p>{worlds[modal.index].description}</p>
                <button className="text-link" onClick={() => setModal(null)}>
                  VOLVER A HYRULE <ArrowRight />
                </button>
              </div>
            </div>
          )}
        </dialog>
      )}
    </div>
  );
}
