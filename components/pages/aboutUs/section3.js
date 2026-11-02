'use client'
import Image from 'next/image'

const teamPhotos = [
	{ src: "/images/team/hedge-team-group.jpg", alt: "Hedge Chartered Accountants Group full team", cls: "g-feature", pos: "center 40%" },
	{ src: "/images/team/hedge-team-at-work.jpg", alt: "Hedge Chartered Accountants Group accountants at work", cls: "g-tall", pos: "40% center" },
	{ src: "/images/team/hedge-team-suits.jpg", alt: "Hedge Chartered Accountants Group advisory team", cls: "", pos: "center 30%" },
	{ src: "/images/team/hedge-team-women.jpg", alt: "Hedge Chartered Accountants Group accounting team", cls: "", pos: "center 30%" },
	{ src: "/images/team/hedge-team-men.jpg", alt: "Hedge Chartered Accountants Group audit and tax team", cls: "", pos: "center 30%" },
	{ src: "/images/team/hedge-team-office.jpg", alt: "Hedge Chartered Accountants Group team at the Abu Dhabi office", cls: "g-wide", pos: "center 45%" }
]

export default function Section3() {
	return (
		<>
			<section className="s-team py-5">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="flex justify-space-between item-center mb-70">
								<div className="content">
									<p className="s-sub-title">
										<i className="icon-angles-right moveLeftToRight" />
										Meet Our Team
									</p>
									<p className="s-title letter-space-0 text-anime-wave">
										The People Behind <span>Hedge</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="hedge-team-gallery">
						{teamPhotos.map((photo) => (
							<div key={photo.src} className={`hedge-team-photo ${photo.cls}`}>
								<Image
									src={photo.src}
									alt={photo.alt}
									fill
									quality={90}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
									style={{ objectFit: "cover", objectPosition: photo.pos }}
								/>
							</div>
						))}
					</div>
				</div>

				<style jsx>{`
					.hedge-team-gallery {
						display: grid;
						grid-template-columns: repeat(3, 1fr);
						grid-auto-rows: 240px;
						gap: 20px;
					}
					.hedge-team-photo {
						position: relative;
						overflow: hidden;
						border-radius: 16px;
						box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
						background: #f1f5f9;
					}
					.hedge-team-photo :global(img) {
						transition: transform 0.6s ease;
					}
					.hedge-team-photo:hover :global(img) {
						transform: scale(1.04);
					}
					.g-feature {
						grid-column: span 2;
						grid-row: span 2;
					}
					.g-tall {
						grid-row: span 2;
					}
					.g-wide {
						grid-column: span 3;
						grid-row: span 2;
					}
					@media (max-width: 991px) {
						.hedge-team-gallery {
							grid-template-columns: repeat(2, 1fr);
							grid-auto-rows: 220px;
						}
						.g-feature,
						.g-wide {
							grid-column: span 2;
						}
						.g-tall {
							grid-row: span 1;
						}
					}
					@media (max-width: 575px) {
						.hedge-team-gallery {
							grid-template-columns: 1fr;
							grid-auto-rows: auto;
							gap: 14px;
						}
						.hedge-team-photo {
							aspect-ratio: 16 / 10;
						}
						.g-feature,
						.g-wide,
						.g-tall {
							grid-column: span 1;
							grid-row: span 1;
						}
					}
				`}</style>
			</section>
		</>
	)
}
