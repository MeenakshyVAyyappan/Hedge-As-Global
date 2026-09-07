import Link from 'next/link';

export default function Section1() {
	return (
		<section className="s-feature py-5 py-lg-6 position-relative z-1" style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
			<div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1600px' }}>
				<div className="row g-4 justify-content-center">
					{/* Card 1 */}
					<div className="col-12 col-md-6 col-xl-3">
						<div className="hover-translate p-4 p-xl-5 rounded-4 shadow-sm h-100 position-relative overflow-hidden" style={{ backgroundColor: '#0C1829', border: '1px solid rgba(255,255,255,0.1)' }}>
							<div className="icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle position-relative z-1" style={{ width: '75px', height: '75px' }}>
								<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D9232A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
									<path d="M9 12l2 2 4-4"/>
								</svg>
							</div>
							
							<h3 className="title font-main-2 fw-7 fs-22 mb-3 text-white position-relative z-1">
								<Link href="/services/audit-assurance" className="text-white text-decoration-none">
									FTA-Approved Tax Agency
								</Link>
							</h3>
							
							<p className="text fs-15 text-white-50 mb-0 leading-relaxed position-relative z-1">
								Pioneer Hedge Auditing & Tax Consulting is a registered FTA Tax Agency authorized to manage returns, audits, and tax representation.
							</p>
						</div>
					</div>

					{/* Card 2 */}
					<div className="col-12 col-md-6 col-xl-3">
						<div className="hover-translate p-4 p-xl-5 rounded-4 shadow-sm h-100 position-relative overflow-hidden" style={{ backgroundColor: '#0C1829', border: '1px solid rgba(255,255,255,0.1)' }}>
							<div className="icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle position-relative z-1" style={{ width: '75px', height: '75px' }}>
								<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D9232A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<circle cx="12" cy="12" r="10"/>
									<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
									<path d="M2 12h20"/>
								</svg>
							</div>
							
							<h3 className="title font-main-2 fw-7 fs-22 mb-3 text-white position-relative z-1">
								<Link href="/contact" className="text-white text-decoration-none">
									UAE • Bahrain • India
								</Link>
							</h3>
							
							<p className="text fs-15 text-white-50 mb-0 leading-relaxed position-relative z-1">
								Regional leadership across Abu Dhabi, Dubai, Al Ain, Manama (Bahrain), and India providing local compliance with international scale.
							</p>
						</div>
					</div>

					{/* Card 3 */}
					<div className="col-12 col-md-6 col-xl-3">
						<div className="hover-translate p-4 p-xl-5 rounded-4 shadow-sm h-100 position-relative overflow-hidden" style={{ backgroundColor: '#0C1829', border: '1px solid rgba(255,255,255,0.1)' }}>
							<div className="icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle position-relative z-1" style={{ width: '75px', height: '75px' }}>
								<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D9232A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
									<circle cx="9" cy="7" r="4"/>
									<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
								</svg>
							</div>
							
							<h3 className="title font-main-2 fw-7 fs-22 mb-3 text-white position-relative z-1">
								<Link href="/services/accounting-services" className="text-white text-decoration-none">
									Chartered Accountants
								</Link>
							</h3>
							
							<p className="text fs-15 text-white-50 mb-0 leading-relaxed position-relative z-1">
								Senior team of qualified auditors, financial analysts, and corporate tax specialists dedicated to precision and governance.
							</p>
						</div>
					</div>

					{/* Card 4 */}
					<div className="col-12 col-md-6 col-xl-3">
						<div className="hover-translate p-4 p-xl-5 rounded-4 shadow-sm h-100 position-relative overflow-hidden" style={{ backgroundColor: '#0C1829', border: '1px solid rgba(255,255,255,0.1)' }}>
							<div className="icon-wrapper mb-4 d-inline-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle position-relative z-1" style={{ width: '75px', height: '75px' }}>
								<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D9232A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
									<path d="M14 2v6h6"/>
									<path d="M16 13H8"/>
									<path d="M16 17H8"/>
									<path d="M10 9H8"/>
								</svg>
							</div>
							
							<h3 className="title font-main-2 fw-7 fs-22 mb-3 text-white position-relative z-1">
								<Link href="/services/audit-assurance" className="text-white text-decoration-none">
									IFRS Global Compliance
								</Link>
							</h3>
							
							<p className="text fs-15 text-white-50 mb-0 leading-relaxed position-relative z-1">
								Financial reporting and statutory audits conducted in strict compliance with International Financial Reporting Standards.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
