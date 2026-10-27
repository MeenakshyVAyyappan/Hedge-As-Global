import Link from 'next/link';
import { locationsData } from '@/data/locations';

export default function Section11() {
	return (
		<section id="locations" className="s-regional-presence" style={{ backgroundColor: "#ffffff", paddingTop: "56px", paddingBottom: "56px", borderTop: "1px solid #f1f5f9" }}>
			<div className="tf-container">
				<div className="row justify-content-center text-center mb-36">
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
									<p className="office-address" style={{ whiteSpace: "pre-line", minHeight: "84px" }}>
										{office.addressLines ? office.addressLines.join('\n') : office.address}
									</p>
									<ul className="office-meta">
										<li className="d-flex align-items-start">
											<span className="fw-6 text-dark me-2 flex-shrink-0">Phone:</span>
											<div className="d-flex flex-column gap-1">
												{(office.phones || [office.phone]).map((num, i) => (
													<div key={i} className="d-flex align-items-center gap-1">
														<Link href={`tel:${num.replace(/\s+/g, '')}`}>
															{num}
														</Link>
														{num === office.whatsapp && (
															<a
																href={`https://wa.me/${num.replace(/\D/g, '')}?text=Hello%20Hedge%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
																target="_blank"
																rel="noopener noreferrer"
																className="ms-1 d-inline-flex align-items-center"
																title="Chat on WhatsApp"
															>
																<svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
																	<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
																</svg>
															</a>
														)}
													</div>
												))}
											</div>
										</li>
										<li className="d-flex align-items-start">
											<span className="fw-6 text-dark me-2 flex-shrink-0">Email:</span>
											<div className="d-flex flex-column gap-1">
												{(office.emails || [office.email]).map((em, i) => (
													<Link key={i} href={`mailto:${em}`}>
														{em}
													</Link>
												))}
											</div>
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


