'use client';

import Image from 'next/image';

const freeZoneLogos = [
  { id: 1, name: "Meydan Free Zone (Meydan FZ)", src: "/images/clients/client03.png", alt: "meydan-logo" },
  { id: 2, name: "Khalifa Industrial Zone (KIZAD)", src: "/images/clients/client01.png", alt: "kizad-logo" },
  { id: 3, name: "Jebel Ali Free Zone (Jafza)", src: "/images/clients/client05.png", alt: "jafza-logo" },
  { id: 4, name: "Dubai World Trade Centre (DWTC)", src: "/images/clients/client04.png", alt: "dwtc-logo" },
  { id: 5, name: "Ras Al Khaimah Economic Zone (RAKEZ)", src: "/images/clients/client06.png", alt: "rakez-logo" },
  { id: 6, name: "Abu Dhabi Airport Free Zone (ADAFZ)", src: "/images/clients/client02.png", alt: "adafz-logo" },
];

// Repeat logos 3 times for a seamless, continuous infinite loop marquee without empty gaps
const repeatedLogos = [...freeZoneLogos, ...freeZoneLogos, ...freeZoneLogos];

export default function FreeZonesSection({ 
  bg = "#ffffff", 
  title = "Kharz-Approved Auditors & Free Zone Partners", 
  subtitle = "We partner with premier free zone authorities, trade hubs, and prominent corporate entities across the UAE and GCC." 
}) {
  return (
    <section className="s-our-clients py-5 position-relative" style={{ backgroundColor: bg, borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', overflow: 'hidden' }}>
      
      {/* Section Header */}
      <div className="tf-container">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <p className="s-sub-title text-red mb-2 justify-center" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, fontSize: '13px' }}>
              <i className="icon-angles-right moveLeftToRight me-2" />
              OUR CLIENTS &amp; PARTNERS
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
      <div className="client-carousel-wrapper position-relative w-100 mt-3" style={{ overflow: 'hidden', padding: '20px 0' }}>
        
        {/* Left & Right Edge Soft Gradient Overlays */}
        <div className="carousel-fade-left d-none d-md-block" style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '160px',
          background: `linear-gradient(to right, ${bg} 0%, rgba(255,255,255,0) 100%)`,
          zIndex: 3,
          pointerEvents: 'none'
        }} />
        <div className="carousel-fade-right d-none d-md-block" style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '160px',
          background: `linear-gradient(to left, ${bg} 0%, rgba(255,255,255,0) 100%)`,
          zIndex: 3,
          pointerEvents: 'none'
        }} />

        {/* Continuous Marquee Track */}
        <div className="freezone-carousel-track">
          {repeatedLogos.map((client, index) => (
            <div 
              key={`${client.id}-${index}`} 
              className="client-logo-card"
              title={client.name}
              style={{
                width: '210px',
                height: '210px',
                flexShrink: 0
              }}
            >
              <div className="client-logo-img-wrap d-flex align-items-center justify-content-center w-100 h-100 p-2">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={300}
                  height={300}
                  style={{
                    maxHeight: '135px',
                    maxWidth: '170px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                  className="client-logo-img"
                  priority={index < 5}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Styles for Marquee Animation */}
      <style jsx>{`
        .freezone-carousel-track {
          display: flex;
          align-items: center;
          gap: 32px;
          width: max-content;
          animation: freeZoneMarquee 32s linear infinite;
          will-change: transform;
        }

        .freezone-carousel-track:hover {
          animation-play-state: paused;
        }

        .client-logo-card {
          flex: 0 0 auto;
          width: 210px;
          height: 210px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(3, 33, 78, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02);
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
        }

        .client-logo-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(3, 33, 78, 0.12), 0 0 0 1.5px #c8102e;
          border-color: #c8102e;
        }

        .client-logo-img {
          filter: none !important;
          opacity: 1 !important;
          transition: transform 0.35s ease;
        }

        .client-logo-card:hover .client-logo-img {
          transform: scale(1.08);
        }

        @keyframes freeZoneMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33333%);
          }
        }

        @media (max-width: 768px) {
          .freezone-carousel-track {
            gap: 20px;
            animation-duration: 24s;
          }

          .client-logo-card {
            width: 150px;
            height: 150px;
            padding: 14px;
            border-radius: 16px;
          }

          .client-logo-img {
            max-height: 95px !important;
            max-width: 125px !important;
          }
        }
      `}</style>
    </section>
  );
}
