'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
	{
		id: 1,
		image: '/images/banner/hero_slide_1_dubai.jpg',
		tag: 'UAE • BAHRAIN • INDIA',
		titleLead: 'Financial Clarity for',
		titleHighlight: 'Confident Business',
		titleEnd: 'Decisions.',
		subtitle: 'Senior Chartered Accountants and registered tax advisors delivering statutory audit, UAE Corporate Tax filing, VAT compliance, and corporate advisory with executive precision.',
		locationBadge: 'Dubai & Abu Dhabi Financial Hubs',
		accentColor: '#c59b27'
	},
	{
		id: 2,
		image: '/images/banner/hero_slide_2_boardroom.jpg',
		tag: 'FTA REGISTERED TAX AGENCY (TAN 20042456)',
		titleLead: 'Strategic Tax Advisory &',
		titleHighlight: 'IFRS Statutory Audit',
		titleEnd: 'Excellence.',
		subtitle: 'Safeguard your corporate compliance with FTA-approved tax representation, audited financial statements, and end-to-end corporate governance trusted by 500+ enterprises.',
		locationBadge: 'Executive Boardroom & Audit Practice',
		accentColor: '#0a2540'
	},
	{
		id: 3,
		image: '/images/banner/hero_slide_3_financial_center.jpg',
		tag: 'MANDATORY COMPLIANCE',
		titleLead: 'Seamless Readiness for',
		titleHighlight: 'UAE Corporate Tax &',
		titleEnd: 'E-Invoicing.',
		subtitle: 'Navigate the 9% UAE Corporate Tax regime, Qualifying Free Zone exemptions, and Peppol E-Invoicing mandates with seasoned chartered accountants.',
		locationBadge: 'Corporate Tax & ERP Compliance',
		accentColor: '#c59b27'
	},
	{
		id: 4,
		image: '/images/banner/hero_slide_4_office_daylight.jpg',
		tag: 'PARTNER-LED ENGAGEMENT',
		titleLead: 'Bespoke Advisory for',
		titleHighlight: 'Sustainable Corporate',
		titleEnd: 'Growth.',
		subtitle: 'From ICV certification and bookkeeping to cross-border structuring, we provide the institutional rigor and local insight your business demands.',
		locationBadge: 'Private Client & Corporate Advisory',
		accentColor: '#0a2540'
	}
];

