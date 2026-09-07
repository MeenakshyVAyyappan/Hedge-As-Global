'use client';
import Image from 'next/image';
import Link from 'next/link';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { locationsData } from '@/data/locations';

export default function AboutUs() {
	return (
		<>
			{/* Hero / Overview Banner */}
			<section className="py-5 bg-dark text-white">
				<div className="tf-container">
					<div className="row align-items-center">
						<div className="col-lg-7">
							<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 mb-3 rounded-pill fw-7">
								About Hedge Group
							</span>
							<h1 className="text-white font-main-2 fs-42 fw-7 mb-3">
								Financial Expertise Built on Accuracy, Transparency & Trust
							</h1>
							<p className="text-white-70 fs-16 leading-relaxed mb-4">
								Hedge Chartered Accountants Group is a premier corporate accounting, auditing, taxation, and financial advisory firm operating across Abu Dhabi, Dubai, Al Ain, Bahrain, and India.
							</p>
						</div>
						<div className="col-lg-5 text-center">
							<div className="bg-white p-4 rounded-4 shadow-lg d-inline-block">
								<Image
									width="240"
									height="75"
									style={{ objectFit: 'contain', height: '70px', width: 'auto' }}
									src="/images/logo/hedgelogo.png"
									alt="Hedge Chartered Accountants Group Logo"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Company Story & Mission/Vision */}
			<section className="py-5 bg-light-slate">
				<div className="tf-container">
					<div className="row align-items-center mb-5">
						<div className="col-lg-6 mb-4 mb-lg-0">
							<h2 className="font-main-2 text-dark fs-32 fw-7 mb-3">
								Empowering Enterprise Growth Through Precise Governance
							</h2>
							<p className="text-muted fs-15 leading-relaxed mb-3">
								Founded to serve corporate entities, commercial groups, and high-growth SMEs, Hedge Chartered Accountants Group combines regional regulatory experience with international audit rigor. We provide boardrooms and executive management with clear financial insights required to navigate evolving tax landscapes.
							</p>
							<p className="text-muted fs-15 leading-relaxed">
								From UAE Corporate Tax registration and statutory audit compliance to cloud accounting software integration, our dedicated teams adhere strictly to International Financial Reporting Standards (IFRS).
							</p>
						</div>

						<div className="col-lg-6">
							<div className="row g-3">
								<div className="col-md-6">
									<div className="p-4 bg-white rounded-3 border shadow-sm h-100">
										<i className="flaticon-target text-red fs-40 mb-3 d-inline-block" />
										<h3 className="fs-18 fw-7 text-dark mb-2">Our Mission</h3>
										<p className="fs-14 text-muted mb-0">
											To deliver audit-grade financial clarity, uncompromising tax compliance, and long-term strategic advisory that protects enterprise capital.
										</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="p-4 bg-white rounded-3 border shadow-sm h-100">
										<i className="flaticon-rocket text-red fs-40 mb-3 d-inline-block" />
										<h3 className="fs-18 fw-7 text-dark mb-2">Our Vision</h3>
										<p className="fs-14 text-muted mb-0">
											To be the most trusted chartered accounting and tax advisory group in the GCC, recognized for authority, innovation, and client success.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pioneer Hedge Division Highlight */}
			<section className="py-5 bg-dark text-white">
				<div className="tf-container">
					<div className="pioneer-hedge-box">
						<div className="row align-items-center">
							<div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
								<div className="bg-white p-3 rounded-3 d-inline-block shadow-lg">
									<Image
										width="220"
										height="90"
										style={{ objectFit: 'contain', height: '80px', width: 'auto' }}
										src="/images/logo/hedgesecondlogo.png"
										alt="Pioneer Hedge Auditing & Tax Consulting Logo"
									/>
								</div>
							</div>
							<div className="col-lg-8">
								<span className="fta-badge">
									<i className="flaticon-award me-1" /> FTA-Approved Tax Agency
								</span>
								<h2 className="text-white font-main-2 fs-30 fw-7 mb-3">
									Pioneer Hedge Auditing & Tax Consulting
								</h2>
								<p className="text-white-80 fs-15 leading-relaxed mb-4">
									Pioneer Hedge operates as the registered auditing and tax consulting division of Hedge Chartered Accountants Group. Licensed by the Federal Tax Authority (FTA), Pioneer Hedge performs statutory audits, internal financial reviews, and official representation before UAE tax authorities.
								</p>
								<Link href="/services/audit-assurance" className="tf-btn style-10">
									Explore Audit & Tax Services
									<i className="icon-chevron-right ms-2" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Regional Presence */}
			<section className="py-5 bg-light-slate">
				<div className="tf-container">
					<div className="row text-center mb-4">
						<div className="col-12">
							<h2 className="font-main-2 text-dark fs-32 fw-7">Our Regional Footprint</h2>
							<p className="text-muted fs-15">Serving clients locally through practice offices in the UAE, Bahrain, and India.</p>
						</div>
					</div>

					<div className="row g-4">
						{locationsData.map((office) => (
							<div key={office.id} className="col-lg-4 col-md-6">
								<div className="location-card bg-white p-4 rounded-3 border shadow-sm h-100">
									<span className="location-badge mb-2">{office.badge}</span>
									<h3 className="fs-18 fw-7 text-dark mb-2">{office.title}</h3>
									<p className="fs-13 text-muted mb-2">{office.address}</p>
									<p className="fs-13 text-dark fw-6 mb-0">Phone: {office.phone}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Consultation Form CTA */}
			<section className="py-5 bg-dark text-white">
				<div className="tf-container">
					<div className="row align-items-center">
						<div className="col-lg-5 mb-4 mb-lg-0">
							<h2 className="text-white font-main-2 fs-32 fw-7 mb-3">Partner With Hedge Advisory</h2>
							<p className="text-white-70 fs-15 leading-relaxed">
								Contact our senior partner team for an initial assessment of your company's accounting, tax, or audit requirements.
							</p>
						</div>
						<div className="col-lg-7">
							<ConsultationForm title="Schedule Executive Meeting" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}