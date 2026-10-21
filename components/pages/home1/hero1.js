'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
	{
		id: 1,
		image: '/images/banner/hero_slide_1_dubai.jpg',
		badge: 'FTA-APPROVED TAX AGENCY • TAN 20042456 • UAE • BAHRAIN • INDIA',
		tag: 'Dubai & Abu Dhabi Financial Hubs',
		titleLead: 'Financial Clarity for',
		titleHighlight: 'Confident Business',
		titleEnd: 'Decisions.',
		subtitle: 'Senior Chartered Accountants and registered tax advisors delivering statutory audit, UAE Corporate Tax compliance, VAT filing, and corporate advisory with executive precision.',
		statsLabel: 'UAE Commercial Leadership'
	},
	{
		id: 2,
		image: '/images/banner/hero_slide_2_boardroom.jpg',
		badge: 'INSTITUTIONAL FINANCIAL GOVERNANCE',
		tag: 'Executive Boardroom & Audit Practice',
		titleLead: 'Strategic Tax Advisory &',
		titleHighlight: 'IFRS Statutory Audit',
		titleEnd: 'Excellence.',
		subtitle: 'Safeguard your corporate compliance with FTA-approved tax representation, audited financial statements, and end-to-end corporate governance trusted by 500+ enterprises.',
		statsLabel: 'Statutory Assurance & Trust'
	},
	{
		id: 3,
		image: '/images/banner/hero_slide_3_financial_center.jpg',
		badge: 'MANDATORY COMPLIANCE EXPERTS',
		tag: 'Corporate Tax & ERP Compliance',
		titleLead: 'Seamless Readiness for',
		titleHighlight: 'UAE Corporate Tax &',
		titleEnd: 'E-Invoicing.',
		subtitle: 'Navigate the 9% UAE Corporate Tax regime, Qualifying Free Zone exemptions, and Peppol E-Invoicing mandates with seasoned chartered accountants.',
		statsLabel: 'FTA & Peppol Compliance'
	},
	{
		id: 4,
		image: '/images/banner/hero_slide_4_office_daylight.jpg',
		badge: 'PARTNER-LED STRATEGY',
		tag: 'Private Client & Corporate Advisory',
		titleLead: 'Bespoke Advisory for',
		titleHighlight: 'Sustainable Corporate',
		titleEnd: 'Growth.',
		subtitle: 'From ICV certification and bookkeeping to cross-border structuring, we provide the institutional rigor and local insight your business demands.',
		statsLabel: 'Cross-Border GCC Expansion'
	}
];

