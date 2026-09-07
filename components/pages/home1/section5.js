import Image from 'next/image';
import Link from 'next/link';

export default function Section5() {
	return (
		<section className="s-pioneer-hedge py-5">
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="pioneer-hedge-box text-white">
							<div className="row align-items-center">
								<div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
									<div className="bg-white p-3 rounded-3 d-inline-block shadow-lg">
										<Image
											width="220"
											height="90"
											style={{ objectFit: 'contain', height: '80px', width: 'auto' }}
											src="/images/logo/hedgesecondlogo.png"
											alt="Pioneer Hedge Auditing & Tax Consulting Logo"
										/>
									</div>
								</div>

								<div className="col-lg-8">
									<div className="fta-badge">
										<i className="flaticon-award me-1" /> Registered FTA Tax Agency
									</div>
									<h2 className="text-white font-main-2 fs-32 mb-3 fw-7">
										FTA-Approved Tax Expertise & Statutory Audit
									</h2>
									<p className="text-white-80 fs-16 leading-relaxed mb-4">
										<strong>Pioneer Hedge Auditing & Tax Consulting</strong> is the official auditing and tax practice of Hedge Chartered Accountants Group. As a licensed FTA Tax Agency in the UAE, Pioneer Hedge represents corporate clients in statutory audits, Federal Tax Authority compliance, VAT disputes, and Corporate Tax filings.
									</p>

									<div className="d-flex flex-wrap gap-3">
										<Link href="/services/audit-assurance" className="tf-btn style-10">
											Explore Pioneer Hedge Audits
											<i className="icon-chevron-right ms-2" />
										</Link>
										<Link href="/contact" className="tf-btn secondary">
											Speak With an FTA Tax Agent
											<i className="icon-chevron-right ms-2" />
										</Link>
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
