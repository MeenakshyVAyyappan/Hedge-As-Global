import Link from 'next/link';

export default function Section9() {
	return (
		<section className="s-featured-corporate-tax py-5 bg-dark text-white">
			<div className="tf-container">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<div className="pe-lg-4">
							<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 mb-3 rounded-pill fw-7">
								Featured Service • UAE Corporate Tax
							</span>
							<h2 className="text-white font-main-2 fs-36 fw-7 mb-4">
								Corporate Tax Compliance Requires More Than Filing.
							</h2>
							<p className="text-white-70 fs-16 leading-relaxed mb-4">
								Under UAE Federal Decree-Law No. 47 of 2022, Corporate Tax applies to business profits exceeding AED 375,000 at a standard rate of 9%. Proper tax group structuring, Small Business Relief evaluation, and arm's length transfer pricing documentation are critical to preventing costly FTA penalties.
							</p>

							<div className="row g-3 mb-4">
								<div className="col-md-6">
									<div className="p-3 bg-secondary bg-opacity-25 rounded-3 border border-secondary border-opacity-50">
										<h4 className="text-white fs-15 fw-7 mb-1"><i className="flaticon-check-mark text-red me-2"></i>Tax Registration & TRN</h4>
										<p className="text-white-70 fs-13 mb-0">Official FTA Registration and Tax Registration Number obtainment.</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="p-3 bg-secondary bg-opacity-25 rounded-3 border border-secondary border-opacity-50">
										<h4 className="text-white fs-15 fw-7 mb-1"><i className="flaticon-check-mark text-red me-2"></i>Tax Impact Assessment</h4>
										<p className="text-white-70 fs-13 mb-0">Deep financial review to identify taxable vs exempt revenue streams.</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="p-3 bg-secondary bg-opacity-25 rounded-3 border border-secondary border-opacity-50">
										<h4 className="text-white fs-15 fw-7 mb-1"><i className="flaticon-check-mark text-red me-2"></i>Transfer Pricing</h4>
										<p className="text-white-70 fs-13 mb-0">Arm’s length benchmarking and Master/Local file documentation.</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="p-3 bg-secondary bg-opacity-25 rounded-3 border border-secondary border-opacity-50">
										<h4 className="text-white fs-15 fw-7 mb-1"><i className="flaticon-check-mark text-red me-2"></i>Annual Return Filing</h4>
										<p className="text-white-70 fs-13 mb-0">Timely tax return compilation and submission before deadlines.</p>
									</div>
								</div>
							</div>

							<div className="d-flex flex-wrap gap-3">
								<Link href="/contact" className="tf-btn">
									Speak With a Tax Expert
									<i className="icon-chevron-right ms-2" />
								</Link>
								<Link href="/services/uae-corporate-tax" className="tf-btn secondary">
									Explore Corporate Tax Guide
									<i className="icon-chevron-right ms-2" />
								</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-5 mt-4 mt-lg-0">
						<div className="p-4 rounded-3 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-center">
							<i className="flaticon-calculator text-red fs-60 mb-3 d-inline-block" />
							<h3 className="text-white fs-22 fw-7 mb-2">Pioneer Hedge Tax Advisory</h3>
							<p className="text-white-70 fs-14 mb-4">
								Our FTA-approved tax agents represent your business directly with the Federal Tax Authority.
							</p>
							<Link href="/services/uae-corporate-tax" className="tf-btn style-10 w-100 justify-content-center">
								Book Tax Compliance Review
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
