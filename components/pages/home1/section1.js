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
      image: "/images/section/uaeindia_clean.png"
    },
    {
      title: "Chartered Accountants",
      desc: "Senior team of qualified auditors, financial analysts, and corporate tax specialists dedicated to precision and governance.",
      image: "/images/section/ca_clean.png"
    },
    {
      title: "IFRS Global Compliance",
      desc: "Financial reporting and statutory audits conducted in strict compliance with International Financial Reporting Standards.",
      image: "/images/section/ifrs_clean.png"
    }
  ];

  return (
    <section style={{ backgroundColor: "#ffffff", paddingTop: "48px", paddingBottom: "48px" }}>
      <div className="tf-container">
        <div className="row g-4 justify-content-center">
          {cards.map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
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
