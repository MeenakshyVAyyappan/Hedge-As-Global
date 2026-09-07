import { partnersData } from '@/data/partners';

export default function Section6() {
	return (
		<section className="s-partners py-5 bg-light-slate">
			<div className="tf-container">
				<div className="row justify-content-center text-center mb-5">
					<div className="col-lg-8">
						<p className="s-sub-title text-red mb-2">
							<i className="icon-angles-right moveLeftToRight" />
							Accounting Infrastructure
						</p>
						<h2 className="s-title font-main-2 text-dark fs-32 fw-7">
							Technology Partnerships That Strengthen Your Finance Function
						</h2>
						<p className="text-muted fs-15 mt-2">
							We seamlessly integrate your corporate accounting workflows with leading ERP and cloud bookkeeping platforms for real-time visibility and VAT/E-Invoicing compliance.
						</p>
					</div>
				</div>

				<div className="row g-4 justify-content-center">
					{partnersData.map((partner) => (
						<div key={partner.id} className="col-lg-4 col-md-6">
							<div className="bg-white p-4 rounded-3 border shadow-sm h-100 text-center d-flex flex-column align-items-center justify-content-center">
								<div className="px-3 py-2 bg-light rounded-3 mb-3 border">
									<h3 className="fw-7 text-dark fs-22 mb-0">{partner.name}</h3>
									<span className="text-red fs-12 fw-6 uppercase tracking-wider">{partner.subtitle}</span>
								</div>
								<p className="text-muted fs-14 mb-0 leading-relaxed">
									{partner.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
