'use client';
import { useState } from 'react';
import Link from 'next/link';
import PhoneInput from '@/components/elements/PhoneInput';

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formData.websiteHp) return;

		if (!formData.fullName || !formData.phone || !formData.email) {
			setStatus({ loading: false, submitted: false, error: 'Please complete all required fields.' });
			return;
		}

		setStatus({ loading: true, submitted: false, error: null });

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (data.success) {
				setStatus({ loading: false, submitted: true, error: null });
				setFormData({
					fullName: '',
					phone: '',
					email: '',
					service: 'Accounting & Bookkeeping',
					message: '',
					websiteHp: ''
				});
			} else {
				setStatus({ loading: false, submitted: false, error: data.error || 'Failed to submit form.' });
			}
		} catch (err) {
			setStatus({ loading: false, submitted: false, error: 'Network error. Please try again.' });
		}
	};

	return (
		<div className="page-title-home-1 hero-compact" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
			<div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1600px' }}>
				<div className="row align-items-center g-4">

					{/* Left Side Copy */}
					<div className="col-12 col-lg-6 mb-5 mb-lg-0">
						<div className="hero-left-content pe-lg-4 wow fadeInLeft" data-wow-delay="0.1s">
							<div className="d-flex flex-column flex-xl-row align-items-xl-start justify-content-between gap-3 mb-3">
								<div className="flex-grow-1" style={{ maxWidth: '430px' }}>
									<div className="d-inline-flex align-items-center gap-2 rounded-pill bg-white bg-opacity-10 border border-white border-opacity-20 text-white fs-12 fw-7 uppercase tracking-wider mb-3" style={{ padding: '8px 20px' }}>
										<i className="icon-angles-right moveLeftToRight text-red" />
										<span>ACCOUNTING • AUDIT • TAX • ADVISORY</span>
									</div>

									<h1 className="s-title text-white mb-0 font-main-2 fw-7 leading-tight" style={{ fontSize: 'clamp(28px, 3.6vw, 42px)' }}>
										Financial Clarity for <br />
										Confident <span className="fw-7">Business</span> <br />
										Decisions.
									</h1>
								</div>

								{/* Transparent Glass Badge - Right Side of Headline */}
								<div
									className="google-reviews-badge glass-card p-3 text-center d-inline-flex flex-column align-items-center transition-all hover-lift flex-shrink-0 mt-3 mt-xl-0"
									style={{
										borderRadius: '18px',
										background: 'rgba(255, 255, 255, 0.08)',
										backdropFilter: 'blur(16px)',
										WebkitBackdropFilter: 'blur(16px)',
										border: '1px solid rgba(255, 255, 255, 0.22)',
										boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)',
										minWidth: '180px',
										padding: '12px 16px'
									}}
								>
									<div className="d-flex align-items-center justify-content-center gap-2 mb-1">
										<svg width="22" height="22" viewBox="0 0 24 24">
											<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
											<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
											<path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
											<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
										</svg>
										<div className="text-start" style={{ lineHeight: '1.1' }}>
											<span className="d-block fw-7 text-white fs-12">Google Verified</span>
											<span className="d-block fw-7 text-white fs-10">Reviews & Rating</span>
										</div>
									</div>

									<div className="d-flex align-items-center justify-content-center gap-1 my-1">
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none">
											<circle cx="12" cy="12" r="10" fill="#22c55e"/>
											<path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
										<div style={{ color: '#FFD700', fontSize: '15px', letterSpacing: '1px', lineHeight: '1' }}>
											★★★★★
										</div>
									</div>

									<div className="fw-8 my-1 text-white" style={{ fontSize: '30px', lineHeight: '1', fontFamily: 'sans-serif', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
										4.9
									</div>

									<div className="fw-7 fs-12 mb-1" style={{ color: '#ff6b6b' }}>
										500+ Corporate Clients
									</div>

									<div className="text-white fs-10 fw-5">
										Trusted CA Firm in UAE
									</div>
								</div>
							</div>

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
											<PhoneInput
												name="phone"
												id="hero-phone"
												required
												value={formData.phone}
												onChange={handleChange}
												placeholder="Phone Number *"
												theme="hero"
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

			{/* Mobile responsive styling matching exact screenshot layout */}
			<style jsx>{`
				@media (max-width: 768px) {
					.page-title-home-1 {
						padding-top: 24px !important;
						padding-bottom: 40px !important;
					}

					.hero-left-content {
						margin-bottom: 20px !important;
					}

					.hero-form-card {
						padding: 20px 16px !important;
						margin-top: 10px !important;
						margin-bottom: 24px !important;
					}

					.hero-input {
						padding: 10px 14px !important;
						font-size: 14px !important;
					}

					.slider-saylo {
						padding-top: 10px !important;
						padding-bottom: 12px !important;
						margin-top: 20px !important;
						background-color: #181d24 !important;
						border-top: 1px solid rgba(255, 255, 255, 0.12) !important;
						border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
					}

					.slider-saylo p {
						font-size: 13px !important;
						font-weight: 700 !important;
						letter-spacing: 0.5px !important;
					}

					.wrap-marquee {
                       margin-top: -51px;
                    margin-bottom: -51px;
                    }
				}
					
			`}</style>
		</div>
	);
}
