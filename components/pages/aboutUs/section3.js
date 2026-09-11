'use client'
import { sliderTeam } from "@/utils/swiperOptions"
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"

const teamMembers = [
	{
		id: 1,
		name: "Daniel L. Braddock",
		duty: "Senior Audit Partner",
		image: "/images/avatar/defaultteam21.png"
	},
	{
		id: 2,
		name: "Michael B. Reader",
		duty: "Head of Tax Advisory",
		image: "/images/avatar/defaultteam21.png"
	},
	{
		id: 3,
		name: "Robert M. Carlson",
		duty: "Corporate Finance Director",
		image: "/images/avatar/defaultteam21.png"
	},
	{
		id: 4,
		name: "William C. Bowens",
		duty: "Senior Chartered Accountant",
		image: "/images/avatar/defaultteam21.png"
	},
	{
		id: 5,
		name: "Robert B. Thompson",
		duty: "Risk & Compliance Manager",
		image: "/images/avatar/defaultteam21.png"
	},
	{
		id: 6,
		name: "Samuel D. Fletcher",
		duty: "Transfer Pricing Lead",
		image: "/images/avatar/defaultteam21.png"
	}
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
										Expert Team <span>Members</span>
									</p>
								</div>
								<Link href="/team-member" className="tf-btn style-3 text-anime-style-1">
									Explore All Members
									<i className="icon-chevron-right" />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<Swiper {...sliderTeam} loop={true} className="swiper-container slider-team">
					<div className="swiper-wrapper">
						{teamMembers.map((item, index) => (
							<SwiperSlide key={item.id}>
								<div className={`card-member ${index === 0 ? 'first' : index === teamMembers.length - 1 ? 'last' : ''} tf-hover`}>
									<div className="image hover-14 hover-1">
										<Image
											width={370}
											height={420}
											unoptimized
											sizes="(max-width: 768px) 100vw, 370px"
											style={{ width: "100%", height: "auto" }}
											src={item.image}
											alt={item.name}
										/>
									</div>
									<div className="content">
										<Link href="/team-details" className="name">{item.name}</Link>
										<p className="duty">{item.duty}</p>
										<ul className="social-list style-5 style-4">
											<li>
												<Link href="/#">
													<i className="icon-facebook" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-twitter" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-linkedin" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-youtube" />
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</SwiperSlide>
						))}
					</div>
					<div className="tf-overlay" />
				</Swiper>
			</section>
		</>
	)
}

