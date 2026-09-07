export default function Section7() {
	const whyPoints = [
		{
			title: "Client-Centric Approach",
			desc: "Solutions structured around individual corporate requirements and regional business goals.",
			icon: "flaticon-human-resources"
		},
		{
			title: "Local Expertise. Global Standards.",
			desc: "In-depth understanding of UAE and GCC tax compliance combined with International Financial Reporting Standards (IFRS).",
			icon: "flaticon-target-1"
		},
		{
			title: "Chartered Accounting Expertise",
			desc: "Team of senior qualified chartered accountants, statutory auditors, and FTA-registered tax professionals.",
			icon: "flaticon-accounting"
		},
		{
			title: "Technology-Driven",
			desc: "Modern ERP integration (Tally, Odoo, Zoho) and automated e-invoicing workflows for real-time visibility.",
			icon: "flaticon-data-management"
		},
		{
			title: "Compliance Focused",
			desc: "Financial processes structured to protect your business from audit queries, tax penalties, and non-compliance risks.",
			icon: "flaticon-award"
		},
		{
			title: "Long-Term Partnership",
			desc: "Ongoing executive financial oversight and proactive advice rather than transactional support.",
			icon: "flaticon-growth"
		}
	];

	return (
		<section className="s-why-choose py-5 bg-dark text-white">
			<div className="tf-container">
				<div className="row justify-content-center text-center mb-5">
					<div className="col-lg-8">
						<p className="s-sub-title text-red mb-2">
							<i className="icon-angles-right moveLeftToRight" />
							Why Work With Us
						</p>
						<h2 className="s-title font-main-2 text-white fs-36 fw-7">
							Why Businesses Choose Hedge
						</h2>
						<p className="text-white-70 fs-16 mt-2">
							We combine technical rigor, regulatory authority, and strategic clarity to protect your financial interest.
						</p>
					</div>
				</div>

				<div className="row g-4">
					{whyPoints.map((item, index) => (
						<div key={index} className="col-lg-4 col-md-6">
							<div className="p-4 rounded-3 bg-secondary bg-opacity-25 border border-secondary border-opacity-50 h-100 transition-all hover-translate">
								<div className="icon text-red mb-3">
									<i className={`${item.icon} fs-40`} />
								</div>
								<h3 className="text-white fs-18 fw-7 mb-2">{item.title}</h3>
								<p className="text-white-70 fs-14 mb-0 leading-relaxed">
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
