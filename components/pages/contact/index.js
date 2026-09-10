'use client';
import Link from 'next/link';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { locationsData } from '@/data/locations';
import SocialLinks from '@/components/elements/SocialLinks';

const badgeColorMap = {
	"Headquarters": { bg: "#c8102e", text: "#fff" },
	"Branch Office": { bg: "#03214e", text: "#fff" },
	"GCC Office": { bg: "#1a7f5a", text: "#fff" },
	"International Office": { bg: "#6c4e8f", text: "#fff" },
};

const badgeIconMap = {
	"Headquarters": (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<polyline points="9 22 9 12 15 12 15 22" />
		</svg>
	),
	"Branch Office": (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#03214e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect x="2" y="7" width="20" height="14" rx="2" />
			<path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
			<line x1="12" y1="12" x2="12" y2="16" />
			<line x1="8" y1="14" x2="16" y2="14" />
		</svg>
	),
	"GCC Office": (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a7f5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<circle cx="12" cy="12" r="10" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
		</svg>
	),
	"International Office": (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c4e8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
			<circle cx="12" cy="10" r="3" />
		</svg>
	),
};

export default function Contact() {
	const headOffice = locationsData.find((l) => l.isHeadOffice);
	const branches = locationsData.filter((l) => !l.isHeadOffice);

	return (
		<>
			{/* Quick Contact Stats Banner */}
			<section className="py-3 py-md-4 bg-dark text-white">
				<div className="tf-container">
					<div className="row g-3 justify-content-center">
						<div className="col-lg-4 col-md-4 col-12">
							<div className="d-flex align-items-center justify-content-start justify-content-md-center gap-3 p-2.5 p-md-0 rounded-3" style={{ background: "rgba(255,255,255,0.04)" }}>
								<div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "44px", height: "44px", background: "rgba(200,16,46,0.18)" }}>
									<i className="flaticon-phone-call text-red fs-22" />
								</div>
								<div className="text-start">
									<span className="d-block text-white-70 fs-11 uppercase fw-7" style={{ letterSpacing: "0.8px" }}>Call Us Directly</span>
									<Link href="tel:+971502253373" className="text-white fw-7 fs-16 hover-text-red">+971 50 225 3373</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-12">
							<div className="d-flex align-items-center justify-content-start justify-content-md-center gap-3 p-2.5 p-md-0 rounded-3" style={{ background: "rgba(255,255,255,0.04)" }}>
								<div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "44px", height: "44px", background: "rgba(200,16,46,0.18)" }}>
									<i className="flaticon-open-mail text-red fs-22" />
								</div>
								<div className="text-start">
									<span className="d-block text-white-70 fs-11 uppercase fw-7" style={{ letterSpacing: "0.8px" }}>Official Email</span>
									<Link href="mailto:info@hedgeasglobal.com" className="text-white fw-7 fs-15 hover-text-red">info@hedgeasglobal.com</Link>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-12">
							<div className="d-flex align-items-center justify-content-start justify-content-md-center gap-3 p-2.5 p-md-0 rounded-3" style={{ background: "rgba(255,255,255,0.04)" }}>
								<div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "44px", height: "44px", background: "rgba(200,16,46,0.18)" }}>
									<i className="flaticon-clock text-red fs-22" />
								</div>
								<div className="text-start">
									<span className="d-block text-white-70 fs-11 uppercase fw-7" style={{ letterSpacing: "0.8px" }}>Working Hours</span>
									<span className="text-white fw-7 fs-14">Mon – Sat | 09:00 AM – 06:00 PM</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Consultation Form + Head Office Section */}
			<section className="py-5 bg-light-slate">
				<div className="tf-container">
					<div className="row justify-content-center text-center mb-4 mb-md-5">
						<div className="col-lg-7">
							<span style={{ backgroundColor: '#C8102E', color: '#ffffff', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', padding: '6px 18px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '14px', letterSpacing: '1px', boxShadow: '0 4px 12px rgba(200,16,46,0.25)' }}>
								<i className="icon-angles-right moveLeftToRight" style={{ fontSize: '11px' }} /> Get in Touch
							</span>
							<h2 className="font-main-2 text-dark mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, lineHeight: 1.25 }}>Schedule a Free Consultation</h2>
							<p style={{ color: "#475569", fontSize: "15.5px", lineHeight: "1.75", fontWeight: 400, maxWidth: "540px", margin: "0 auto" }}>
								Reach out to our senior advisors for Corporate Tax, Audit, VAT, ICV, and Accounting services across the UAE, Bahrain &amp; India.
							</p>
						</div>
					</div>

					<div className="row g-4 align-items-start">
						{/* Consultation Form */}
						<div className="col-lg-7">
							<div className="rounded-4 overflow-hidden" style={{ boxShadow: "0 8px 32px rgba(3,33,78,0.13)", border: "1px solid #e2e8f0" }}>
								<div className="px-4 px-md-5 py-4" style={{ background: "linear-gradient(135deg, #03214e 0%, #0a3a6e 100%)" }}>
									<h3 style={{ color: "#ffffff", fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 800, marginBottom: "6px", letterSpacing: "-0.3px" }}>Submit Your Enquiry</h3>
									<p style={{ color: "rgba(255,255,255,0.70)", fontSize: "13.5px", margin: 0, lineHeight: "1.5" }}>Our team responds within 1 business hour during working hours.</p>
								</div>
								<div className="px-3.5 px-sm-4 px-md-5 py-4" style={{ background: "linear-gradient(180deg, #04286b 0%, #03214e 100%)" }}>
									<ConsultationForm title="" />
								</div>
							</div>
						</div>

						{/* Head Office Info */}
						<div className="col-lg-5">
							{headOffice && (
								<div className="bg-white rounded-4 overflow-hidden h-100" style={{ boxShadow: "0 8px 32px rgba(200,16,46,0.10)", border: "1px solid #f3e0e4" }}>

							{/* Card Header */}
							<div className="d-flex align-items-center gap-3 gap-sm-4 px-4 px-md-5 py-4" style={{ background: "linear-gradient(135deg, #c8102e 0%, #9e0c23 100%)" }}>
								{/* HQ Icon Circle */}
								<div
									className="d-flex align-items-center justify-content-center rounded-circle bg-white flex-shrink-0"
									style={{ width: "50px", height: "50px", boxShadow: "0 3px 12px rgba(0,0,0,0.22)" }}
								>
									<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
										<polyline points="9 22 9 12 15 12 15 22" />
									</svg>
								</div>
								<div>
									<span style={{ display: "block", color: "rgba(255,255,255,0.78)", fontSize: "10.5px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "3px" }}>
										Headquarters
									</span>
									<h3 style={{ color: "#fff", fontSize: "clamp(18px, 2.2vw, 20px)", fontWeight: 800, margin: 0, letterSpacing: "-0.3px" }}>
										{headOffice.city} Head Office
									</h3>
								</div>
							</div>

							{/* Info Rows */}
							<div className="px-4 px-md-5 pt-4 pb-2">

								{/* Office Address */}
								<div className="d-flex align-items-start gap-3 pb-4" style={{ borderBottom: "1px solid #f5e7ea" }}>
									<div
										className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
										style={{ width: "38px", height: "38px", background: "rgba(200,16,46,0.08)", marginTop: "2px" }}
									>
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
											<circle cx="12" cy="10" r="3" />
										</svg>
									</div>
									<div style={{ paddingTop: "2px" }}>
										<span style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#c8102e", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Office Address</span>
										<span style={{ fontSize: "13.5px", color: "#374151", lineHeight: "1.65", fontWeight: 400 }}>{headOffice.address}</span>
									</div>
								</div>

								{/* Phone */}
								<div className="d-flex align-items-start gap-3 py-4" style={{ borderBottom: "1px solid #f5e7ea" }}>
									<div
										className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
										style={{ width: "38px", height: "38px", background: "rgba(200,16,46,0.08)", marginTop: "2px" }}
									>
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
									</div>
									<div style={{ paddingTop: "2px" }}>
										<span style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#c8102e", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Telephone &amp; Mobile</span>
										<Link href={`tel:${headOffice.phone.replace(/\s+/g, '')}`} className="d-block hover-text-red" style={{ fontSize: "13.5px", color: "#374151", fontWeight: 500, textDecoration: "none", marginBottom: "2px" }}>{headOffice.phone}</Link>
										<Link href={`tel:${headOffice.mobile.replace(/\s+/g, '')}`} className="hover-text-red" style={{ fontSize: "13.5px", color: "#374151", fontWeight: 500, textDecoration: "none" }}>{headOffice.mobile}</Link>
									</div>
								</div>

								{/* Email */}
								<div className="d-flex align-items-start gap-3 py-4" style={{ borderBottom: "1px solid #f5e7ea" }}>
									<div
										className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
										style={{ width: "38px", height: "38px", background: "rgba(200,16,46,0.08)", marginTop: "2px" }}
									>
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
											<polyline points="22,6 12,13 2,6" />
										</svg>
									</div>
									<div style={{ paddingTop: "2px" }}>
										<span style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#c8102e", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Official Email</span>
										<Link href={`mailto:${headOffice.email}`} className="hover-text-red text-break" style={{ fontSize: "13.5px", color: "#374151", fontWeight: 500, textDecoration: "none" }}>{headOffice.email}</Link>
									</div>
								</div>

								{/* Hours */}
								<div className="d-flex align-items-start gap-3 pt-4 pb-4">
									<div
										className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
										style={{ width: "38px", height: "38px", background: "rgba(200,16,46,0.08)", marginTop: "2px" }}
									>
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8102e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
											<circle cx="12" cy="12" r="10" />
											<polyline points="12 6 12 12 16 14" />
										</svg>
									</div>
									<div style={{ paddingTop: "2px" }}>
										<span style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#c8102e", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Operating Hours</span>
										<span style={{ fontSize: "13.5px", color: "#374151", fontWeight: 500 }}>{headOffice.workingHours}</span>
									</div>
								</div>
							</div>

							{/* Social Media Links & WhatsApp CTA */}
							<div className="px-4 px-md-5 pb-4 pb-md-5">
								<div className="mb-4 pt-3 border-top border-secondary border-opacity-10">
									<span style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#c8102e", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>Follow Hedge Group</span>
									<SocialLinks itemStyle={{ backgroundColor: "#f1f5f9", color: "#03214e" }} />
								</div>
								<a
									href="https://wa.me/971502253373?text=Hello%20Hedge%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
									target="_blank"
									rel="noopener noreferrer"
									className="d-flex align-items-center justify-content-center gap-2 text-white text-decoration-none"
									style={{ background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)", padding: "14px 24px", borderRadius: "12px", fontSize: "15px", fontWeight: 700, boxShadow: "0 4px 16px rgba(37,211,102,0.30)", transition: "all 0.3s ease", letterSpacing: "0.2px" }}
								>
									<svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
					<div className="row justify-content-center text-center mb-4 mb-md-5">
						<div className="col-lg-7">
							<span style={{ backgroundColor: '#C8102E', color: '#ffffff', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', padding: '6px 18px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '14px', letterSpacing: '1px', boxShadow: '0 4px 12px rgba(200,16,46,0.25)' }}>
								<i className="icon-angles-right moveLeftToRight" style={{ fontSize: '11px' }} /> Regional Presence
							</span>
							<h2 className="font-main-2 text-dark mb-3" style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800 }}>Our Office Locations</h2>
							<p className="text-muted fs-16" style={{ maxWidth: "560px", margin: "0 auto" }}>
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
										<div
											className="px-4 py-3 d-flex align-items-center gap-3"
											style={{ background: `linear-gradient(135deg, ${badgeStyle.bg} 0%, ${badgeStyle.bg}dd 100%)` }}
										>
											<div
												className="rounded-circle d-flex align-items-center justify-content-center bg-white flex-shrink-0"
												style={{ width: "42px", height: "42px", boxShadow: "0 2px 10px rgba(0,0,0,0.18)" }}
											>
												{badgeIconMap[office.badge] || (
													<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={badgeStyle.bg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
														<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
														<circle cx="12" cy="10" r="3" />
													</svg>
												)}
											</div>
											<div>
												<span
													className="d-block text-white fw-6"
													style={{ fontSize: "10px", letterSpacing: "1.2px", textTransform: "uppercase", opacity: 0.85 }}
												>
													{office.badge}
												</span>
												<h3 className="text-white fw-8 mb-0" style={{ fontSize: "17px", letterSpacing: "-0.2px" }}>
													{office.city}
												</h3>
											</div>
										</div>

										{/* Card Body */}
										<div className="p-4">
											<ul className="list-unstyled mb-0">
												{/* Address */}
												<li className="mb-3 d-flex gap-3 align-items-start">
													<div
														className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 mt-1"
														style={{ width: "32px", height: "32px", background: `${badgeStyle.bg}14` }}
													>
														<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={badgeStyle.bg} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
															<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
															<circle cx="12" cy="10" r="3" />
														</svg>
													</div>
													<div style={{ paddingTop: "2px" }}>
														<span style={{ fontSize: "13px", color: "#4a5568", lineHeight: "1.6", fontWeight: 400, display: "block" }}>
															{office.address}
														</span>
													</div>
												</li>
												{/* Phone */}
												<li className="mb-3 d-flex gap-3 align-items-center">
													<div
														className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
														style={{ width: "32px", height: "32px", background: `${badgeStyle.bg}14` }}
													>
														<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={badgeStyle.bg} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
															<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
														</svg>
													</div>
													<Link
														href={`tel:${office.phone.replace(/\s+/g, '')}`}
														className="hover-text-red"
														style={{ fontSize: "13.5px", color: "#1a202c", fontWeight: 600, textDecoration: "none" }}
													>
														{office.phone}
													</Link>
												</li>
												{/* Email */}
												<li className="mb-3 d-flex gap-3 align-items-center">
													<div
														className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
														style={{ width: "32px", height: "32px", background: `${badgeStyle.bg}14` }}
													>
														<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={badgeStyle.bg} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
															<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
															<polyline points="22,6 12,13 2,6" />
														</svg>
													</div>
													<Link
														href={`mailto:${office.email}`}
														className="hover-text-red text-break"
														style={{ fontSize: "13px", color: "#1a202c", fontWeight: 600, textDecoration: "none" }}
													>
														{office.email}
													</Link>
												</li>
												{/* Working Hours */}
												<li
													className="d-flex gap-3 align-items-center mt-3 pt-3"
													style={{ borderTop: "1px solid #f0f0f0" }}
												>
													<div
														className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
														style={{ width: "32px", height: "32px", background: `${badgeStyle.bg}14` }}
													>
														<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={badgeStyle.bg} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
															<circle cx="12" cy="12" r="10" />
															<polyline points="12 6 12 12 16 14" />
														</svg>
													</div>
													<span style={{ fontSize: "12.5px", color: "#64748b", fontWeight: 500 }}>
														{office.workingHours}
													</span>
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
			<section className="w-100 p-0 m-0 overflow-hidden position-relative" style={{ height: "360px" }}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.983944633758!2d54.35367087611082!3d24.490484994246816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665bc5061581%3A0x327a7adec8318adc!2sHedge%20Accounting%20Solution%20%7C%20Accounting%20%26%20Audit%20firm%20in%20Abu%20Dhabi%2C%20UAE!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
					width="100%"
					height="100%"
					style={{ border: 0, display: "block", width: "100%", height: "100%", minHeight: "360px" }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Hedge Accounting Solution - Abu Dhabi Head Office"
				/>
			</section>
		</>
	);
}