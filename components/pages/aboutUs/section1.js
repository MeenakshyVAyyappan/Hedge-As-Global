
import CounterUp from '@/components/elements/CounterUp';
import Image from 'next/image';
import Link from 'next/link';

export default function Section1() {
	return (
		<section style={{ background: '#ffffff', paddingTop: '60px', paddingBottom: '60px' }}>
			<div className="tf-container">
				<div className="row align-items-center g-5">
					
					{/* Left Column: Heading & Content */}
					<div className="col-lg-6">
						<div className="pe-lg-3">
							
							{/* Eyebrow badge */}
							<p className="s-sub-title text-red mb-18" style={{ color: '#C8102E', fontSize: '13.5px', fontWeight: 700, letterSpacing: '1.8px', textTransform: 'uppercase' }}>
								<i className="icon-angles-right moveLeftToRight me-2" />
								Firm Overview
							</p>

							{/* Main Section Title */}
							<h2 className="font-main-2 fw-8 text-dark mb-4" style={{ fontSize: 'clamp(30px, 3.6vw, 46px)', fontWeight: 800, color: '#0a0a0a', lineHeight: '1.18', letterSpacing: '-0.5px' }}>
								About Hedge Chartered Accountants <br />
								<span style={{ color: '#03214e' }}>Group</span>
							</h2>

							{/* Decorative Accent Divider Line */}
							<div style={{ width: '52px', height: '3.5px', background: '#C8102E', borderRadius: '2px', marginBottom: '28px' }} />

							{/* Primary Highlight Paragraph */}
							<p className="fw-5 mb-4" style={{ fontSize: '16.5px', color: '#18181b', lineHeight: '1.75' }}>
								<strong style={{ color: '#03214e', fontWeight: 700 }}>HEDGE CHARTERED ACCOUNTANTS GROUP</strong> is a trusted name in the world of Accounting and Audit services. Hedge is an associate of <strong style={{ color: '#0a0a0a', fontWeight: 600 }}>ANJITH R &amp; ASSOCIATES</strong>, a well-established firm of Chartered Accountants, corporate financial advisors, and tax consultants in Abu Dhabi, Dubai UAE, Bahrain &amp; India.
							</p>

							{/* Secondary Supporting Paragraph */}
							<p className="mb-4" style={{ fontSize: '15.5px', color: '#52525b', lineHeight: '1.8' }}>
								We have been serving businesses and individuals with unwavering dedication and commitment to excellence. From small businesses to enterprises, we offer scalable and high-quality Accounting, Statutory Audit, Corporate Tax, Business Advisory, and VAT compliance services aligned with International Financial Reporting Standards (IFRS).
							</p>

							{/* Feature Highlights Grid */}
							<div className="row g-3 mb-4 pt-2">
								<div className="col-sm-6">
									<div className="p-3 rounded-3 h-100" style={{ background: '#f8fafc', border: '1px solid #f1f5f9' }}>
										<div className="d-flex align-items-center mb-2">
											<div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '28px', height: '28px', background: 'rgba(200,16,46,0.1)', flexShrink: 0 }}>
												<i className="icon-check-2" style={{ color: '#C8102E', fontSize: '12px', fontWeight: 'bold' }} />
											</div>
											<h6 className="fw-7 text-dark mb-0" style={{ fontSize: '15px' }}>Customized Solutions</h6>
										</div>
										<p className="mb-0" style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.5' }}>
											Tailored financial strategies designed for corporate requirements.
										</p>
									</div>
								</div>

								<div className="col-sm-6">
									<div className="p-3 rounded-3 h-100" style={{ background: '#f8fafc', border: '1px solid #f1f5f9' }}>
										<div className="d-flex align-items-center mb-2">
											<div className="rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: '28px', height: '28px', background: 'rgba(200,16,46,0.1)', flexShrink: 0 }}>
												<i className="icon-check-2" style={{ color: '#C8102E', fontSize: '12px', fontWeight: 'bold' }} />
											</div>
											<h6 className="fw-7 text-dark mb-0" style={{ fontSize: '15px' }}>FTA &amp; IFRS Compliant</h6>
										</div>
										<p className="mb-0" style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.5' }}>
											Official agency representation with statutory audit-grade precision.
										</p>
									</div>
								</div>
							</div>

							{/* Call to Action Link */}
							<div className="pt-2">
								<Link href="/our-service" className="tf-btn style-1 text-white" style={{ background: '#03214e', padding: '14px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, border: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 14px rgba(3,33,78,0.2)' }}>
									Explore Our Services
									<i className="icon-chevron-right ms-1" />
								</Link>
							</div>

						</div>
					</div>

					{/* Right Column: Image Stack & Experience Counter Card */}
					<div className="col-lg-6">
						<div className="position-relative ps-lg-4">

							{/* Counter Banner Card */}
							<div className="d-flex align-items-center p-4 rounded-4 mb-4" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderLeft: '5px solid #C8102E', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
								<div className="me-4" style={{ flexShrink: 0 }}>
									<div className="fw-8 font-main-2" style={{ fontSize: '42px', fontWeight: 800, color: '#03214e', lineHeight: 1 }}>
										<CounterUp count={10} /><span style={{ color: '#C8102E' }}>+</span>
									</div>
								</div>
								<div>
									<h6 className="fw-7 text-dark mb-1" style={{ fontSize: '16px' }}>Years Of Dedicated Excellence</h6>
									<p className="mb-0" style={{ fontSize: '13.5px', color: '#64748b' }}>In Accounting, Audit, Tax Consultancy &amp; Corporate Advisory</p>
								</div>
							</div>

							{/* Main Featured Office Image */}
							<div className="rounded-4 overflow-hidden shadow-lg position-relative mb-4" style={{ border: '5px solid #ffffff', boxShadow: '0 20px 50px rgba(0,0,0,0.08)' }}>
								<Image
									width={600}
									height={380}
									style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
									src="/images/section/homeabout.jpg"
									alt="Hedge Chartered Accountants Head Office"
								/>
							</div>

							{/* Highlight Text Card */}
							<div className="p-4 rounded-4" style={{ background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
								<div className="d-flex align-items-center mb-2">
									<i className="flaticon-award text-red me-2" style={{ fontSize: '20px', color: '#C8102E' }} />
									<h6 className="fw-7 text-dark mb-0" style={{ fontSize: '15px' }}>High Quality Professional Standards</h6>
								</div>
								<p className="mb-0" style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.65' }}>
									The firm represents a combination of specialized skills, geared to offer sound financial solutions. We follow International Financial Reporting Standards (IFRS) and are committed to high levels of quality &amp; integrity.
								</p>
							</div>

						</div>
					</div>

				</div>
			</div>
		</section>
	);
}


