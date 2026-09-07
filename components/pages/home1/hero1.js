'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Hero1() {
	const [formData, setFormData] = useState({
		fullName: '',
		phone: '',
		email: '',
		service: 'Accounting & Bookkeeping',
		message: '',
		websiteHp: ''
	});

	const [status, setStatus] = useState({
		loading: false,
		submitted: false,
		error: null
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formData.websiteHp) return;

		if (!formData.fullName || !formData.phone || !formData.email) {
			setStatus({ loading: false, submitted: false, error: 'Please complete all required fields.' });
			return;
		}

		setStatus({ loading: true, submitted: false, error: null });

		setTimeout(() => {
			setStatus({ loading: false, submitted: true, error: null });
			setFormData({
				fullName: '',
				phone: '',
				email: '',
				service: 'Accounting & Bookkeeping',
				message: '',
				websiteHp: ''
			});
		}, 1000);
	};

	return (
		<div className="page-title-home-1 hero-compact py-5 py-md-5 py-lg-5">
			<div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1600px' }}>
				<div className="row align-items-center g-4">

					{/* Left Side Copy */}
					<div className="col-12 col-lg-6 mb-5 mb-lg-0">
						<div className="hero-left-content pe-lg-4 wow fadeInLeft" data-wow-delay="0.1s">
							<div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-10 border border-white border-opacity-20 text-white fs-12 fw-7 uppercase tracking-wider mb-3">
								<i className="icon-angles-right text-red" />
								<span>ACCOUNTING • AUDIT • TAX • ADVISORY</span>
							</div>

							<h1 className="s-title text-white mb-3 text-fs-52 font-main-2 fw-7 leading-tight">
								Financial Clarity for <br />
								<span className="text-red">Confident</span> Business Decisions.
							</h1>

							<p className="text font-main-2 fw-5 mb-4 text-white-70 fs-16 leading-relaxed" style={{ maxWidth: '520px' }}>
								Professional accounting, audit, tax and compliance solutions for businesses across the UAE, Bahrain and India.
							</p>

							<div className="d-flex align-items-center gap-3">
								<Link href="/services" className="tf-btn py-3 px-4 fs-15">
									Explore Our Services
									<i className="icon-chevron-right ms-2" />
								</Link>
							</div>
						</div>
					</div>

					{/* Right Side Quick Contact Form */}
					<div className="col-12 col-lg-6">
						<div className="hero-form-card glass-card p-4 p-md-5 rounded-4 border border-white border-opacity-20 shadow-2xl wow fadeInRight" data-wow-delay="0.2s">
							<div className="mb-3">
								<h2 className="text-white font-main-2 fs-24 fw-7 mb-1">
									Talk to Our Experts
								</h2>
								<p className="text-white-70 fs-13 mb-0">
									Tell us what your business needs and our team will get in touch.
								</p>
							</div>

							{status.submitted ? (
								<div className="alert alert-success bg-white text-dark p-4 rounded-3 shadow-sm my-3">
									<h4 className="text-success mb-2 fs-16 fw-7">
										<i className="icon-check-circle me-2" /> Inquiry Submitted!
									</h4>
									<p className="mb-0 fs-13 text-muted">
										Thank you. A senior Hedge advisor will contact you shortly.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="hero-quick-form mt-3">
									<input
										type="text"
										name="websiteHp"
										value={formData.websiteHp}
										onChange={handleChange}
										style={{ display: 'none' }}
										tabIndex={-1}
										autoComplete="off"
									/>

									{status.error && (
										<div className="alert alert-danger mb-3 py-2 px-3 fs-13">
											{status.error}
										</div>
									)}

									<div className="row g-3">
										<div className="col-12 col-md-6">
											<input
												type="text"
												name="fullName"
												required
												value={formData.fullName}
												onChange={handleChange}
												placeholder="Full Name *"
												className="form-control hero-input"
											/>
										</div>

										<div className="col-12 col-md-6">
											<input
												type="tel"
												name="phone"
												required
												value={formData.phone}
												onChange={handleChange}
												placeholder="Phone Number *"
												className="form-control hero-input"
											/>
										</div>

										<div className="col-12 col-md-6">
											<input
												type="email"
												name="email"
												required
												value={formData.email}
												onChange={handleChange}
												placeholder="Email *"
												className="form-control hero-input"
											/>
										</div>

										<div className="col-12 col-md-6">
											<select
												name="service"
												value={formData.service}
												onChange={handleChange}
												className="form-select hero-input"
											>
												<option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
												<option value="Audit & Assurance">Audit & Assurance (Pioneer Hedge)</option>
												<option value="Corporate Tax">UAE Corporate Tax</option>
												<option value="VAT UAE">VAT UAE</option>
												<option value="VAT Bahrain">VAT Bahrain</option>
												<option value="ICV Certification">ICV Certification</option>
												<option value="E-Invoicing">UAE E-Invoicing</option>
												<option value="Business Advisory">Business Advisory</option>
											</select>
										</div>

										<div className="col-12">
											<textarea
												name="message"
												rows={2}
												value={formData.message}
												onChange={handleChange}
												placeholder="Brief message / business requirement..."
												className="form-control hero-input"
											></textarea>
										</div>

										<div className="col-12 mt-2">
											<button
												type="submit"
												disabled={status.loading}
												className="tf-btn w-100 justify-content-center py-3 fs-15 font-main-2 fw-7"
											>
												{status.loading ? 'Submitting...' : 'Request Consultation'}
												{!status.loading && <i className="icon-chevron-right ms-2" />}
											</button>
										</div>
									</div>
								</form>
							)}
						</div>
					</div>

				</div>
			</div>

			{/* Brand Marquee Strip */}
			<div className="tf-marquee slider-saylo bg-dark py-3 mt-4 border-top border-bottom border-secondary border-opacity-25 overflow-hidden w-100">
				<div className="wrap-marquee">
					{[...Array(8)].map((_, i) => (
						<div key={i} className="marquee-item px-4">
							<p className="font-main-2 text-white fs-15 fw-6 tracking-wide mb-0">
								<span className="text-red me-2">★</span> HEDGE CHARTERED ACCOUNTANTS GROUP
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
