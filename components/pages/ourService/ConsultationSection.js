'use client'
import Link from 'next/link'
import ConsultationForm from '@/components/forms/ConsultationForm'

export default function ConsultationSection() {
	return (
		<section className="s-conversion-cta py-5 bg-dark text-white">
			<div className="tf-container">
				<div className="row align-items-center">
					<div className="col-lg-5 mb-4 mb-lg-0">
						<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 mb-3 rounded-pill fw-7">
							Get Expert Guidance
						</span>
						<h2 className="text-white font-main-2 fs-36 fw-7 mb-3">
							Need Clarity on Your Accounting, Audit or Tax Requirements?
						</h2>
						<p className="text-white-70 fs-16 leading-relaxed mb-4">
							Talk to Hedge&apos;s senior chartered accountants and tax experts to understand the right next step for your enterprise across the UAE, GCC, and India.
						</p>

						<div className="d-flex flex-column gap-3">
							<div className="d-flex align-items-center gap-3">
								<div className="icon bg-red text-white p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
									<i className="flaticon-phone-call fs-20" />
								</div>
								<div>
									<span className="text-white-70 fs-13 d-block">Direct Phone Helpline</span>
									<Link href="tel:+971502253373" className="text-white fw-7 fs-18">+971 50 225 3373</Link>
								</div>
							</div>

							<div className="d-flex align-items-center gap-3">
								<div className="icon bg-red text-white p-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
									<i className="flaticon-open-mail fs-20" />
								</div>
								<div>
									<span className="text-white-70 fs-13 d-block">Official Business Email</span>
									<Link href="mailto:info@hedgeasglobal.com" className="text-white fw-7 fs-16">info@hedgeasglobal.com</Link>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-7">
						<ConsultationForm title="Request Free Consultation" />
					</div>
				</div>
			</div>
		</section>
	)
}
