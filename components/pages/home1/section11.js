import Link from 'next/link';
import { locationsData } from '@/data/locations';

export default function Section11() {
	return (
		<section className="s-regional-presence py-5">
			<div className="tf-container">
				<div className="row justify-content-center text-center mb-5">
					<div className="col-lg-8">
						<p className="s-sub-title text-red mb-2">
							<i className="icon-angles-right moveLeftToRight" />
							Global Footprint
						</p>
						<h2 className="s-title font-main-2 text-dark fs-36 fw-7">
							Regional Expertise. Local Support.
						</h2>
						<p className="text-muted fs-16 mt-2">
							Hedge operates dedicated practice offices across key commercial hubs in the UAE, Bahrain, and India to support your regional expansion.
						</p>
					</div>
				</div>

				<div className="row g-4">
					{locationsData.map((office) => (
						<div key={office.id} className="col-lg-4 col-md-6">
							<div className="location-card">
								<span className="location-badge">{office.badge}</span>
								<h3 className="fs-20 fw-7 text-dark mb-3">{office.title}</h3>
								<ul className="list-unstyled text-muted fs-14 mb-4">
									<li className="mb-2 d-flex gap-2">
										<i className="flaticon-pin text-red mt-1" />
										<span>{office.address}</span>
									</li>
									<li className="mb-2 d-flex gap-2">
										<i className="flaticon-phone-call text-red mt-1" />
										<Link href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-dark hover-text-red">
											{office.phone}
										</Link>
									</li>
									<li className="mb-2 d-flex gap-2">
										<i className="flaticon-open-mail text-red mt-1" />
										<Link href={`mailto:${office.email}`} className="text-dark hover-text-red">
											{office.email}
										</Link>
									</li>
									<li className="d-flex gap-2">
										<i className="flaticon-clock text-red mt-1" />
										<span>{office.workingHours}</span>
									</li>
								</ul>
								<Link href="/contact" className="tf-btn-readmore style-3 text-red fw-6 fs-14">
									Contact Office
									<i className="icon-chevron-right ms-1" />
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
