'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderBlog } from '@/utils/swiperOptions';
import { faqsData, fetchFaqsFromApi } from '@/data/faqs';
import { blogsData, fetchBlogsFromApi } from '@/data/blogs';
import ConsultationForm from '@/components/forms/ConsultationForm';

export default function Section12() {
  const [faqs, setFaqs] = useState(faqsData);
  const [blogs, setBlogs] = useState(blogsData);
  const [activeFaq, setActiveFaq] = useState(1);

  useEffect(() => {
    async function loadDynamicData() {
      const apiFaqs = await fetchFaqsFromApi();
      if (apiFaqs && apiFaqs.length > 0) {
        setFaqs(apiFaqs);
      }
      const apiBlogs = await fetchBlogsFromApi();
      if (apiBlogs && apiBlogs.length > 0) {
        setBlogs(apiBlogs);
      }
    }
    loadDynamicData();
  }, []);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const halfLength = Math.ceil(faqs.length / 2);
  const col1Faqs = faqs.slice(0, halfLength);
  const col2Faqs = faqs.slice(halfLength);

  return (

    <>
      {/* SECTION 12 — FAQ (Clean Saylo Home-4 Timeline Accordion) */}
      <section id="faq" style={{ backgroundColor: '#ffffff', paddingTop: '60px', paddingBottom: '60px', borderTop: '1px solid #f1f5f9' }}>
        <div className="tf-container">

          {/* Section Header */}
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <p className="s-sub-title text-red mb-18 justify-center">
                <i className="icon-angles-right moveLeftToRight" />
                FREQUENTLY ASKED QUESTIONS
              </p>

              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, letterSpacing: '-0.5px', marginBottom: '14px' }}>
                Common Questions About <br />
                <span style={{ color: '#03214e' }}>Accounting, Tax & Audit</span>
              </h2>

              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
                Find quick answers to the most common queries regarding UAE tax regulations, statutory audits, and our professional financial services.
              </p>
            </div>
          </div>

          {/* 2 Columns x 4 FAQs Clean Timeline Grid */}
          <div className="row g-5">
            
            {/* Column 1 (FAQs 01 - 04) */}
            <div className="col-lg-6">
              <div className="saylo-timeline-faq-wrap">
                <div className="saylo-timeline-line"></div>
                {col1Faqs.map((faq, index) => {
                  const numStr = String(index + 1).padStart(2, '0');
                  const isActive = activeFaq === faq.id;
                  return (
                    <div key={faq.id} className={`saylo-timeline-faq-item ${isActive ? 'active' : ''}`}>
                      <span className="saylo-timeline-badge">{numStr}</span>
                      <button className="saylo-timeline-btn" onClick={() => toggleFaq(faq.id)}>
                        <h3 className="saylo-timeline-question">{faq.question}</h3>
                        <span className="saylo-timeline-toggle">
                          {isActive ? '−' : '+'}
                        </span>
                      </button>

                      {isActive && (
                        <div className="saylo-timeline-answer">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 2 (FAQs 05 - 08) */}
            <div className="col-lg-6">
              <div className="saylo-timeline-faq-wrap">
                <div className="saylo-timeline-line"></div>
                {col2Faqs.map((faq, index) => {
                  const numStr = String(index + 5).padStart(2, '0');
                  const isActive = activeFaq === faq.id;
                  return (
                    <div key={faq.id} className={`saylo-timeline-faq-item ${isActive ? 'active' : ''}`}>
                      <span className="saylo-timeline-badge">{numStr}</span>
                      <button className="saylo-timeline-btn" onClick={() => toggleFaq(faq.id)}>
                        <h3 className="saylo-timeline-question">{faq.question}</h3>
                        <span className="saylo-timeline-toggle">
                          {isActive ? '−' : '+'}
                        </span>
                      </button>

                      {isActive && (
                        <div className="saylo-timeline-answer">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 13 — INSIGHTS & UPDATES (Home 2 Style-4 Swiper Slider) */}
      <section id="insights" className="s-new-blog-2" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="tf-container">
          <div className="row align-items-end justify-content-between mb-5" style={{ marginBottom: '50px' }}>
            <div className="col-lg-8">
              <p className="s-sub-title text-red mb-18">
                <i className="icon-angles-right moveLeftToRight" />
                INSIGHTS & UPDATES
              </p>
              <h2 className="s-title font-main-2 text-dark fs-38 fw-7 mt-2 mb-0">
                Latest Regulatory & Tax Insights
              </h2>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link href="/blog" className="tf-btn secondary">
                View All Insights
                <i className="icon-chevron-right ms-2" />
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Swiper {...sliderBlog} className="swiper-container slider-blog overflow-hidden pb-4">
                {blogs.map((blog) => (
                  <SwiperSlide key={blog.id}>
                    <div className="card-blog-item style-4 tf-hover h-100">
                      <Link href={`/blog/${blog.slug}`}>
                        <div className="entry-image mb-30 hover-1 hover-14">
                          <Image
                            width={400}
                            height={250}
                            sizes="100vw"
                            style={{ width: "100%", height: "230px", objectFit: "cover", borderRadius: "10px" }}
                            src={blog.image || "/images/blog/card-blog-item-10.jpg"}
                            alt={blog.title}
                          />
                        </div>
                      </Link>
                      <div className="entry-meta">
                        <ul className="meta-list">
                          <li>
                            <Link href={`/blog/${blog.slug}`}>{blog.category}</Link>
                          </li>
                          <li>
                            <span className="line" />
                          </li>
                          <li>
                            <Link href={`/blog/${blog.slug}`}>{blog.author}</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mb-20">
                        <Link href={`/blog/${blog.slug}`} className="title fw-7 mb-10 fs-18">
                          {blog.title}
                        </Link>
                      </div>
                      <Link href={`/blog/${blog.slug}`} className="date text-muted">
                        <i className="icon-calendar-days me-2" />
                        {blog.date}
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 14 — CONVERSION CTA & CONSULTATION FORM */}
      <section className="s-conversion-cta py-4 bg-dark text-white">
        <div className="tf-container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <span className="badge bg-red text-white fs-12 uppercase px-3 py-1 mb-3 rounded-pill fw-7">
                Get Expert Guidance
              </span>
              <h2 className="text-white font-main-2 fs-36 fw-7 mb-3">
                Need Clarity on Your Accounting, Audit or Tax Requirements?
              </h2>
              <p className="text-white-70 fs-16 leading-relaxed mb-4">
                Talk to Hedge&apos;s senior chartered accountants and tax experts to understand the right next step for your enterprise across the UAE, GCC, and India.
              </p>

              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon bg-red text-white p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <i className="flaticon-phone-call fs-20" />
                  </div>
                  <div>
                    <span className="text-white-70 fs-13 d-block">Direct Phone Helpline</span>
                    <Link href="tel:+971502253373" className="text-white fw-7 fs-18">+971 50 225 3373</Link>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="icon bg-red text-white p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <i className="flaticon-open-mail fs-20" />
                  </div>
                  <div>
                    <span className="text-white-70 fs-13 d-block">Official Business Email</span>
                    <Link href="mailto:info@hedgeasglobal.com" className="text-white fw-7 fs-16">info@hedgeasglobal.com</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <ConsultationForm title="Request Free Consultation" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
