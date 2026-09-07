import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { servicesData } from "@/data/services";

export const metadata = {
	title: "Professional Accounting, Audit & Tax Services UAE | Hedge Group",
	description: "Explore Hedge Chartered Accountants Group's services including Accounting, Bookkeeping, Statutory Audit, UAE Corporate Tax, VAT, ICV Certification, and E-Invoicing.",
	alternates: {
		canonical: "https://hedgeasglobal.com/services"
	}
};

export default function ServicesPage() {
	return (
		<Layout breadcrumbTitle="Our Services Overview">
			<section className="py-5 bg-light-slate">
				<div className="tf-container">
					<div className="row justify-content-center text-center mb-5">
						<div className="col-lg-8">
							<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 mb-2 rounded-pill fw-7">
								Hedge Capabilities
							</span>
							<h1 className="font-main-2 text-dark fs-36 fw-7">
								Accounting, Audit, Tax & Compliance Solutions
							</h1>
							<p className="text-muted fs-16 mt-2">
								Structured financial expertise designed to ensure regulatory compliance, optimize tax liability, and provide board-level visibility.
							</p>
						</div>
					</div>

					<div className="row g-4">
						{servicesData.map((service) => (
							<div key={service.id} className="col-lg-4 col-md-6">
								<div className="bg-white p-4 rounded-3 border shadow-sm h-100 d-flex flex-column justify-content-between">
									<div>
										<span className="badge bg-light text-red border border-danger-subtle fs-11 fw-7 uppercase mb-3">
											{service.category}
										</span>
										<div className="icon text-red mb-3">
											<i className={`${service.icon} fs-45`} />
										</div>
										<h2 className="fs-20 fw-7 text-dark mb-2">
											<Link href={`/services/${service.slug}`} className="text-dark hover-text-red">
												{service.title}
											</Link>
										</h2>
										<p className="text-muted fs-14 mb-4 leading-relaxed">
											{service.tagline}
										</p>
									</div>

									<div>
										<ul className="list-unstyled text-muted fs-13 mb-4">
											{service.features.slice(0, 3).map((feature, idx) => (
												<li key={idx} className="mb-1 d-flex align-items-center gap-2">
													<i className="flaticon-check-mark text-red fs-12" />
													<span>{feature}</span>
												</li>
											))}
										</ul>

										<Link href={`/services/${service.slug}`} className="tf-btn secondary w-100 justify-content-center">
											View Service Details
											<i className="icon-chevron-right ms-1" />
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
}
