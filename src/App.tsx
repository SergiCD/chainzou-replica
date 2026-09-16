import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Menu,
  Play,
  Plus,
  Smile,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  brand,
  clans,
  faqs,
  links,
  sections,
  team,
  vision,
} from "./data/content";

gsap.registerPlugin(ScrollTrigger);
const asset = (name: string) => `/assets/${name}`;
const external = { target: "_blank", rel: "noopener noreferrer" };

function SocialLinks() {
  return (
    <div className="social-links">
      <a href={links.discord} {...external} aria-label="Discord">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.7 5.1a18 18 0 0 0-4.4-1.4l-.5 1a16.3 16.3 0 0 0-5.6 0l-.5-1a18 18 0 0 0-4.4 1.4C1.5 9.3.7 13.4 1.1 17.4a18 18 0 0 0 5.4 2.8l1.1-1.8-1.7-.9.4-.3a12.8 12.8 0 0 0 11.4 0l.4.3-1.7.9 1.1 1.8a18 18 0 0 0 5.4-2.8c.5-4.6-.8-8.6-3.2-12.3ZM8.4 14.9c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7.2 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
        </svg>
      </a>
      <a href={links.twitter} {...external} aria-label="Twitter">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.6 1 4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.7 4.7 4 4 0 0 0 5 10.1a4 4 0 0 1-1.8-.5 4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8 8 0 0 1 2 18.2a11.3 11.3 0 0 0 17.4-9.5v-.5A8 8 0 0 0 22 5.9Z" />
        </svg>
      </a>
      <a href={links.instagram} {...external} aria-label="Instagram">
        <Instagram />
      </a>
      <a href={links.opensea} {...external} aria-label="OpenSea">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="m12 2 7 13h-7V2ZM10 5v10H4L10 5ZM2 17h20l-3 5H6l-4-5Z" />
        </svg>
      </a>
    </div>
  );
}

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const teamTrack = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [light, setLight] = useState(false);
  const [visionIndex, setVisionIndex] = useState(0);
  const [teamIndex, setTeamIndex] = useState(0);
  const [teamEnd, setTeamEnd] = useState(false);
  const [portrait, setPortrait] = useState(1);
  const [portraitPaused, setPortraitPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modal, setModal] = useState<
    { type: "clan"; index: number } | { type: "trailer" } | null
  >(null);
  const [customVideoError, setCustomVideoError] = useState(false);
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    setMenuOpen(false);
    document.getElementById(id)?.focus({ preventScroll: true });
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
            end: "55% top",
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
        gsap.to(".clouds-front", {
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
          color: "#14132d",
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
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }),
        );
        gsap.from(".zokus-portrait", {
          scale: 1.16,
          rotate: -8,
          ease: "none",
          scrollTrigger: {
            trigger: ".zokus-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, root);
    const updateTheme = () => {
      const y = window.scrollY + 100;
      const section = Array.from(
        document.querySelectorAll<HTMLElement>("[data-theme]"),
      )
        .reverse()
        .find((el) => el.offsetTop <= y);
      setLight(section?.dataset.theme === "light");
      const current = sections
        .map((s) => s.toLowerCase())
        .reverse()
        .find((id) => {
          const el = document.getElementById(id);
          return (
            el && el.offsetTop <= window.scrollY + window.innerHeight * 0.45
          );
        });
      setActive(current || "");
    };
    window.addEventListener("scroll", updateTheme, { passive: true });
    updateTheme();
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts.ready.then(refresh);
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("load", refresh);
    };
  }, []);

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
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (reducedMotion)
      document
        .querySelectorAll<HTMLVideoElement>("main video")
        .forEach((video) => video.pause());
  }, [reducedMotion]);
  useEffect(() => {
    if (portraitPaused || reducedMotion) return;
    const timer = window.setInterval(
      () => setPortrait((i) => (i % 3) + 1),
      1400,
    );
    return () => window.clearInterval(timer);
  }, [portraitPaused, reducedMotion]);
  useEffect(() => {
    if (!menuOpen) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const toggle = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const focusables = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".menu-toggle,#mobile-navigation button,#mobile-navigation a",
      ),
    );
    focusables[1]?.focus();
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggle?.focus();
      }
      if (e.key === "Tab") {
        const index = focusables.indexOf(document.activeElement as HTMLElement);
        const next = e.shiftKey
          ? (index - 1 + focusables.length) % focusables.length
          : (index + 1) % focusables.length;
        e.preventDefault();
        focusables[next]?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = overflow;
      if (document.activeElement === document.body) toggle?.focus();
    };
  }, [menuOpen]);
  const changeVision = (direction: number) =>
    setVisionIndex((i) => (i + direction + vision.length) % vision.length);
  const moveTeam = (direction: number) => {
    const track = teamTrack.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({
      left: (card.offsetWidth + gap) * direction,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };
  const updateTeamPosition = () => {
    const track = teamTrack.current;
    if (track) {
      setTeamIndex(track.scrollLeft > 2 ? 1 : 0);
      setTeamEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 3);
    }
  };

  return (
    <div ref={root} className="site-shell">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className={`site-header ${light && !menuOpen ? "ink" : ""}`}>
        <a
          className="header-logo"
          href="#home"
          aria-label="ChainZoku home"
          onClick={(e) => {
            e.preventDefault();
            goTo("home");
          }}
        >
          <img src={asset("logo.png")} alt="ChainZoku" />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a
            className="selected"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              goTo("home");
            }}
          >
            Home
          </a>
          <a href="https://chainzoku.io/reveal/" {...external}>
            Box Reveal
          </a>
          <a href="https://chainzoku.io/lore" {...external}>
            Lore
          </a>
          <a href={links.customizer} {...external}>
            My Zoku
          </a>
          <a href="https://chainzoku.io/jumps" {...external}>
            Jumps
          </a>
        </nav>
        <SocialLinks />
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <nav
        className={`side-nav ${light ? "ink" : ""}`}
        aria-label="Page sections"
      >
        {sections.map((s) => (
          <button
            key={s}
            className={active === s.toLowerCase() ? "active" : ""}
            onClick={() => goTo(s.toLowerCase())}
          >
            {s}
          </button>
        ))}
      </nav>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {sections.map((s, i) => (
            <button key={s} onClick={() => goTo(s.toLowerCase())}>
              <span>0{i + 1}</span>
              {s}
              <ArrowUpRight />
            </button>
          ))}
          <SocialLinks />
        </nav>
      )}
      <main id="main" inert={menuOpen}>
        <section
          tabIndex={-1}
          id="home"
          className="hero"
          data-theme="dark"
          aria-label="Welcome to ChainZoku"
        >
          <div className="hero-sky" />
          <div className="clouds clouds-back" aria-hidden="true">
            <img src={asset("cloud-1.webp")} alt="" />
            <img src={asset("cloud-2.webp")} alt="" />
          </div>
          <div className="hero-logo-wrap">
            <h1>
              <img
                className="hero-logo"
                src={asset("logo.png")}
                alt="ChainZoku"
              />
            </h1>
            <p className="hero-tagline">{brand.tagline}</p>
          </div>
          <img
            className="hero-scene"
            src={asset("hero.webp")}
            alt="Two Zokus leaning against a vending machine in Tōdai City"
            fetchPriority="high"
          />
          <div className="clouds clouds-front" aria-hidden="true">
            <img src={asset("cloud-2.webp")} alt="" />
            <img src={asset("cloud-3.webp")} alt="" />
          </div>
          <button
            className="hero-scroll"
            onClick={() => goTo("intro")}
            aria-label="Discover the story"
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
            <div className="can-wrap" data-reveal>
              <video
                autoPlay={!reducedMotion}
                controls={reducedMotion}
                muted
                loop
                playsInline
                preload="metadata"
                poster={asset("can.png")}
                aria-label="Rotating ChainZoku can"
              >
                <source src={asset("can.mp4")} type="video/mp4" />
              </video>
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
          id="zokus"
          className="zokus-section"
          data-theme="light"
        >
          <img
            className="zokus-ribbon"
            src={asset("ribbon.svg")}
            alt=""
            aria-hidden="true"
          />
          <div
            className="zokus-art"
            onMouseEnter={() => setPortraitPaused(true)}
            onMouseLeave={() => setPortraitPaused(false)}
          >
            <img
              key={portrait}
              className="zokus-portrait"
              src={asset(`zoku-${portrait}.webp`)}
              alt="A Zoku character"
              loading="lazy"
            />
          </div>
          <div className="zokus-copy" data-reveal>
            <h2>
              <span className="highlight">Zokus</span>
            </h2>
            <p>{brand.about}</p>
            <button className="text-link" onClick={() => goTo("clans")}>
              Find your clan <ArrowDown />
            </button>
          </div>
        </section>
        <section
          className="bunraku-film"
          data-theme="light"
          aria-label="Bunraku character showcase"
        >
          <video
            autoPlay={!reducedMotion}
            controls={reducedMotion}
            muted
            loop
            playsInline
            preload="none"
            poster={asset("bunraku.webp")}
          >
            <source src={asset("bunraku-rotation.mp4")} type="video/mp4" />
          </video>
        </section>
        <section
          tabIndex={-1}
          id="clans"
          className="clans-section"
          data-theme="dark"
        >
          <h2 className="display" data-reveal>
            Pick
            <br />
            your clan
          </h2>
          <div className="clan-panels">
            {clans.map((clan, i) => (
              <button
                className={`clan-panel clan-${i}`}
                style={{ "--clan-color": clan.color } as React.CSSProperties}
                key={clan.name}
                onClick={() => setModal({ type: "clan", index: i })}
                aria-label={`Learn more about ${clan.name}`}
              >
                <img src={asset(clan.image)} alt={clan.name} loading="lazy" />
                <span className="clan-cta">
                  <span className="smile-badge">
                    <Smile />
                  </span>
                  <span>Learn more</span>
                </span>
                <span className="clan-name">{clan.name}</span>
              </button>
            ))}
          </div>
        </section>
        <section
          tabIndex={-1}
          id="vision"
          className="vision-section section-pad"
          data-theme="dark"
          aria-label="Our vision"
        >
          <div className="vision-art" data-reveal>
            <div className="card-back card-back-one" />
            <div className="card-back card-back-two" />
            <img
              key={visionIndex}
              className="vision-card"
              src={asset(`vision-${visionIndex + 1}.webp`)}
              alt={`${String(visionIndex + 1).padStart(2, "0")} ${vision[visionIndex][0]} vision card`}
            />
            <button
              className="round-button card-prev"
              onClick={() => changeVision(-1)}
              aria-label="Previous vision"
            >
              <ArrowLeft />
            </button>
            <button
              className="round-button card-next"
              onClick={() => changeVision(1)}
              aria-label="Next vision"
            >
              <ArrowRight />
            </button>
          </div>
          <div className="vision-copy" aria-live="polite" aria-atomic="true">
            <div key={visionIndex} className="vision-copy-content">
              <h2>
                <span className="vision-number">
                  {String(visionIndex + 1).padStart(2, "0")}
                </span>
                <span className="highlight">{vision[visionIndex][0]}</span>
              </h2>
              <p>{vision[visionIndex][1]}</p>
            </div>
            <div className="carousel-pagination" aria-label="Choose a vision">
              {vision.map(([title], i) => (
                <button
                  key={title}
                  className={i === visionIndex ? "active" : ""}
                  aria-label={`Show ${title}`}
                  aria-pressed={i === visionIndex}
                  onClick={() => setVisionIndex(i)}
                />
              ))}
            </div>
          </div>
        </section>
        <section
          tabIndex={-1}
          id="customize"
          className="customize-section section-pad"
          data-theme="light"
        >
          <h2 className="display" data-reveal>
            Customize
            <br />
            your <span className="highlight">Zoku</span>
          </h2>
          <a
            className="customize-preview"
            href={links.customizer}
            {...external}
            aria-label="Open the 3D Zoku customizer"
          >
            {!customVideoError ? (
              <video
                autoPlay={!reducedMotion}
                loop
                muted
                playsInline
                preload="none"
                poster={asset("zoku-1.webp")}
                onError={() => setCustomVideoError(true)}
              >
                <source src={brand.customizationVideo} type="video/mp4" />
              </video>
            ) : (
              <img src={asset("zoku-1.webp")} alt="Zoku character" />
            )}
            <span className="customize-label">
              3D customisation <ArrowUpRight />
            </span>
          </a>
        </section>
        <section
          tabIndex={-1}
          id="team"
          className="team-section section-pad"
          data-theme="dark"
        >
          <div className="section-heading" data-reveal>
            <h2 className="display">
              The team
              <span className="asterisk" aria-hidden="true">
                ✳
              </span>
            </h2>
            <div className="team-controls">
              <button
                className="round-button"
                disabled={teamIndex === 0}
                onClick={() => moveTeam(-1)}
                aria-label="Previous team member"
              >
                <ArrowLeft />
              </button>
              <button
                className="round-button"
                disabled={teamEnd}
                onClick={() => moveTeam(1)}
                aria-label="Next team member"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          <div
            ref={teamTrack}
            className="team-track"
            onScroll={updateTeamPosition}
          >
            {team.map(([name, role, description, url], i) => (
              <article key={name} className="team-card">
                <div className="team-photo">
                  <img
                    src={asset(`team-${i + 1}.webp`)}
                    alt={name}
                    loading="lazy"
                  />
                  {url && (
                    <a
                      href={url}
                      {...external}
                      aria-label={`${name}'s profile`}
                    >
                      <ArrowUpRight />
                    </a>
                  )}
                </div>
                <h3>
                  {name}
                  <span>{role}</span>
                </h3>
                <p>{description}</p>
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
          <img
            className="faq-ribbon"
            src={asset("ribbon.svg")}
            alt=""
            aria-hidden="true"
          />
          <div className="faq-content">
            <h2 className="display" data-reveal>
              FAQ
              <span className="asterisk" aria-hidden="true">
                ✳
              </span>
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
            src={asset("faq.webp")}
            alt="Decorative ChainZoku artwork"
            loading="lazy"
          />
        </section>
        <footer className="footer-section section-pad" data-theme="dark">
          <div className="footer-main">
            <a
              className="discord-title display"
              href={links.discord}
              {...external}
            >
              Join
              <br />
              <span>Discord</span>
              <ArrowUpRight />
            </a>
            <img
              className="footer-character"
              src={asset("footer.webp")}
              alt="ChainZoku character"
              loading="lazy"
            />
          </div>
          <div className="footer-bottom">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                goTo("home");
              }}
              aria-label="Back to top"
            >
              <img src={asset("logo.png")} alt="ChainZoku" />
            </a>
            <nav aria-label="Footer navigation">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("home");
                }}
              >
                Home
              </a>
              <a href="https://chainzoku.io/reveal/" {...external}>
                Box Reveal
              </a>
              <a href="https://chainzoku.io/lore" {...external}>
                Lore
              </a>
              <a href={links.customizer} {...external}>
                My Zoku
              </a>
              <a href="https://chainzoku.io/jumps" {...external}>
                Jumps
              </a>
            </nav>
            <SocialLinks />
          </div>
          <p className="copyright">ALL RIGHTS RESERVED — 2022–2025</p>
        </footer>
      </main>
      <button
        inert={menuOpen}
        className="trailer-button"
        onClick={() => setModal({ type: "trailer" })}
        aria-label="Play the ChainZoku trailer"
      >
        <video
          src="https://delivery.chainzoku.io/Global/mp4/bunrakuvideo_1.mp4"
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <span className="trailer-label">Play</span>
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
              ? "ChainZoku trailer"
              : clans[modal.index].name
          }
        >
          <button
            className="modal-close round-button"
            autoFocus
            onClick={() => setModal(null)}
            aria-label="Close dialog"
          >
            <X />
          </button>
          {modal.type === "trailer" ? (
            <>
              <iframe
                title="ChainZoku — Bunraku trailer"
                src="https://www.youtube-nocookie.com/embed/s71UP-5dQ50?autoplay=1"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
              <a
                className="trailer-fallback"
                href="https://www.youtube.com/watch?v=s71UP-5dQ50"
                {...external}
              >
                Watch on YouTube <ArrowUpRight size={14} />
              </a>
            </>
          ) : (
            <div
              className="clan-detail"
              style={{
                background: clans[modal.index].color,
                color: modal.index === 2 ? "var(--ink)" : "var(--paper)",
              }}
            >
              <div className="clan-detail-outline" aria-hidden="true">
                {clans[modal.index].name}
              </div>
              <img
                src={asset(clans[modal.index].image)}
                alt={clans[modal.index].name}
              />
              <div className="clan-detail-copy">
                <p className="eyebrow">{clans[modal.index].subtitle}</p>
                <h2 className="display">{clans[modal.index].name}</h2>
                <p>{clans[modal.index].description}</p>
                <button className="text-link" onClick={() => setModal(null)}>
                  Explore the clans <ArrowRight />
                </button>
              </div>
            </div>
          )}
        </dialog>
      )}
    </div>
  );
}
