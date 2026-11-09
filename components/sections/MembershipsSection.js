'use client'
import Image from 'next/image'

const memberships = [
	{
		body: "CPA Australia",
		credential: "Certified Practising Accountant",
		region: "Australia",
		logo: "/images/memberships/cpa-australia-logo.webp",
		width: 1000,
		height: 460
	},
	{
		body: "Chartered Institute of Management Accountants",
		credential: "Chartered Management Accountant",
		region: "United Kingdom",
		logo: "/images/memberships/cima-logo.webp",
		width: 1000,
		height: 389
	},
	{
		body: "Emirates Association for Accountants & Auditors",
		credential: "Professional Fellowship",
		region: "United Arab Emirates",
		logo: "/images/memberships/eaaa-logo.webp",
		wide: true,
		width: 1000,
		height: 286
	},
	{
		body: "Institute of Public Accountants",
		credential: "Fellow Member (FIPA)",
		region: "Australia",
		logo: "/images/memberships/ipa-logo.webp",
		width: 1000,
		height: 543
	},
	{
		body: "Institute of Financial Accountants",
		credential: "Fellow Member (FFA)",
		region: "United Kingdom",
		logo: "/images/memberships/ifa-logo.webp",
		width: 1000,
		height: 529
	}
]

export default function MembershipsSection({ bg = "#f8fafc" }) {
	return (
		<section id="memberships" style={{ backgroundColor: bg, paddingTop: '60px', paddingBottom: '64px' }}>
			<div className="tf-container">
				<div className="row justify-content-center text-center mb-50">
					<div className="col-lg-8">
						<p className="s-sub-title text-red mb-18 justify-center">
							<i className="icon-angles-right moveLeftToRight" />
							PROFESSIONAL MEMBERSHIPS
						</p>
						<h2 className="s-title font-main-2 text-dark fs-38 fw-7 mb-3">
							Globally Recognised Credentials
						</h2>
						<p className="text-muted fs-16 mx-auto" style={{ maxWidth: '680px' }}>
							Our leadership holds professional memberships with leading accountancy bodies in the UAE, Australia, and the United Kingdom, bringing international standards to every engagement.
						</p>
					</div>
				</div>

				<div className="hedge-member-grid">
					{memberships.map((item) => (
						<div key={item.logo} className="hedge-member-card">
							<div className={`hedge-member-logo${item.wide ? ' is-wide' : ''}`}>
								<Image
									src={item.logo}
									alt={`${item.body} logo`}
									width={item.width}
									height={item.height}
									quality={95}
									sizes="(max-width: 767px) 40vw, 220px"
									style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
								/>
							</div>
							<div className="hedge-member-info">
								<span className="hedge-member-region">{item.region}</span>
								<span className="hedge-member-body">{item.body}</span>
								<span className="hedge-member-credential">{item.credential}</span>
							</div>
						</div>
					))}
				</div>
			</div>

			<style jsx>{`
				.hedge-member-grid {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 24px;
				}
				.hedge-member-card {
					flex: 0 1 calc((100% - 96px) / 5);
					min-width: 0;
					display: flex;
					flex-direction: column;
					background: #ffffff;
					border: 1px solid #e2e8f0;
					border-radius: 18px;
					overflow: hidden;
					box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
					transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
				}
				.hedge-member-card:hover {
					transform: translateY(-6px);
					box-shadow: 0 18px 40px rgba(3, 33, 78, 0.12);
					border-color: rgba(200, 16, 46, 0.25);
				}
				.hedge-member-logo {
					height: 150px;
					padding: 30px 26px;
					display: flex;
					align-items: center;
					justify-content: center;
					background: #ffffff;
					border-bottom: 1px solid #eef2f6;
					position: relative;
				}
				.hedge-member-logo.is-wide {
					padding-left: 12px;
					padding-right: 12px;
				}
				.hedge-member-logo::after {
					content: "";
					position: absolute;
					left: 26px;
					right: 26px;
					bottom: -1px;
					height: 2px;
					background: linear-gradient(90deg, transparent, #c8102e, transparent);
					opacity: 0;
					transition: opacity 0.35s ease;
				}
				.hedge-member-card:hover .hedge-member-logo::after {
					opacity: 1;
				}
				.hedge-member-logo :global(img) {
					transition: transform 0.35s ease;
				}
				.hedge-member-card:hover .hedge-member-logo :global(img) {
					transform: scale(1.04);
				}
				.hedge-member-info {
					display: flex;
					flex-direction: column;
					gap: 4px;
					padding: 18px 20px 22px;
					background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
					flex-grow: 1;
				}
				.hedge-member-region {
					font-size: 11px;
					font-weight: 700;
					letter-spacing: 0.8px;
					text-transform: uppercase;
					color: #c8102e;
				}
				.hedge-member-body {
					font-size: 15px;
					font-weight: 700;
					color: #0f172a;
					line-height: 1.35;
				}
				.hedge-member-credential {
					font-size: 13.5px;
					font-weight: 600;
					color: #03214e;
					margin-top: 4px;
				}

				@media (max-width: 1199px) {
					.hedge-member-card {
						flex-basis: calc((100% - 48px) / 3);
					}
				}
				@media (max-width: 767px) {
					.hedge-member-grid {
						gap: 14px;
					}
					.hedge-member-card {
						flex-basis: calc((100% - 14px) / 2);
					}
					.hedge-member-logo {
						height: 110px;
						padding: 20px 16px;
					}
					.hedge-member-info {
						padding: 12px 14px 16px;
					}
					.hedge-member-body {
						font-size: 13px;
					}
					.hedge-member-credential {
						font-size: 12px;
					}
				}
			`}</style>
		</section>
	)
}
