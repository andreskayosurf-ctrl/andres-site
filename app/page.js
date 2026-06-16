"use client";
import { useState } from "react";

const TEAL = "#2a6868";
const TEAL_DARK = "#1d4f4f";
const CREAM_BG = "#faf8f4";
const CREAM_SECTION = "#f2ede6";
const BORDER = "#d8cfc4";
const MUTED = "#555555";

const services = [
  {
    title: "Pet Sitting",
    desc: "Daily visits, feeding, walks, and loving companionship for your furry family members — right at home.",
    price: "from $35 / visit",
    icon: "🐾",
  },
  {
    title: "House Sitting",
    desc: "Full-time presence in your home while you're away — security, upkeep, and total peace of mind.",
    price: "from $80 / night",
    icon: "🏡",
  },
  {
    title: "Plant Care",
    desc: "Watering schedules, sunlight checks, and light garden maintenance to keep everything thriving.",
    price: "from $20 / visit",
    icon: "🌿",
  },
  {
    title: "Mail & Package Pickup",
    desc: "We collect your mail and packages safely so nothing piles up or goes missing while you travel.",
    price: "from $15 / visit",
    icon: "📬",
  },
];

const galleryItems = [
  { bg: "#c8a97e" },
  { bg: "#8eaaa6" },
  { bg: "#c4b08a" },
  { bg: "#7a9e9a" },
  { bg: "#d4b896" },
  { bg: "#a0b8b4" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: CREAM_BG, color: "#1a1a1a", fontFamily: "var(--font-geist), Arial, sans-serif" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(250,248,244,0.93)", backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${BORDER}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.1rem 2.5rem",
      }}>
        <span style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "1.15rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500,
        }}>
          Baja Home &amp; Paws
        </span>

        <div style={{ display: "flex", gap: "2.5rem" }} className="desk-nav">
          {["About", "Services", "Gallery", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#1a1a1a", textDecoration: "none",
            }}
              onMouseEnter={e => (e.target.style.color = TEAL)}
              onMouseLeave={e => (e.target.style.color = "#1a1a1a")}
            >{l}</a>
          ))}
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{
          background: "none", border: "none", cursor: "pointer", padding: 0,
          flexDirection: "column", gap: "5px", display: "none",
        }} className="hamburger">
          <span style={{ display: "block", width: 24, height: 2, background: "#1a1a1a" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#1a1a1a" }} />
          <span style={{ display: "block", width: 24, height: 2, background: "#1a1a1a" }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 62, left: 0, right: 0, zIndex: 99,
          background: CREAM_BG, borderBottom: `1px solid ${BORDER}`,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem",
          padding: "2rem",
        }}>
          {["About", "Services", "Gallery", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{
              fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase",
              color: "#1a1a1a", textDecoration: "none",
            }}>{l}</a>
          ))}
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{
        position: "relative", height: "100vh", minHeight: 560,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(155deg, #b8926a 0%, #5a8e90 50%, #3d7a6e 100%)",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.36)" }} />

        <div style={{ position: "relative", zIndex: 2, color: "#fff", padding: "0 1.5rem", maxWidth: 800 }}>
          <p style={{ fontSize: "0.62rem", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "1.2rem", opacity: 0.82 }}>
            Los Cabos, Mexico
          </p>
          <h1 style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
            fontWeight: 300, letterSpacing: "0.14em",
            textTransform: "uppercase", lineHeight: 1.1,
            marginBottom: "1.2rem",
          }}>
            Baja Home &amp; Paws
          </h1>
          <p style={{
            fontSize: "clamp(0.75rem, 2vw, 0.95rem)",
            letterSpacing: "0.25em", textTransform: "uppercase",
            opacity: 0.88, marginBottom: "3rem",
          }}>
            Your home and pets, loved like our own
          </p>
          <a href="#contact" style={{
            display: "inline-block", padding: "1rem 3rem",
            background: TEAL, color: "#fff",
            fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase",
            textDecoration: "none",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = TEAL_DARK)}
            onMouseLeave={e => (e.currentTarget.style.background = TEAL)}
          >
            Request a Quote
          </a>
        </div>

        <div style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.55)", fontSize: "0.58rem",
          letterSpacing: "0.3em", textTransform: "uppercase", zIndex: 2,
        }}>
          Scroll ↓
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "7rem 1.5rem", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: TEAL, marginBottom: "1rem" }}>
          About Us
        </p>
        <h2 style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 300, letterSpacing: "0.1em",
          textTransform: "uppercase", marginBottom: "2rem", lineHeight: 1.25,
        }}>
          Where Care Meets Home
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 2, color: MUTED, marginBottom: "1.2rem" }}>
          Hi, we&apos;re Jimena Ariño and Andres Kayo — a couple who turned their love of animals
          and beautifully kept homes into a dedicated service along the coast of Los Cabos.
          Based in Palmilla and serving clients in San Diego, we bring genuine warmth,
          reliability, and real attention to every home and pet we look after.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 2, color: MUTED }}>
          Whether you&apos;re traveling for work or escaping for a vacation, we make sure your
          home stays spotless and your pets feel safe, happy, and completely at ease while
          you&apos;re away.
        </p>
      </section>

      {/* ── DIVIDER IMAGE ── */}
      <div style={{ width: "100%", height: "clamp(200px, 32vw, 400px)", overflow: "hidden" }}>
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(100deg, #7aada8 0%, #c8a97e 55%, #4a8a7e 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase" }}>
            [ Add a wide photo of Los Cabos here ]
          </p>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "7rem 1.5rem" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: TEAL, marginBottom: "1rem" }}>
              What We Offer
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              Our Services
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.5rem" }}>
            {services.map((s) => (
              <div key={s.title} style={{
                border: `1px solid ${BORDER}`, padding: "2.8rem 2rem",
                textAlign: "center", background: "#fff",
              }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.07)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.5rem", fontWeight: 400,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  marginBottom: "1rem",
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.9, color: MUTED, marginBottom: "1.5rem" }}>
                  {s.desc}
                </p>
                <p style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: TEAL, fontWeight: 500 }}>
                  {s.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" style={{ padding: "7rem 1.5rem", background: CREAM_SECTION }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: TEAL, marginBottom: "1rem" }}>
              Moments
            </p>
            <h2 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              Life in Los Cabos
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" }} className="gallery-grid">
            {galleryItems.map((item, i) => (
              <div key={i} style={{
                aspectRatio: "4/3", overflow: "hidden",
                background: item.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                  [ Photo {i + 1} ]
                </p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.68rem", color: "#b0a898", letterSpacing: "0.12em" }}>
            Replace placeholders with your own photos
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "7rem 1.5rem", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "0.62rem", letterSpacing: "0.38em", textTransform: "uppercase", color: TEAL, marginBottom: "1rem" }}>
          Get in Touch
        </p>
        <h2 style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase",
          marginBottom: "1.2rem",
        }}>
          Let&apos;s Talk
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 2, color: MUTED, marginBottom: "3.5rem" }}>
          Ready to book, or just have questions? Reach us through any of the channels below —
          we respond quickly and warmly.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "center", gap: "3rem", marginBottom: "3.5rem" }}>
          {[
            { icon: "✉️", label: "Email", value: "hello@bajahomeandpaws.com", href: "mailto:hello@bajahomeandpaws.com" },
            { icon: "📱", label: "WhatsApp", value: "+52 1 (XXX) XXX-XXXX", href: "https://wa.me/521XXXXXXXXXX" },
            { icon: "📷", label: "Instagram", value: "@bajahomeandpaws", href: "https://instagram.com/bajahomeandpaws" },
          ].map((c) => (
            <a key={c.label} href={c.href} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
              textDecoration: "none", color: "inherit",
            }}>
              <span style={{ fontSize: "1.8rem" }}>{c.icon}</span>
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: TEAL }}>{c.label}</span>
              <span style={{ fontSize: "0.88rem", color: MUTED }}>{c.value}</span>
            </a>
          ))}
        </div>

        <a href="mailto:hello@bajahomeandpaws.com" style={{
          display: "inline-block", padding: "1rem 3rem",
          background: TEAL, color: "#fff",
          fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase",
          textDecoration: "none",
        }}
          onMouseEnter={e => (e.currentTarget.style.background = TEAL_DARK)}
          onMouseLeave={e => (e.currentTarget.style.background = TEAL)}
        >
          Request a Quote
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: `1px solid ${BORDER}`, padding: "3rem 1.5rem",
        textAlign: "center", background: CREAM_BG,
      }}>
        <p style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: "1.2rem", letterSpacing: "0.2em", textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}>
          Baja Home &amp; Paws
        </p>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#aaa", marginBottom: "0.4rem" }}>
          Los Cabos · Palmilla · San Diego
        </p>
        <p style={{ fontSize: "0.75rem", color: "#ccc", marginTop: "1rem" }}>
          © 2025 Baja Home &amp; Paws. All rights reserved.
        </p>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
        a { transition: color 0.2s, background 0.2s; }
      `}</style>
    </div>
  );
}
