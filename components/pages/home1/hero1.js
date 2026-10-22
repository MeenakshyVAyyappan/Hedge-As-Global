'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PhoneInput from '@/components/elements/PhoneInput';

const HERO_SLIDES = [
	{
		id: 1,
		image: '/images/banner/banner1.png',
		title: 'Executive Advisory',
		caption: 'Chartered Accountants & Tax Advisors'
	},
	{
		id: 2,
		image: '/images/banner/banner2.png',
		title: 'Global Financial Hub',
		caption: 'Corporate Advisory & Audit Standards'
	}
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function Hero1() {
	const [activeSlide, setActiveSlide] = useState(0);
	const timerRef = useRef(null);

	// Consultation Popup Modal States
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [formData, setFormData] = useState({
		fullName: '',
		phone: '',
		email: '',
		service: 'Accounting & Bookkeeping',
		message: '',
		websiteHp: '',
	});
	const [status, setStatus] = useState({ loading: false, submitted: false, error: null });

	const nextSlide = useCallback(() => {
		setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
	}, []);

	// Smooth Automatic Background Slideshow
	useEffect(() => {
		timerRef.current = setInterval(() => {
			nextSlide();
		}, SLIDE_DURATION);

		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [nextSlide]);

	// Modal keyboard & scroll lock handling
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape' && isModalOpen) {
				setIsModalOpen(false);
			}
		};

		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
			window.addEventListener('keydown', handleKeyDown);
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isModalOpen]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (formData.websiteHp) return;

		if (!formData.fullName || !formData.phone || !formData.email) {
			setStatus({ loading: false, submitted: false, error: 'Please fill in all required fields.' });
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
		<section 
			className="hero-section-wrapper position-relative overflow-hidden"
			aria-label="Hedge Chartered Accountants Global Hero Section"
		>
			{/* ── Slide Backgrounds (Smooth Crossfade Slideshow - Vivid & Fully Visible) ── */}
			<div className="hero-slides-container">
				{HERO_SLIDES.map((slide, index) => {
					const isActive = index === activeSlide;
					return (
						<div
							key={slide.id}
							className={`hero-slide-item ${isActive ? 'active' : ''}`}
							aria-hidden={!isActive}
						>
							<Image
								src={slide.image}
								alt={`Hedge Chartered Accountants - ${slide.title}`}
								fill
								priority={index === 0}
								sizes="100vw"
								className="hero-slide-image"
							/>
						</div>
					);
				})}
			</div>

			{/* ── Subtle Natural Scrim (Zero Whitish Haze - Banner Image Crystal Clear) ── */}
			<div className="hero-subtle-scrim" />

			{/* ── Main Content (Single-Column Centered Composition) ── */}
			<div className="container position-relative hero-content-container">
				<div className="row justify-content-center text-center">
					<div className="col-12 col-xl-10">

						{/* 1. Authority Eyebrow Badge */}
						<div className="d-inline-flex justify-content-center mb-3 mb-md-4">
							<div className="hero-authority-pill">
								<span className="live-pulse-container" aria-hidden="true">
									<span className="pulse-dot"></span>
									<span className="pulse-ring"></span>
								</span>
								<span className="pill-text">
									FTA-APPROVED TAX AGENCY &bull; UAE &bull; BAHRAIN &bull; INDIA
								</span>
							</div>
						</div>

						{/* 2. Main Headline (H1 - Solid Pure White) */}
						<h1 className="hero-headline font-main-2 text-white" style={{ color: '#ffffff' }}>
							Financial Clarity for Confident Business Decisions.
						</h1>

						{/* 3. Supporting Description */}
						<p className="hero-description mx-auto font-main-2 text-white" style={{ color: '#f1f5f9' }}>
							Senior Chartered Accountants and registered tax advisors delivering statutory audit, 
							UAE Corporate Tax filing, VAT compliance, and corporate advisory with executive precision.
						</p>

						{/* 4. Side-by-Side Centered Action Buttons */}
						<div className="hero-actions-group d-flex flex-wrap align-items-center justify-content-center gap-3">
							<button
								type="button"
								onClick={() => setIsModalOpen(true)}
								className="hero-btn-primary"
								id="hero-request-consultation-btn"
							>
								<span>Request Consultation</span>
								<i className="icon-chevron-right ms-2" />
							</button>

							<Link 
								href="/our-service" 
								className="hero-btn-secondary"
								id="hero-explore-services-btn"
							>
								<span>Explore Services</span>
								<i className="icon-angles-right ms-2 fs-12" />
							</Link>
						</div>

						{/* 5. Centered Google Rating & Trust Credentials (Clean Translucent Glass) */}
						<div className="hero-trust-wrapper d-inline-flex flex-wrap align-items-center justify-content-center gap-3 mt-4">
							{/* Google Rating Box */}
							<div className="trust-badge-item d-flex align-items-center gap-2">
								<svg width="22" height="22" viewBox="0 0 24 24" className="flex-shrink-0" aria-label="Google">
									<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
									<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
									<path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
									<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
								</svg>
								<div className="text-start">
									<div className="d-flex align-items-center gap-1 line-height-1">
										<span className="stars-gold">★★★★★</span>
										<span className="rating-score">4.9</span>
									</div>
									<span className="rating-label">Google Verified Rating</span>
								</div>
							</div>

							<div className="trust-sep d-none d-sm-block" />

							{/* Corporate Clients Pill */}
							<div className="trust-badge-item d-flex align-items-center gap-2">
								<span className="trust-icon-circle bg-emerald-soft text-emerald">
									✓
								</span>
								<div className="text-start">
									<span className="trust-title-text">FTA Registered Tax Agency</span>
									<span className="trust-sub-text">Pioneer Hedge (TAN 20042456)</span>
								</div>
							</div>

							<div className="trust-sep d-none d-md-block" />

							{/* IFRS Certification */}
							<div className="trust-badge-item d-none d-md-flex align-items-center gap-2">
								<span className="trust-icon-circle bg-blue-soft text-blue">
									✓
								</span>
								<div className="text-start">
									<span className="trust-title-text">IFRS Global Audit Standards</span>
									<span className="trust-sub-text">Senior Chartered Accountants</span>
								</div>
							</div>
						</div>

					</div>
				</div>

				{/* 6. Executive Metrics Counter Strip (Clean Frosted Glass) */}
				<div className="hero-metrics-strip mx-auto mt-4 mt-lg-5">
					<div className="row g-2 g-md-0 text-center align-items-center">
						<div className="col-6 col-md-3">
							<div className="metric-box">
								<span className="metric-num">10<span className="metric-plus">+</span></span>
								<span className="metric-label">Years GCC Excellence</span>
							</div>
						</div>
						<div className="col-6 col-md-3">
							<div className="metric-box">
								<span className="metric-num">2000<span className="metric-plus">+</span></span>
								<span className="metric-label">Corporate Clients</span>
							</div>
						</div>
						<div className="col-6 col-md-3">
							<div className="metric-box">
								<span className="metric-num">100<span className="metric-plus">%</span></span>
								<span className="metric-label">FTA Compliance Rate</span>
							</div>
						</div>
						<div className="col-6 col-md-3">
							<div className="metric-box">
								<span className="metric-num">3<span className="metric-plus">+</span></span>
								<span className="metric-label">GCC & Global Hubs</span>
							</div>
						</div>
					</div>
				</div>

			</div>

			{/* 7. Luminous Marquee Ribbon (Original Brand Navy & Gold Palette) */}
			<div className="tf-marquee hero-marquee-ribbon">
				<div className="wrap-marquee">
					{[...Array(6)].map((_, i) => (
						<div key={i} className="marquee-item px-3 px-md-4">
							<p className="font-main-2 text-white fs-13 fw-7 tracking-wide mb-0 d-flex align-items-center gap-2">
								<span className="gold-star">★</span>
								<span>HEDGE CHARTERED ACCOUNTANTS GROUP</span>
								<span className="bullet-sep">&bull;</span>
								<span className="text-gold-light fw-8">FTA REGISTERED TAX AGENCY</span>
								<span className="bullet-sep">&bull;</span>
								<span>STATUTORY AUDIT & ASSURANCE</span>
								<span className="bullet-sep">&bull;</span>
								<span className="text-gold-light fw-8">UAE CORPORATE TAX EXPERTS</span>
							</p>
						</div>
					))}
				</div>
			</div>

			{/* ── CONSULTATION POPUP MODAL (Old Hero Form in Premium Popup) ── */}
			{isModalOpen && (
				<div
					className="consultation-modal-overlay"
					onClick={() => setIsModalOpen(false)}
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-consultation-title"
				>
					<div 
						className="consultation-modal-card"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Modal Header */}
						<div className="consultation-modal-header">
							<div>
								<span className="modal-badge-tag">EXECUTIVE CONSULTATION</span>
								<h3 id="modal-consultation-title" className="modal-title font-main-2">
									Talk to Our Experts
								</h3>
								<p className="modal-subtitle">
									Tell us what your business needs and our senior advisors will get in touch shortly.
								</p>
							</div>
							<button
								type="button"
								className="modal-close-btn"
								onClick={() => setIsModalOpen(false)}
								aria-label="Close modal window"
							>
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</button>
						</div>

						{/* Modal Body */}
						<div className="consultation-modal-body">
							{status.submitted ? (
								<div className="modal-success-box text-center py-4">
									<div className="success-icon-wrap mx-auto mb-3">
										<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
											<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
											<polyline points="22 4 12 14.01 9 11.01"></polyline>
										</svg>
									</div>
									<h4 className="fw-7 text-navy mb-2 fs-18">Inquiry Submitted Successfully!</h4>
									<p className="text-muted fs-14 mb-4">
										Thank you. A senior Hedge Chartered Accountant will reach out to you shortly.
									</p>
									<button
										type="button"
										onClick={() => {
											setIsModalOpen(false);
											setStatus({ loading: false, submitted: false, error: null });
										}}
										className="btn-close-success"
									>
										Close Window
									</button>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="modal-form">
									{/* Honeypot field for spam prevention */}
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
										<div className="alert alert-danger py-2 px-3 fs-13 mb-3 rounded-3">
											{status.error}
										</div>
									)}

									<div className="row g-3">
										<div className="col-12 col-md-6 text-start">
											<label className="form-label-custom">Full Name <span className="text-danger">*</span></label>
											<input
												type="text"
												name="fullName"
												required
												value={formData.fullName}
												onChange={handleChange}
												placeholder="Your Full Name"
												className="form-control modal-input"
											/>
										</div>

										<div className="col-12 col-md-6 text-start">
											<label className="form-label-custom">Phone Number <span className="text-danger">*</span></label>
											<PhoneInput
												name="phone"
												id="modal-phone"
												required
												value={formData.phone}
												onChange={handleChange}
												placeholder="Phone Number"
												theme="light"
											/>
										</div>

										<div className="col-12 col-md-6 text-start">
											<label className="form-label-custom">Work Email <span className="text-danger">*</span></label>
											<input
												type="email"
												name="email"
												required
												value={formData.email}
												onChange={handleChange}
												placeholder="name@company.com"
												className="form-control modal-input"
											/>
										</div>

										<div className="col-12 col-md-6 text-start">
											<label className="form-label-custom">Service Required <span className="text-danger">*</span></label>
											<select
												name="service"
												value={formData.service}
												onChange={handleChange}
												className="form-select modal-input"
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

										<div className="col-12 text-start">
											<label className="form-label-custom">Brief Message / Requirement</label>
											<textarea
												name="message"
												rows={3}
												value={formData.message}
												onChange={handleChange}
												placeholder="Tell us about your business setup or financial requirement..."
												className="form-control modal-input"
											></textarea>
										</div>

										<div className="col-12 mt-3">
											<button
												type="submit"
												disabled={status.loading}
												className="modal-submit-btn w-100"
											>
												{status.loading ? 'Submitting Inquiry...' : 'Submit Consultation Request'}
												{!status.loading && <i className="icon-chevron-right ms-2" />}
											</button>
										</div>

										<div className="col-12 text-center mt-2">
											<p className="privacy-note mb-0">
												🔒 Your confidential business information is protected under strict NDA standards.
											</p>
										</div>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>
			)}

			{/* ── Scoped Styling ── */}
			<style jsx>{`
				.hero-section-wrapper {
					position: relative;
					background-color: #071e3d;
					padding-top: 60px;
					padding-bottom: 30px;
					min-height: 720px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				/* ── Slideshow Container (Full Vibrant Visual Presentation) ── */
				.hero-slides-container {
					position: absolute;
					inset: 0;
					z-index: 0;
					overflow: hidden;
				}

				.hero-slide-item {
					position: absolute;
					inset: 0;
					opacity: 0;
					transform: scale(1.02);
					transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 7s ease-out;
					pointer-events: none;
				}

				.hero-slide-item.active {
					opacity: 1;
					transform: scale(1.05);
					pointer-events: auto;
				}

				:global(.hero-slide-image) {
					object-fit: cover !important;
					object-position: center center !important;
					filter: saturate(1.1) contrast(1.05);
				}

				/* ── Subtle Natural Scrim (NO Whitish Fog - Keeps Cityscape 100% Crisp) ── */
				.hero-subtle-scrim {
					position: absolute;
					inset: 0;
					background: linear-gradient(
						180deg,
						rgba(7, 26, 52, 0.42) 0%,
						rgba(7, 26, 52, 0.16) 35%,
						rgba(7, 26, 52, 0.35) 70%,
						rgba(7, 30, 61, 0.85) 100%
					);
					z-index: 1;
					pointer-events: none;
				}

				.hero-content-container {
					z-index: 2;
					max-width: 1200px;
				}

				/* ── 1. Authority Eyebrow Pill ── */
				.hero-authority-pill {
					display: inline-flex;
					align-items: center;
					gap: 9px;
					padding: 8px 20px;
					background: rgba(255, 255, 255, 0.16);
					backdrop-filter: blur(14px);
					-webkit-backdrop-filter: blur(14px);
					border: 1px solid rgba(255, 255, 255, 0.32);
					border-radius: 9999px;
					box-shadow: 0 4px 18px rgba(0, 0, 0, 0.2);
					transition: all 0.25s ease;
				}

				.hero-authority-pill:hover {
					border-color: rgba(255, 255, 255, 0.6);
					background: rgba(255, 255, 255, 0.22);
					transform: translateY(-1px);
				}

				.live-pulse-container {
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 10px;
					height: 10px;
				}

				.pulse-dot {
					width: 8px;
					height: 8px;
					background-color: #22c55e;
					border-radius: 50%;
					box-shadow: 0 0 10px #22c55e;
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
					text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
				}

				/* ── 2. Headline (H1 - Solid Pure White) ── */
				.hero-headline {
					color: #ffffff !important;
					font-size: clamp(34px, 4.4vw, 56px);
					font-weight: 800;
					line-height: 1.16;
					letter-spacing: -0.025em;
					margin-bottom: 20px;
					text-shadow: 0 2px 20px rgba(0, 0, 0, 0.65), 0 1px 4px rgba(0, 0, 0, 0.85);
				}

				/* ── 3. Supporting Description ── */
				.hero-description {
					color: #f1f5f9;
					font-size: clamp(16px, 1.35vw, 19px);
					font-weight: 500;
					line-height: 1.68;
					max-width: 760px;
					margin-bottom: 32px;
					text-shadow: 0 1px 12px rgba(0, 0, 0, 0.65);
				}

				/* ── 4. CTA Buttons ── */
				.hero-btn-primary,
				:global(a.hero-btn-primary),
				:global(button.hero-btn-primary) {
					background: linear-gradient(135deg, #c8102e 0%, #9e0c24 100%) !important;
					color: #ffffff !important;
					padding: 14px 30px !important;
					font-size: 15.5px !important;
					font-weight: 700 !important;
					border-radius: 12px !important;
					border: 1px solid rgba(255, 255, 255, 0.25) !important;
					box-shadow: 0 10px 25px -4px rgba(200, 16, 46, 0.45) !important;
					cursor: pointer !important;
					display: inline-flex !important;
					align-items: center !important;
					text-decoration: none !important;
					transition: all 0.25s ease !important;
					outline: none !important;
				}

				.hero-btn-primary:hover,
				:global(a.hero-btn-primary:hover),
				:global(button.hero-btn-primary:hover) {
					transform: translateY(-2px) !important;
					box-shadow: 0 14px 30px -4px rgba(200, 16, 46, 0.6) !important;
					background: linear-gradient(135deg, #db1436 0%, #b3102c 100%) !important;
					color: #ffffff !important;
				}

				.hero-btn-secondary,
				:global(a.hero-btn-secondary) {
					background: rgba(255, 255, 255, 0.16) !important;
					color: #ffffff !important;
					backdrop-filter: blur(14px) !important;
					-webkit-backdrop-filter: blur(14px) !important;
					border: 1px solid rgba(255, 255, 255, 0.35) !important;
					padding: 14px 28px !important;
					font-size: 15.5px !important;
					font-weight: 600 !important;
					border-radius: 12px !important;
					box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2) !important;
					display: inline-flex !important;
					align-items: center !important;
					text-decoration: none !important;
					transition: all 0.25s ease !important;
				}

				.hero-btn-secondary:hover,
				:global(a.hero-btn-secondary:hover) {
					background: rgba(255, 255, 255, 0.28) !important;
					border-color: #ffffff !important;
					color: #ffffff !important;
					transform: translateY(-2px) !important;
					box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3) !important;
				}

				/* ── 5. Google Rating & Trust Credentials Strip ── */
				.hero-trust-wrapper {
					background: rgba(255, 255, 255, 0.14);
					backdrop-filter: blur(16px);
					-webkit-backdrop-filter: blur(16px);
					border: 1px solid rgba(255, 255, 255, 0.26);
					border-radius: 16px;
					padding: 12px 24px;
					box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
				}

				.trust-badge-item {
					color: #ffffff;
				}

				.stars-gold {
					color: #fbbc05;
					font-size: 13px;
					letter-spacing: 1px;
				}

				.rating-score {
					font-weight: 800;
					font-size: 15px;
					color: #ffffff;
				}

				.rating-label {
					font-size: 11px;
					font-weight: 600;
					color: rgba(255, 255, 255, 0.85);
					display: block;
				}

				.trust-sep {
					width: 1px;
					height: 32px;
					background: rgba(255, 255, 255, 0.22);
				}

				.trust-icon-circle {
					width: 22px;
					height: 22px;
					border-radius: 50%;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					font-size: 11px;
					font-weight: 800;
					flex-shrink: 0;
				}

				.bg-emerald-soft { background: rgba(34, 197, 94, 0.25); }
				.text-emerald { color: #4ade80; }
				.bg-blue-soft { background: rgba(56, 189, 248, 0.25); }
				.text-blue { color: #38bdf8; }

				.trust-title-text {
					font-size: 12px;
					font-weight: 700;
					color: #ffffff;
					display: block;
					line-height: 1.25;
				}

				.trust-sub-text {
					font-size: 10.5px;
					font-weight: 500;
					color: rgba(255, 255, 255, 0.75);
					display: block;
				}

				/* ── 6. Executive Metrics Counter Bar ── */
				.hero-metrics-strip {
					background: rgba(255, 255, 255, 0.14);
					backdrop-filter: blur(16px);
					-webkit-backdrop-filter: blur(16px);
					border: 1px solid rgba(255, 255, 255, 0.26);
					border-radius: 18px;
					padding: 20px 24px;
					box-shadow: 0 12px 36px rgba(0, 0, 0, 0.28);
					max-width: 960px;
				}

				.metric-box {
					padding: 6px 12px;
				}

				.metric-num {
					display: block;
					font-size: clamp(24px, 2.5vw, 32px);
					font-weight: 800;
					color: #ffffff;
					line-height: 1;
					letter-spacing: -0.02em;
				}

				.metric-plus {
					color: #ffd166;
					margin-left: 2px;
				}

				.metric-label {
					font-size: 11.5px;
					font-weight: 700;
					color: rgba(255, 255, 255, 0.85);
					text-transform: uppercase;
					letter-spacing: 0.05em;
					margin-top: 6px;
					display: block;
				}

				/* ── 7. Marquee Ribbon (Original Brand Navy & Gold Palette) ── */
				.hero-marquee-ribbon {
					margin-top: 36px;
					padding: 12px 0;
					background: linear-gradient(90deg, #071e3d 0%, #0d3b6f 50%, #071e3d 100%);
					border-top: 1px solid rgba(255, 255, 255, 0.16);
					border-bottom: 1px solid rgba(255, 255, 255, 0.16);
					overflow: hidden;
					width: 100%;
					position: relative;
					z-index: 2;
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
					color: #ffd166 !important;
				}

				/* ── Executive Consultation Modal Popup ── */
				.consultation-modal-overlay {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: rgba(3, 21, 46, 0.78);
					backdrop-filter: blur(8px);
					-webkit-backdrop-filter: blur(8px);
					z-index: 999999;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 20px;
					animation: modalFadeIn 0.25s ease-out;
				}

				@keyframes modalFadeIn {
					from { opacity: 0; }
					to { opacity: 1; }
				}

				.consultation-modal-card {
					background: #ffffff;
					border-radius: 20px;
					max-width: 640px;
					width: 100%;
					max-height: 92vh;
					overflow-y: auto;
					box-shadow: 0 25px 60px -10px rgba(7, 30, 61, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.06);
					position: relative;
					animation: modalPopUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
				}

				@keyframes modalPopUp {
					from { opacity: 0; transform: scale(0.94) translateY(12px); }
					to { opacity: 1; transform: scale(1) translateY(0); }
				}

				.consultation-modal-header {
					padding: 26px 30px 18px;
					border-bottom: 1px solid #f1f5f9;
					display: flex;
					align-items: flex-start;
					justify-content: space-between;
					gap: 16px;
					background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
					border-top-left-radius: 20px;
					border-top-right-radius: 20px;
					text-align: left;
				}

				.modal-badge-tag {
					display: inline-block;
					font-size: 11px;
					font-weight: 800;
					letter-spacing: 0.08em;
					color: #c8102e;
					background: rgba(200, 16, 46, 0.08);
					padding: 4px 10px;
					border-radius: 6px;
					margin-bottom: 6px;
				}

				.modal-title {
					font-size: 24px;
					font-weight: 800;
					color: #071e3d;
					line-height: 1.2;
					margin: 0 0 6px 0;
				}

				.modal-subtitle {
					font-size: 13.5px;
					color: #64748b;
					margin: 0;
					line-height: 1.5;
				}

				.modal-close-btn {
					width: 36px;
					height: 36px;
					border-radius: 50%;
					border: 1px solid #e2e8f0;
					background: #ffffff;
					color: #64748b;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					flex-shrink: 0;
					transition: all 0.2s ease;
				}

				.modal-close-btn:hover {
					background: #f1f5f9;
					color: #071e3d;
					transform: rotate(90deg);
				}

				.consultation-modal-body {
					padding: 24px 30px 28px;
				}

				.form-label-custom {
					display: block;
					font-size: 13px;
					font-weight: 700;
					color: #0f172a;
					margin-bottom: 6px;
				}

				.modal-input {
					background: #f8fafc !important;
					border: 1px solid #e2e8f0 !important;
					border-radius: 10px !important;
					padding: 11px 14px !important;
					font-size: 14px !important;
					color: #0f172a !important;
					transition: all 0.2s ease !important;
				}

				.modal-input:focus {
					background: #ffffff !important;
					border-color: #071e3d !important;
					box-shadow: 0 0 0 3px rgba(7, 30, 61, 0.1) !important;
					outline: none !important;
				}

				.modal-submit-btn {
					background: linear-gradient(135deg, #c8102e 0%, #a00d24 100%) !important;
					color: #ffffff !important;
					border: none !important;
					border-radius: 12px !important;
					padding: 14px 24px !important;
					font-size: 15.5px !important;
					font-weight: 700 !important;
					cursor: pointer !important;
					transition: all 0.25s ease !important;
					box-shadow: 0 8px 20px -2px rgba(200, 16, 46, 0.4) !important;
					display: inline-flex !important;
					align-items: center !important;
					justify-content: center !important;
				}

				.modal-submit-btn:hover:not(:disabled) {
					transform: translateY(-1px) !important;
					box-shadow: 0 12px 26px -2px rgba(200, 16, 46, 0.55) !important;
					background: linear-gradient(135deg, #db1436 0%, #b3102c 100%) !important;
				}

				.modal-submit-btn:disabled {
					opacity: 0.7 !important;
					cursor: not-allowed !important;
				}

				.privacy-note {
					font-size: 12px;
					color: #64748b;
				}

				.success-icon-wrap {
					width: 64px;
					height: 64px;
					background: rgba(34, 197, 94, 0.12);
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.text-navy {
					color: #071e3d !important;
				}

				.btn-close-success {
					background: #071e3d;
					color: #ffffff;
					border: none;
					border-radius: 10px;
					padding: 11px 24px;
					font-size: 14px;
					font-weight: 600;
					cursor: pointer;
					transition: all 0.2s ease;
				}

				.btn-close-success:hover {
					background: #0d3b6f;
				}

				/* ── Reduced Motion Accessibility ── */
				@media (prefers-reduced-motion: reduce) {
					.hero-slide-item,
					.pulse-ring,
					.hero-btn-primary,
					.hero-btn-secondary {
						transition: none !important;
						animation: none !important;
						transform: none !important;
					}
				}

				/* ── Mobile & Tablet Responsiveness ── */
				@media (max-width: 991px) {
					.hero-section-wrapper {
						padding-top: 100px;
						padding-bottom: 20px;
						min-height: auto;
					}

					.hero-headline {
						font-size: clamp(26px, 6.8vw, 38px);
						line-height: 1.2;
						margin-bottom: 14px;
					}

					.hero-description {
						font-size: 14.5px;
						line-height: 1.6;
						margin-bottom: 22px;
					}

					.hero-actions-group {
						flex-direction: column;
						width: 100%;
						gap: 10px;
					}

					.hero-btn-primary,
					:global(a.hero-btn-primary),
					:global(button.hero-btn-primary),
					.hero-btn-secondary,
					:global(a.hero-btn-secondary) {
						width: 100% !important;
						justify-content: center !important;
						padding: 13px 18px !important;
					}

					.hero-trust-wrapper {
						flex-direction: column;
						padding: 14px 16px;
						gap: 10px;
						width: 100%;
					}

					.trust-sep {
						display: none !important;
					}

					.hero-metrics-strip {
						padding: 16px 12px;
						margin-top: 24px;
					}

					.metric-num {
						font-size: 22px;
					}

					.metric-label {
						font-size: 10px;
					}

					.hero-marquee-ribbon {
						margin-top: 24px;
						padding: 9px 0;
					}
				}

				@media (max-width: 576px) {
					.consultation-modal-header {
						padding: 20px 20px 16px;
					}
					.modal-title {
						font-size: 20px;
					}
					.consultation-modal-body {
						padding: 18px 20px 24px;
					}
				}
			`}</style>
		</section>
	);
}
