export default function Section8() {
	const processSteps = [
		{
			step: "STEP 01",
			title: "Understand",
			desc: "Understand the company's requirements, corporate setup, financial environment, and current operating challenges."
		},
		{
			step: "STEP 02",
			title: "Assess",
			desc: "Review current accounting workflows, tax exposure (VAT / Corporate Tax), audit requirements, or ICV score eligibility."
		},
		{
			step: "STEP 03",
			title: "Implement",
			desc: "Deliver structured professional solutions, ERP integration, tax registration, or statutory audit aligned with regional laws."
		},
		{
			step: "STEP 04",
			title: "Support",
			desc: "Provide ongoing monthly guidance, MIS reporting, quarterly tax filings, and continuous financial optimization."
		}
	];

	return (
		<section className="s-process py-5 bg-light-slate">
			<div className="tf-container">
				<div className="row justify-content-center text-center mb-5">
					<div className="col-lg-8">
						<p className="s-sub-title text-red mb-2">
							<i className="icon-angles-right moveLeftToRight" />
							Our Methodology
						</p>
						<h2 className="s-title font-main-2 text-dark fs-32 fw-7">
							A Clear Process. From Assessment to Ongoing Support.
						</h2>
						<p className="text-muted fs-15 mt-2">
							How we partner with your management team to deliver compliance, transparency, and financial clarity.
						</p>
					</div>
				</div>

				<div className="row g-4">
					{processSteps.map((item, index) => (
						<div key={index} className="col-lg-3 col-md-6">
							<div className="bg-white p-4 rounded-3 border shadow-sm h-100 position-relative">
								<span className="badge bg-red text-white fs-12 fw-7 px-3 py-1 mb-3 rounded-pill d-inline-block">
									{item.step}
								</span>
								<h3 className="fs-20 fw-7 text-dark mb-2">{item.title}</h3>
								<p className="text-muted fs-14 mb-0 leading-relaxed">
									{item.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
