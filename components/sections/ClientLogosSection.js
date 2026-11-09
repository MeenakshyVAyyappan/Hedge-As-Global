'use client';

import Image from 'next/image';

const clientLogos = [
  { id: 1, name: "Pullman JLT Hotel", src: "/images/clients/pullman-jlt.webp", alt: "Pullman Jumeirah Lakes Towers Hotel, Dubai", sector: "Hospitality", maxW: "170px" },
  { id: 2, name: "Boom Boom Energy Drink", src: "/images/clients/boomboom.webp", alt: "Boom Boom Energy Drink", sector: "FMCG & Beverages" },
  { id: 3, name: "Qaf Closets", src: "/images/clients/qaf-closets.webp", alt: "Qaf Closets", sector: "Interior & Woodwork", maxH: "88px", maxW: "160px" },
  { id: 17, name: "Rotana Jet", src: "/images/clients/rotana-jet.webp", alt: "Rotana Jet", sector: "Aviation" },
  { id: 4, name: "Petro Gas Agencies", src: "/images/clients/petro-gas.webp", alt: "Petro Gas Agencies", sector: "Energy & Oil Services" },
  { id: 5, name: "Beauty & Perfume Int'l (BPI)", src: "/images/clients/bpi-perfumes.webp", alt: "Beauty & Perfume International Factory L.L.C.", sector: "Perfume & Cosmetics" },
  { id: 6, name: "Novotel & ibis Abu Dhabi Gate", src: "/images/clients/novotel-ibis.webp", alt: "Novotel & ibis Abu Dhabi Gate Hotels", sector: "Hospitality" },
  { id: 7, name: "EMPER Perfumes", src: "/images/clients/emper-perfumes.webp", alt: "EMPER Perfumes", sector: "Fragrances & Retail" },
  { id: 8, name: "Al Bassam Int'l Factories", src: "/images/clients/al-bassam.webp", alt: "Al Bassam International Factories L.L.C.", sector: "Manufacturing & Industrial" },
  { id: 10, name: "Vallo Auto", src: "/images/clients/vallo-auto.webp", alt: "Vallo Auto", sector: "Automotive" },
  { id: 11, name: "Emirates Gallery", src: "/images/clients/emirates-gallery.webp", alt: "Emirates Gallery", sector: "Retail & Trading" },
  { id: 15, name: "Karaz Restaurant", src: "/images/clients/karaz-restaurant.webp", alt: "Karaz Restaurant", sector: "F&B / Hospitality" },
  { id: 18, name: "Geo Offshore Middle East RMC FZE", src: "/images/clients/geo-offshore.webp", alt: "Geo Offshore Middle East RMC FZE (GOM)", sector: "Offshore & Marine" },
  { id: 19, name: "German Steel", src: "/images/clients/german-steel.webp", alt: "German Steel", sector: "Construction" },
  { id: 20, name: "Jaipur National University", src: "/images/clients/jaipur-national-university.webp", alt: "Jaipur National University, Ras Al Khaimah Campus", sector: "Education", maxW: "170px" },
  { id: 21, name: "Delta Medical", src: "/images/clients/delta-medical-hd.webp", alt: "Delta Medical L.L.C-O.P.C", sector: "Healthcare", maxW: "170px" },
  { id: 22, name: "Kidoos Entertainment", src: "/images/clients/kidoos.webp", alt: "Kidoos Entertainment", sector: "Entertainment & Leisure", maxW: "170px" },
  { id: 23, name: "Al Fakhama Doors", src: "/images/clients/alfakhama-doors.webp", alt: "Al Fakhama Doors", sector: "Doors & Interiors", maxH: "88px" },
  { id: 24, name: "GIPA", src: "/images/clients/gulf-international-private-academy-hd.webp", alt: "The Gulf International Private Academy (GIPA)", sector: "Education", maxH: "85px", maxW: "170px" },
  { id: 25, name: "East Point School", src: "/images/clients/east-point-school.webp", alt: "East Point Indian International School", sector: "Education", maxW: "170px" },
  { id: 26, name: "Hameem Investment", src: "/images/clients/hameem-investment.webp", alt: "Hameem Investment", sector: "Real Estate", maxH: "88px" },
  { id: 27, name: "Lala Hypermarket", src: "/images/clients/lala-hypermarket.webp", alt: "Lala Hypermarket", sector: "Retail & Hypermarket", maxH: "85px" },
];

