'use client';
import Link from 'next/link';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { locationsData } from '@/data/locations';

export default function Contact() {
	return (
		<>
			{/* Contact Hero Banner */}
			<section className="py-5 bg-dark text-white">
				<div className="tf-container">
					<div className="row align-items-center">
						<div className="col-lg-8">
							<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 mb-3 rounded-pill fw-7">
								Contact Offices
							</span>
							<h1 className="text-white font-main-2 fs-40 fw-7 mb-3">
								Get in Touch With Hedge Practice Advisors
							</h1>
							<p className="text-white-70 fs-16 leading-relaxed mb-0">
								Whether you require UAE Corporate Tax registration, statutory audit representation, VAT advisory, or accounting system support, our teams across Abu Dhabi, Dubai, Al Ain, Bahrain, and India are ready to assist.
							</p>
						</div>
						<div className="col-lg-4 text-center mt-4 mt-lg-0">
							<div className="p-4 bg-secondary bg-opacity-25 rounded-4 border border-secondary border-opacity-50 text-white">
								<i className="flaticon-phone-call text-red fs-45 mb-2 d-inline-block" />
								<span className="d-block text-white-70 fs-13">Direct Phone Helpline</span>
								<Link href="tel:+971502253373" className="text-white fw-7 fs-20 d-block mb-2">+971 50 225 3373</Link>
								<span className="badge bg-red text-white fs-11">MON – SAT | 09:00 AM – 06:00 PM</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Form & Head Office Section */}
			<section className="py-5 bg-light-slate">
				<div className="tf-container">
					<div className="row g-4">
						<div className="col-lg-7">
							<ConsultationForm title="Schedule a Professional Consultation" />
						</div>

						<div className="col-lg-5">
							<div className="bg-white p-4 rounded-4 border shadow-sm h-100">
								<span className="badge bg-red text-white fs-11 uppercase px-2 py-1 rounded mb-3 fw-7">
									Headquarters
								</span>
								<h2 className="fs-24 fw-7 text-dark mb-3">Abu Dhabi Head Office</h2>
								<p className="text-muted fs-14 mb-4 leading-relaxed">
									Hedge Chartered Accountants Group maintains its principal practice in Abu Dhabi, serving government entities, corporate groups, and commercial organizations.
								</p>

								<ul className="list-unstyled text-muted fs-14 mb-4">
									<li className="mb-3 d-flex gap-3">
										<i className="flaticon-pin text-red fs-20 mt-1" />
										<div>
											<strong className="text-dark d-block mb-1">Office Address:</strong>
											<span>Office 702, Al Ghaith Tower, Hamdan Bin Mohammed Street, P.O. Box 41477, Abu Dhabi, UAE</span>
										</div>
									</li>
									<li className="mb-3 d-flex gap-3">
										<i className="flaticon-phone-call text-red fs-20 mt-1" />
										<div>
											<strong className="text-dark d-block mb-1">Telephone & Mobile:</strong>
											<span>+971 2 626 5500 / +971 50 225 3373</span>
										</div>
									</li>
									<li className="mb-3 d-flex gap-3">
										<i className="flaticon-open-mail text-red fs-20 mt-1" />
										<div>
											<strong className="text-dark d-block mb-1">Official Email:</strong>
											<Link href="mailto:info@hedgeasglobal.com" className="text-dark hover-text-red">info@hedgeasglobal.com</Link>
										</div>
									</li>
									<li className="d-flex gap-3">
										<i className="flaticon-clock text-red fs-20 mt-1" />
										<div>
											<strong className="text-dark d-block mb-1">Operating Hours:</strong>
											<span>Monday – Saturday | 09:00 AM – 06:00 PM</span>
										</div>
									</li>
								</ul>

								<div className="p-3 bg-light-slate rounded-3 border text-center">
									<span className="fs-13 text-muted d-block mb-2">Prefer instant messaging?</span>
									<a
										href="https://wa.me/971502253373?text=Hello%20Hedge%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
										target="_blank"
										rel="noopener noreferrer"
										className="tf-btn secondary small w-100 justify-content-center"
									>
										Chat on WhatsApp (+971 50 225 3373)
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Regional Locations Grid */}
			<section className="py-5 bg-white">
				<div className="tf-container">
					<div className="row text-center mb-5">
						<div className="col-12">
							<h2 className="font-main-2 text-dark fs-32 fw-7">All Office Locations</h2>
							<p className="text-muted fs-15">Visit or contact any of our regional offices in the UAE, Bahrain, and India.</p>
						</div>
					</div>

					<div className="row g-4">
						{locationsData.map((office) => (
							<div key={office.id} className="col-lg-4 col-md-6">
								<div className="location-card bg-light-slate p-4 rounded-3 border h-100">
									<span className="location-badge mb-2">{office.badge}</span>
									<h3 className="fs-20 fw-7 text-dark mb-3">{office.title}</h3>
									<ul className="list-unstyled text-muted fs-14 mb-0">
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
										<li className="d-flex gap-2">
											<i className="flaticon-open-mail text-red mt-1" />
											<Link href={`mailto:${office.email}`} className="text-dark hover-text-red">
												{office.email}
											</Link>
										</li>
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}