export default function Hero1() {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const slideTimerRef = useRef(null);

	// Autoplay slider (6 seconds per slide)
	useEffect(() => {
		if (isPaused) return;

		slideTimerRef.current = setInterval(() => {
			setActiveSlide((prev) => (prev + 1) % slides.length);
		}, 6000);

		return () => {
			if (slideTimerRef.current) clearInterval(slideTimerRef.current);
		};
	}, [isPaused, activeSlide]);

	const nextSlide = () => {
		setActiveSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToSlide = (idx) => {
		setActiveSlide(idx);
	};

	const scrollToConsultation = (e) => {
		e.preventDefault();
		const el = document.getElementById('consultation-section');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else {
			window.location.href = '/contact';
		}
	};

	const current = slides[activeSlide];

	return (
		<section 
			className="hero-luxury-light"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			aria-label="Hedge Chartered Accountants Hero Banner"
		>
			{/* ── Background Slides with Ken Burns Effect ── */}
			<div className="hero-slider-bg-wrap">
				{slides.map((slide, idx) => (
					<div
						key={slide.id}
						className={`hero-slide-layer ${idx === activeSlide ? 'active' : ''}`}
						aria-hidden={idx !== activeSlide}
					>
						<Image
							src={slide.image}
							alt={slide.titleHighlight}
							fill
							priority={idx === 0}
							sizes="100vw"
							className="hero-slide-img"
						/>
					</div>
				))}

				{/* Ultra-Sophisticated Light Gradient Overlay */}
				<div className="hero-light-gradient-overlay" />
				<div className="hero-specular-ambient" />
			</div>

			{/* ── Main Hero Content Grid ── */}
			<div className="container-fluid px-3 px-md-4 px-lg-5 hero-inner-container">
				<div className="row align-items-center g-4 g-xl-5 min-vh-hero">

					{/* ── Left Column: Editorial Luxury Headline & Authority ── */}
					<div className="col-12 col-lg-7 col-xl-7">
						<div className="hero-left-editorial">

							{/* Authority Badge */}
							<div className="hero-prestige-badge">
								<span className="live-status-dot">
									<span className="dot-core" />
									<span className="dot-ripple" />
								</span>
								<span className="prestige-text">
									FTA-APPROVED TAX AGENCY • TAN 20042456 • UAE • BAHRAIN • INDIA
								</span>
							</div>

							{/* Dynamic Slide Heading */}
							<h1 className="hero-editorial-title font-main-2">
								{current.titleLead} <br />
								<span className="hero-title-gradient">
									{current.titleHighlight}
								</span>{' '}
								<br className="d-none d-md-block" />
								{current.titleEnd}
							</h1>

							{/* High-Legibility Subtitle */}
							<p className="hero-editorial-desc font-main-2">
								{current.subtitle}
							</p>

							{/* Call to Action Row (Form removed -> High-Impact CTA Button) */}
							<div className="hero-cta-action-row d-flex align-items-center flex-wrap gap-3 mb-4">
								<button
									type="button"
									onClick={scrollToConsultation}
									className="hero-btn-luxury-primary"
								>
									<span className="btn-text">Schedule Executive Consultation</span>
									<span className="btn-icon-circle">
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
											<line x1="5" y1="12" x2="19" y2="12" />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</span>
								</button>

								<Link href="/our-service" className="hero-btn-luxury-secondary">
									<span>Explore Practice Areas</span>
									<i className="icon-angles-right ms-2 fs-12" />
								</Link>
							</div>

							{/* Direct Hotline Badge */}
							<div className="hero-helpline-strip mb-4">
								<div className="d-flex align-items-center gap-2">
									<span className="helpline-icon">
										<i className="flaticon-phone-call" />
									</span>
									<span className="helpline-label">Direct Executive Hotline:</span>
									<Link href="tel:+971502253373" className="helpline-number">
										+971 50 225 3373
									</Link>
									<span className="helpline-badge">Mon–Sat • 9AM–6PM</span>
								</div>
							</div>

							{/* Authority & Trust Pillars */}
							<div className="hero-trust-matrix">
								{/* Google Rating Card */}
								<div className="trust-rating-box">
									<div className="d-flex align-items-center gap-2">
										<svg width="22" height="22" viewBox="0 0 24 24" className="flex-shrink-0">
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
											<span className="rating-tag">500+ Corporate Clients</span>
										</div>
									</div>
								</div>

								<div className="matrix-divider d-none d-sm-block" />

								{/* Core Governance Pillars */}
								<div className="trust-pillar-items">
									<div className="pillar-cell">
										<span className="pillar-icon-check">✓</span>
										<div className="pillar-cell-text">
											<span className="cell-title">FTA Registered Tax Agency</span>
											<span className="cell-sub">Pioneer Hedge (TAN 20042456)</span>
										</div>
									</div>
									<div className="pillar-cell">
										<span className="pillar-icon-check">✓</span>
										<div className="pillar-cell-text">
											<span className="cell-title">IFRS Statutory Audits</span>
											<span className="cell-sub">Chartered Accountants & Advisors</span>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>

					{/* ── Right Column: Exclusive Advisory Showcase Suite (Replaces Form) ── */}
					<div className="col-12 col-lg-5 col-xl-5">
						<div className="hero-luxury-showcase-card">

							{/* Shimmer Top Accent Border */}
							<div className="showcase-gold-accent-line" />

							{/* Header of Showcase Card */}
							<div className="showcase-header">
								<div className="d-flex align-items-center justify-content-between mb-2">
									<span className="executive-badge">
										<span className="badge-live-pulse" /> Senior Partner Advisory
									</span>
									<span className="showcase-speed-tag">
										<span className="lightning-icon">⚡</span> 2-Hour Response
									</span>
								</div>
								<h3 className="showcase-title font-main-2">
									Institutional Financial Governance
								</h3>
								<p className="showcase-subtitle">
									Tailored for UAE Free Zone & Mainland enterprises requiring impeccable statutory compliance.
								</p>
							</div>

							{/* Practice Capabilities Grid */}
							<div className="showcase-features-grid">
								<div className="feature-tile">
									<div className="tile-icon-box">
										<i className="flaticon-award" />
									</div>
									<div className="tile-content">
										<h4 className="tile-title">UAE Corporate Tax</h4>
										<p className="tile-desc">9% Corporate Tax registration, returns, transfer pricing, & Free Zone exemptions.</p>
									</div>
								</div>

								<div className="feature-tile">
									<div className="tile-icon-box">
										<i className="flaticon-target" />
									</div>
									<div className="tile-content">
										<h4 className="tile-title">Statutory Audit & Assurance</h4>
										<p className="tile-desc">Approved audit reporting for UAE banks, free zones, and mainland authorities.</p>
									</div>
								</div>

								<div className="feature-tile">
									<div className="tile-icon-box">
										<i className="flaticon-pie-chart" />
									</div>
									<div className="tile-content">
										<h4 className="tile-title">VAT & FTA Representation</h4>
										<p className="tile-desc">Zero-error VAT return filing, voluntary disclosures, and audit defence.</p>
									</div>
								</div>

								<div className="feature-tile">
									<div className="tile-icon-box">
										<i className="flaticon-check" />
									</div>
									<div className="tile-content">
										<h4 className="tile-title">ICV & UAE E-Invoicing</h4>
										<p className="tile-desc">MoIAT In-Country Value score maximization and Peppol XML integration.</p>
									</div>
								</div>
							</div>

							{/* Showcase CTA Trigger */}
							<div className="showcase-action-box">
								<button
									type="button"
									onClick={scrollToConsultation}
									className="showcase-action-btn"
								>
									<span>Book 30-Min Confidential Strategy Call</span>
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
										<line x1="5" y1="12" x2="19" y2="12" />
										<polyline points="12 5 19 12 12 19" />
									</svg>
								</button>
								<div className="showcase-security-note">
									<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2.2">
										<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
										<path d="M7 11V7a5 5 0 0 1 10 0v4" />
									</svg>
									<span>100% Confidential • Direct Senior Chartered Accountant Review</span>
								</div>
							</div>

						</div>
					</div>

				</div>

				{/* ── Slider Interactive Controls & Progress Indicators ── */}
				<div className="hero-slider-controls-bar">
					<div className="row align-items-center g-3">
						
						{/* Slide Tabs with Animated Progress */}
						<div className="col-12 col-md-8">
							<div className="hero-slide-nav-pills">
								{slides.map((s, idx) => (
									<button
										key={s.id}
										type="button"
										onClick={() => goToSlide(idx)}
										className={`slide-nav-pill ${idx === activeSlide ? 'active' : ''}`}
										aria-label={`Go to slide ${idx + 1}`}
									>
										<div className="pill-number">0{idx + 1}</div>
										<div className="pill-text-wrap">
											<span className="pill-label">{s.locationBadge}</span>
											<div className="pill-progress-track">
												<div className={`pill-progress-fill ${idx === activeSlide && !isPaused ? 'animating' : ''}`} />
											</div>
										</div>
									</button>
								))}
							</div>
						</div>

						{/* Next / Prev Luxury Arrows */}
						<div className="col-12 col-md-4 text-md-end">
							<div className="slider-arrow-controls d-inline-flex align-items-center gap-2">
								<button
									type="button"
									onClick={prevSlide}
									className="slider-nav-btn"
									aria-label="Previous slide"
								>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
										<polyline points="15 18 9 12 15 6" />
									</svg>
								</button>
								<span className="slider-counter">
									<strong className="current-num">0{activeSlide + 1}</strong>
									<span className="slash">/</span>
									<span className="total-num">0{slides.length}</span>
								</span>
								<button
									type="button"
									onClick={nextSlide}
									className="slider-nav-btn"
									aria-label="Next slide"
								>
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
										<polyline points="9 18 15 12 9 6" />
									</svg>
								</button>
							</div>
						</div>

					</div>
				</div>

				{/* ── Executive Metrics Ticker ── */}
				<div className="hero-light-metrics-bar">
					<div className="metric-cell">
						<div className="metric-figure">10<span className="metric-plus">+</span></div>
						<div className="metric-title">Years GCC Leadership</div>
						<div className="metric-desc">Established across UAE, Bahrain & India</div>
					</div>
					<div className="metric-divider" />
					<div className="metric-cell">
						<div className="metric-figure">500<span className="metric-plus">+</span></div>
						<div className="metric-title">Corporate Clients</div>
						<div className="metric-desc">Multinationals, SMEs & Family Offices</div>
					</div>
					<div className="metric-divider" />
					<div className="metric-cell">
						<div className="metric-figure">100<span className="metric-plus">%</span></div>
						<div className="metric-title">FTA Audit Compliance</div>
						<div className="metric-desc">Statutory precision & governance</div>
					</div>
					<div className="metric-divider" />
					<div className="metric-cell">
						<div className="metric-figure">3<span className="metric-plus">+</span></div>
						<div className="metric-title">GCC & Global Hubs</div>
						<div className="metric-desc">Abu Dhabi, Dubai & Manama</div>
					</div>
				</div>

			</div>

			{/* ── Sophisticated Luxury Light Marquee ── */}
			<div className="hero-luxury-light-marquee">
				<div className="marquee-content-track">
					{[...Array(6)].map((_, i) => (
						<div key={i} className="marquee-segment">
							<span className="gold-star">✦</span>
							<span className="marquee-brand">HEDGE CHARTERED ACCOUNTANTS GROUP</span>
							<span className="marquee-dot">•</span>
							<span className="marquee-highlight">FTA APPROVED TAX AGENCY (TAN 20042456)</span>
							<span className="marquee-dot">•</span>
							<span>STATUTORY AUDIT & ASSURANCE</span>
							<span className="marquee-dot">•</span>
							<span className="marquee-highlight">UAE CORPORATE TAX</span>
							<span className="marquee-dot">•</span>
							<span>ICV CERTIFICATION & E-INVOICING</span>
						</div>
					))}
				</div>
			</div>

			{/* ── Scoped Ultra-Luxury Light Styles ── */}
			<style jsx>{`
				.hero-luxury-light {
					position: relative;
					overflow: hidden;
					background-color: #f8fafc;
					color: #0f172a;
					padding-top: 40px;
					padding-bottom: 20px;
					min-height: 820px;
				}

				/* ── Background Slideshow & Layers ── */
				.hero-slider-bg-wrap {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					overflow: hidden;
					z-index: 1;
				}

				.hero-slide-layer {
					position: absolute;
					inset: 0;
					opacity: 0;
					transform: scale(1.04);
					transition: opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1), transform 8s cubic-bezier(0.25, 1, 0.5, 1);
					pointer-events: none;
				}

				.hero-slide-layer.active {
					opacity: 1;
					transform: scale(1);
				}

				:global(.hero-slide-img) {
					object-fit: cover !important;
					object-position: center center !important;
				}

				/* Sophisticated Light Theme Wash */
				.hero-light-gradient-overlay {
					position: absolute;
					inset: 0;
					background: linear-gradient(
						105deg,
						rgba(255, 255, 255, 0.96) 0%,
						rgba(255, 255, 255, 0.92) 38%,
						rgba(255, 255, 255, 0.82) 58%,
						rgba(255, 255, 255, 0.65) 100%
					);
					z-index: 2;
				}

				@media (max-width: 991px) {
					.hero-light-gradient-overlay {
						background: linear-gradient(
							180deg,
							rgba(255, 255, 255, 0.97) 0%,
							rgba(255, 255, 255, 0.94) 70%,
							rgba(255, 255, 255, 0.88) 100%
						);
					}
				}

				.hero-specular-ambient {
					position: absolute;
					top: -150px;
					right: 10%;
					width: 600px;
					height: 600px;
					background: radial-gradient(circle, rgba(197, 155, 39, 0.12) 0%, rgba(3, 33, 78, 0.04) 50%, transparent 70%);
					pointer-events: none;
					z-index: 2;
				}

				/* ── Content Grid ── */
				.hero-inner-container {
					position: relative;
					z-index: 3;
					max-width: 1540px;
				}

				.min-vh-hero {
					min-height: 560px;
				}

				/* ── Left Editorial Column ── */
				.hero-left-editorial {
					padding-right: 15px;
				}

				/* Prestige Eyebrow Pill */
				.hero-prestige-badge {
					display: inline-flex;
					align-items: center;
					gap: 10px;
					padding: 8px 18px;
					background: rgba(255, 255, 255, 0.88);
					border: 1px solid rgba(197, 155, 39, 0.35);
					border-radius: 999px;
					box-shadow: 0 4px 18px rgba(10, 37, 64, 0.05);
					backdrop-filter: blur(10px);
					-webkit-backdrop-filter: blur(10px);
					margin-bottom: 22px;
				}

				.live-status-dot {
					position: relative;
					width: 10px;
					height: 10px;
					display: inline-flex;
					align-items: center;
					justify-content: center;
				}

				.dot-core {
					width: 8px;
					height: 8px;
					background-color: #10b981;
					border-radius: 50%;
					z-index: 2;
				}

				.dot-ripple {
					position: absolute;
					width: 16px;
					height: 16px;
					background-color: rgba(16, 185, 129, 0.4);
					border-radius: 50%;
					animation: pulseRipple 2s infinite ease-out;
				}

				@keyframes pulseRipple {
					0% { transform: scale(0.6); opacity: 1; }
					100% { transform: scale(1.6); opacity: 0; }
				}

				.prestige-text {
					font-size: 11.5px;
					font-weight: 700;
					letter-spacing: 0.8px;
					color: #03214e;
					text-transform: uppercase;
				}

				/* Editorial Title */
				.hero-editorial-title {
					font-size: clamp(34px, 4.4vw, 56px);
					font-weight: 800;
					line-height: 1.15;
					letter-spacing: -0.8px;
					color: #0f172a;
					margin-bottom: 18px;
				}

				.hero-title-gradient {
					background: linear-gradient(135deg, #03214e 0%, #b8860b 60%, #996515 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					display: inline;
				}

				/* Subtitle */
				.hero-editorial-desc {
					font-size: 16.5px;
					line-height: 1.7;
					color: #475569;
					max-width: 620px;
					margin-bottom: 28px;
				}

				/* Call to Action Buttons */
				.hero-btn-luxury-primary {
					display: inline-flex;
					align-items: center;
					gap: 12px;
					padding: 15px 30px;
					background: linear-gradient(135deg, #03214e 0%, #0a2540 100%);
					color: #ffffff;
					font-size: 15px;
					font-weight: 700;
					border-radius: 12px;
					border: 1px solid rgba(197, 155, 39, 0.4);
					box-shadow: 0 10px 25px -5px rgba(3, 33, 78, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
					transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
					cursor: pointer;
				}

				.hero-btn-luxury-primary:hover {
					transform: translateY(-2px);
					background: linear-gradient(135deg, #b8860b 0%, #03214e 100%);
					box-shadow: 0 16px 32px -6px rgba(184, 134, 11, 0.35);
					color: #ffffff;
				}

				.btn-icon-circle {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					width: 28px;
					height: 28px;
					border-radius: 50%;
					background: rgba(255, 255, 255, 0.15);
					color: #ffffff;
					transition: transform 0.3s ease;
				}

				.hero-btn-luxury-primary:hover .btn-icon-circle {
					transform: translateX(3px);
					background: rgba(255, 255, 255, 0.25);
				}

				.hero-btn-luxury-secondary {
					display: inline-flex;
					align-items: center;
					padding: 15px 26px;
					background: #ffffff;
					color: #03214e;
					font-size: 15px;
					font-weight: 700;
					border-radius: 12px;
					border: 1px solid #e2e8f0;
					box-shadow: 0 4px 15px rgba(15, 23, 42, 0.04);
					transition: all 0.3s ease;
				}

				.hero-btn-luxury-secondary:hover {
					background: #f8fafc;
					border-color: #cbd5e1;
					color: #b8860b;
					transform: translateY(-2px);
				}

				/* Helpline Strip */
				.hero-helpline-strip {
					display: inline-block;
					padding: 6px 14px;
					background: rgba(255, 255, 255, 0.7);
					border: 1px dashed rgba(3, 33, 78, 0.2);
					border-radius: 8px;
					font-size: 13px;
				}

				.helpline-icon {
					color: #c59b27;
					font-size: 15px;
				}

				.helpline-label {
					color: #64748b;
					font-weight: 500;
				}

				.helpline-number {
					color: #03214e;
					font-weight: 700;
					text-decoration: underline;
					text-decoration-color: rgba(197, 155, 39, 0.4);
					transition: color 0.2s;
				}

				.helpline-number:hover {
					color: #b8860b;
				}

				.helpline-badge {
					font-size: 11px;
					color: #475569;
					background: #e2e8f0;
					padding: 2px 7px;
					border-radius: 4px;
					margin-left: 6px;
				}

				/* Trust Matrix */
				.hero-trust-matrix {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					gap: 20px;
					padding: 16px 22px;
					background: rgba(255, 255, 255, 0.85);
					border: 1px solid rgba(226, 232, 240, 0.9);
					border-radius: 16px;
					box-shadow: 0 10px 30px rgba(10, 37, 64, 0.04);
					backdrop-filter: blur(8px);
				}

				.stars-gold {
					color: #f59e0b;
					font-size: 14px;
					letter-spacing: 2px;
				}

				.rating-score {
					font-size: 14px;
					font-weight: 800;
					color: #0f172a;
				}

				.rating-tag {
					font-size: 11px;
					color: #64748b;
					display: block;
					font-weight: 600;
				}

				.matrix-divider {
					width: 1px;
					height: 38px;
					background: #e2e8f0;
				}

				.trust-pillar-items {
					display: flex;
					align-items: center;
					gap: 20px;
					flex-wrap: wrap;
				}

				.pillar-cell {
					display: flex;
					align-items: center;
					gap: 8px;
				}

				.pillar-icon-check {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					width: 18px;
					height: 18px;
					background: rgba(16, 185, 129, 0.15);
					color: #059669;
					font-size: 11px;
					font-weight: 800;
					border-radius: 50%;
				}

				.cell-title {
					font-size: 12px;
					font-weight: 700;
					color: #0f172a;
					display: block;
					line-height: 1.2;
				}

				.cell-sub {
					font-size: 11px;
					color: #64748b;
					display: block;
				}

				/* ── Right Column: Luxury Showcase Card (Replaces Form) ── */
				.hero-luxury-showcase-card {
					position: relative;
					background: #ffffff;
					border: 1px solid rgba(226, 232, 240, 0.9);
					border-radius: 24px;
					padding: 32px 30px;
					box-shadow: 0 20px 45px -10px rgba(10, 37, 64, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02);
					transition: transform 0.3s ease, box-shadow 0.3s ease;
				}

				.hero-luxury-showcase-card:hover {
					box-shadow: 0 25px 55px -10px rgba(10, 37, 64, 0.12);
					transform: translateY(-2px);
				}

				.showcase-gold-accent-line {
					position: absolute;
					top: 0;
					left: 40px;
					right: 40px;
					height: 3px;
					background: linear-gradient(90deg, transparent, #c59b27, transparent);
					border-radius: 0 0 4px 4px;
				}

				.executive-badge {
					display: inline-flex;
					align-items: center;
					gap: 6px;
					font-size: 11px;
					font-weight: 700;
					text-transform: uppercase;
					letter-spacing: 0.5px;
					color: #03214e;
					background: rgba(3, 33, 78, 0.06);
					padding: 4px 10px;
					border-radius: 6px;
				}

				.badge-live-pulse {
					width: 6px;
					height: 6px;
					background-color: #10b981;
					border-radius: 50%;
					display: inline-block;
				}

				.showcase-speed-tag {
					font-size: 11.5px;
					font-weight: 600;
					color: #b8860b;
				}

				.showcase-title {
					font-size: 21px;
					font-weight: 800;
					color: #0f172a;
					margin-bottom: 6px;
					letter-spacing: -0.3px;
				}

				.showcase-subtitle {
					font-size: 13.5px;
					line-height: 1.6;
					color: #64748b;
					margin-bottom: 22px;
				}

				/* Capabilities Grid */
				.showcase-features-grid {
					display: grid;
					grid-template-columns: 1fr;
					gap: 12px;
					margin-bottom: 24px;
				}

				.feature-tile {
					display: flex;
					align-items: flex-start;
					gap: 14px;
					padding: 12px 14px;
					background: #f8fafc;
					border: 1px solid #f1f5f9;
					border-radius: 12px;
					transition: all 0.2s ease;
				}

				.feature-tile:hover {
					background: #ffffff;
					border-color: #e2e8f0;
					box-shadow: 0 4px 12px rgba(10, 37, 64, 0.05);
					transform: translateX(3px);
				}

				.tile-icon-box {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 38px;
					height: 38px;
					border-radius: 10px;
					background: linear-gradient(135deg, rgba(3, 33, 78, 0.08) 0%, rgba(197, 155, 39, 0.12) 100%);
					color: #03214e;
					font-size: 18px;
					flex-shrink: 0;
				}

				.tile-title {
					font-size: 13.5px;
					font-weight: 700;
					color: #0f172a;
					margin-bottom: 2px;
				}

				.tile-desc {
					font-size: 12px;
					color: #64748b;
					line-height: 1.5;
					margin: 0;
				}

				/* Action Box */
				.showcase-action-btn {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 10px;
					padding: 14px 20px;
					background: linear-gradient(135deg, #c59b27 0%, #b8860b 100%);
					color: #ffffff;
					font-size: 14px;
					font-weight: 700;
					border: none;
					border-radius: 12px;
					box-shadow: 0 8px 20px rgba(184, 134, 11, 0.25);
					transition: all 0.3s ease;
					cursor: pointer;
				}

				.showcase-action-btn:hover {
					background: linear-gradient(135deg, #03214e 0%, #0a2540 100%);
					box-shadow: 0 10px 25px rgba(3, 33, 78, 0.3);
					transform: translateY(-2px);
				}

				.showcase-security-note {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 6px;
					font-size: 11px;
					color: #64748b;
					margin-top: 10px;
				}

				/* ── Slider Interactive Controls Bar ── */
				.hero-slider-controls-bar {
					margin-top: 36px;
					padding-top: 24px;
					border-top: 1px solid rgba(226, 232, 240, 0.8);
				}

				.hero-slide-nav-pills {
					display: flex;
					align-items: center;
					gap: 12px;
					flex-wrap: wrap;
				}

				.slide-nav-pill {
					display: flex;
					align-items: center;
					gap: 10px;
					padding: 8px 14px;
					background: rgba(255, 255, 255, 0.8);
					border: 1px solid #e2e8f0;
					border-radius: 10px;
					cursor: pointer;
					transition: all 0.25s ease;
					text-align: left;
				}

				.slide-nav-pill:hover {
					background: #ffffff;
					border-color: #cbd5e1;
				}

				.slide-nav-pill.active {
					background: #ffffff;
					border-color: #c59b27;
					box-shadow: 0 4px 15px rgba(197, 155, 39, 0.15);
				}

				.pill-number {
					font-size: 12px;
					font-weight: 800;
					color: #94a3b8;
				}

				.slide-nav-pill.active .pill-number {
					color: #c59b27;
				}

				.pill-label {
					font-size: 12px;
					font-weight: 600;
					color: #475569;
					display: block;
					line-height: 1.2;
				}

				.slide-nav-pill.active .pill-label {
					color: #0f172a;
					font-weight: 700;
				}

				.pill-progress-track {
					width: 100%;
					height: 2px;
					background: #f1f5f9;
					margin-top: 5px;
					border-radius: 2px;
					overflow: hidden;
				}

				.pill-progress-fill {
					width: 0%;
					height: 100%;
					background: #c59b27;
				}

				.pill-progress-fill.animating {
					animation: progressFill 6s linear forwards;
				}

				@keyframes progressFill {
					0% { width: 0%; }
					100% { width: 100%; }
				}

				/* Slider Arrow Buttons */
				.slider-nav-btn {
					width: 38px;
					height: 38px;
					border-radius: 10px;
					background: #ffffff;
					border: 1px solid #e2e8f0;
					color: #03214e;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					transition: all 0.25s ease;
					box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
				}

				.slider-nav-btn:hover {
					background: #03214e;
					color: #ffffff;
					border-color: #03214e;
					transform: translateY(-1px);
				}

				.slider-counter {
					font-size: 13px;
					font-weight: 600;
					color: #64748b;
					padding: 0 4px;
				}

				.current-num {
					color: #0f172a;
					font-weight: 800;
				}

				.slash {
					margin: 0 3px;
					color: #cbd5e1;
				}

				/* ── Executive Metrics Bar ── */
				.hero-light-metrics-bar {
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					gap: 20px;
					margin-top: 28px;
					padding: 22px 30px;
					background: #ffffff;
					border: 1px solid #e2e8f0;
					border-radius: 18px;
					box-shadow: 0 8px 30px rgba(10, 37, 64, 0.04);
				}

				.metric-cell {
					text-align: left;
				}

				.metric-figure {
					font-size: 28px;
					font-weight: 800;
					color: #03214e;
					line-height: 1;
					margin-bottom: 4px;
				}

				.metric-plus {
					color: #c59b27;
					font-weight: 700;
					margin-left: 1px;
				}

				.metric-title {
					font-size: 13px;
					font-weight: 700;
					color: #0f172a;
					margin-bottom: 2px;
				}

				.metric-desc {
					font-size: 11.5px;
					color: #64748b;
				}

				.metric-divider {
					display: none;
				}

				@media (min-width: 768px) {
					.metric-cell:not(:last-child) {
						border-right: 1px solid #f1f5f9;
						padding-right: 15px;
					}
				}

				@media (max-width: 767px) {
					.hero-light-metrics-bar {
						grid-template-columns: repeat(2, 1fr);
						gap: 16px;
						padding: 18px;
					}
				}

				/* ── Luxury Light Marquee ── */
				.hero-luxury-light-marquee {
					margin-top: 26px;
					padding: 12px 0;
					background: #ffffff;
					border-top: 1px solid #f1f5f9;
					border-bottom: 1px solid #e2e8f0;
					overflow: hidden;
					white-space: nowrap;
				}

				.marquee-content-track {
					display: inline-flex;
					animation: luxuryMarquee 38s linear infinite;
				}

				.marquee-content-track:hover {
					animation-play-state: paused;
				}

				@keyframes luxuryMarquee {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}

				.marquee-segment {
					display: inline-flex;
					align-items: center;
					gap: 14px;
					padding: 0 25px;
					font-size: 12px;
					font-weight: 700;
					letter-spacing: 0.6px;
					color: #475569;
				}

				.gold-star {
					color: #c59b27;
					font-size: 12px;
				}

				.marquee-brand {
					color: #03214e;
					font-weight: 800;
				}

				.marquee-highlight {
					color: #b8860b;
				}

				.marquee-dot {
					color: #cbd5e1;
				}

				/* Responsive Adjustments */
				@media (max-width: 991px) {
					.hero-editorial-title {
						font-size: 32px;
					}
					.hero-left-editorial {
						padding-right: 0;
					}
					.hero-luxury-showcase-card {
						margin-top: 10px;
					}
				}
			`}</style>
		</section>
	);
}
