import Image from 'next/image';
import Link from 'next/link';

export default function Section2() {
	return (
		<section className="s-about-company tf-spacing-2 py-5">
			<div className="relative z-5">
				<div className="tf-container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="content-section">
								<p className="s-sub-title text-red">
									<i className="icon-angles-right moveLeftToRight" />
									About Hedge
								</p>
								<h2 className="s-title mb-40 font-main-2 text-dark">
									Financial Expertise Built on Accuracy, Transparency and Trust
								</h2>
								<p className="text-muted fs-16 mb-4 leading-relaxed">
									Hedge Chartered Accountants Group provides comprehensive accounting, auditing, tax consultancy, and business advisory solutions to corporate, commercial, and institutional clients across the UAE, Bahrain, and India.
								</p>

								<div className="row g-3 mb-4">
									<div className="col-md-6">
										<div className="p-3 bg-light-slate rounded-3 border">
											<h4 className="fw-7 fs-16 text-dark mb-1"><i className="flaticon-check-mark text-red me-2"></i>Regional Understanding</h4>
											<p className="fs-14 text-muted mb-0">Deep familiarity with GCC tax laws, UAE Ministry rules, and FTA regulations.</p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="p-3 bg-light-slate rounded-3 border">
											<h4 className="fw-7 fs-16 text-dark mb-1"><i className="flaticon-check-mark text-red me-2"></i>International Standards</h4>
											<p className="fs-14 text-muted mb-0">Financial records and statutory audits conducted in alignment with global IFRS guidelines.</p>
										</div>
									</div>
								</div>

								<div className="bot mt-4">
									<Link href="/about-us" className="tf-btn">
										Discover Hedge Group
										<i className="icon-chevron-right ms-2" />
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
							<div className="position-relative wow fadeInRight" data-wow-delay="0.1s">
								{/* Premium glowing backdrop */}
								<div className="position-absolute top-50 start-50 translate-middle bg-danger opacity-10 rounded-circle" style={{ width: '400px', height: '400px', filter: 'blur(50px)', zIndex: -1 }}></div>
								
								{/* Image Container with premium border and shadow */}
								<div className="rounded-4 overflow-hidden shadow-2xl position-relative z-1 premium-tilt-image" style={{ border: '8px solid white' }}>
									<Image
										width={600}
										height={700}
										style={{ width: "100%", height: "auto", objectFit: "cover" }}
										src="/images/section/homeabout.jpg"
										alt="Hedge Chartered Accountants Head Office"
									/>
									{/* Subtle inner overlay for premium look */}
									<div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(12,24,41,0.6) 100%)' }}></div>
								</div>
								
								{/* Floating badge for premium feel */}
								<div className="position-absolute bottom-0 start-0 translate-middle-x mb-5 bg-white p-3 rounded-4 shadow-lg d-none d-md-flex align-items-center z-2" style={{ border: '1px solid rgba(0,0,0,0.05)', animation: 'bounce 3s infinite' }}>
									<div className="icon-wrapper bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
										<i className="flaticon-award text-red fs-24" />
									</div>
									<div>
										<h5 className="fw-7 text-dark mb-0 fs-16">FTA Approved</h5>
										<p className="text-muted fs-13 mb-0">Certified Agency</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
