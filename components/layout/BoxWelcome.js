'use client';

import Image from "next/image"
import Link from "next/link"
import SocialLinks from "@/components/elements/SocialLinks"

export default function BoxWelcome({ handleWelcomeBox, isWelcomeBox }) {
	return (
		<>
			<div className={`box-welcome ${isWelcomeBox ? "active" : ""}`}>
				<div className="tf-overlay" onClick={handleWelcomeBox} />
				<div className="popular-wrap">
					<button 
						type="button" 
						className="btn-close-welcome" 
						onClick={handleWelcomeBox}
						aria-label="Close welcome box"
					>
						<i className="icon-xmark" />
					</button>

					{/* Brand Introduction */}
					<div className="wrap">
						<div className="mb-3">
							<Image
								width="190"
								height="55"
								style={{ objectFit: "contain", height: "55px", width: "auto" }}
								src="/images/logo/logoclear21.png"
								alt="Hedge Chartered Accountants Group"
							/>
						</div>
						<p className="welcome-intro-text">
							Hedge Chartered Accountants Group delivers professional accounting, statutory audit, tax consultancy and compliance solutions for corporate enterprises across the UAE, Bahrain, and India.
						</p>
					</div>

					{/* Head Office Information */}
					<div className="wrap">
						<p className="title">
							Head Office (Abu Dhabi)
						</p>
						<ul className="contact-list mb-20 list-unstyled">
							<li className="mb-2">
								<p className="mb-0 contact-detail-row">
									<strong>Address:</strong>{" "}
									<span>P-2337, Building No:30, Sultan Qubasi Tower, Corniche, Abu Dhabi, UAE</span>
								</p>
							</li>
							<li className="mb-2">
								<p className="mb-0 contact-detail-row">
									<strong>Email:</strong>{" "}
									<Link href="mailto:info@hedgeasglobal.com" className="welcome-email-link">
										info@hedgeasglobal.com
									</Link>
								</p>
							</li>
							<li className="mb-2">
								<p className="mb-0 contact-detail-row">
									<strong>Phone:</strong>{" "}
									<Link href="tel:+971502253373" className="welcome-phone-link">
										+971 50 225 3373
									</Link>
								</p>
							</li>
							<li className="mb-2">
								<p className="mb-0 contact-detail-row">
									<strong>Office Hours:</strong>{" "}
									<span>Mon – Sat: 09:00 AM – 06:00 PM (Sunday: Closed)</span>
								</p>
							</li>
						</ul>

						{/* Social Media Links with Dark Blue / Official Hover Colors */}
						<div className="mb-4">
							<p className="title mb-3 fs-16">Connect With Us</p>
							<SocialLinks itemStyle={{ backgroundColor: 'rgba(7, 30, 61, 0.08)', color: '#071e3d', border: '1px solid rgba(7, 30, 61, 0.12)' }} />
						</div>

						{/* Action Button */}
						<div className="mt-4">
							<Link href="/contact" className="tf-btn w-100 justify-content-center py-3 fs-14 fw-7" onClick={handleWelcomeBox}>
								Schedule Free Consultation
							</Link>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				:global(.box-welcome) {
					z-index: 999999 !important;
				}
				:global(.box-welcome .tf-overlay) {
					background-color: rgba(3, 21, 46, 0.65) !important;
					backdrop-filter: blur(4px) !important;
					-webkit-backdrop-filter: blur(4px) !important;
				}
				.popular-wrap {
					z-index: 1000000 !important;
					background-color: #ffffff !important;
					box-shadow: 0 25px 60px rgba(7, 30, 61, 0.3) !important;
					border-radius: 18px !important;
					border: 1px solid rgba(7, 30, 61, 0.08) !important;
					padding: 40px 36px !important;
					max-width: 480px !important;
					max-height: 92vh !important;
					overflow-y: auto !important;
					top: 50% !important;
					transform: translateY(-50%) translateX(30px) !important;
					transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
				}

				:global(.box-welcome.active .popular-wrap) {
					transform: translateY(-50%) translateX(0px) !important;
				}

				.btn-close-welcome {
					position: absolute !important;
					top: 18px !important;
					right: 18px !important;
					width: 36px !important;
					height: 36px !important;
					border-radius: 50% !important;
					background: #f8fafc !important;
					border: 1px solid #e2e8f0 !important;
					display: flex !important;
					align-items: center !important;
					justify-content: center !important;
					color: #071e3d !important;
					cursor: pointer !important;
					transition: all 0.2s ease !important;
				}

				.btn-close-welcome:hover {
					background: #c8102e !important;
					border-color: #c8102e !important;
					color: #ffffff !important;
					transform: rotate(90deg) !important;
				}

				/* High-contrast, crystal-clear typography */
				.welcome-intro-text {
					color: #334155 !important;
					font-size: 14.5px !important;
					font-weight: 500 !important;
					line-height: 1.68 !important;
					margin: 0 !important;
				}

				.title {
					color: #071e3d !important;
					font-size: 18px !important;
					font-weight: 700 !important;
					padding-left: 18px !important;
					margin-bottom: 12px !important;
					position: relative !important;
				}

				.title::after {
					content: "" !important;
					position: absolute !important;
					width: 6px !important;
					height: 16px !important;
					left: 0 !important;
					top: 50% !important;
					transform: translateY(-50%) !important;
					background-color: #c8102e !important;
					border-radius: 3px !important;
				}

				.contact-detail-row {
					color: #475569 !important;
					font-size: 13.5px !important;
					line-height: 1.6 !important;
				}

				.contact-detail-row strong {
					color: #071e3d !important;
					font-weight: 700 !important;
				}

				.welcome-email-link {
					color: #c8102e !important;
					font-weight: 600 !important;
					text-decoration: none !important;
				}

				.welcome-email-link:hover {
					text-decoration: underline !important;
				}

				.welcome-phone-link {
					color: #071e3d !important;
					font-weight: 700 !important;
					text-decoration: none !important;
				}

				.welcome-phone-link:hover {
					color: #c8102e !important;
				}

				@media (max-width: 576px) {
					.popular-wrap {
						right: 12px !important;
						left: 12px !important;
						max-width: calc(100% - 24px) !important;
						padding: 30px 20px !important;
					}
				}
			`}</style>
		</>
	)
}
