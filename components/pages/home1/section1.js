'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const credentials = [
  { label: "CPA Australia", logo: "/images/memberships/cpa-australia-logo.png", w: 1000, h: 460, size: "wide" },
  { label: "CIMA, United Kingdom", logo: "/images/memberships/cima-logo.png", w: 1000, h: 389, size: "wide" },
  { label: "Accountants & Auditors Association", logo: "/images/memberships/eaaa-logo.png", w: 1000, h: 286, size: "wide" },
  { label: "IPA Fellow, Australia", logo: "/images/memberships/ipa-logo.png", w: 1000, h: 543, size: "wide" },
  { label: "IFA Fellow, United Kingdom", logo: "/images/memberships/ifa-logo.png", w: 1000, h: 529, size: "wide" },
  { label: "ICAI, India", logo: "/images/memberships/icai.png", w: 1100, h: 1005, size: "sq" }
];

const cards = [
  {
    title: "FTA-Approved Tax Agency",
    desc: "Pioneer Hedge Auditing & Tax Consulting is a registered FTA Tax Agency authorized to manage returns, audits, and tax representation.",
    image: "/images/section/fta_official.png"
  },
  {
    title: "UAE • Bahrain • India",
    desc: "Regional leadership across Abu Dhabi, Dubai, Al Ain, Manama (Bahrain), and India providing local compliance with international scale.",
    image: "/images/section/uaeindia_flags.png"
  },
  {
    title: "Chartered Accountants",
    desc: "Senior team of qualified auditors, financial analysts, and corporate tax specialists dedicated to precision and governance.",
    image: "/images/section/ca_new.png"
  },
  {
    title: "IFRS Global Compliance",
    desc: "Financial reporting and statutory audits conducted in strict compliance with International Financial Reporting Standards.",
    image: "/images/section/ifrs_clean.png"
  },
  {
    title: "ISO Certified",
    desc: "Certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018, ensuring consistent, documented, and reliable service delivery.",
    image: "/images/section/iso-9001-2015-round.png",
    iso: ["9001:2015", "14001:2015", "45001:2018"]
  }
];

function TiltTile({ item, index }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 14}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 16}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="hc-tile-wrap" style={{ "--i": index, "--c": index % 6, "--r": Math.floor(index / 6) }}>
      <div ref={ref} className="hc-tile" onMouseMove={onMove} onMouseLeave={onLeave}>
        <span className="hc-shine" aria-hidden="true" />
        <div className={`hc-logo ${item.size}`}>
          <Image
            src={item.logo}
            alt={`${item.label} logo`}
            width={item.w}
            height={item.h}
            quality={90}
            sizes="200px"
            style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        </div>
        <span className="hc-label">{item.label}</span>
      </div>
    </div>
  );
}

