'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { faqsData } from '@/data/faqs';
import { blogsData } from '@/data/blogs';
import ConsultationForm from '@/components/forms/ConsultationForm';

export default function Section12() {
	const [activeFaq, setActiveFaq] = useState(1);

	const toggleFaq = (id) => {
		setActiveFaq(activeFaq === id ? null : id);
	};

	return (
		<>
			{/* SECTION 12 — FAQ */}
			<section className="s-faq py-5 py-lg-7 bg-light-slate position-relative z-1">
				<div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1200px' }}>
					<div className="row justify-content-center text-center mb-5">
						<div className="col-lg-8">
							<p className="s-sub-title text-red mb-3 d-inline-flex align-items-center bg-white px-3 py-1 rounded-pill shadow-sm border">
								<i className="flaticon-star text-red me-2 fs-14" />
								Frequently Asked Questions
							</p>
							<h2 className="s-title font-main-2 text-dark fs-40 fw-7 mb-3">
								Common Questions About <br/><span className="text-red">Accounting, Tax & Audit</span>
							</h2>
							<p className="text-muted fs-16 leading-relaxed">
								Find quick answers to the most common queries regarding UAE tax regulations, statutory audits, and our professional services.
							</p>
						</div>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="faq-wrapper d-flex flex-column gap-4">
								{faqsData.map((faq) => (
									<div 
										key={faq.id} 
										className={`faq-item bg-white rounded-4 overflow-hidden border-0 ${activeFaq === faq.id ? 'shadow-lg' : 'shadow-sm'}`} 
										style={{ 
											transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
											border: activeFaq === faq.id ? '1px solid rgba(217, 35, 42, 0.2)' : '1px solid rgba(0,0,0,0.05)',
											transform: activeFaq === faq.id ? 'translateY(-4px)' : 'none'
										}}
									>
										<button
											className="w-100 text-start bg-transparent border-0 p-4 p-md-5 d-flex align-items-center justify-content-between gap-4"
											onClick={() => toggleFaq(faq.id)}
											aria-expanded={activeFaq === faq.id}
											style={{ cursor: 'pointer', outline: 'none' }}
										>
											<h3 className={`fs-18 fs-md-20 fw-7 mb-0 text-start ${activeFaq === faq.id ? 'text-red' : 'text-dark'}`} style={{ transition: 'color 0.3s ease', flex: 1 }}>
												{faq.question}
											</h3>
											
											{/* Custom animated plus/minus icon */}
											<div 
												className={`rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 ${activeFaq === faq.id ? 'bg-danger text-white' : 'bg-light text-dark'}`} 
												style={{ 
													width: '44px', height: '44px', 
													transition: 'all 0.4s ease',
													boxShadow: activeFaq === faq.id ? '0 10px 20px rgba(217, 35, 42, 0.3)' : 'none'
												}}
											>
												<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.4s ease', transform: activeFaq === faq.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
													<line x1="5" y1="12" x2="19" y2="12"></line>
													{activeFaq !== faq.id && <line x1="12" y1="5" x2="12" y2="19"></line>}
												</svg>
											</div>
										</button>
										
										{/* Smooth collapsible content area */}
										<div
											className={`collapse ${activeFaq === faq.id ? 'show' : ''}`}
											style={{ transition: 'height 0.4s ease' }}
										>
											<div style={{ margin: '0 3rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}></div>
											<div className="p-4 p-md-5 pt-4 text-muted fs-16 leading-relaxed text-start">
												{faq.answer}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 13 — INSIGHTS & UPDATES */}
			<section className="s-insights py-5">
				<div className="tf-container">
					<div className="row justify-content-between align-items-center mb-5">
						<div className="col-lg-8">
							<p className="s-sub-title text-red mb-2">
								<i className="icon-angles-right moveLeftToRight" />
								Insights & Updates
							</p>
							<h2 className="s-title font-main-2 text-dark fs-32 fw-7">
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

					<div className="row g-4">
						{blogsData.map((blog) => (
							<div key={blog.id} className="col-lg-6">
								<div className="card-blog-item bg-white p-4 rounded-3 border shadow-sm h-100 d-flex flex-column justify-content-between">
									<div>
										<div className="d-flex align-items-center gap-2 mb-2">
											<span className="badge bg-red text-white fs-11 fw-7 uppercase px-2 py-1 rounded">
												{blog.category}
											</span>
											<span className="text-muted fs-12">{blog.date}</span>
										</div>
										<h3 className="fs-18 fw-7 mb-2">
											<Link href={`/blog/${blog.slug}`} className="text-dark hover-text-red">
												{blog.title}
											</Link>
										</h3>
										<p className="text-muted fs-14 mb-3 leading-relaxed">
											{blog.excerpt}
										</p>
									</div>
									<div>
										<Link href={`/blog/${blog.slug}`} className="tf-btn-readmore style-3 text-red fw-6 fs-14">
											Read Article
											<i className="icon-chevron-right ms-1" />
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SECTION 14 — CONVERSION CTA & CONSULTATION FORM */}
			<section className="s-conversion-cta py-5 bg-dark text-white">
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
								Talk to Hedge's senior chartered accountants and tax experts to understand the right next step for your enterprise across the UAE, GCC, and India.
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
