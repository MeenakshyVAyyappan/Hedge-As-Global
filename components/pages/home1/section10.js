import Link from 'next/link';

export default function Section10() {
	const einvoicingFeatures = [
		{
			title: "Accounting System Review",
			desc: "Audit existing software (Tally, Odoo, Zoho, SAP) to identify Peppol XML data schema gaps."
		},
		{
			title: "Data Mapping & Formatting",
			desc: "Structure customer Tax Registration Numbers, line-item VAT codes, and currency fields."
		},
		{
			title: "ERP & Peppol Integration",
			desc: "Connect your billing system directly to approved Accredited Service Providers (ASP)."
		},
		{
			title: "Compliance & Audit Readiness",
			desc: "Ensure structured real-time tax clearance and automated archiving compliant with FTA laws."
		}
	];

	return (
		<section className="s-einvoicing py-5 bg-light-slate">
			<div className="tf-container">
				<div className="row align-items-center">
					<div className="col-lg-6">
						<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 mb-3 rounded-pill fw-7">
							UAE E-Invoicing Mandate
						</span>
						<h2 className="font-main-2 text-dark fs-36 fw-7 mb-3">
							Is Your Accounting System Ready for UAE E-Invoicing?
						</h2>
						<p className="text-muted fs-16 leading-relaxed mb-4">
							The UAE Ministry of Finance is implementing mandatory E-Invoicing using the Peppol network. Businesses must transition from legacy PDF invoices to structured real-time XML tax clearance.
						</p>

						<div className="row g-3 mb-4">
							{einvoicingFeatures.map((item, index) => (
								<div key={index} className="col-md-6">
									<div className="p-3 bg-white rounded-3 border shadow-sm h-100">
										<h4 className="fw-7 fs-15 text-dark mb-1"><i className="flaticon-check-mark text-red me-2"></i>{item.title}</h4>
										<p className="fs-13 text-muted mb-0">{item.desc}</p>
									</div>
								</div>
							))}
						</div>

						<div className="d-flex flex-wrap gap-3">
							<Link href="/contact" className="tf-btn">
								Request E-Invoicing Review
								<i className="icon-chevron-right ms-2" />
							</Link>
							<Link href="/services/e-invoicing" className="tf-btn secondary">
								Learn More About E-Invoicing
								<i className="icon-chevron-right ms-2" />
							</Link>
						</div>
					</div>

					<div className="col-lg-5 offset-lg-1 mt-4 mt-lg-0">
						<div className="bg-dark text-white p-5 rounded-4 border border-secondary shadow-lg">
							<i className="flaticon-digital-marketing text-red fs-60 mb-3 d-inline-block" />
							<h3 className="text-white fs-24 fw-7 mb-3">E-Invoicing Health Check</h3>
							<p className="text-white-70 fs-14 mb-4">
								Avoid last-minute software disruptions. Our financial technology team evaluates your ERP readiness and maps your master data fields.
							</p>
							<Link href="/contact" className="tf-btn style-10 w-100 justify-content-center">
								Book Technology Audit
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
