/**
 * GlobalBackdrop
 * ─────────────────────────────────────────────────────────────
 * Fixed, full-viewport backdrop that shows through every page
 * section. Renders once at the root layout so the whole site
 * shares one cinematic canvas — sections above become glass
 * panels over this single continuous surface.
 *
 * Composition (bottom → top):
 *   1. Deep warm base color                    (#0a0806)
 *   2. Vertical warm gradient (subtle)         (rich brown → dark)
 *   3. Two large drifting gold glow orbs       (hero-glow-a/b)
 *   4. Radial vignette                         (dark edges → clear centre)
 *   5. 24 rising gold particles                (hero-particle)
 *   6. Faint noise texture via inline SVG      (grain / warmth)
 *
 * Pure CSS animations — no JS, no canvas, no hydration cost.
 * Respects prefers-reduced-motion (all keyframes disabled).
 * z-index: -10 so it never fights actual page content.
 * ───────────────────────────────────────────────────────────── */

// Deterministic particle set (module-level constant, no re-renders).
// Half as many, slower, more transparent — professional & restrained.
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 13 + 4) % 100}%`,
  size: 2 + ((i * 5) % 3),
  duration: 28 + ((i * 3) % 14),
  delay: (i * 2.3) % 20,
  opacity: 0.12 + ((i * 7) % 15) / 100,
}));

// Tiny noise SVG (inline, ~1KB) — gives the flat gradient a filmic grain
const NOISE_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
        <feColorMatrix values='0 0 0 0 0.9  0 0 0 0 0.8  0 0 0 0 0.6  0 0 0 0.35 0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)' opacity='0.55'/>
    </svg>`
  );

export default function GlobalBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Layer 1: deep near-black base */}
      <div className="absolute inset-0 bg-[#08060a]" />

      {/* Layer 2: warm vertical gradient — barely there, keeps the top from looking flat */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #100b08 0%, #08060a 40%, #060506 100%)",
        }}
      />

      {/* Layer 3: drifting warm glow orbs — restrained.
          Opacities kept intentionally low (10–18%) so the site reads as
          "premium dark" not "party lighting". */}
      <div
        className="hero-glow-a absolute -left-[12%] top-[6%] h-[720px] w-[720px] rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(184,144,32,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="hero-glow-b absolute -right-[10%] top-1/3 h-[820px] w-[820px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,171,86,0.13) 0%, transparent 70%)",
        }}
      />
      <div
        className="hero-glow-a absolute left-1/2 bottom-[-12%] h-[900px] w-[900px] -translate-x-1/2 rounded-full blur-[200px]"
        style={{
          background:
            "radial-gradient(circle, rgba(184,144,32,0.08) 0%, transparent 70%)",
          animationDelay: "9s",
        }}
      />

      {/* Layer 4: heavier vignette — darkens edges, focuses attention */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Layer 5: rising gold particles */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Layer 6: filmic noise — very subtle, adds grain without brightness */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_SVG}")`, backgroundSize: "240px 240px" }}
      />
    </div>
  );
}
