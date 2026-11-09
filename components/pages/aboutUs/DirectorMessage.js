'use client'
import Image from 'next/image'

export default function DirectorMessage() {
	return (
		<section className="hd-director">
			<div className="tf-container">
				<div className="hd-head">
					<p className="s-sub-title text-red mb-0 justify-center">
						<i className="icon-angles-right moveLeftToRight" />
						DIRECTOR
					</p>
				</div>

				<div className="hd-row">
					<div className="hd-photo-col">
						<div className="hd-photo">
							<Image
								src="/images/team/director-anjith.webp"
								alt="Anjith Reghukumar, Hedge Chartered Accountants Group"
								width={1080}
								height={1199}
								quality={90}
								sizes="(max-width: 991px) 90vw, 420px"
								style={{ width: '100%', height: 'auto', display: 'block' }}
							/>
						</div>
						<span className="hd-photo-accent" aria-hidden="true" />
					</div>

					<div className="hd-text-col">
						<div className="hd-person">
							<span className="hd-quote-mark" aria-hidden="true">
								<svg viewBox="0 0 64 52" width="62" height="50">
									<path d="M0 30C0 12 10 2 26 0l2 7C18 10 13 17 13 25h13v27H0V30zm36 0C36 12 46 2 62 0l2 7c-10 3-15 10-15 18h13v27H36V30z" fill="#c8102e" />
								</svg>
							</span>
							<div>
								<h3 className="hd-name">Anjith Reghukumar</h3>
								<p className="hd-role">Founder &amp; Managing Director</p>
								<p className="hd-cred">FIPA (Australia) &bull; FFA (UK) &bull; EAAA Fellow (UAE)</p>
							</div>
						</div>

						<blockquote className="hd-message">
							<p>
								At Hedge Chartered Accountants Group, we believe every set of numbers tells a story, and our role is to make that story clear, compliant and useful for the decisions ahead. We have built a team of qualified chartered accountants, auditors and tax specialists across the UAE, Bahrain and India who combine deep local regulatory knowledge with international standards.
							</p>
							<p>
								Whether it is an FTA filing, a statutory audit or long-term financial planning, our commitment remains the same: accuracy, integrity and a personal relationship with every client we serve. Your growth is the true measure of our success.
							</p>
						</blockquote>

						<div className="hd-sign">
							<span className="hd-sign-line" aria-hidden="true" />
							<span className="hd-sign-name">Anjith Reghukumar</span>
						</div>
					</div>
				</div>
			</div>

			<style jsx global>{`
				.hd-director *, .hd-director *::before, .hd-director *::after { box-sizing: border-box; }
				.hd-director {
					padding: 64px 0 72px;
					background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
					position: relative;
					overflow: hidden;
				}
				.hd-head { text-align: center; margin-bottom: 48px; }
				.hd-title {
					font-size: clamp(28px, 3.4vw, 40px);
					font-weight: 800;
					color: #0f172a;
					margin: 0;
					letter-spacing: -0.5px;
				}
				.hd-row {
					display: grid;
					grid-template-columns: 420px 1fr;
					gap: 64px;
					align-items: center;
				}
				.hd-photo-col { position: relative; }
				.hd-photo {
					position: relative;
					z-index: 1;
					border-radius: 20px;
					overflow: hidden;
					border: 6px solid #ffffff;
					box-shadow: 0 24px 50px rgba(3, 33, 78, 0.16);
				}
				.hd-photo-accent {
					position: absolute;
					z-index: 0;
					left: -18px;
					bottom: -18px;
					width: 62%;
					height: 62%;
					border-radius: 20px;
					background: linear-gradient(135deg, #03214e 0%, #0b2d5c 100%);
				}
				.hd-person {
					display: flex;
					align-items: flex-start;
					gap: 18px;
					margin-bottom: 26px;
				}
				.hd-quote-mark { flex-shrink: 0; line-height: 0; margin-top: 2px; }
				.hd-name {
					font-size: 24px;
					font-weight: 700;
					color: #03214e;
					margin: 0 0 4px;
				}
				.hd-role {
					font-size: 15px;
					font-weight: 600;
					color: #c8102e;
					margin: 0 0 4px;
				}
				.hd-cred {
					font-size: 13px;
					color: #64748b;
					margin: 0;
					letter-spacing: 0.2px;
				}
				.hd-message {
					margin: 0;
					padding: 0 0 0 22px;
					border-left: 3px solid rgba(200, 16, 46, 0.25);
				}
				.hd-message p {
					font-size: 16.5px;
					line-height: 1.85;
					color: #475569;
					margin: 0 0 16px;
					text-align: justify;
				}
				.hd-message p:last-child { margin-bottom: 0; }
				.hd-sign {
					display: flex;
					align-items: center;
					gap: 14px;
					margin-top: 26px;
					padding-left: 22px;
				}
				.hd-sign-line { width: 44px; height: 2px; background: #c8102e; }
				.hd-sign-name {
					font-size: 15px;
					font-weight: 700;
					color: #0f172a;
					letter-spacing: 0.3px;
				}
				@media (max-width: 991px) {
					.hd-row { grid-template-columns: 1fr; gap: 48px; }
					.hd-photo-col { max-width: 420px; margin: 0 auto; width: 100%; }
				}
				@media (max-width: 575px) {
					.hd-director { padding: 48px 0 56px; }
					.hd-head { margin-bottom: 32px; }
					.hd-photo-col { padding-left: 12px; }
					.hd-photo-accent { left: 0; bottom: -12px; }
					.hd-quote-mark svg { width: 44px; height: 36px; }
					.hd-name { font-size: 20px; }
					.hd-message { padding-left: 16px; }
					.hd-message p { font-size: 15px; line-height: 1.75; text-align: left; }
					.hd-sign { padding-left: 16px; }
				}
			`}</style>
		</section>
	)
}
