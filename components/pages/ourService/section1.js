
import Image from 'next/image'
import Link from 'next/link'

export default function Section1() {
	return (
		<>
			{/* Marquee Ticker Title */}
			<div className="tf-marquee slider-saylo mt-50 mb-40">
				<div className="wrap-marquee">
					<div className="marquee-item"><p className="font-main-2 text">Accounting &amp; Audit Services</p></div>
					<div className="marquee-item"><p className="font-main-2 text">Accounting &amp; Audit Services</p></div>
					<div className="marquee-item"><p className="font-main-2 text">Accounting &amp; Audit Services</p></div>
					<div className="marquee-item"><p className="font-main-2 text">Accounting &amp; Audit Services</p></div>
					<div className="marquee-item"><p className="font-main-2 text">Accounting &amp; Audit Services</p></div>
					<div className="marquee-item"><p className="font-main-2 text">Accounting &amp; Audit Services</p></div>
				</div>
			</div>

			<section className="s-we-do tf-spacing-3 pt-0">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading mb-70">
								<p className="s-sub-title mb-15 justify-center">
									<i className="icon-angles-right moveLeftToRight" />
									WHAT WE DO
								</p>
								<h2 className="s-title text-center text-anime-style-2" style={{ fontSize: 'clamp(28px, 3.8vw, 44px)', fontWeight: 800 }}>
									Empowering Businesses with Expert <br />
									Accounting &amp; <span>Financial Solutions</span>
								</h2>
							</div>

							<div className="feature-group overflow-hidden">
								{/* Card 1: Accounting & Bookkeeping */}
								<div className="box-icon style-8">
									<div className="icon">
										<i className="flaticon-calculator" />
									</div>
									<Link href="/services/accounting-bookkeeping" className="title fw-7">
										Accounting &amp; Bookkeeping Services
									</Link>
									<span className="line mb-30" />
									<p className="text">
										Complete ledger maintenance, bank reconciliation, financial statement preparation, and management reporting aligned with IFRS standards.
									</p>
									<div className="image">
										<Link href="/services/accounting-bookkeeping">
											<Image
												width={500}
												height={500}
												style={{ width: "100%", height: "100%", objectFit: "cover" }}
												src="/images/section/homeabout.jpg" 
												alt="Accounting & Bookkeeping" 
												className="lazyload" 
											/>
										</Link>
									</div>
								</div>

								{/* Card 2: Statutory & Internal Audit */}
								<div className="box-icon style-8">
									<div className="icon">
										<i className="flaticon-workflow" />
									</div>
									<Link href="/services/audit-assurance" className="title fw-7">
										Statutory &amp; Internal Audit Services
									</Link>
									<span className="line mb-30" />
									<p className="text">
										Independent statutory audits, internal financial controls review, and risk management assessments for UAE free zones and mainland entities.
									</p>
									<div className="image">
										<Link href="/services/audit-assurance">
											<Image
												width={500}
												height={500}
												style={{ width: "100%", height: "100%", objectFit: "cover" }}
												src="/images/section/firmoverview.png" 
												alt="Statutory & Internal Audit" 
												className="lazyload" 
											/>
										</Link>
									</div>
								</div>

								{/* Card 3: UAE Corporate Tax Advisory */}
								<div className="box-icon style-8">
									<div className="icon">
										<i className="flaticon-award" />
									</div>
									<Link href="/services/corporate-tax" className="title fw-7">
										UAE Corporate Tax &amp; VAT Compliance
									</Link>
									<span className="line mb-30" />
									<p className="text">
										Corporate tax registration, tax group structuring, transfer pricing documentation, and annual tax return filings with the Federal Tax Authority.
									</p>
									<div className="image">
										<Link href="/services/corporate-tax">
											<Image
												width={500}
												height={500}
												style={{ width: "100%", height: "100%", objectFit: "cover" }}
												src="/images/section/corporatetaxcompilence.png" 
												alt="Corporate Tax Advisory" 
												className="lazyload" 
											/>
										</Link>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		</>
	)
}

