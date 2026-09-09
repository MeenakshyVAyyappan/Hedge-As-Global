"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

export default function Section8() {
  const processSteps = [
    {
      step: "STEP 01",
      title: "01. Understand",
      desc: "Understand the company's requirements, corporate setup, financial environment, and current operating challenges.",
      image: "/images/section/understanding.png"
    },
    {
      step: "STEP 02",
      title: "02. Assess",
      desc: "Review current accounting workflows, tax exposure (VAT / Corporate Tax), audit requirements, or ICV score eligibility.",
      image: "/images/section/asses.png"
    },
    {
      step: "STEP 03",
      title: "03. Implement",
      desc: "Deliver structured professional solutions, ERP integration, tax registration, or statutory audit aligned with regional laws.",
      image: "/images/section/implimentation.png"
    },
    {
      step: "STEP 04",
      title: "04. Support",
      desc: "Provide ongoing monthly guidance, MIS reporting, quarterly tax filings, and continuous financial optimization.",
      image: "/images/section/support.png"
    }
  ];

  const swiperParams = {
    modules: [Autoplay, Pagination],
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".methodology-swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 1.3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 1.6,
        spaceBetween: 32,
      },
      1400: {
        slidesPerView: 1.8,
        spaceBetween: 36,
      }
    }
  };

  return (
    <section id="methodology" style={{ background: "#ffffff", paddingTop: "60px", paddingBottom: "60px", overflow: "hidden" }}>
      <div className="tf-container">

        {/* Section Header */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <p className="s-sub-title text-red mb-18 justify-center">
              <i className="icon-angles-right moveLeftToRight" />
              OUR METHODOLOGY
            </p>

            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.25, marginBottom: "16px", letterSpacing: "-0.5px" }}>
              A Clear Process. From Assessment to Ongoing Support.
            </h2>

            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}>
              How we partner with your management team to deliver compliance, transparency, and financial clarity.
            </p>
          </div>
        </div>

      </div>

      {/* Swiper Auto-Slider Container */}
      <div style={{ width: "100%", paddingLeft: "15px", paddingRight: "15px" }}>
        <Swiper {...swiperParams} className="methodology-swiper">
          {processSteps.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="methodology-saylo-card">

                {/* Card Background Image */}
                <div className="methodology-card-img-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="methodology-card-img"
                    sizes="(max-width: 768px) 100vw, 70vw"
                  />
                </div>

                {/* Always-visible Step Badge */}
                <span className="methodology-step-badge">
                  {item.step}
                </span>

                {/* Hover Reveal Overlay */}
                <div className="methodology-hover-overlay">
                  <div className="methodology-hover-content">
                    <h3 className="methodology-hover-title">
                      {item.title}
                    </h3>
                    <p className="methodology-hover-desc">
                      {item.desc}
                    </p>
                  </div>
                  <div className="methodology-arrow-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Pagination Dots */}
        <div className="methodology-swiper-pagination" style={{ textAlign: "center", marginTop: "32px" }}></div>
      </div>
    </section>
  );
}
