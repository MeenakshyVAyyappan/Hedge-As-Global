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

	const scrollToForm = () => {
		const el = document.getElementById('hero-consultation-form');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<div className="page-title-home-1 hero-compact">
			{/* Ambient Glowing Highlights */}
			<div className="hero-ambient-glow-gold" />
			<div className="hero-ambient-glow-blue" />

			<div className="container-fluid px-3 px-md-4 px-lg-5 hero-main-container">
				<div className="row align-items-center g-4 g-xl-5">

					{/* ── Left Side: Ultra-Premium Copy & Authority ── */}
					<div className="col-12 col-lg-7 col-xl-6">
						<div className="hero-left-content">
							
							{/* Authority Eyebrow Pill */}
							<div className="hero-authority-pill mb-3">
								<span className="live-pulse-container">
									<span className="pulse-dot"></span>
									<span className="pulse-ring"></span>
								</span>
								<span className="pill-text">FTA-APPROVED TAX AGENCY • UAE • BAHRAIN • INDIA</span>
							</div>

							{/* Hero Heading */}
							<h1 className="hero-title font-main-2">
								Financial Clarity for <br />
								<span className="hero-gold-glow">Confident Business</span> <br className="d-none d-md-block" />
								Decisions.
							</h1>

							{/* High-Legibility Subtitle */}
							<p className="hero-desc font-main-2">
								Senior Chartered Accountants and registered tax advisors delivering statutory audit, UAE Corporate Tax filing, VAT compliance, and corporate advisory with executive precision.
							</p>

							{/* Mobile & Desktop Action Row */}
							<div className="hero-actions-row d-flex align-items-center gap-2 gap-sm-3 mb-4">
								<button 
									type="button" 
									onClick={scrollToForm} 
									className="hero-btn-primary"
								>
									<span>Request Consultation</span>
									<i className="icon-chevron-right ms-2" />
								</button>
								<Link href="/our-service" className="hero-btn-secondary">
									<span>Explore Services</span>
									<i className="icon-angles-right ms-2 fs-12" />
								</Link>
							</div>

							{/* Authority & Reviews Strip */}
							<div className="hero-trust-bar">
								{/* Google Review Box */}
								<div className="hero-google-badge">
									<div className="d-flex align-items-center gap-2">
										<svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
											<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
											<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
											<path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
											<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
										</svg>
										<div>
											<div className="d-flex align-items-center gap-1">
												<span className="stars-gold">★★★★★</span>
												<span className="rating-score">4.9</span>
											</div>
											<span className="rating-label">Google Verified Rating</span>
										</div>
									</div>
									<div className="rating-clients-tag">
										500+ Corporate Clients in UAE
									</div>
								</div>

								{/* Divider */}
								<div className="trust-divider d-none d-sm-block"></div>

								{/* Trust Pillars */}
								<div className="hero-trust-pillars">
									<div className="pillar-item">
										<span className="pillar-check">✓</span>
										<div className="pillar-text-wrap">
											<span className="pillar-title">FTA Registered Tax Agency</span>
											<span className="pillar-sub">Pioneer Hedge (TAN 20042456)</span>
										</div>
									</div>
									<div className="pillar-item">
										<span className="pillar-check">✓</span>
										<div className="pillar-text-wrap">
											<span className="pillar-title">IFRS Global Audit Standards</span>
											<span className="pillar-sub">Chartered Accountants & Advisors</span>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>

					{/* ── Right Side: Ultra-Luxury Glassmorphic Consultation Suite ── */}
					<div className="col-12 col-lg-5 col-xl-6" id="hero-consultation-form">
						<div className="hero-glass-card">
							
							{/* Specular Edge Glow */}
							<div className="glass-top-edge"></div>

							<div className="card-header-wrap">
								<div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
									<span className="glass-senior-badge">
										<span className="live-emerald-dot"></span> Senior Partner Advisory
									</span>
									<span className="glass-response-tag">
										<span className="gold-sparkle">⚡</span> Response within 2 hrs
									</span>
								</div>
								<h2 className="glass-card-title font-main-2">
									Talk to Our Experts
								</h2>
								<p className="glass-card-subtitle">
									Confidential 30-min strategy session with an FTA-approved tax advisor.
								</p>
							</div>

							{status.submitted ? (
								<div className="glass-success-box text-center p-4">
									<div className="glass-success-icon mb-2">✓</div>
									<h4 className="fw-7 mb-2 fs-18 text-white">Consultation Requested!</h4>
									<p className="mb-0 fs-14 text-white-70">
										Thank you. A senior Hedge Chartered Accountant will reach out to you within 2 business hours.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="hero-consult-form">
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
										<div className="alert-glass-error mb-3 py-2 px-3 fs-13 rounded-3">
											{status.error}
										</div>
									)}

									<div className="row g-2 g-md-3">
										<div className="col-12 col-md-6">
											<label className="glass-input-label">Full Name *</label>
											<input
												type="text"
												name="fullName"
												required
												value={formData.fullName}
												onChange={handleChange}
												placeholder="e.g. John Doe"
												className="form-control glass-input"
											/>
										</div>

										<div className="col-12 col-md-6">
											<label className="glass-input-label">Phone Number *</label>
											<PhoneInput
												name="phone"
												id="hero-phone"
												required
												value={formData.phone}
												onChange={handleChange}
												placeholder="Phone Number *"
												theme="hero"
												className="glass-phone-wrapper"
											/>
										</div>

										<div className="col-12 col-md-6">
											<label className="glass-input-label">Corporate Email *</label>
											<input
												type="email"
												name="email"
												required
												value={formData.email}
												onChange={handleChange}
												placeholder="e.g. john@company.com"
												className="form-control glass-input"
											/>
										</div>

										<div className="col-12 col-md-6">
											<label className="glass-input-label">Service Required</label>
											<select
												name="service"
												value={formData.service}
												onChange={handleChange}
												className="form-select glass-input glass-select"
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
											<label className="glass-input-label">Message / Requirement (Optional)</label>
											<textarea
												name="message"
												rows={2}
												value={formData.message}
												onChange={handleChange}
												placeholder="Brief overview of your business requirement..."
												className="form-control glass-input"
											></textarea>
										</div>

										<div className="col-12 mt-2">
											<button
												type="submit"
												disabled={status.loading}
												className="glass-submit-btn w-100"
											>
												<span>{status.loading ? 'Submitting Details...' : 'Request Free Consultation'}</span>
												{!status.loading && <i className="icon-chevron-right ms-2" />}
											</button>
										</div>
									</div>

									{/* Privacy & Reassurance Footnote */}
									<div className="glass-reassurance d-flex align-items-center justify-content-center gap-2 mt-3">
										<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ffd166" strokeWidth="2.2">
											<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
											<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
										</svg>
										<span>100% Confidential • FTA-Registered Agency • No Obligation</span>
									</div>
								</form>
							)}
						</div>
					</div>

				</div>

				{/* ── Executive Metrics Strip ── */}
				<div className="hero-metrics-ticker">
					<div className="metric-box">
						<span className="metric-num">10<span className="metric-plus">+</span></span>
						<span className="metric-label">Years GCC Excellence</span>
					</div>
					<div className="metric-sep"></div>
					<div className="metric-box">
						<span className="metric-num">500<span className="metric-plus">+</span></span>
						<span className="metric-label">Corporate Clients</span>
					</div>
					<div className="metric-sep"></div>
					<div className="metric-box">
						<span className="metric-num">100<span className="metric-plus">%</span></span>
						<span className="metric-label">FTA Compliance Rate</span>
					</div>
					<div className="metric-sep"></div>
					<div className="metric-box">
						<span className="metric-num">3<span className="metric-plus">+</span></span>
						<span className="metric-label">GCC & Global Hubs</span>
					</div>
				</div>

			</div>

			{/* ── Luminous Marquee Ribbon ── */}
			<div className="tf-marquee hero-marquee-ribbon">
				<div className="wrap-marquee">
					{[...Array(6)].map((_, i) => (
						<div key={i} className="marquee-item px-4">
							<p className="font-main-2 text-white fs-14 fw-7 tracking-wide mb-0 d-flex align-items-center gap-2">
								<span className="gold-star">★</span> 
								<span>HEDGE CHARTERED ACCOUNTANTS GROUP</span>
								<span className="bullet-sep">•</span>
								<span className="text-gold-light">FTA REGISTERED TAX AGENCY</span>
								<span className="bullet-sep">•</span>
								<span>STATUTORY AUDIT & ASSURANCE</span>
								<span className="bullet-sep">•</span>
								<span className="text-gold-light">UAE CORPORATE TAX EXPERTS</span>
							</p>
						</div>
					))}
				</div>
			</div>

			{/* ── Scoped Luxury Styles ── */}
			<style jsx>{`
				.page-title-home-1.hero-compact {
					position: relative;
					overflow: hidden;
					padding-top: 55px;
					padding-bottom: 35px;
					background: linear-gradient(135deg, rgba(8, 30, 60, 0.78) 0%, rgba(13, 50, 96, 0.68) 50%, rgba(8, 30, 60, 0.82) 100%), 
								url('/images/banner/uae_financial_hero.jpg');
					background-size: cover;
					background-position: center center;
					background-repeat: no-repeat;
				}

				/* Ambient Radiance Overlays */
				.hero-ambient-glow-gold {
					position: absolute;
					top: -5%;
					left: 5%;
					width: 550px;
					height: 550px;
					background: radial-gradient(circle, rgba(245, 158, 11, 0.20) 0%, rgba(200, 16, 46, 0.08) 40%, transparent 70%);
					pointer-events: none;
					z-index: 1;
				}

				.hero-ambient-glow-blue {
					position: absolute;
					bottom: -5%;
					right: 5%;
					width: 600px;
					height: 600px;
					background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, transparent 65%);
					pointer-events: none;
					z-index: 1;
				}

				.hero-main-container {
					position: relative;
					z-index: 2;
					max-width: 1600px;
				}

				/* Authority Pill */
				.hero-authority-pill {
					display: inline-flex;
					align-items: center;
					gap: 10px;
					padding: 7px 18px;
					background: rgba(255, 255, 255, 0.12);
					backdrop-filter: blur(12px);
					-webkit-backdrop-filter: blur(12px);
					border: 1px solid rgba(255, 255, 255, 0.28);
					border-radius: 999px;
					box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
				}

				.live-pulse-container {
					position: relative;
					width: 10px;
					height: 10px;
					display: inline-flex;
					align-items: center;
					justify-content: center;
				}

				.pulse-dot {
					width: 8px;
					height: 8px;
					background-color: #22c55e;
					border-radius: 50%;
					z-index: 2;
				}

				.pulse-ring {
					position: absolute;
					width: 16px;
					height: 16px;
					background-color: rgba(34, 197, 94, 0.45);
					border-radius: 50%;
					animation: ringPulse 2s infinite ease-out;
				}

				@keyframes ringPulse {
					0% { transform: scale(0.6); opacity: 1; }
					100% { transform: scale(1.6); opacity: 0; }
				}

				.pill-text {
					color: #ffffff;
					font-size: 11.5px;
					font-weight: 700;
					letter-spacing: 0.08em;
					text-transform: uppercase;
				}

				/* Headline */
				.hero-title {
					color: #ffffff;
					font-size: clamp(30px, 3.8vw, 48px);
					font-weight: 800;
					line-height: 1.15;
					letter-spacing: -0.5px;
					margin-bottom: 16px;
					text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
				}

				.hero-gold-glow {
					background: linear-gradient(135deg, #FFF0CA 0%, #FFD166 40%, #F59E0B 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					display: inline-block;
					position: relative;
					text-shadow: none;
				}

				/* Subtitle */
				.hero-desc {
					color: #e2e8f0;
					font-size: 16px;
					font-weight: 450;
					line-height: 1.7;
					max-width: 540px;
					margin-bottom: 24px;
					text-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
				}

				/* Dual CTA Buttons */
				.hero-btn-primary {
					background: linear-gradient(135deg, #C8102E 0%, #9e0c24 100%);
					color: #ffffff !important;
					padding: 13px 26px;
					font-size: 15px;
					font-weight: 700;
					border-radius: 10px;
					border: 1px solid rgba(255, 255, 255, 0.2);
					box-shadow: 0 10px 25px rgba(200, 16, 46, 0.38);
					cursor: pointer;
					display: inline-flex;
					align-items: center;
					text-decoration: none;
					transition: all 0.25s ease;
				}

				.hero-btn-primary:hover {
					transform: translateY(-2px);
					box-shadow: 0 14px 30px rgba(200, 16, 46, 0.5);
					background: linear-gradient(135deg, #d91c38 0%, #b3102c 100%);
				}

				.hero-btn-secondary,
				:global(a.hero-btn-secondary) {
					background: rgba(255, 255, 255, 0.14) !important;
					color: #ffffff !important;
					backdrop-filter: blur(12px) !important;
					-webkit-backdrop-filter: blur(12px) !important;
					border: 1px solid rgba(255, 255, 255, 0.32) !important;
					padding: 13px 24px !important;
					font-size: 15px !important;
					font-weight: 600 !important;
					border-radius: 10px !important;
					display: inline-flex !important;
					align-items: center !important;
					text-decoration: none !important;
					transition: all 0.25s ease !important;
				}

				.hero-btn-secondary:hover,
				:global(a.hero-btn-secondary:hover) {
					background: rgba(255, 255, 255, 0.25) !important;
					border-color: #ffffff !important;
					color: #ffffff !important;
					transform: translateY(-2px) !important;
				}

				/* Trust Bar */
				.hero-trust-bar {
					display: flex;
					align-items: center;
					gap: 20px;
					padding: 14px 20px;
					background: rgba(255, 255, 255, 0.08);
					backdrop-filter: blur(16px);
					-webkit-backdrop-filter: blur(16px);
					border: 1px solid rgba(255, 255, 255, 0.18);
					border-radius: 16px;
					box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
					max-width: 560px;
				}

				.hero-google-badge {
					flex-shrink: 0;
				}

				.stars-gold {
					color: #FFD700;
					font-size: 14px;
					letter-spacing: 1px;
					line-height: 1;
				}

				.rating-score {
					color: #ffffff;
					font-size: 15px;
					font-weight: 800;
					margin-left: 2px;
				}

				.rating-label {
					display: block;
					color: rgba(255, 255, 255, 0.85);
					font-size: 11px;
					font-weight: 600;
					line-height: 1.2;
				}

				.rating-clients-tag {
					font-size: 11px;
					color: #ffd166;
					font-weight: 700;
					margin-top: 3px;
				}

				.trust-divider {
					width: 1px;
					height: 38px;
					background: rgba(255, 255, 255, 0.2);
					flex-shrink: 0;
				}

				.hero-trust-pillars {
					display: flex;
					flex-direction: column;
					gap: 6px;
				}

				.pillar-item {
					display: flex;
					align-items: center;
					gap: 8px;
				}

				.pillar-check {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					width: 16px;
					height: 16px;
					border-radius: 50%;
					background: rgba(34, 197, 94, 0.2);
					color: #22c55e;
					font-size: 10px;
					font-weight: 800;
					flex-shrink: 0;
				}

				.pillar-text-wrap {
					line-height: 1.2;
				}

				.pillar-title {
					display: block;
					color: #ffffff;
					font-size: 11.5px;
					font-weight: 700;
				}

				.pillar-sub {
					display: block;
					color: rgba(255, 255, 255, 0.7);
					font-size: 10px;
				}

				/* ── Ultra-Luxury Glassmorphism Consultation Suite ── */
				.hero-glass-card {
					background: linear-gradient(145deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.09) 100%);
					backdrop-filter: blur(28px) saturate(180%);
					-webkit-backdrop-filter: blur(28px) saturate(180%);
					border: 1px solid rgba(255, 255, 255, 0.24);
					box-shadow: 0 30px 70px -15px rgba(0, 8, 24, 0.55), 
								0 0 0 1px rgba(255, 255, 255, 0.18) inset, 
								0 1px 0 rgba(255, 255, 255, 0.4) inset;
					border-radius: 22px;
					padding: 30px 28px;
					position: relative;
					overflow: hidden;
				}

				.glass-top-edge {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					height: 3px;
					background: linear-gradient(90deg, rgba(255, 209, 102, 0) 0%, #ffd166 25%, #C8102E 75%, rgba(200, 16, 46, 0) 100%);
				}

				.glass-senior-badge {
					display: inline-flex;
					align-items: center;
					gap: 6px;
					padding: 4px 12px;
					background: rgba(34, 197, 94, 0.12);
					border: 1px solid rgba(34, 197, 94, 0.35);
					backdrop-filter: blur(8px);
					border-radius: 999px;
					color: #4ade80;
					font-size: 11px;
					font-weight: 700;
					letter-spacing: 0.03em;
				}

				.live-emerald-dot {
					width: 6px;
					height: 6px;
					border-radius: 50%;
					background: #22c55e;
					box-shadow: 0 0 8px #22c55e;
				}

				.glass-response-tag {
					font-size: 11.5px;
					font-weight: 600;
					color: rgba(255, 255, 255, 0.85);
					display: inline-flex;
					align-items: center;
					gap: 4px;
				}

				.gold-sparkle {
					color: #ffd166;
				}

				.glass-card-title {
					font-size: 24px;
					font-weight: 800;
					color: #ffffff;
					margin-bottom: 4px;
					line-height: 1.2;
					text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
				}

				.glass-card-subtitle {
					font-size: 13px;
					color: rgba(255, 255, 255, 0.8);
					margin-bottom: 18px;
					line-height: 1.45;
				}

				.glass-input-label {
					font-size: 11.5px;
					font-weight: 600;
					color: rgba(255, 255, 255, 0.9);
					margin-bottom: 5px;
					display: block;
					letter-spacing: 0.02em;
				}

				:global(.glass-input) {
					background: rgba(255, 255, 255, 0.08) !important;
					border: 1px solid rgba(255, 255, 255, 0.22) !important;
					backdrop-filter: blur(12px) !important;
					-webkit-backdrop-filter: blur(12px) !important;
					color: #ffffff !important;
					font-size: 14px !important;
					font-weight: 500 !important;
					padding: 11px 15px !important;
					border-radius: 10px !important;
					transition: all 0.25s ease !important;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) inset !important;
				}

				:global(.glass-input::placeholder) {
					color: rgba(255, 255, 255, 0.52) !important;
					font-size: 13.5px !important;
				}

				:global(.glass-input:focus) {
					background: rgba(255, 255, 255, 0.14) !important;
					border-color: #ffd166 !important;
					box-shadow: 0 0 0 3px rgba(255, 209, 102, 0.25), 0 4px 15px rgba(0, 0, 0, 0.2) !important;
					color: #ffffff !important;
				}

				:global(.glass-select option) {
					background-color: #071e3d !important;
					color: #ffffff !important;
				}

				:global(.glass-phone-wrapper) {
					border-radius: 10px !important;
					backdrop-filter: blur(12px) !important;
					-webkit-backdrop-filter: blur(12px) !important;
					background: rgba(255, 255, 255, 0.08) !important;
					border: 1px solid rgba(255, 255, 255, 0.22) !important;
				}

				:global(.glass-phone-wrapper input) {
					color: #ffffff !important;
				}

				:global(.glass-phone-wrapper input::placeholder) {
					color: rgba(255, 255, 255, 0.52) !important;
				}

				:global(.glass-phone-wrapper:focus-within) {
					border-color: #ffd166 !important;
					box-shadow: 0 0 0 3px rgba(255, 209, 102, 0.25), 0 4px 15px rgba(0, 0, 0, 0.2) !important;
					background: rgba(255, 255, 255, 0.14) !important;
				}

				.glass-submit-btn {
					background: linear-gradient(135deg, #C8102E 0%, #e02644 50%, #9e0c24 100%);
					border: 1px solid rgba(255, 255, 255, 0.3);
					color: #ffffff;
					font-size: 15px;
					font-weight: 700;
					border-radius: 10px;
					padding: 13px 20px;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: all 0.25s ease;
					box-shadow: 0 10px 25px rgba(200, 16, 46, 0.42), 0 1px 0 rgba(255, 255, 255, 0.3) inset;
				}

				.glass-submit-btn:hover {
					background: linear-gradient(135deg, #d91c38 0%, #f03352 50%, #b3102c 100%);
					transform: translateY(-2px);
					box-shadow: 0 14px 32px rgba(200, 16, 46, 0.55);
				}

				.glass-reassurance {
					font-size: 11px;
					font-weight: 500;
					color: rgba(255, 255, 255, 0.78);
				}

				.glass-success-box {
					background: rgba(34, 197, 94, 0.12);
					border: 1px solid rgba(34, 197, 94, 0.35);
					backdrop-filter: blur(16px);
					border-radius: 14px;
				}

				.glass-success-icon {
					width: 44px;
					height: 44px;
					border-radius: 50%;
					background: #22c55e;
					color: #ffffff;
					font-size: 22px;
					font-weight: 800;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					box-shadow: 0 0 15px rgba(34, 197, 94, 0.4);
				}

				.alert-glass-error {
					background: rgba(220, 38, 38, 0.15);
					border: 1px solid rgba(220, 38, 38, 0.4);
					color: #fca5a5;
				}

				/* ── Metrics Ticker ── */
				.hero-metrics-ticker {
					display: flex;
					align-items: center;
					justify-content: space-around;
					background: rgba(255, 255, 255, 0.10);
					backdrop-filter: blur(14px);
					-webkit-backdrop-filter: blur(14px);
					border: 1px solid rgba(255, 255, 255, 0.22);
					border-radius: 16px;
					padding: 18px 24px;
					margin-top: 36px;
					box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
				}

				.metric-box {
					text-align: center;
				}

				.metric-num {
					display: block;
					font-size: 28px;
					font-weight: 800;
					color: #ffffff;
					line-height: 1;
				}

				.metric-plus {
					color: #ffd166;
					margin-left: 2px;
				}

				.metric-label {
					font-size: 11.5px;
					font-weight: 600;
					color: rgba(255, 255, 255, 0.85);
					text-transform: uppercase;
					letter-spacing: 0.04em;
					margin-top: 4px;
					display: block;
				}

				.metric-sep {
					width: 1px;
					height: 36px;
					background: rgba(255, 255, 255, 0.18);
				}

				/* ── Marquee Ribbon ── */
				.hero-marquee-ribbon {
					margin-top: 32px;
					padding: 12px 0;
					background: linear-gradient(90deg, #071e3d 0%, #0d3b6f 50%, #071e3d 100%);
					border-top: 1px solid rgba(255, 255, 255, 0.16);
					border-bottom: 1px solid rgba(255, 255, 255, 0.16);
					overflow: hidden;
					width: 100%;
				}

				.hero-marquee-ribbon :global(.wrap-marquee) {
					display: flex !important;
					flex-direction: row !important;
					white-space: nowrap !important;
					width: max-content !important;
				}

				.hero-marquee-ribbon :global(.marquee-item) {
					flex-shrink: 0 !important;
					white-space: nowrap !important;
					display: inline-flex !important;
					align-items: center !important;
				}

				.hero-marquee-ribbon :global(p) {
					white-space: nowrap !important;
					margin-bottom: 0 !important;
				}

				.gold-star {
					color: #ffd166;
					font-size: 14px;
				}

				.bullet-sep {
					color: rgba(255, 255, 255, 0.4);
					margin: 0 6px;
				}

				.text-gold-light {
					color: #ffd166;
				}

				/* ── MOBILE OPTIMIZATIONS (Max Width: 991px) ── */
				@media (max-width: 991px) {
					.page-title-home-1.hero-compact {
						padding-top: 24px !important;
						padding-bottom: 24px !important;
						background-image: linear-gradient(180deg, rgba(7, 26, 52, 0.74) 0%, rgba(11, 42, 80, 0.65) 45%, rgba(6, 21, 42, 0.88) 100%), 
										  url('/images/banner/uae_financial_hero_mobile.jpg') !important;
						background-position: center top !important;
					}

					.hero-ambient-glow-gold {
						width: 320px;
						height: 320px;
						top: -10px;
						left: -20px;
					}

					.hero-ambient-glow-blue {
						width: 320px;
						height: 320px;
						bottom: 0;
						right: -20px;
					}

					.hero-left-content {
						text-align: left !important;
						margin-bottom: 24px;
					}

					.hero-authority-pill {
						padding: 6px 14px;
						margin-bottom: 14px !important;
					}

					.pill-text {
						font-size: 10px;
						letter-spacing: 0.05em;
					}

					.hero-title {
						font-size: clamp(26px, 7.5vw, 36px) !important;
						line-height: 1.18 !important;
						margin-bottom: 12px;
					}

					.hero-desc {
						font-size: 14px !important;
						line-height: 1.6 !important;
						color: #e2e8f0 !important;
						margin-bottom: 18px;
					}

					.hero-actions-row {
						display: flex !important;
						gap: 10px !important;
						width: 100% !important;
						margin-bottom: 20px !important;
					}

					.hero-btn-primary {
						padding: 12px 14px !important;
						font-size: 13.5px !important;
						flex: 1.2 !important;
						justify-content: center !important;
						white-space: nowrap !important;
					}

					.hero-btn-secondary,
					:global(a.hero-btn-secondary) {
						padding: 12px 14px !important;
						font-size: 13.5px !important;
						flex: 1 !important;
						justify-content: center !important;
						white-space: nowrap !important;
					}

					.hero-trust-bar {
						flex-direction: column;
						align-items: flex-start;
						padding: 14px 16px;
						gap: 12px;
						width: 100%;
						max-width: 100%;
					}

					.hero-trust-pillars {
						gap: 8px;
						border-top: 1px solid rgba(255, 255, 255, 0.15);
						padding-top: 10px;
						width: 100%;
					}

					.pillar-title {
						font-size: 11px;
					}

					.pillar-sub {
						font-size: 9.5px;
					}

					.hero-glass-card {
						padding: 22px 16px !important;
						border-radius: 18px !important;
						margin-top: 8px;
					}

					.glass-card-title {
						font-size: 21px !important;
					}

					.glass-card-subtitle {
						font-size: 12px !important;
						margin-bottom: 14px;
					}

					.glass-submit-btn {
						padding: 12px 16px !important;
						font-size: 14.5px !important;
					}

					.hero-metrics-ticker {
						display: grid !important;
						grid-template-columns: 1fr 1fr;
						gap: 14px;
						padding: 16px 12px !important;
						margin-top: 24px !important;
					}

					.metric-sep {
						display: none !important;
					}

					.metric-num {
						font-size: 24px !important;
					}

					.metric-label {
						font-size: 10.5px !important;
					}

					.hero-marquee-ribbon {
						margin-top: 20px !important;
						padding: 9px 0 !important;
					}
				}
			`}</style>
		</div>
	);
}
