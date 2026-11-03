'use client'
import Image from 'next/image'

export default function Section3() {
	return (
		<>
			<section className="s-team py-5">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="flex justify-space-between item-center mb-50">
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

					<div className="hedge-team-photo">
						<Image
							src="/images/team/hedge-team-group.jpg"
							alt="The Hedge Chartered Accountants Group team"
							width={2000}
							height={1266}
							quality={90}
							sizes="(max-width: 1320px) 100vw, 1290px"
							style={{ width: "100%", height: "auto", display: "block" }}
						/>
					</div>
				</div>

				<style jsx>{`
					.hedge-team-photo {
						border-radius: 20px;
						overflow: hidden;
						border: 6px solid #ffffff;
						box-shadow: 0 20px 50px rgba(15, 23, 42, 0.10);
					}
					@media (max-width: 575px) {
						.hedge-team-photo {
							border-radius: 14px;
							border-width: 4px;
						}
					}
				`}</style>
			</section>
		</>
	)
}