// Repeat logos twice for a seamless 50% infinite marquee animation
const repeatedLogos = [...clientLogos, ...clientLogos];

export default function ClientLogosSection({ 
  bg = "#ffffff", 
  title = "Trusted by Leading Corporate & Industry Brands", 
  subtitle = "We proudly deliver statutory audit, tax consulting, accounting, and advisory services to premier enterprises across hospitality, retail, manufacturing, energy, and corporate sectors in the UAE & GCC." 
}) {
  return (
    <section className="s-our-clients py-5 position-relative" style={{ backgroundColor: bg, borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', overflow: 'hidden' }}>
      
      {/* Section Header */}
      <div className="tf-container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <p className="s-sub-title text-red mb-2 justify-center" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, fontSize: '13px' }}>
              <i className="icon-angles-right moveLeftToRight me-2" />
              OUR VALUED CLIENTS
            </p>
            <h2 className="s-title font-main-2 text-dark fs-32 fw-7 mb-2" style={{ color: '#03214e' }}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted fs-15 max-w-650 mx-auto mb-0" style={{ lineHeight: '1.7', color: '#64748b' }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Infinite Logo Carousel Wrapper */}
      <div className="client-carousel-wrapper position-relative w-100 mt-3" style={{ overflow: 'hidden', padding: '16px 0' }}>
        
        {/* Left & Right Edge Soft Gradient Overlays */}
        <div className="carousel-fade-left d-none d-md-block" style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '140px',
          background: `linear-gradient(to right, ${bg} 0%, rgba(255,255,255,0) 100%)`,
          zIndex: 3,
          pointerEvents: 'none'
        }} />
        <div className="carousel-fade-right d-none d-md-block" style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '140px',
          background: `linear-gradient(to left, ${bg} 0%, rgba(255,255,255,0) 100%)`,
          zIndex: 3,
          pointerEvents: 'none'
        }} />

        {/* Continuous Marquee Track */}
        <div className="client-carousel-track">
          {repeatedLogos.map((client, index) => (
            <div 
              key={`${client.id}-${index}`} 
              className="client-logo-card"
              title={`${client.name} - ${client.sector}`}
            >
              <div className="client-logo-img-wrap d-flex flex-column align-items-center justify-content-center w-100 h-100">
                <div className="client-img-holder d-flex align-items-center justify-content-center w-100" style={{ height: '90px' }}>
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={200}
                    height={90}
                    style={{
                      maxHeight: client.maxH || '75px',
                      maxWidth: client.maxW || '150px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                    className="client-logo-img"
                  />
                </div>
                <div className="client-info text-center mt-2 w-100 px-1">
                  <span className="client-name-label d-block text-dark fw-7 text-truncate" style={{ fontSize: '12px', lineHeight: 1.25 }}>
                    {client.name}
                  </span>
                  <span className="client-sector-label d-block text-muted text-truncate" style={{ fontSize: '10.5px', marginTop: '2px' }}>
                    {client.sector}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Styles for Marquee Animation */}
      <style jsx>{`
        .client-carousel-track {
          display: flex;
          align-items: center;
          gap: 24px;
          width: max-content;
          animation: clientMarquee 42s linear infinite;
          will-change: transform;
        }

        .client-carousel-track:hover {
          animation-play-state: paused;
        }

        .client-logo-card {
          flex: 0 0 auto;
          width: 200px;
          height: 170px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(3, 33, 78, 0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
        }

        .client-logo-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(3, 33, 78, 0.12), 0 0 0 1.5px #c8102e;
          border-color: #c8102e;
        }

        .client-logo-img {
          transition: transform 0.3s ease;
        }

        .client-logo-card:hover .client-logo-img {
          transform: scale(1.06);
        }

        @keyframes clientMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .client-carousel-track {
            gap: 16px;
            animation-duration: 32s;
          }

          .client-logo-card {
            width: 160px;
            height: 145px;
            padding: 12px 10px;
            border-radius: 14px;
          }

          .client-logo-img {
            max-height: 55px !important;
            max-width: 120px !important;
          }
          
          .client-name-label {
            font-size: 11px !important;
          }
        }
      `}</style>
    </section>
  );
}
