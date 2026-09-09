"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";

export default function Section6() {
  const partnerLogos = [
    { id: "tally-1", name: "Tally Prime", logo: "/images/section/TallyPrime.png" },
    { id: "odoo-1", name: "Odoo ERP", logo: "/images/section/odoo.png" },
    { id: "zoho-1", name: "Zoho Books", logo: "/images/section/zohoo.png" },
    { id: "tally-2", name: "Tally Prime", logo: "/images/section/TallyPrime.png" },
    { id: "odoo-2", name: "Odoo ERP", logo: "/images/section/odoo.png" },
    { id: "zoho-2", name: "Zoho Books", logo: "/images/section/zohoo.png" }
  ];

  const swiperParams = {
    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 14,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 28,
      }
    }
  };

  return (
    <section style={{ backgroundColor: "#ffffff", paddingTop: "56px", paddingBottom: "56px", borderTop: "1px solid #f1f5f9" }}>
      <div className="tf-container">

        {/* Section Header */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <p className="s-sub-title text-red mb-18 justify-center">
              <i className="icon-angles-right moveLeftToRight" />
              ACCOUNTING INFRASTRUCTURE
            </p>

            <h2
  style={{
    fontSize: "clamp(26px, 3.5vw, 40px)",
    fontWeight: 800,
    color: "#0f172a",
    lineHeight: 1.25,
    letterSpacing: "-0.5px",
    margin: 0,
    whiteSpace: "nowrap",
  }}
>
  Our Authorized <span style={{ color: "#03214e" }}>Technology Partners</span>
</h2>
          </div>
        </div>

        {/* Saylo Home-1 Partner Logo Swiper Auto Slider */}
        <Swiper {...swiperParams} className="saylo-partner-swiper">
          {partnerLogos.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="saylo-home1-partner-box">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={240}
                  height={100}
                  className="saylo-home1-partner-img"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
