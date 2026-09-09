import Image from 'next/image';
import Link from 'next/link';

export default function Section5() {
	return (
		<section className="s-pioneer-hedge py-4">
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="pioneer-hedge-box text-white">
							<div className="row align-items-center">
								<div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
									<div className="bg-white p-3 rounded-4 d-inline-block shadow-lg">
										<Image
											width={280}
											height={240}
											style={{ objectFit: 'contain', height: 'auto', maxHeight: '200px', width: '100%', maxWidth: '260px' }}
											src="/images/logo/hedgesecondlogo.png"
											alt="Pioneer Hedge Auditing & Tax Consulting Logo"
										/>
									</div>
								</div>

								<div className="col-lg-8">
									<span className="fta-badge">
										<i className="flaticon-award me-1" /> FTA-Approved Tax Agency
									</span>
									<h2 className="text-white font-main-2 fs-30 fw-7 mb-3">
										Pioneer Hedge Auditing & Tax Consulting
									</h2>
									<p className="text-white-80 fs-15 leading-relaxed mb-4">
										Pioneer Hedge operates as the registered auditing and tax consulting division of Hedge Chartered Accountants Group. Licensed by the Federal Tax Authority (FTA), Pioneer Hedge performs statutory audits, internal financial reviews, and official representation before UAE tax authorities.
									</p>
									<Link href="/services/audit-assurance" className="tf-btn style-10">
										Explore Audit & Tax Services
										<i className="icon-chevron-right ms-2" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