export default function Section1() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setInView(true); return; }
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
    <section style={{ backgroundColor: "#ffffff", paddingTop: "48px", paddingBottom: "48px" }}>
      <div className="tf-container">
        <div className="row g-4 justify-content-center row-cols-xl-5">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="saylo-home2-card">
                <h3 className="saylo-home2-title">{card.title}</h3>
                <p className="saylo-home2-desc">{card.desc}</p>
                {card.iso ? (
                  <div className="iso-trio">
                    {card.iso.map((std, k) => (
                      <div key={std} className="iso-trio-item" style={{ animationDelay: `${k * -1.2}s` }}>
                        <div className="iso-trio-logo">
                          <Image src="/images/section/iso-emblem.png" alt={`ISO ${std} certified`} fill sizes="(max-width: 991px) 110px, 70px" style={{ objectFit: "contain" }} />
                        </div>
                        <span className="iso-trio-std">{std}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="saylo-home2-img-wrap">
                    <Image src={card.image} alt={card.title} fill className="saylo-home2-img" sizes="150px" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section ref={sectionRef} className={`hc-section ${inView ? "is-in" : ""}`}>
      <span className="hc-orb hc-orb-1" aria-hidden="true" />
      <span className="hc-orb hc-orb-2" aria-hidden="true" />

      <div className="tf-container position-relative">
        {/* Heading */}
        <div className="hc-head">
          <h2 className="hc-title">
            Our <strong>Certifications</strong> Demonstrate
            <span className="hc-medal" aria-hidden="true">
              <svg viewBox="0 0 64 80" width="46" height="58">
                <defs>
                  <linearGradient id="hcGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#ffe08a" />
                    <stop offset="0.5" stopColor="#f5b301" />
                    <stop offset="1" stopColor="#c98a00" />
                  </linearGradient>
                </defs>
                <path d="M18 44 L10 76 L22 70 L28 79 L32 50Z" fill="#c8102e" />
                <path d="M46 44 L54 76 L42 70 L36 79 L32 50Z" fill="#03214e" />
                <circle cx="32" cy="30" r="24" fill="url(#hcGold)" />
                <circle cx="32" cy="30" r="17" fill="none" stroke="#fff6d6" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M24 30 l6 6 l11 -12" fill="none" stroke="#03214e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Diagram */}
        <div className="hc-diagram">
          <div className="hc-grid">
            {credentials.map((item, i) => (
              <TiltTile key={item.logo} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .iso-trio {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 4px;
          width: calc(100% + 24px);
          margin: auto -12px 24px;
          padding: 16px 8px 14px;
          background: #ffffff;
          border: 4px solid #f8fafc;
          border-radius: 20px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.08);
          transition: transform 0.4s ease, border-color 0.4s ease;
        }
        .saylo-home2-card:hover .iso-trio { transform: scale(1.04); border-color: rgba(200, 16, 46, 0.2); }
        .iso-trio-item {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: isoBob 3.6s ease-in-out infinite;
        }
        .iso-trio-logo { position: relative; width: 100%; max-width: 110px; aspect-ratio: 818 / 748; }
        .iso-trio-std {
          font-size: 10.5px;
          font-weight: 800;
          color: #0553a0;
          letter-spacing: -0.1px;
          white-space: nowrap;
          line-height: 1;
        }
        @keyframes isoBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @media (max-width: 1199px) {
          .iso-trio { gap: 14px; padding: 20px 16px 16px; width: 100%; margin-left: 0; margin-right: 0; }
          .iso-trio-std { font-size: 12.5px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .iso-trio-item { animation: none; }
        }
        .hc-section *, .hc-section *::before, .hc-section *::after { box-sizing: border-box; }
        .hc-section {
          position: relative;
          overflow: hidden !important;
          overflow: clip !important;
          padding: 64px 0 72px;
          background:
            radial-gradient(1200px 400px at 50% 0%, rgba(3, 33, 78, 0.05), transparent 70%),
            linear-gradient(180deg, #ffffff 0%, #f6f9fc 100%);
        }
        .hc-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.5;
          pointer-events: none;
          animation: hcDrift 14s ease-in-out infinite alternate;
        }
        .hc-orb-1 { width: 380px; height: 380px; left: -120px; top: 80px; background: rgba(200, 16, 46, 0.12); }
        .hc-orb-2 { width: 420px; height: 420px; right: -140px; bottom: -80px; background: rgba(3, 33, 78, 0.12); animation-delay: -6s; }

        /* Heading */
        .hc-head { text-align: center; margin-bottom: 52px; position: relative; }
        .hc-title {
          font-size: clamp(26px, 3.4vw, 40px);
          font-weight: 400;
          color: #0f172a;
          line-height: 1.25;
          margin: 0;
          letter-spacing: -0.5px;
        }
        .hc-title strong { font-weight: 800; color: #03214e; }
        .hc-medal {
          display: inline-block;
          vertical-align: middle;
          margin-left: 10px;
          transform-origin: 50% 0%;
          animation: hcSwing 3.6s ease-in-out infinite;
          filter: drop-shadow(0 6px 10px rgba(201, 138, 0, 0.35));
        }
        .hc-sub {
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #c8102e;
          font-weight: 700;
          margin: 0;
        }

        /* Diagram */
        .hc-diagram {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          align-items: stretch;
          perspective: 1400px;
        }
        .hc-brand-col { display: flex; align-items: center; }
        .hc-brand {
          position: relative;
          width: 210px;
          padding: 26px 18px 22px;
          border-radius: 20px;
          background: linear-gradient(145deg, #0b2d5c 0%, #03214e 55%, #021634 100%);
          box-shadow: 0 24px 50px rgba(3, 33, 78, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12);
          text-align: center;
          transform-style: preserve-3d;
          animation: hcFloat 6s ease-in-out infinite;
        }
        .hc-ring {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          border: 1.5px solid rgba(200, 16, 46, 0.55);
          pointer-events: none;
          animation: hcGlow 3s ease-in-out infinite;
        }
        .hc-brand-logo {
          width: 118px;
          margin: 0 auto 14px;
          transform: translateZ(40px);
          filter: drop-shadow(0 10px 18px rgba(0, 0, 0, 0.35));
        }
        .hc-brand-name {
          display: block;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: 0.3px;
        }

        /* Connector lines */
        .hc-links { position: relative; }
        .hc-line {
          position: absolute;
          background: linear-gradient(90deg, rgba(3,33,78,0.18), rgba(3,33,78,0.18));
          overflow: hidden;
        }
        .hc-line::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, #c8102e, transparent);
          background-size: 40% 100%;
          background-repeat: no-repeat;
          animation: hcFlowX 2.4s linear infinite;
        }
        .hc-l-main { left: 0; width: 50%; top: 50%; height: 2px; margin-top: -1px; }
        .hc-l-trunk { left: 50%; width: 2px; margin-left: -1px; top: 75px; bottom: 75px; }
        .hc-l-trunk::after {
          background: linear-gradient(180deg, transparent, #c8102e, transparent);
          background-size: 100% 40%;
          background-repeat: no-repeat;
          animation: hcFlowY 2.4s linear infinite;
        }
        .hc-l-r1 { left: 50%; right: 0; top: 75px; height: 2px; margin-top: -1px; }
        .hc-l-r2 { left: 50%; right: 0; bottom: 75px; height: 2px; margin-bottom: -1px; }
        .hc-l-r1::after, .hc-l-r2::after { animation-delay: 1.2s; }
        .hc-node {
          position: absolute;
          width: 10px;
          height: 10px;
          margin: -5px 0 0 -5px;
          border-radius: 50%;
          background: #ffffff;
          border: 2px solid #c8102e;
          box-shadow: 0 0 0 0 rgba(200, 16, 46, 0.5);
          animation: hcPulse 2.4s ease-out infinite;
        }
        .hc-n-mid { left: 50%; top: 50%; }
        .hc-n-r1 { left: 50%; top: 75px; }
        .hc-n-r2 { left: 50%; top: calc(100% - 75px); }

        /* Tiles */
        .hc-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 150px;
          gap: 22px;
        }
        .hc-tile-wrap {
          opacity: 0;
          transform: translateY(40px) rotateX(-25deg);
          transform-origin: 50% 100%;
          transition: opacity 0.7s ease, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          transition-delay: calc(var(--i) * 70ms + 150ms);
        }
        .is-in .hc-tile-wrap {
          opacity: 1;
          transform: none;
          animation: hcBob 5s ease-in-out infinite;
          animation-delay: calc(var(--c) * -0.55s - var(--r) * 0.8s);
        }
        .hc-tile {
          --rx: 0deg;
          --ry: 0deg;
          --mx: 50%;
          --my: 50%;
          position: relative;
          height: 100%;
          border-radius: 16px;
          background: linear-gradient(160deg, #f8fafc 0%, #eef2f7 100%);
          border: 1px solid #e5eaf1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px 16px 14px;
          transform-style: preserve-3d;
          transform: rotateX(var(--rx)) rotateY(var(--ry));
          transition: transform 0.25s ease, box-shadow 0.35s ease, background 0.35s ease, border-color 0.35s ease;
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.05);
          overflow: hidden;
          cursor: default;
        }
        .hc-tile:hover {
          background: #ffffff;
          border-color: rgba(200, 16, 46, 0.25);
          box-shadow: 0 22px 40px rgba(3, 33, 78, 0.16);
        }
        .hc-shine {
          position: absolute;
          inset: 0;
          background: radial-gradient(240px circle at var(--mx) var(--my), rgba(255, 255, 255, 0.9), transparent 45%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          mix-blend-mode: soft-light;
        }
        .hc-tile:hover .hc-shine { opacity: 1; }
        .hc-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          transform: translateZ(0);
          transition: transform 0.35s ease;
        }
        .hc-logo.sq { height: 70px; }
        .hc-logo.wide { height: 62px; }
        .hc-tile:hover .hc-logo { transform: translateZ(40px) scale(1.06); }
        .is-in .hc-logo {
          animation: hcTurn 6s ease-in-out infinite;
          animation-delay: calc(var(--c) * -0.7s - var(--r) * 1.2s);
        }
        .hc-tile:hover .hc-logo { animation-play-state: paused; }

        /* light sweep that travels card to card */
        .hc-tile::before {
          content: "";
          position: absolute;
          top: -20%;
          bottom: -20%;
          left: -60%;
          width: 45%;
          background: linear-gradient(100deg, transparent 0%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0) 80%, transparent 100%);
          transform: skewX(-18deg);
          pointer-events: none;
          z-index: 2;
          opacity: 0;
        }
        .is-in .hc-tile::before {
          animation: hcSweep 7s ease-in-out infinite;
          animation-delay: calc(1.2s + var(--c) * 0.35s + var(--r) * 1.75s);
        }
        /* accent bar that fills in sequence */
        .hc-tile::after {
          content: "";
          position: absolute;
          left: 18%;
          right: 18%;
          bottom: 0;
          height: 3px;
          border-radius: 3px 3px 0 0;
          background: linear-gradient(90deg, #c8102e, #03214e);
          transform: scaleX(0);
          transform-origin: left center;
          pointer-events: none;
        }
        .is-in .hc-tile::after {
          animation: hcBar 7s ease-in-out infinite;
          animation-delay: calc(1.2s + var(--c) * 0.35s + var(--r) * 1.75s);
        }
        .hc-tile:hover::after { animation: none; transform: scaleX(1); }
        .hc-label {
          font-size: 12px;
          font-weight: 700;
          color: #334155;
          text-align: center;
          line-height: 1.3;
          transform: translateZ(0);
          transition: color 0.3s ease, transform 0.35s ease;
        }
        .hc-tile:hover .hc-label { color: #c8102e; transform: translateZ(25px); }

        /* Keyframes */
        @keyframes hcFloat {
          0%, 100% { transform: translateY(0) rotateY(-6deg) rotateX(4deg); }
          50% { transform: translateY(-10px) rotateY(6deg) rotateX(-2deg); }
        }
        @keyframes hcGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200, 16, 46, 0.0), 0 0 18px rgba(200, 16, 46, 0.15); opacity: 0.6; }
          50% { box-shadow: 0 0 0 8px rgba(200, 16, 46, 0.08), 0 0 34px rgba(200, 16, 46, 0.35); opacity: 1; }
        }
        @keyframes hcSwing {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(8deg); }
        }
        @keyframes hcFlowX {
          0% { background-position: -60% 0; }
          100% { background-position: 160% 0; }
        }
        @keyframes hcFlowY {
          0% { background-position: 0 -60%; }
          100% { background-position: 0 160%; }
        }
        @keyframes hcPulse {
          0% { box-shadow: 0 0 0 0 rgba(200, 16, 46, 0.45); }
          100% { box-shadow: 0 0 0 10px rgba(200, 16, 46, 0); }
        }
        @keyframes hcBob {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -8px; }
        }
        @keyframes hcTurn {
          0%, 100% { rotate: y -16deg; }
          50% { rotate: y 16deg; }
        }
        @keyframes hcSweep {
          0% { left: -60%; opacity: 0; }
          4% { opacity: 1; }
          16% { left: 120%; opacity: 1; }
          17%, 100% { left: 120%; opacity: 0; }
        }
        @keyframes hcBar {
          0% { transform: scaleX(0); transform-origin: left center; }
          10% { transform: scaleX(1); transform-origin: left center; }
          22% { transform: scaleX(1); transform-origin: right center; }
          32%, 100% { transform: scaleX(0); transform-origin: right center; }
        }
        @keyframes hcDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, -30px); }
        }

        /* Responsive */
        @media (max-width: 1199px) {
          .hc-diagram { grid-template-columns: minmax(0, 1fr); gap: 0; }
          .hc-brand-col { justify-content: center; }
          /* stacked connector: down from brand, across, then down into the cards */
          .hc-links { display: block; height: 64px; --edge: calc(10% - 6.4px); }
          .hc-l-main { left: 50%; right: auto; width: 2px; margin: 0 0 0 -1px; top: 0; bottom: auto; height: 50%; }
          .hc-l-trunk { left: var(--edge); right: var(--edge); width: auto; margin: -1px 0 0 0; top: 50%; bottom: auto; height: 2px; }
          .hc-l-r1 { left: var(--edge); right: auto; width: 2px; margin: 0 0 0 -1px; top: 50%; bottom: 0; height: auto; }
          .hc-l-r2 { left: auto; right: var(--edge); width: 2px; margin: 0 -1px 0 0; top: 50%; bottom: 0; height: auto; }
          .hc-l-main::after, .hc-l-r1::after, .hc-l-r2::after {
            background: linear-gradient(180deg, transparent, #c8102e, transparent);
            background-size: 100% 40%;
            background-repeat: no-repeat;
            animation-name: hcFlowY;
          }
          .hc-l-trunk::after {
            background: linear-gradient(90deg, transparent, #c8102e, transparent);
            background-size: 40% 100%;
            background-repeat: no-repeat;
            animation-name: hcFlowX;
          }
          .hc-n-mid { left: 50%; top: 50%; }
          .hc-n-r1 { left: var(--edge); top: 100%; }
          .hc-n-r2 { left: calc(100% - var(--edge)); top: 100%; }
          .hc-grid { padding-top: 6px; }
          .hc-grid { grid-template-columns: repeat(3, 1fr); grid-auto-rows: 140px; gap: 16px; }
        }
        @media (max-width: 991px) {
          .hc-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; }
        }
        @media (max-width: 575px) {
          .hc-section { padding: 48px 0 56px; }
          .hc-head { margin-bottom: 36px; }
          .hc-medal svg { width: 34px; height: 43px; }
          .hc-brand { width: 180px; padding: 20px 14px 18px; }
          .hc-links { height: 52px; --edge: calc(25% - 3.5px); }
          .hc-brand-logo { width: 96px; }
          .hc-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 128px; gap: 14px; }
          .hc-grid .hc-tile-wrap:last-child:nth-child(odd) { grid-column: 1 / -1; justify-self: center; width: calc(50% - 7px); }
          .hc-logo.sq { height: 58px; }
          .hc-logo.wide { height: 50px; }
          .hc-label { font-size: 11px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hc-orb, .hc-brand, .hc-ring, .hc-medal, .hc-line::after, .hc-node { animation: none !important; }
          .hc-tile-wrap { opacity: 1; transform: none; transition: none; animation: none !important; }
          .hc-logo, .hc-tile::before, .hc-tile::after { animation: none !important; }
          .hc-tile { transform: none !important; }
        }
      `}</style>
    </section>
    </>
  );
}
