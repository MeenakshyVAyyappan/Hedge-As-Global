import Link from "next/link";
import Image from "next/image";

export default function Section9() {
  const taxPoints = [
    {
      num: "01",
      title: "Tax Registration & TRN",
      desc: "Official FTA Registration and Tax Registration Number obtainment for corporate entities."
    },
    {
      num: "02",
      title: "Tax Impact Assessment",
      desc: "Deep financial review to identify taxable vs exempt revenue streams and Small Business Relief eligibility."
    },
    {
      num: "03",
      title: "Transfer Pricing Policy",
      desc: "Arm’s length benchmarking and Master/Local file documentation for related party transactions."
    },
    {
      num: "04",
      title: "Annual Return Filing",
      desc: "Timely tax return compilation, reconciliation, and submission to avoid non-compliance penalties."
    }
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", paddingTop: "56px", paddingBottom: "36px" }}>
      <div className="tf-container">

        {/* Section Header */}
        <div className="row justify-content-between align-items-end mb-4">
          <div className="col-lg-6">
            <p className="s-sub-title text-red mb-18">
              <i className="icon-angles-right moveLeftToRight" />
              FEATURED SERVICE • UAE CORPORATE TAX
            </p>

            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.25, letterSpacing: "-0.5px", margin: 0 }}>
              Corporate Tax Compliance<br />
              <span style={{ color: "#03214e" }}>Requires More Than Filing</span>
            </h2>
          </div>

          <div className="col-lg-5 mt-3 mt-lg-0">
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.7, margin: 0 }}>
              Under UAE Federal Decree-Law No. 47 of 2022, Corporate Tax applies at a standard rate of 9%. Proper tax group structuring, Small Business Relief evaluation, and transfer pricing compliance protect your business from audit risks.
            </p>
          </div>
        </div>

        {/* Main Content Grid: Left Banner + Right 4 Cards */}
        <div className="row g-4 align-items-stretch">
          
          {/* Left Hero Image */}
          <div className="col-lg-5">
            <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "380px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 12px 30px rgba(15,23,42,0.08)" }}>
              <Image
                src="/images/section/corporatetaxcompilence.png"
                alt="UAE Corporate Tax Compliance"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>

          {/* Right 4 Cards Grid */}
          <div className="col-lg-7">
            <div className="row g-3">
              {taxPoints.map((item, index) => (
                <div key={index} className="col-md-6">
                  <div className="saylo-benefit-card">
                    <span className="saylo-benefit-number">{item.num}</span>
                    <h3 className="saylo-benefit-title">{item.title}</h3>
                    <p className="saylo-benefit-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom CTA Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ fontSize: "15px", color: "#64748b" }}>
            Pioneer Hedge Auditing & Tax Consulting is an <strong style={{ color: "#0f172a" }}>FTA-approved Tax Agency</strong>.
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <Link href="/contact" className="about-cta-btn">
              Speak With a Tax Expert
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/contact" className="saylo-cta-btn">
              Book Compliance Review
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
