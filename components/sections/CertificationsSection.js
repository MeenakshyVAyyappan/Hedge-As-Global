'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'

const certificates = [
	{
		body: "CPA Australia",
		credential: "Certified Practising Accountant (CPA)",
		holder: "Obaid Mohammed Alameri",
		detail: "Admitted 6 September 2024",
		image: "/images/certificates/cpa-australia.jpg",
		width: 1177,
		height: 1800
	},
	{
		body: "CIMA, United Kingdom",
		credential: "Chartered Management Accountant",
		holder: "Obaid Alameri",
		detail: "Admitted 26 June 2024",
		image: "/images/certificates/cima.jpg",
		width: 1237,
		height: 1800
	},
	{
		body: "Emirates Association for Accountants & Auditors",
		credential: "UAE Professional Fellowship",
		holder: "Anjith Reghukumar",
		detail: "Valid until 15 January 2027",
		image: "/images/certificates/eaaa-fellowship.jpg",
		width: 1273,
		height: 1800
	},
	{
		body: "Institute of Public Accountants, Australia",
		credential: "Fellow (FIPA)",
		holder: "Anjith Reghu Kumar",
		detail: "Admitted 2 March 2022",
		image: "/images/certificates/ipa-fellow.jpg",
		width: 1274,
		height: 1800
	},
	{
		body: "Institute of Financial Accountants, UK",
		credential: "Fellow (FFA)",
		holder: "Anjith Reghu Kumar",
		detail: "Admitted 2 March 2022",
		image: "/images/certificates/ifa-fellow.jpg",
		width: 1274,
		height: 1800
	}
]

