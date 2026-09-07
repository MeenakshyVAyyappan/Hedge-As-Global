import Link from 'next/link';
import { servicesData } from '@/data/services';

export default function Section3() {
	const coreServices = servicesData.slice(0, 6);

	return (
		<section className="s-service tf-spacing-1 py-5">
			<div className="tf-container">
				<div className="row justify-content-center text-center mb-5">
					<div className="col-lg-8">
						<p className="s-sub-title mb-2 text-red">
							<i className="icon-angles-right moveLeftToRight" />
							Our Expertise
						</p>
						<h2 className="s-title font-main-2 text-dark">
							Expertise That Keeps Your Business Moving Forward
						</h2>
						<p className="text-muted fs-16 mt-3">
							Comprehensive accounting, auditing, taxation, and compliance solutions engineered for regulatory alignment and business growth across the UAE and GCC.
						</p>
					</div>
				</div>

				<div className="row g-4">
					{coreServices.map((service, index) => (
						<div key={service.id} className="col-lg-4 col-md-6">
							<div
								className="box-icon default tf-hover-icon bg-white p-4 rounded-3 border shadow-sm h-100 d-flex flex-column justify-content-between wow fadeInUp"
								data-wow-delay={`${index * 0.1}s`}
							>
								<div>
									<div className="icon hover-icon-2 text-red mb-3">
										<i className={`${service.icon} fs-45`} />
									</div>
									<h3 className="title fw-7 fs-20 mb-2">
										<Link href={`/services/${service.slug}`} className="text-dark hover-text-red">
											{service.title}
										</Link>
									</h3>
									<p className="text fs-14 text-muted mb-4 leading-relaxed">
										{service.tagline}
									</p>
								</div>
								<div>
									<Link href={`/services/${service.slug}`} className="tf-btn-readmore style-3 text-red fw-6 fs-14">
										Learn More
										<i className="icon-chevron-right ms-1" />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-5">
					<Link href="/services" className="tf-btn secondary">
						Explore All 9 Services Overview
						<i className="icon-chevron-right ms-2" />
					</Link>
				</div>
			</div>
		</section>
	);
}
