import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ConsultationForm from "@/components/forms/ConsultationForm";

export async function generateMetadata({ params }) {
	const service = servicesData.find((s) => s.slug === params.slug);
	if (!service) return { title: "Service Not Found" };

	return {
		title: `${service.title} | Hedge Chartered Accountants Group`,
		description: service.tagline,
		alternates: {
			canonical: `https://hedgeasglobal.com/services/${service.slug}`
		}
	};
}

export async function generateStaticParams() {
	return servicesData.map((s) => ({
		slug: s.slug,
	}));
}

export default function ServiceDetailPage({ params }) {
	const service = servicesData.find((s) => s.slug === params.slug);
	if (!service) {
		notFound();
	}

	const relatedServices = servicesData.filter((s) => s.slug !== params.slug).slice(0, 6);

	return (
		<Layout breadcrumbTitle={service.title} mainCls="padding-0" breadcrumbBg="/images/bredcrumb/bredcrumb1.jpeg">
			{/* Service Overview & Features */}
			<section className="py-5 bg-light-slate">
				<div className="tf-container">
					<div className="row g-4">
						<div className="col-lg-8">
							<div className="bg-white p-5 rounded-4 border shadow-sm mb-4">
								<h2 className="font-main-2 text-dark fs-28 fw-7 mb-3">Service Overview</h2>
								<p className="text-muted fs-15 leading-relaxed mb-4">
									{service.description}
								</p>

								{service.extendedDescription && (
									<p className="text-muted fs-15 leading-relaxed mb-4">
										{service.extendedDescription}
									</p>
								)}

								<h3 className="font-main-2 text-dark fs-22 fw-7 mb-3">What We Cover</h3>
								<div className="row g-3 mb-4">
									{service.features.map((feature, idx) => (
										<div key={idx} className="col-md-6">
											<div className="p-3 bg-light-slate rounded-3 border h-100">
												<div className="d-flex align-items-center gap-2">
													<i className="flaticon-check-mark text-red fs-16" />
													<span className="fw-6 text-dark fs-14">{feature}</span>
												</div>
											</div>
										</div>
									))}
								</div>

								{service.benefits && (
									<>
										<h3 className="font-main-2 text-dark fs-22 fw-7 mb-3 mt-5">Core Benefits</h3>
										<div className="row g-4 mb-5">
											{service.benefits.map((benefit, idx) => (
												<div key={idx} className="col-md-6">
													<div className="p-4 bg-light-slate rounded-4 border h-100 hover-up transition-all">
														<div className="d-flex align-items-center mb-3">
															<div className="icon-box bg-red text-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm" style={{ width: '40px', height: '40px', flexShrink: 0 }}>
																<i className="flaticon-check fs-18" />
															</div>
															<h4 className="fs-16 fw-7 text-dark mb-0 leading-tight">{benefit.title}</h4>
														</div>
														<p className="text-muted fs-14 leading-relaxed mb-0">
															{benefit.desc}
														</p>
													</div>
												</div>
											))}
										</div>
									</>
								)}

								<h3 className="font-main-2 text-dark fs-22 fw-7 mb-3">Why Partner With Hedge</h3>
								<p className="text-muted fs-15 leading-relaxed">
									Our chartered accountants and tax experts bring deep market knowledge of GCC laws, Federal Tax Authority regulations, and IFRS standards. We ensure your financial records remain accurate, audit-ready, and optimized for tax efficiency.
								</p>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="bg-white p-4 rounded-4 border shadow-sm mb-4">
								<h3 className="fs-20 fw-7 text-dark mb-3">Related Services</h3>
								<ul className="list-unstyled mb-0">
									{relatedServices.map((rel) => (
										<li key={rel.id} className="mb-3 pb-3 border-bottom last-border-0">
											<Link href={`/services/${rel.slug}`} className="text-dark fw-6 hover-text-red d-block mb-1">
												{rel.title}
											</Link>
											<span className="text-muted fs-12">{rel.category}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="bg-dark text-white p-4 rounded-4 shadow-sm text-center">
								<h4 className="text-white fs-18 fw-7 mb-2">Pioneer Hedge Division</h4>
								<p className="text-white-70 fs-13 mb-3">FTA-Approved Tax Agency (TRN Registered)</p>
								<Link href="/contact" className="tf-btn style-10 w-100 justify-content-center">
									Contact Tax Agency
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Consultation Form CTA Section */}
			<section id="consultation-form" className="py-5 bg-dark text-white">
				<div className="tf-container">
					<div className="row align-items-center">
						<div className="col-lg-5 mb-4 mb-lg-0">
							<h2 className="text-white font-main-2 fs-32 fw-7 mb-3">
								Request Support for {service.shortTitle}
							</h2>
							<p className="text-white-70 fs-15 leading-relaxed">
								Fill out the consultation request form and our senior practice partner will get back to you within 24 business hours.
							</p>
						</div>
						<div className="col-lg-7">
							<ConsultationForm title={`Consultation for ${service.shortTitle}`} />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
