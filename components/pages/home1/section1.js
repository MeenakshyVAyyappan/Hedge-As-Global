import Image from "next/image";

export default function Section1() {
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
      desc: "Our accounting, audit, and tax processes follow internationally recognised ISO standards, ensuring consistent, documented, and reliable service delivery.",
      image: "/images/section/iso-certified.png"
    },
    {
      title: "CPA Australia",
      desc: "Our leadership is admitted to full membership of CPA Australia, entitled to the Certified Practising Accountant (CPA) designation.",
      image: "/images/memberships/cpa-australia-badge.png"
    },
    {
      title: "CIMA, United Kingdom",
      desc: "Chartered Management Accountant membership of the Chartered Institute of Management Accountants, strengthening our strategic and management advisory.",
      image: "/images/memberships/cima-badge.png"
    },
    {
      title: "UAE Accountants Fellowship",
      desc: "Fellowship of the Emirates Association for Accountants & Auditors, the UAE's professional body for accountants and auditors.",
      image: "/images/memberships/eaaa-badge.png"
    },
    {
      title: "IPA Fellow, Australia",
      desc: "Fellow membership of the Institute of Public Accountants, Australia, a full member of the International Federation of Accountants (IFAC).",
      image: "/images/memberships/ipa-badge.png"
    },
    {
      title: "IFA Fellow, United Kingdom",
      desc: "Fellow membership of the Institute of Financial Accountants, London, a member of the IPA Group with global professional recognition.",
      image: "/images/memberships/ifa-badge.png"
    }
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", paddingTop: "48px", paddingBottom: "48px" }}>
      <div className="tf-container">
        <div className="row g-4 justify-content-center row-cols-xl-5">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="saylo-home2-card">
                
                {/* Title */}
                <h3 className="saylo-home2-title">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="saylo-home2-desc">
                  {card.desc}
                </p>

                {/* Circular Image Container */}
                <div className="saylo-home2-img-wrap">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="saylo-home2-img"
                    sizes="150px"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
