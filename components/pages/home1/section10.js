import Link from "next/link";
import Image from "next/image";

export default function Section10() {
  const einvoicingPoints = [
    {
      num: "01",
      title: "Accounting System Review",
      desc: "Audit existing software (Tally, Odoo, Zoho, SAP) to identify Peppol XML data schema gaps."
    },
    {
      num: "02",
      title: "Data Mapping & Formatting",
      desc: "Structure customer Tax Registration Numbers, line-item VAT codes, and currency fields."
    },
    {
      num: "03",
      title: "ERP & Peppol Integration",
      desc: "Connect your billing system directly to approved Accredited Service Providers (ASP)."
    },
    {
      num: "04",
      title: "Compliance & Audit Readiness",
      desc: "Ensure structured real-time tax clearance and automated archiving compliant with FTA laws."
    }
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", paddingTop: "48px", paddingBottom: "80px", borderTop: "1px solid #f1f5f9" }}>
      <div className="tf-container">

        {/* Section Header */}
        <div className="row justify-content-between align-items-end mb-5">
          <div className="col-lg-6">
            <p className="s-sub-title text-red mb-18">
              <i className="icon-angles-right moveLeftToRight" />
              MANDATORY COMPLIANCE • UAE E-INVOICING
            </p>

            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.25, letterSpacing: "-0.5px", margin: 0 }}>
              Is Your Accounting System<br />
              <span style={{ color: "#03214e" }}>Ready for UAE E-Invoicing?</span>
            </h2>
          </div>

          <div className="col-lg-5 mt-3 mt-lg-0">
            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.7, margin: 0 }}>
              The UAE Ministry of Finance is implementing mandatory E-Invoicing using the Peppol network. Businesses must transition from legacy PDF invoices to structured real-time XML tax clearance.
            </p>
          </div>
        </div>

        {/* Main Content Grid: Left 4 Cards + Right Banner */}
        <div className="row g-4 align-items-stretch">
          
          {/* Left 4 Cards Grid */}
          <div className="col-lg-7">
            <div className="row g-3">
              {einvoicingPoints.map((item, index) => (
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

          {/* Right Hero Image */}
          <div className="col-lg-5">
            <div style={{ position: "relative", width: "100%", height: "100%", minHeight: "380px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 12px 30px rgba(15,23,42,0.08)" }}>
              <Image
                src="/images/section/e-invoicing.png"
                alt="UAE E-Invoicing Readiness & Integration"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>

        </div>

        {/* Bottom CTA Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ fontSize: "15px", color: "#64748b" }}>
            Avoid last-minute software disruptions with a <strong style={{ color: "#0f172a" }}>Peppol Health Check</strong>.
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            <Link href="/contact" className="about-cta-btn">
              Request E-Invoicing Review
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/services/e-invoicing" className="saylo-cta-btn">
              Explore E-Invoicing Guide
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
