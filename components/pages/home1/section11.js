import Link from 'next/link';
import { locationsData } from '@/data/locations';

export default function Section11() {
	return (
		<section id="locations" className="s-regional-presence">
			<div className="tf-container">
				<div className="row justify-content-center text-center mb-50">
					<div className="col-lg-8">
						<p className="s-sub-title text-red mb-18 justify-center">
							<i className="icon-angles-right moveLeftToRight" />
							REGIONAL FOOTPRINT
						</p>
						<h2 className="s-title font-main-2 text-dark fs-38 fw-7 mb-3">
							Regional Expertise. Local Support.
						</h2>
						<p className="text-muted fs-16 max-w-650 mx-auto">
							Hedge operates dedicated practice offices across key commercial hubs in the UAE, Bahrain, and India to support your regional expansion, audit, and tax compliance needs.
						</p>
					</div>
				</div>

				<div className="row g-4 justify-content-center">
					{locationsData.map((office) => (
						<div key={office.id} className="col-lg-4 col-md-6">
							<div className="corp-office-card">
								<div>
									<div className="office-city">{office.city}</div>
									<span className="office-type">{office.badge}</span>
									<p className="office-address">{office.address}</p>
									<ul className="office-meta">
										<li>
											<span className="fw-6 text-dark me-1">Tel:</span>
											<Link href={`tel:${office.phone.replace(/\s+/g, '')}`}>
												{office.phone}
											</Link>
										</li>
										<li>
											<span className="fw-6 text-dark me-1">Email:</span>
											<Link href={`mailto:${office.email}`}>
												{office.email}
											</Link>
										</li>
										<li>
											<span className="fw-6 text-dark me-1">Hours:</span>
											<span>{office.workingHours}</span>
										</li>
									</ul>
								</div>

								<Link href="/contact" className="office-link">
									<span>Contact Office</span>
									<i className="icon-arrow-right2 ms-1" />
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