export default function Hero1() {
	const [activeSlide, setActiveSlide] = useState(0);
	const [isPaused, setIsPaused] = useState(false);
	const timerRef = useRef(null);

	// Autoplay slider (6.5s per slide)
	useEffect(() => {
		if (isPaused) return;

		timerRef.current = setInterval(() => {
			setActiveSlide((prev) => (prev + 1) % slides.length);
		}, 6500);

		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
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
			className="hero-fullscreen-luxury"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			aria-label="Hedge Chartered Accountants Group Ultra-Premium Hero"
		>
			{/* ── Full-Width Photorealistic Carousel Slides ── */}
			<div className="hero-carousel-canvas">
				{slides.map((slide, idx) => (
					<div
						key={slide.id}
						className={`carousel-slide-layer ${idx === activeSlide ? 'is-active' : ''}`}
						aria-hidden={idx !== activeSlide}
					>
						<Image
							src={slide.image}
							alt={slide.titleHighlight}
							fill
							priority={idx === 0}
							sizes="100vw"
							className="carousel-bg-image"
						/>
					</div>
				))}

				{/* Luminous Light Luxury Overlay for Maximum Clarity */}
				<div className="carousel-light-vignette" />
				<div className="carousel-ambient-glow-center" />
			</div>

			{/* ── Center-Aligned Hero Content Stage ── */}
			<div className="hero-content-stage">
				<div className="container hero-center-container">
					
					{/* Floating Glassmorphic Editorial Card */}
					<div className="hero-editorial-glass-card" key={`card-${activeSlide}`}>
						
						{/* Shimmer Specular Top Accent */}
						<div className="card-specular-accent" />

						{/* Prestige Authority Eyebrow Badge */}
						<div className="hero-eyebrow-pill animate-fade-down">
							<span className="live-emerald-beacon">
								<span className="beacon-core" />
								<span className="beacon-ring" />
							</span>
							<span className="eyebrow-text">{current.badge}</span>
						</div>

						{/* Centered Editorial Heading */}
						<h1 className="hero-headline font-main-2 animate-fade-up">
							{current.titleLead}{' '}
							<span className="headline-gold-gradient">
								{current.titleHighlight}
							</span>{' '}
							{current.titleEnd}
						</h1>

						{/* Centered Luxury Subtitle */}
						<p className="hero-description font-main-2 animate-fade-up delay-1">
							{current.subtitle}
						</p>

						{/* Centered Call to Action Buttons */}
						<div className="hero-cta-action-group animate-fade-up delay-2">
							<button
								type="button"
								onClick={scrollToConsultation}
								className="hero-btn-primary-luxury"
							>
								<span className="btn-text">Schedule Executive Consultation</span>
								<span className="btn-icon-wrapper">
									<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
										<line x1="5" y1="12" x2="19" y2="12" />
										<polyline points="12 5 19 12 12 19" />
									</svg>
								</span>
							</button>

							<Link href="/our-service" className="hero-btn-secondary-luxury">
								<span>Explore Advisory Services</span>
								<i className="icon-angles-right ms-2 fs-12" />
							</Link>
						</div>

						{/* Direct Helpline & Speed Reassurance */}
						<div className="hero-reassurance-row animate-fade-up delay-3">
							<div className="reassurance-item">
								<i className="flaticon-phone-call text-gold" />
								<span className="text-muted-dark">Direct Helpline:</span>
								<Link href="tel:+971502253373" className="phone-link">
									+971 50 225 3373
								</Link>
							</div>
							<span className="reassurance-separator">•</span>
							<div className="reassurance-item">
								<span className="gold-sparkle">⚡</span>
								<span className="text-muted-dark">Senior Partner Review within 2 Hours</span>
							</div>
							<span className="reassurance-separator">•</span>
							<div className="reassurance-item">
								<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="2.2">
									<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
									<path d="M7 11V7a5 5 0 0 1 10 0v4" />
								</svg>
								<span className="text-muted-dark">100% Confidential Strategy Session</span>
							</div>
						</div>

						{/* Centered Trust Credentials Matrix */}
						<div className="hero-trust-credentials animate-fade-up delay-3">
							{/* Google Verified Review */}
							<div className="trust-pill-item">
								<svg width="20" height="20" viewBox="0 0 24 24" className="flex-shrink-0">
									<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
									<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
									<path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
									<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
								</svg>
								<span className="stars-gold">★★★★★</span>
								<span className="trust-bold">4.9 / 5.0</span>
								<span className="trust-label">(500+ Corporate Clients)</span>
							</div>

							<div className="trust-pill-divider" />

							{/* FTA Approved Agency */}
							<div className="trust-pill-item">
								<span className="check-emerald">✓</span>
								<span className="trust-bold">FTA Registered Tax Agency</span>
								<span className="trust-label">Pioneer Hedge (TAN 20042456)</span>
							</div>

							<div className="trust-pill-divider" />

							{/* IFRS Global Compliance */}
							<div className="trust-pill-item">
								<span className="check-emerald">✓</span>
								<span className="trust-bold">IFRS Global Audit Standards</span>
								<span className="trust-label">Chartered Accountants & Advisors</span>
							</div>
						</div>

					</div>

					{/* ── Centered Carousel Navigation Controls ── */}
					<div className="hero-carousel-controls-centered">
						
						{/* Prev Arrow */}
						<button
							type="button"
							onClick={prevSlide}
							className="carousel-arrow-btn"
							aria-label="Previous banner slide"
						>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
								<polyline points="15 18 9 12 15 6" />
							</svg>
						</button>

						{/* Numbered Progress Pills */}
						<div className="carousel-nav-tabs">
							{slides.map((s, idx) => (
								<button
									key={s.id}
									type="button"
									onClick={() => goToSlide(idx)}
									className={`carousel-nav-tab ${idx === activeSlide ? 'active' : ''}`}
									aria-label={`Slide ${idx + 1}: ${s.tag}`}
								>
									<span className="tab-number">0{idx + 1}</span>
									<span className="tab-title">{s.tag}</span>
									<div className="tab-progress-track">
										<div className={`tab-progress-bar ${idx === activeSlide && !isPaused ? 'filling' : ''}`} />
									</div>
								</button>
							))}
						</div>

						{/* Next Arrow */}
						<button
							type="button"
							onClick={nextSlide}
							className="carousel-arrow-btn"
							aria-label="Next banner slide"
						>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
								<polyline points="9 18 15 12 9 6" />
							</svg>
						</button>

					</div>

					{/* ── Executive Metrics Ticker (Centered & Integrated) ── */}
					<div className="hero-metrics-strip-centered">
						<div className="row g-3 g-md-4 text-center justify-content-center">
							<div className="col-6 col-md-3">
								<div className="metric-box-centered">
									<div className="metric-number">10<span className="plus">+</span></div>
									<div className="metric-headline">Years GCC Excellence</div>
									<div className="metric-subline">UAE • Bahrain • India</div>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="metric-box-centered">
									<div className="metric-number">500<span className="plus">+</span></div>
									<div className="metric-headline">Corporate Clients</div>
									<div className="metric-subline">Regional Enterprises & Groups</div>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="metric-box-centered">
									<div className="metric-number">100<span className="plus">%</span></div>
									<div className="metric-headline">FTA Audit Compliance</div>
									<div className="metric-subline">Zero-Penalty Track Record</div>
								</div>
							</div>
							<div className="col-6 col-md-3">
								<div className="metric-box-centered">
									<div className="metric-number">3<span className="plus">+</span></div>
									<div className="metric-headline">Global Practice Hubs</div>
									<div className="metric-subline">Abu Dhabi, Dubai & Manama</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			{/* ── Full-Width Luxury Marquee Ribbon ── */}
			<div className="hero-bottom-marquee-ribbon">
				<div className="marquee-rail">
					{[...Array(6)].map((_, i) => (
						<div key={i} className="marquee-block">
							<span className="gold-sparkle-icon">✦</span>
							<span className="brand-name">HEDGE CHARTERED ACCOUNTANTS GROUP</span>
							<span className="dot-divider">•</span>
							<span className="gold-term">FTA APPROVED TAX AGENCY (TAN 20042456)</span>
							<span className="dot-divider">•</span>
							<span>STATUTORY AUDIT & ASSURANCE</span>
							<span className="dot-divider">•</span>
							<span className="gold-term">UAE CORPORATE TAX (9%)</span>
							<span className="dot-divider">•</span>
							<span>VAT COMPLIANCE & ICV CERTIFICATION</span>
							<span className="dot-divider">•</span>
							<span className="gold-term">UAE E-INVOICING (PEPPOL)</span>
						</div>
					))}
				</div>
			</div>

			{/* ── Scoped Ultra-Luxury CSS ── */}
			<style jsx>{`
				.hero-fullscreen-luxury {
					position: relative;
					overflow: hidden;
					width: 100%;
					min-height: 820px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					background-color: #f8fafc;
					color: #0f172a;
				}

				/* ── Full-Width Canvas & Slides ── */
				.hero-carousel-canvas {
					position: absolute;
					inset: 0;
					overflow: hidden;
					z-index: 1;
				}

				.carousel-slide-layer {
					position: absolute;
					inset: 0;
					opacity: 0;
					transform: scale(1.05);
					transition: opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1), transform 9s cubic-bezier(0.25, 1, 0.5, 1);
					pointer-events: none;
				}

				.carousel-slide-layer.is-active {
					opacity: 1;
					transform: scale(1);
				}

				:global(.carousel-bg-image) {
					object-fit: cover !important;
					object-position: center center !important;
				}

				/* Light Theme Vignette for High Readability */
				.carousel-light-vignette {
					position: absolute;
					inset: 0;
					background: radial-gradient(
						circle at 50% 45%,
						rgba(255, 255, 255, 0.88) 0%,
						rgba(255, 255, 255, 0.93) 55%,
						rgba(255, 255, 255, 0.97) 100%
					);
					z-index: 2;
				}

				.carousel-ambient-glow-center {
					position: absolute;
					top: 30%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 900px;
					height: 600px;
					background: radial-gradient(circle, rgba(197, 155, 39, 0.12) 0%, rgba(3, 33, 78, 0.05) 50%, transparent 75%);
					pointer-events: none;
					z-index: 2;
				}

				/* ── Center Content Stage ── */
				.hero-content-stage {
					position: relative;
					z-index: 3;
					padding-top: 50px;
					padding-bottom: 25px;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-grow: 1;
				}

				.hero-center-container {
					max-width: 1180px;
					margin: 0 auto;
					text-align: center;
				}

				/* ── Floating Editorial Glass Card ── */
				.hero-editorial-glass-card {
					position: relative;
					margin: 0 auto;
					padding: 44px 38px 36px;
					background: rgba(255, 255, 255, 0.92);
					backdrop-filter: blur(24px);
					-webkit-backdrop-filter: blur(24px);
					border: 1px solid rgba(255, 255, 255, 0.95);
					border-radius: 28px;
					box-shadow: 0 30px 80px -20px rgba(10, 37, 64, 0.12), 0 0 0 1px rgba(197, 155, 39, 0.18);
					text-align: center;
					max-width: 1040px;
				}

				.card-specular-accent {
					position: absolute;
					top: 0;
					left: 15%;
					right: 15%;
					height: 3px;
					background: linear-gradient(90deg, transparent, #c59b27, #f59e0b, #c59b27, transparent);
					border-radius: 0 0 4px 4px;
				}

				/* Eyebrow Pill */
				.hero-eyebrow-pill {
					display: inline-flex;
					align-items: center;
					gap: 9px;
					padding: 7px 20px;
					background: rgba(255, 255, 255, 0.95);
					border: 1px solid rgba(197, 155, 39, 0.35);
					border-radius: 999px;
					box-shadow: 0 4px 15px rgba(10, 37, 64, 0.04);
					margin-bottom: 22px;
				}

				.live-emerald-beacon {
					position: relative;
					width: 10px;
					height: 10px;
					display: inline-flex;
					align-items: center;
					justify-content: center;
				}

				.beacon-core {
					width: 8px;
					height: 8px;
					background-color: #10b981;
					border-radius: 50%;
					z-index: 2;
				}

				.beacon-ring {
					position: absolute;
					width: 16px;
					height: 16px;
					background-color: rgba(16, 185, 129, 0.45);
					border-radius: 50%;
					animation: ringRipple 2s infinite ease-out;
				}

				@keyframes ringRipple {
					0% { transform: scale(0.6); opacity: 1; }
					100% { transform: scale(1.6); opacity: 0; }
				}

				.eyebrow-text {
					font-size: 11.5px;
					font-weight: 800;
					letter-spacing: 0.9px;
					color: #03214e;
					text-transform: uppercase;
				}

				/* Headline */
				.hero-headline {
					font-size: clamp(32px, 4.2vw, 54px);
					font-weight: 800;
					line-height: 1.18;
					letter-spacing: -0.7px;
					color: #0f172a;
					margin-bottom: 18px;
					max-width: 900px;
					margin-left: auto;
					margin-right: auto;
				}

				.headline-gold-gradient {
					background: linear-gradient(135deg, #03214e 0%, #b8860b 55%, #996515 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					display: inline;
				}

				/* Description */
				.hero-description {
					font-size: 17px;
					line-height: 1.7;
					color: #334155;
					max-width: 740px;
					margin: 0 auto 30px;
				}

				/* CTA Button Group */
				.hero-cta-action-group {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					gap: 16px;
					margin-bottom: 24px;
				}

				.hero-btn-primary-luxury {
					display: inline-flex;
					align-items: center;
					gap: 12px;
					padding: 16px 34px;
					background: linear-gradient(135deg, #03214e 0%, #0a2540 100%);
					color: #ffffff;
					font-size: 15.5px;
					font-weight: 700;
					border-radius: 12px;
					border: 1px solid rgba(197, 155, 39, 0.45);
					box-shadow: 0 12px 28px -6px rgba(3, 33, 78, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.2) inset;
					transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
					cursor: pointer;
				}

				.hero-btn-primary-luxury:hover {
					transform: translateY(-2px);
					background: linear-gradient(135deg, #b8860b 0%, #03214e 100%);
					box-shadow: 0 18px 36px -6px rgba(184, 134, 11, 0.4);
					color: #ffffff;
				}

				.btn-icon-wrapper {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					width: 28px;
					height: 28px;
					border-radius: 50%;
					background: rgba(255, 255, 255, 0.16);
					color: #ffffff;
					transition: transform 0.3s ease;
				}

				.hero-btn-primary-luxury:hover .btn-icon-wrapper {
					transform: translateX(4px);
					background: rgba(255, 255, 255, 0.28);
				}

				.hero-btn-secondary-luxury {
					display: inline-flex;
					align-items: center;
					padding: 16px 30px;
					background: #ffffff;
					color: #03214e;
					font-size: 15.5px;
					font-weight: 700;
					border-radius: 12px;
					border: 1px solid #cbd5e1;
					box-shadow: 0 4px 15px rgba(15, 23, 42, 0.04);
					transition: all 0.3s ease;
				}

				.hero-btn-secondary-luxury:hover {
					background: #f8fafc;
					border-color: #94a3b8;
					color: #b8860b;
					transform: translateY(-2px);
				}

				/* Reassurance Row */
				.hero-reassurance-row {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					gap: 12px;
					font-size: 13px;
					color: #64748b;
					margin-bottom: 22px;
				}

				.reassurance-item {
					display: inline-flex;
					align-items: center;
					gap: 6px;
				}

				.text-muted-dark {
					color: #475569;
					font-weight: 500;
				}

				.phone-link {
					color: #03214e;
					font-weight: 700;
					text-decoration: underline;
					text-decoration-color: rgba(197, 155, 39, 0.4);
					transition: color 0.2s;
				}

				.phone-link:hover {
					color: #b8860b;
				}

				.reassurance-separator {
					color: #cbd5e1;
				}

				.text-gold {
					color: #c59b27;
				}

				.gold-sparkle {
					color: #f59e0b;
				}

				/* Trust Credentials Matrix */
				.hero-trust-credentials {
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					gap: 16px;
					padding-top: 18px;
					border-top: 1px solid #f1f5f9;
				}

				.trust-pill-item {
					display: inline-flex;
					align-items: center;
					gap: 8px;
					font-size: 12.5px;
				}

				.stars-gold {
					color: #f59e0b;
					letter-spacing: 2px;
					font-size: 13px;
				}

				.trust-bold {
					font-weight: 700;
					color: #0f172a;
				}

				.trust-label {
					color: #64748b;
				}

				.check-emerald {
					display: inline-flex;
					align-items: center;
					justify-content: center;
					width: 17px;
					height: 17px;
					background: rgba(16, 185, 129, 0.15);
					color: #059669;
					font-size: 11px;
					font-weight: 800;
					border-radius: 50%;
				}

				.trust-pill-divider {
					width: 1px;
					height: 24px;
					background: #e2e8f0;
				}

				/* ── Centered Carousel Navigation Controls ── */
				.hero-carousel-controls-centered {
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 16px;
					margin-top: 26px;
				}

				.carousel-arrow-btn {
					width: 40px;
					height: 40px;
					border-radius: 12px;
					background: rgba(255, 255, 255, 0.9);
					border: 1px solid #e2e8f0;
					color: #03214e;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					box-shadow: 0 4px 12px rgba(10, 37, 64, 0.05);
					transition: all 0.25s ease;
				}

				.carousel-arrow-btn:hover {
					background: #03214e;
					color: #ffffff;
					border-color: #03214e;
					transform: translateY(-2px);
					box-shadow: 0 8px 18px rgba(3, 33, 78, 0.2);
				}

				.carousel-nav-tabs {
					display: flex;
					align-items: center;
					gap: 10px;
					flex-wrap: wrap;
					justify-content: center;
				}

				.carousel-nav-tab {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 4px;
					padding: 8px 16px;
					background: rgba(255, 255, 255, 0.85);
					border: 1px solid #e2e8f0;
					border-radius: 12px;
					cursor: pointer;
					transition: all 0.25s ease;
					text-align: left;
					min-width: 160px;
				}

				.carousel-nav-tab:hover {
					background: #ffffff;
					border-color: #cbd5e1;
				}

				.carousel-nav-tab.active {
					background: #ffffff;
					border-color: #c59b27;
					box-shadow: 0 6px 20px rgba(197, 155, 39, 0.16);
				}

				.tab-number {
					font-size: 11px;
					font-weight: 800;
					color: #94a3b8;
				}

				.carousel-nav-tab.active .tab-number {
					color: #c59b27;
				}

				.tab-title {
					font-size: 12px;
					font-weight: 600;
					color: #475569;
					line-height: 1.2;
				}

				.carousel-nav-tab.active .tab-title {
					color: #0f172a;
					font-weight: 700;
				}

				.tab-progress-track {
					width: 100%;
					height: 2px;
					background: #f1f5f9;
					border-radius: 2px;
					overflow: hidden;
					margin-top: 2px;
				}

				.tab-progress-bar {
					width: 0%;
					height: 100%;
					background: #c59b27;
				}

				.tab-progress-bar.filling {
					animation: fillProgress 6.5s linear forwards;
				}

				@keyframes fillProgress {
					0% { width: 0%; }
					100% { width: 100%; }
				}

				/* ── Executive Metrics Ticker Centered ── */
				.hero-metrics-strip-centered {
					margin-top: 24px;
					padding: 20px 24px;
					background: rgba(255, 255, 255, 0.9);
					backdrop-filter: blur(14px);
					border: 1px solid #e2e8f0;
					border-radius: 18px;
					box-shadow: 0 8px 30px rgba(10, 37, 64, 0.04);
				}

				.metric-box-centered {
					padding: 4px;
				}

				.metric-number {
					font-size: 28px;
					font-weight: 800;
					color: #03214e;
					line-height: 1;
					margin-bottom: 4px;
				}

				.plus {
					color: #c59b27;
					font-weight: 700;
					margin-left: 2px;
				}

				.metric-headline {
					font-size: 13px;
					font-weight: 700;
					color: #0f172a;
					margin-bottom: 2px;
				}

				.metric-subline {
					font-size: 11.5px;
					color: #64748b;
				}

				/* ── Bottom Marquee Ribbon ── */
				.hero-bottom-marquee-ribbon {
					position: relative;
					z-index: 3;
					margin-top: 20px;
					padding: 12px 0;
					background: #ffffff;
					border-top: 1px solid #f1f5f9;
					border-bottom: 1px solid #e2e8f0;
					overflow: hidden;
					white-space: nowrap;
				}

				.marquee-rail {
					display: inline-flex;
					animation: luxuryMarqueeScroll 38s linear infinite;
				}

				.marquee-rail:hover {
					animation-play-state: paused;
				}

				@keyframes luxuryMarqueeScroll {
					0% { transform: translateX(0); }
					100% { transform: translateX(-50%); }
				}

				.marquee-block {
					display: inline-flex;
					align-items: center;
					gap: 14px;
					padding: 0 25px;
					font-size: 12px;
					font-weight: 700;
					letter-spacing: 0.6px;
					color: #475569;
				}

				.gold-sparkle-icon {
					color: #c59b27;
					font-size: 12px;
				}

				.brand-name {
					color: #03214e;
					font-weight: 800;
				}

				.gold-term {
					color: #b8860b;
				}

				.dot-divider {
					color: #cbd5e1;
				}

				/* Smooth Animations */
				.animate-fade-up {
					animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
				}

				.animate-fade-down {
					animation: fadeSlideDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
				}

				.delay-1 { animation-delay: 0.1s; }
				.delay-2 { animation-delay: 0.2s; }
				.delay-3 { animation-delay: 0.3s; }

				@keyframes fadeSlideUp {
					0% { opacity: 0; transform: translateY(14px); }
					100% { opacity: 1; transform: translateY(0); }
				}

				@keyframes fadeSlideDown {
					0% { opacity: 0; transform: translateY(-10px); }
					100% { opacity: 1; transform: translateY(0); }
				}

				/* Responsive Breakpoints */
				@media (max-width: 991px) {
					.hero-editorial-glass-card {
						padding: 34px 22px 28px;
						border-radius: 20px;
					}
					.hero-headline {
						font-size: 32px;
					}
					.hero-description {
						font-size: 15px;
					}
					.carousel-nav-tab {
						min-width: 140px;
						padding: 6px 12px;
					}
					.trust-pill-divider {
						display: none;
					}
					.hero-trust-credentials {
						flex-direction: column;
						gap: 10px;
					}
				}

				@media (max-width: 575px) {
					.hero-btn-primary-luxury,
					.hero-btn-secondary-luxury {
						width: 100%;
						justify-content: center;
					}
					.carousel-nav-tabs {
						display: none;
					}
				}
			`}</style>
		</section>
	);
}
