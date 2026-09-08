"use client";

import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/data/services";

const serviceIcons = {
  "accounting-services": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  "audit-assurance": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  "uae-corporate-tax": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  "vat-uae": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
};

export default function Section3() {
  const featuredServices = [
    servicesData.find((s) => s.id === "accounting-services"),
    servicesData.find((s) => s.id === "audit-assurance"),
    servicesData.find((s) => s.id === "uae-corporate-tax"),
    servicesData.find((s) => s.id === "vat-uae")
  ].filter(Boolean);

  return (
    <section id="expertise" style={{ background: "#f8fafc", paddingTop: "96px", paddingBottom: "96px" }}>
      <div className="tf-container">
        <div className="row g-5 align-items-center">

          {/* LEFT COLUMN: Header + Hero Image + Copy + Stat & CTA */}
          <div className="col-lg-6">
            <div className="expertise-left-content">
              {/* Tag Header */}
              <p className="s-sub-title text-red mb-18">
                <i className="icon-angles-right moveLeftToRight" />
                OUR EXPERTISE
              </p>

              {/* Main Heading */}
              <h2 style={{ fontSize: "clamp(28px, 3.8vw, 42px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, marginBottom: "24px", letterSpacing: "-0.5px" }}>
                The Quality Consulting<br />
                Services to <span style={{ color: "#03214e" }}>Grow Your Business</span>
              </h2>

              {/* Hero Banner Image */}
              <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "20px", overflow: "hidden", marginBottom: "24px", boxShadow: "0 12px 30px rgba(15,23,42,0.08)" }}>
                <Image
                  src="/images/section/thequalityconsultant.png"
                  alt="Quality Consulting Services - Hedge Chartered Accountants"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>

              {/* Paragraph Copy */}
              <p style={{ fontSize: "15px", color: "#64748b", lineHeight: 1.75, marginBottom: "28px" }}>
                We provide expert accounting, auditing, taxation, and financial compliance services designed to help businesses thrive in today&apos;s dynamic marketplace. With a team of experienced professionals, we offer tailored solutions that address your unique financial challenges.
              </p>

              {/* Bottom Stat & CTA Row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", paddingTop: "24px", borderTop: "1px solid #e2e8f0" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                  <span style={{ fontSize: "44px", fontWeight: 800, color: "#03214e", lineHeight: 1 }}>10+</span>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#64748b", maxWidth: "110px", lineHeight: 1.35 }}>
                    Years of Financial Excellence
                  </span>
                </div>

                <Link href="/services" className="saylo-cta-btn">
                  Explore All Services
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Service Cards Stack */}
          <div className="col-lg-6">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {featuredServices.map((service) => {
                const icon = serviceIcons[service.id];
                return (
                  <div key={service.id} className="saylo-service-card">
                    <div className="saylo-card-icon">
                      {icon}
                    </div>
                    <div className="saylo-card-body">
                      <h3 className="saylo-card-title">
                        {service.title}
                      </h3>
                      <p className="saylo-card-text">
                        {service.tagline}
                      </p>
                      <Link href={/services/} className="saylo-card-link">
                        Read More
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
