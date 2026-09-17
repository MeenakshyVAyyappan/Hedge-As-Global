import Image from "next/image";
import Link from "next/link";

export default function Section2() {
  return (
    <section id="about" className="s-about-company tf-spacing-2" style={{ paddingTop: "56px", paddingBottom: "56px", background: "#ffffff" }}>
      <div className="tf-container">
        <div className="row align-items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="col-lg-6">

            {/* Eyebrow */}
            <p className="s-sub-title text-red mb-18">
              <i className="icon-angles-right moveLeftToRight" />
              About Hedge
            </p>

            {/* Heading */}
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: "#0a0a0a", lineHeight: 1.18, marginBottom: "24px", letterSpacing: "-0.5px" }}>
              Financial Expertise Built on<br />
              <span style={{ color: "#03214e" }}>Accuracy, Transparency</span><br />
              and Trust
            </h2>

            {/* Divider */}
            <div style={{ width: "48px", height: "3px", background: "#C8102E", borderRadius: "2px", marginBottom: "24px" }}></div>

            {/* Body text */}
            <p style={{ fontSize: "15.5px", color: "#52525b", lineHeight: 1.8, marginBottom: "40px", maxWidth: "480px" }}>
              Hedge Chartered Accountants Group delivers comprehensive accounting, auditing, tax consultancy, and business advisory services to corporate and institutional clients across the <strong style={{ color: "#0a0a0a", fontWeight: 600 }}>UAE, Bahrain, and India</strong>.
            </p>

            {/* Stat row */}
            <div style={{ display: "flex", gap: "36px", marginBottom: "40px", paddingBottom: "36px", borderBottom: "1px solid #e8e8e8" }}>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#03214e", lineHeight: 1 }}>10<span style={{ color: "#C8102E" }}>+</span></div>
                <div style={{ fontSize: "12px", color: "#71717a", marginTop: "6px", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>Years</div>
              </div>
              <div style={{ width: "1px", background: "#e8e8e8", flexShrink: 0 }}></div>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#03214e", lineHeight: 1 }}>3<span style={{ color: "#C8102E" }}>+</span></div>
                <div style={{ fontSize: "12px", color: "#71717a", marginTop: "6px", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>Countries</div>
              </div>
              <div style={{ width: "1px", background: "#e8e8e8", flexShrink: 0 }}></div>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 800, color: "#03214e", lineHeight: 1 }}>500<span style={{ color: "#C8102E" }}>+</span></div>
                <div style={{ fontSize: "12px", color: "#71717a", marginTop: "6px", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>Clients Served</div>
              </div>
            </div>

            {/* Feature list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "40px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, marginTop: "3px", width: "18px", height: "18px", borderRadius: "50%", background: "rgba(200,16,46,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2.5 2.5 3.5-4" stroke="#C8102E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a0a0a", marginBottom: "3px" }}>Regional Understanding</div>
                  <div style={{ fontSize: "13.5px", color: "#71717a", lineHeight: 1.65 }}>Deep familiarity with GCC tax laws, UAE Ministry rules, and FTA regulations.</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, marginTop: "3px", width: "18px", height: "18px", borderRadius: "50%", background: "rgba(200,16,46,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2.5 2.5 3.5-4" stroke="#C8102E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a0a0a", marginBottom: "3px" }}>International Standards</div>
                  <div style={{ fontSize: "13.5px", color: "#71717a", lineHeight: 1.65 }}>Financial records and statutory audits conducted in alignment with global IFRS guidelines.</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, marginTop: "3px", width: "18px", height: "18px", borderRadius: "50%", background: "rgba(200,16,46,0.10)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2.5 2.5 3.5-4" stroke="#C8102E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#0a0a0a", marginBottom: "3px" }}>FTA-Approved Tax Agency</div>
                  <div style={{ fontSize: "13.5px", color: "#71717a", lineHeight: 1.65 }}>Authorised to represent clients before the Federal Tax Authority for VAT and Corporate Tax matters.</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about-us"
              className="about-cta-btn"
            >
              Discover Hedge Group
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

          </div>

          {/* ── RIGHT IMAGE ── */}
          <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
            <div className="position-relative">
              <div className="rounded-4 overflow-hidden position-relative z-1" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.12)", border: "6px solid #ffffff" }}>
                <Image
                  width={600}
                  height={700}
                  style={{ width: "100%", height: "auto", objectFit: "cover", display: "block" }}
                  src="/images/section/homeabout.jpg"
                  alt="Hedge Chartered Accountants Head Office"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0) 55%, rgba(3,33,78,0.45) 100%)" }}></div>
              </div>
              <div className="position-absolute bottom-0 start-0 translate-middle-x mb-4 bg-white p-3 rounded-4 d-none d-md-flex align-items-center z-2" style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.10)", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div className="bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "48px", height: "48px", flexShrink: 0 }}>
                  <i className="flaticon-award text-red fs-22" />
                </div>
                <div>
                  <h5 className="fw-7 text-dark mb-0 fs-16">FTA Approved</h5>
                  <p className="text-muted fs-13 mb-0">Certified Agency</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
