export default function Section7() {
  const whyPoints = [
    {
      num: "01",
      title: "Client-Centric Approach",
      desc: "Solutions structured around individual corporate requirements and regional business goals.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Local Expertise. Global Standards.",
      desc: "In-depth understanding of UAE and GCC tax compliance combined with International Financial Reporting Standards (IFRS).",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Chartered Accounting Expertise",
      desc: "Team of senior qualified chartered accountants, statutory auditors, and FTA-registered tax professionals.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Technology-Driven",
      desc: "Modern ERP integration (Tally, Odoo, Zoho) and automated e-invoicing workflows for real-time visibility.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Compliance Focused",
      desc: "Financial processes structured to protect your business from audit queries, tax penalties, and non-compliance risks.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      num: "06",
      title: "Long-Term Partnership",
      desc: "Ongoing executive financial oversight and proactive advice rather than transactional support.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" style={{ background: "#03214e", paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="tf-container">

        {/* Section Header */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <p className="s-sub-title text-red mb-18 justify-center">
              <i className="icon-angles-right moveLeftToRight" />
              WHY WORK WITH US
            </p>

            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "16px", letterSpacing: "-0.4px" }}>
              Why Businesses Choose Hedge
            </h2>

            <p style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.75)", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
              We combine technical rigor, regulatory authority, and strategic clarity to protect your financial interest.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="row g-4">
          {whyPoints.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="why-hedge-card">
                <span className="why-hedge-number">{item.num}</span>
                <div className="why-hedge-icon-box">
                  {item.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "10px", lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.72)", lineHeight: 1.65, margin: 0, flex: 1 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
