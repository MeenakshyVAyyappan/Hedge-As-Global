import Image from 'next/image'
import Link from 'next/link'

export default function Section3() {
	const services = [
		{
			title: "Accounting Services",
			slug: "/services/accounting-services",
			desc: "Complete financial ledger maintenance, financial statements preparation, and management reporting aligned with IFRS standards.",
			image: "/images/section/accounting.png"
		},
		{
			title: "Book Keeping",
			slug: "/services/bookkeeping",
			desc: "Daily transaction recording, bank reconciliations, accounts payable & receivable tracking, and systematic record keeping.",
			image: "/images/section/bookkeeping.png"
		},
		{
			title: "Audit Services",
			slug: "/services/audit-assurance",
			desc: "Independent statutory audits, internal financial controls evaluation, and risk management reviews for free zone & mainland entities.",
			image: "/images/section/audit.png"
		},
		{
			title: "UAE Corporate Tax Advisory",
			slug: "/services/uae-corporate-tax",
			desc: "Corporate tax registration, tax group structuring, transfer pricing documentation, and annual return filings with the Federal Tax Authority.",
			image: "/images/section/uaecorporatetx.png"
		},
		{
			title: "VAT Compliance & Advisory (UAE)",
			slug: "/services/vat-uae",
			desc: "Quarterly VAT return preparation, voluntary disclosures, tax registration, and representation during FTA tax audits across the UAE.",
			image: "/images/section/vat.png"
		},
		{
			title: "VAT Compliance & Advisory (Bahrain)",
			slug: "/services/vat-bahrain",
			desc: "End-to-end NBR VAT registration, return filings, input tax recovery optimization, and audit compliance for businesses in Bahrain.",
			image: "/images/section/vatbahrin.png"
		},
		{
			title: "In-Country Value (ICV) Certificate UAE",
			slug: "/services/icv-certification",
			desc: "Official ICV score optimization, financial supplier template preparation, and audit certification for UAE government tenders.",
			image: "/images/section/icv.png"
		}
	];

	return (
		<section className="s-service-4 tf-spacing-1" style={{ paddingTop: "70px", paddingBottom: "90px", backgroundColor: "#ffffff" }}>
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading mb-60 text-center">
							<p className="s-sub-title mb-15 justify-center" style={{ color: "#c8102e", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
								<i className="icon-angles-right moveLeftToRight" />
								OUR SERVICES
							</p>
							<h2 className="s-title text-center" style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.25 }}>
								Comprehensive Financial, Audit &amp; <br />
								<span style={{ color: '#03214e' }}>Advisory Solutions</span>
							</h2>
							<p style={{ fontSize: '16px', color: '#64748b', maxWidth: '680px', margin: '15px auto 0' }}>
								Hedge Chartered Accountants Group provides end-to-end accounting, statutory audit, corporate tax, VAT, and business consulting services across UAE, GCC, and India.
							</p>
						</div>

						<div className="grid-layout-3">
							{services.map((service, index) => (
								<div key={index} className="card-service-2 tf-hover" style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", border: "1px solid #eef2f6", display: "flex", flexDirection: "column", height: "100%" }}>
									<div className="image hover-1 hover-14" style={{ height: "210px", width: "100%", overflow: "hidden", position: "relative" }}>
										<Image
											width={400}
											height={250}
											style={{ width: "100%", height: "100%", objectFit: "cover" }}
											src={service.image}
											alt={service.title}
											className="lazyload" 
										/>
									</div>
									<div className="content" style={{ padding: "28px 24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
										<Link href={service.slug} className="title fw-7 mb-12" style={{ fontSize: "19px", color: "#0f172a", lineHeight: 1.35, display: "block" }}>
											{service.title}
										</Link>
										<p className="text mb-25" style={{ fontSize: "14.5px", color: "#64748b", lineHeight: 1.6, flexGrow: 1 }}>
											{service.desc}
										</p>
										<Link href={service.slug} className="tf-btn-readmore style-3 mt-auto" style={{ fontWeight: 600, color: "#c8102e" }}>
											Explore Details
											<i className="icon-chevron-right ms-1" />
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
