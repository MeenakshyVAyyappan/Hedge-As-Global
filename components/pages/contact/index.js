'use client';
import Link from 'next/link';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { locationsData } from '@/data/locations';

const badgeColorMap = {
	"Headquarters": { bg: "#c8102e", text: "#fff" },
	"Branch Office": { bg: "#03214e", text: "#fff" },
	"GCC Office": { bg: "#1a7f5a", text: "#fff" },
	"International Office": { bg: "#6c4e8f", text: "#fff" },
};

export default function Contact() {
	const headOffice = locationsData.find((l) => l.isHeadOffice);
	const branches = locationsData.filter((l) => !l.isHeadOffice);

	return (
		<>
			{/* Quick Contact Stats Banner */}
			<section className="py-4 bg-dark text-white" style={{ borderBottom: "3px solid #c8102e" }}>
				<div className="tf-container">
					<div className="row text-center g-3">
						<div className="col-md-4 d-flex align-items-center justify-content-center gap-3">
							<i className="flaticon-phone-call text-red fs-30" />
							<div className="text-start">
								<span className="d-block text-white-70 fs-12 uppercase fw-6">Call Us Directly</span>
								<Link href="tel:+971502253373" className="text-white fw-7 fs-18 hover-text-red">+971 50 225 3373</Link>
							</div>
						</div>
						<div className="col-md-4 d-flex align-items-center justify-content-center gap-3">
							<i className="flaticon-open-mail text-red fs-30" />
							<div className="text-start">
								<span className="d-block text-white-70 fs-12 uppercase fw-6">Official Email</span>
								<Link href="mailto:info@hedgeasglobal.com" className="text-white fw-7 fs-16 hover-text-red">info@hedgeasglobal.com</Link>
							</div>
						</div>
						<div className="col-md-4 d-flex align-items-center justify-content-center gap-3">
							<i className="flaticon-clock text-red fs-30" />
							<div className="text-start">
								<span className="d-block text-white-70 fs-12 uppercase fw-6">Working Hours</span>
								<span className="text-white fw-7 fs-15">Mon – Sat | 09:00 AM – 06:00 PM</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Consultation Form + Head Office Section */}
			<section className="py-5 bg-light-slate">
				<div className="tf-container">
					<div className="row justify-content-center text-center mb-5">
						<div className="col-lg-7">
							<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 mb-3 rounded-pill fw-7">
								Get in Touch
							</span>
							<h2 className="font-main-2 text-dark fs-38 fw-8 mb-3">Schedule a Free Consultation</h2>
							<p className="text-muted fs-16 leading-relaxed">
								Reach out to our senior advisors for Corporate Tax, Audit, VAT, ICV, and Accounting services across the UAE, Bahrain & India.
							</p>
						</div>
					</div>

					<div className="row g-4 align-items-start">
						{/* Consultation Form */}
						<div className="col-lg-7">
							<div className="bg-white rounded-4 shadow-sm border overflow-hidden">
								<div className="px-5 py-4" style={{ background: "linear-gradient(135deg, #03214e 0%, #0a3a6e 100%)", borderBottom: "3px solid #c8102e" }}>
									<h3 className="text-white fs-22 fw-7 mb-1">Submit Your Enquiry</h3>
									<p className="text-white-70 fs-14 mb-0">Our team responds within 1 business hour during working hours.</p>
								</div>
								<div className="p-4">
									<ConsultationForm title="" />
								</div>
							</div>
						</div>

						{/* Head Office Info */}
						<div className="col-lg-5">
							{headOffice && (
								<div className="bg-white rounded-4 shadow-sm border overflow-hidden h-100">
									<div className="px-4 py-4 text-white" style={{ background: "linear-gradient(135deg, #c8102e 0%, #9e0c23 100%)" }}>
										<div className="d-flex align-items-center gap-3">
											<div className="rounded-circle d-flex align-items-center justify-content-center bg-white" style={{ width: "52px", height: "52px", flexShrink: 0 }}>
												<i className="flaticon-pin text-red fs-24" />
											</div>
											<div>
												<span className="d-block text-white fs-13 fw-6 opacity-80 uppercase">Headquarters</span>
												<h3 className="text-white fs-22 fw-8 mb-0">{headOffice.city} Head Office</h3>
											</div>
										</div>
									</div>

									<div className="p-4">
										<ul className="list-unstyled mb-4">
											<li className="d-flex gap-3 mb-4 pb-4 border-bottom">
												<div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "42px", height: "42px", background: "rgba(200,16,46,0.08)" }}>
													<i className="flaticon-pin text-red fs-18" />
												</div>
												<div>
													<span className="fw-7 text-dark d-block fs-14 mb-1">Office Address</span>
													<span className="text-muted fs-14 leading-relaxed">{headOffice.address}</span>
												</div>
											</li>
											<li className="d-flex gap-3 mb-4 pb-4 border-bottom">
												<div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "42px", height: "42px", background: "rgba(200,16,46,0.08)" }}>
													<i className="flaticon-phone-call text-red fs-18" />
												</div>
												<div>
													<span className="fw-7 text-dark d-block fs-14 mb-1">Telephone & Mobile</span>
													<Link href={`tel:${headOffice.phone.replace(/\s+/g, '')}`} className="text-muted fs-14 d-block hover-text-red">{headOffice.phone}</Link>
													<Link href={`tel:${headOffice.mobile.replace(/\s+/g, '')}`} className="text-muted fs-14 hover-text-red">{headOffice.mobile}</Link>
												</div>
											</li>
											<li className="d-flex gap-3 mb-4 pb-4 border-bottom">
												<div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "42px", height: "42px", background: "rgba(200,16,46,0.08)" }}>
													<i className="flaticon-open-mail text-red fs-18" />
												</div>
												<div>
													<span className="fw-7 text-dark d-block fs-14 mb-1">Official Email</span>
													<Link href={`mailto:${headOffice.email}`} className="text-muted fs-14 hover-text-red">{headOffice.email}</Link>
												</div>
											</li>
											<li className="d-flex gap-3">
												<div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "42px", height: "42px", background: "rgba(200,16,46,0.08)" }}>
													<i className="flaticon-clock text-red fs-18" />
												</div>
												<div>
													<span className="fw-7 text-dark d-block fs-14 mb-1">Operating Hours</span>
													<span className="text-muted fs-14">{headOffice.workingHours}</span>
												</div>
											</li>
										</ul>

										{/* WhatsApp CTA */}
										<a
											href="https://wa.me/971502253373?text=Hello%20Hedge%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
											target="_blank"
											rel="noopener noreferrer"
											className="d-flex align-items-center justify-content-center gap-2 py-3 px-4 rounded-3 fw-7 text-white w-100 text-decoration-none"
											style={{ background: "#25d366", fontSize: "15px", transition: "all 0.3s ease" }}
										>
											<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
											Chat on WhatsApp
										</a>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* Regional Offices Grid */}
			<section className="py-5 bg-white">
				<div className="tf-container">
					<div className="row justify-content-center text-center mb-5">
						<div className="col-lg-7">
							<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 mb-3 rounded-pill fw-7">
								Regional Presence
							</span>
							<h2 className="font-main-2 text-dark fs-36 fw-8 mb-3">Our Office Locations</h2>
							<p className="text-muted fs-16">
								Strategically located across the UAE, Bahrain, and India to serve your accounting, tax, and advisory needs.
							</p>
						</div>
					</div>

					<div className="row g-4">
						{branches.map((office) => {
							const badgeStyle = badgeColorMap[office.badge] || { bg: "#03214e", text: "#fff" };
							return (
								<div key={office.id} className="col-lg-3 col-md-6">
									<div
										className="h-100 bg-white rounded-4 border overflow-hidden hover-up transition-all"
										style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)", cursor: "default" }}
									>
										{/* Card Top Accent */}
										<div className="px-4 py-3 d-flex align-items-center gap-3" style={{ background: badgeStyle.bg }}>
											<div className="rounded-circle d-flex align-items-center justify-content-center bg-white flex-shrink-0" style={{ width: "40px", height: "40px" }}>
												<i className="flaticon-pin fs-18" style={{ color: badgeStyle.bg }} />
											</div>
											<div>
												<span className="d-block text-white fs-11 fw-6 opacity-80">{office.badge}</span>
												<h3 className="text-white fs-18 fw-8 mb-0">{office.city}</h3>
											</div>
										</div>

										{/* Card Body */}
										<div className="p-4">
											<ul className="list-unstyled mb-0">
												<li className="mb-3 d-flex gap-2 align-items-start">
													<i className="flaticon-pin text-red mt-1 fs-16 flex-shrink-0" />
													<span className="text-muted fs-13 leading-relaxed">{office.address}</span>
												</li>
												<li className="mb-2 d-flex gap-2 align-items-center">
													<i className="flaticon-phone-call text-red fs-16 flex-shrink-0" />
													<Link href={`tel:${office.phone.replace(/\s+/g, '')}`} className="text-dark hover-text-red fs-14 fw-6">
														{office.phone}
													</Link>
												</li>
												<li className="mb-2 d-flex gap-2 align-items-center">
													<i className="flaticon-open-mail text-red fs-16 flex-shrink-0" />
													<Link href={`mailto:${office.email}`} className="text-dark hover-text-red fs-13 fw-6 text-truncate">
														{office.email}
													</Link>
												</li>
												<li className="d-flex gap-2 align-items-center pt-2 border-top mt-3">
													<i className="flaticon-clock text-red fs-16 flex-shrink-0" />
													<span className="text-muted fs-13">{office.workingHours}</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Full-Width Map Embed */}
			<section className="position-relative" style={{ height: "420px", overflow: "hidden" }}>
				<div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 2, pointerEvents: "none", background: "linear-gradient(to right, rgba(3,33,78,0.15) 0%, transparent 40%, transparent 60%, rgba(3,33,78,0.15) 100%)" }}></div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.7395285050977!2d54.36326!3d24.47553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e66a0e3f3e3e3%3A0x1234567890abcdef!2sAl%20Ghaith%20Tower%2C%20Hamdan%20St%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000"
					width="100%"
					height="420"
					style={{ border: 0, filter: "grayscale(15%) contrast(1.05)" }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Hedge Chartered Accountants Group - Abu Dhabi Head Office"
				/>
			</section>
		</>
	);
}