export default function CertificationsSection({ bg = "#f8fafc" }) {
	const [active, setActive] = useState(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => setMounted(true), [])

	const close = useCallback(() => setActive(null), [])
	const step = useCallback((dir) => {
		setActive((i) => (i === null ? i : (i + dir + certificates.length) % certificates.length))
	}, [])

	useEffect(() => {
		if (active === null) return
		const onKey = (e) => {
			if (e.key === 'Escape') close()
			if (e.key === 'ArrowRight') step(1)
			if (e.key === 'ArrowLeft') step(-1)
		}
		document.addEventListener('keydown', onKey)
		const prevOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.removeEventListener('keydown', onKey)
			document.body.style.overflow = prevOverflow
		}
	}, [active, close, step])

	const current = active !== null ? certificates[active] : null

	return (
		<section id="accreditations" style={{ backgroundColor: bg, paddingTop: '60px', paddingBottom: '64px' }}>
			<div className="tf-container">
				<div className="row justify-content-center text-center mb-50">
					<div className="col-lg-8">
						<p className="s-sub-title text-red mb-18 justify-center">
							<i className="icon-angles-right moveLeftToRight" />
							PROFESSIONAL ACCREDITATIONS
						</p>
						<h2 className="s-title font-main-2 text-dark fs-38 fw-7 mb-3">
							Globally Recognised Credentials
						</h2>
						<p className="text-muted fs-16 mx-auto" style={{ maxWidth: '680px' }}>
							Our leadership holds professional memberships with leading accountancy bodies in the UAE, Australia, and the United Kingdom, bringing international standards to every engagement.
						</p>
					</div>
				</div>

				<div className="hedge-cert-grid">
					{certificates.map((cert, index) => (
						<button
							key={cert.image}
							type="button"
							className="hedge-cert-card"
							onClick={() => setActive(index)}
							aria-label={`View ${cert.credential} certificate from ${cert.body}`}
						>
							<div className="hedge-cert-frame">
								<div className="hedge-cert-paper">
									<div className="hedge-cert-sheet">
										<Image
											src={cert.image}
											alt={`${cert.body} – ${cert.credential} certificate`}
											fill
											quality={85}
											sizes="(max-width: 767px) 45vw, (max-width: 1199px) 30vw, 240px"
											style={{ objectFit: 'contain' }}
										/>
									</div>
								</div>
								<span className="hedge-cert-zoom">
									<i className="icon-search" aria-hidden="true" /> View certificate
								</span>
							</div>
							<div className="hedge-cert-info">
								<span className="hedge-cert-body">{cert.body}</span>
								<span className="hedge-cert-credential">{cert.credential}</span>
								<span className="hedge-cert-holder">{cert.holder}</span>
								<span className="hedge-cert-detail">{cert.detail}</span>
							</div>
						</button>
					))}
				</div>
			</div>

			{mounted && current && createPortal(
				<div className="hedge-cert-lightbox" role="dialog" aria-modal="true" aria-label={`${current.credential} certificate`} onClick={close}>
					<button type="button" className="hedge-cert-close" onClick={close} aria-label="Close">×</button>
					<button type="button" className="hedge-cert-nav prev" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous certificate">‹</button>
					<figure className="hedge-cert-figure" onClick={(e) => e.stopPropagation()}>
						<Image
							src={current.image}
							alt={`${current.body} – ${current.credential} certificate`}
							width={current.width}
							height={current.height}
							quality={90}
							sizes="(max-width: 768px) 92vw, 640px"
							style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '78vh', display: 'block', margin: '0 auto', borderRadius: '6px' }}
							priority
						/>
						<figcaption>
							<strong>{current.credential}</strong>
							<span>{current.body} · {current.holder}</span>
						</figcaption>
					</figure>
					<button type="button" className="hedge-cert-nav next" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next certificate">›</button>
				</div>,
				document.body
			)}

			<style jsx>{`
				.hedge-cert-grid {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 24px;
				}
				.hedge-cert-card {
					flex: 0 1 calc((100% - 96px) / 5);
					min-width: 0;
					display: flex;
					flex-direction: column;
					text-align: left;
					background: #ffffff;
					border: 1px solid #e2e8f0;
					border-radius: 16px;
					padding: 0;
					overflow: hidden;
					cursor: zoom-in;
					box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
					transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
				}
				.hedge-cert-card:hover,
				.hedge-cert-card:focus-visible {
					transform: translateY(-6px);
					box-shadow: 0 18px 40px rgba(3, 33, 78, 0.12);
					border-color: rgba(200, 16, 46, 0.25);
					outline: none;
				}
				.hedge-cert-frame {
					position: relative;
					padding: 22px 22px 18px;
					background: linear-gradient(160deg, #eef2f7 0%, #f8fafc 100%);
					border-bottom: 1px solid #eef2f6;
				}
				.hedge-cert-paper {
					background: #ffffff;
					padding: 6px;
					border-radius: 4px;
					box-shadow: 0 10px 24px rgba(15, 23, 42, 0.14);
					transition: transform 0.35s ease;
				}
				.hedge-cert-sheet {
					position: relative;
					width: 100%;
					aspect-ratio: 1 / 1.414;
					background: #ffffff;
				}
				.hedge-cert-card:hover .hedge-cert-paper {
					transform: scale(1.02);
				}
				.hedge-cert-zoom {
					position: absolute;
					left: 50%;
					bottom: 26px;
					transform: translate(-50%, 8px);
					opacity: 0;
					background: #03214e;
					color: #ffffff;
					font-size: 12px;
					font-weight: 600;
					padding: 7px 14px;
					border-radius: 999px;
					white-space: nowrap;
					transition: opacity 0.3s ease, transform 0.3s ease;
				}
				.hedge-cert-card:hover .hedge-cert-zoom,
				.hedge-cert-card:focus-visible .hedge-cert-zoom {
					opacity: 1;
					transform: translate(-50%, 0);
				}
				.hedge-cert-info {
					display: flex;
					flex-direction: column;
					gap: 4px;
					padding: 18px 20px 22px;
					flex-grow: 1;
				}
				.hedge-cert-body {
					font-size: 11px;
					font-weight: 700;
					letter-spacing: 0.8px;
					text-transform: uppercase;
					color: #c8102e;
					line-height: 1.4;
				}
				.hedge-cert-credential {
					font-size: 16px;
					font-weight: 700;
					color: #0f172a;
					line-height: 1.35;
				}
				.hedge-cert-holder {
					font-size: 14px;
					font-weight: 600;
					color: #03214e;
					margin-top: 6px;
				}
				.hedge-cert-detail {
					font-size: 13px;
					color: #64748b;
				}

				.hedge-cert-lightbox {
					position: fixed;
					inset: 0;
					z-index: 9999;
					background: rgba(3, 18, 40, 0.88);
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 24px 72px;
					cursor: zoom-out;
				}
				.hedge-cert-figure {
					margin: 0;
					max-width: 640px;
					width: 100%;
					cursor: default;
				}
				.hedge-cert-figure figcaption {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 2px;
					margin-top: 14px;
					color: #ffffff;
					text-align: center;
				}
				.hedge-cert-figure figcaption strong {
					font-size: 16px;
				}
				.hedge-cert-figure figcaption span {
					font-size: 13px;
					color: rgba(255, 255, 255, 0.7);
				}
				.hedge-cert-close,
				.hedge-cert-nav {
					position: absolute;
					border: 0;
					background: rgba(255, 255, 255, 0.12);
					color: #ffffff;
					width: 46px;
					height: 46px;
					border-radius: 50%;
					font-size: 28px;
					line-height: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					transition: background 0.25s ease;
				}
				.hedge-cert-close:hover,
				.hedge-cert-nav:hover {
					background: #c8102e;
				}
				.hedge-cert-close {
					top: 20px;
					right: 20px;
				}
				.hedge-cert-nav {
					top: 50%;
					transform: translateY(-50%);
				}
				.hedge-cert-nav.prev {
					left: 16px;
				}
				.hedge-cert-nav.next {
					right: 16px;
				}

				@media (max-width: 1199px) {
					.hedge-cert-card {
						flex-basis: calc((100% - 48px) / 3);
					}
				}
				@media (max-width: 767px) {
					.hedge-cert-grid {
						gap: 16px;
					}
					.hedge-cert-card {
						flex-basis: calc((100% - 16px) / 2);
					}
					.hedge-cert-frame {
						padding: 14px 14px 12px;
					}
					.hedge-cert-info {
						padding: 14px 14px 16px;
					}
					.hedge-cert-credential {
						font-size: 14px;
					}
					.hedge-cert-holder {
						font-size: 13px;
					}
					.hedge-cert-detail {
						font-size: 12px;
					}
					.hedge-cert-zoom {
						display: none;
					}
					.hedge-cert-lightbox {
						padding: 64px 12px 72px;
					}
					.hedge-cert-nav {
						top: auto;
						bottom: 14px;
						transform: none;
					}
					.hedge-cert-nav.prev {
						left: calc(50% - 56px);
					}
					.hedge-cert-nav.next {
						right: calc(50% - 56px);
					}
				}
			`}</style>
		</section>
	)
}
