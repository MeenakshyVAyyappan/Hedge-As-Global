'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section1 from './section1';
import Section3 from './section3';
import ClientLogosSection from '@/components/sections/ClientLogosSection';
import AccountingInfrastructure from '@/components/pages/home1/section6';
import WorkingProcess from '@/components/pages/home1/section8';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { locationsData } from '@/data/locations';
import { faqsData } from '@/data/faqs';

export default function AboutUs() {
	const [activeFaq, setActiveFaq] = useState(1);

	const toggleFaq = (id) => {
		setActiveFaq(activeFaq === id ? null : id);
	};

	const col1Faqs = faqsData.slice(0, 4);
	const col2Faqs = faqsData.slice(4, 8);

	return (
		<>
			{/* 1. Firm Overview Section */}
			<Section1 />

			{/* 2. Mission & Vision */}
			<section className="s-mission py-0" id="mission" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
				<div className="tf-container">
					<div className="row g-4 align-items-stretch">
						<div className="col-lg-6">
							<div className="p-4 p-md-5 h-100 rounded-4" style={{ backgroundColor: '#f8f4f0' }}>
								<div className="mb-4 pb-2">
									<div className="d-flex align-items-center mb-3">
										<div className="bg-white rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '65px', height: '65px', marginRight: '20px', flexShrink: 0 }}>
											<i className="flaticon-rocket text-dark fs-30" />
										</div>
										<h3 className="fs-24 fw-6 text-dark mb-0">Company Mission</h3>
									</div>
									<p className="text-muted fs-15 leading-relaxed mb-0 mt-2">
										To deliver audit-grade financial clarity, uncompromising tax compliance, and long-term strategic advisory that protects enterprise capital. We are committed to delivering exceptional service and personalized guidance.
									</p>
								</div>
								<hr className="my-4 border-secondary opacity-10" />
								<div className="mt-4 pt-2">
									<div className="d-flex align-items-center mb-3">
										<div className="bg-white rounded-3 d-flex align-items-center justify-content-center shadow-sm" style={{ width: '65px', height: '65px', marginRight: '20px', flexShrink: 0 }}>
											<i className="flaticon-target text-dark fs-30" />
										</div>
										<h3 className="fs-24 fw-6 text-dark mb-0">Company Vision &amp; Goals</h3>
									</div>
									<p className="text-muted fs-15 leading-relaxed mb-0 mt-2">
										To be the most trusted chartered accounting and tax advisory group in the GCC, recognized for authority, innovation, and client success. We strive to set standard for excellence by continuously enhancing our solutions.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="position-relative h-100 w-100 rounded-4 overflow-hidden" style={{ minHeight: '320px' }}>
								<Image
									src="/images/section/firmoverview.png"
									alt="Hedge Group Mission and Vision"
									fill
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Clients & Free Zone Partners */}
			<ClientLogosSection bg="#ffffff" />

			{/* 3. OUR METHODOLOGY */}
			<WorkingProcess />

			{/* 4. FTA-Approved Tax Agency */}
			<section style={{ paddingTop: '56px', paddingBottom: '56px', background: '#03214e' }} className="text-white">
				<div className="tf-container">
					<div className="pioneer-hedge-box">
						<div className="row align-items-center">
							<div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
								<div className="bg-white p-3 rounded-4 d-inline-block shadow-lg">
									<Image
										width={280}
										height={240}
										style={{ objectFit: 'contain', height: 'auto', maxHeight: '200px', width: '100%', maxWidth: '260px' }}
										src="/images/logo/hedgesecondlogo.png"
										alt="Pioneer Hedge Auditing &amp; Tax Consulting Logo"
									/>
								</div>
							</div>
							<div className="col-lg-8 text-center text-lg-start">
								<span className="fta-badge mb-3">
									<i className="flaticon-award me-1" /> FTA-Approved Tax Agency
								</span>
								<h2 className="text-white font-main-2 fs-30 fw-7 mb-3">
									Pioneer Hedge Auditing &amp; Tax Consulting
								</h2>
								<p className="text-white-80 fs-15 leading-relaxed mb-4">
									Pioneer Hedge operates as the registered auditing and tax consulting division of Hedge Chartered Accountants Group. Licensed by the Federal Tax Authority (FTA), Pioneer Hedge performs statutory audits, internal financial reviews, and official representation before UAE tax authorities.
								</p>
								<Link href="/services/audit-assurance" className="tf-btn style-10">
									Explore Audit &amp; Tax Services
									<i className="icon-chevron-right ms-2" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 5. OUR EXPERT TEAM */}
			<Section3 />

			{/* 6. ACCOUNTING INFRASTRUCTURE */}
			<AccountingInfrastructure />

			{/* 6. REGIONAL FOOTPRINT */}
			<section id="locations" className="s-regional-presence" style={{ paddingTop: '56px', paddingBottom: '56px' }}>
				<div className="tf-container">
					<div className="row justify-content-center text-center mb-50">
						<div className="col-lg-8">
							<p className="s-sub-title text-red mb-18 justify-center">
								<i className="icon-angles-right moveLeftToRight" />
								REGIONAL FOOTPRINT
							</p>
							<h2 className="s-title font-main-2 text-dark fs-38 fw-7 mb-3">
								Regional Expertise. Local Support.
							</h2>
							<p className="text-muted fs-16 max-w-650 mx-auto">
								Hedge operates dedicated practice offices across key commercial hubs in the UAE, Bahrain, and India to support your regional expansion, audit, and tax compliance needs.
							</p>
						</div>
					</div>
					<div className="row g-4 justify-content-center">
						{locationsData.map((office) => (
							<div key={office.id} className="col-lg-4 col-md-6">
								<div className="corp-office-card">
									<div>
										<div className="office-city">{office.city}</div>
										<span className="office-type">{office.badge}</span>
										<p className="office-address">{office.address}</p>
										<ul className="office-meta">
											<li>
												<span className="fw-6 text-dark me-1">Tel:</span>
												<Link href={`tel:${office.phone.replace(/\s+/g, '')}`}>
													{office.phone}
												</Link>
											</li>
											<li>
												<span className="fw-6 text-dark me-1">Email:</span>
												<Link href={`mailto:${office.email}`}>
													{office.email}
												</Link>
											</li>
											<li>
												<span className="fw-6 text-dark me-1">Hours:</span>
												<span>{office.workingHours}</span>
											</li>
										</ul>
									</div>
									<Link href="/contact" className="office-link">
										<span>Contact Office</span>
										<i className="icon-arrow-right2 ms-1" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 7. FREQUENTLY ASKED QUESTIONS */}
			<section id="faq" style={{ backgroundColor: '#ffffff', paddingTop: '60px', paddingBottom: '60px', borderTop: '1px solid #f1f5f9' }}>
				<div className="tf-container">
					<div className="row justify-content-center text-center mb-5">
						<div className="col-lg-8">
							<p className="s-sub-title text-red mb-18 justify-center">
								<i className="icon-angles-right moveLeftToRight" />
								FREQUENTLY ASKED QUESTIONS
							</p>
							<h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, letterSpacing: '-0.5px', marginBottom: '14px' }}>
								Common Questions About<br />
								<span style={{ color: '#03214e' }}>Accounting, Tax &amp; Audit</span>
							</h2>
							<p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
								Find quick answers to the most common queries regarding UAE tax regulations, statutory audits, and our professional financial services.
							</p>
						</div>
					</div>
					<div className="row g-4 g-lg-5">
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
												<span className="saylo-timeline-toggle">{isActive ? '−' : '+'}</span>
											</button>
											{isActive && (
												<div className="saylo-timeline-answer">{faq.answer}</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
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
												<span className="saylo-timeline-toggle">{isActive ? '−' : '+'}</span>
											</button>
											{isActive && (
												<div className="saylo-timeline-answer">{faq.answer}</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Consultation Form CTA */}
			<section className="s-conversion-cta py-5 bg-dark text-white">
				<div className="tf-container">
					<div className="row align-items-center">
						<div className="col-lg-5 mb-4 mb-lg-0">
							<h2 className="text-white font-main-2 fs-32 fw-7 mb-3">Partner With Hedge Advisory</h2>
							<p className="text-white-70 fs-15 leading-relaxed">
								Contact our senior partner team for an initial assessment of your company&apos;s accounting, tax, or audit requirements.
							</p>
						</div>
						<div className="col-lg-7">
							<ConsultationForm title="Schedule Executive Meeting" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
