'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

export default function Section6() {
	const baseLogos = [
		{ name: "Odoo ERP", img: "/images/section/odoo.png" },
		{ name: "Zoho Books", img: "/images/section/zohoo.png" },
		{ name: "TallyPrime", img: "/images/section/TallyPrime.png" },
	];

	// Duplicate base logos so Swiper can seamlessly auto-scroll in a continuous loop
	const partnerLogos = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];

	const swiperConfig = {
		modules: [Autoplay],
		slidesPerView: 3,
		spaceBetween: 40,
		loop: true,
		speed: 2500,
		autoplay: {
			delay: 1500,
			disableOnInteraction: false,
			pauseOnMouseEnter: true
		},
		breakpoints: {
			0: { slidesPerView: 1 },
			576: { slidesPerView: 2 },
			991: { slidesPerView: 3 },
		},
	};

	return (
		<section className="s-partner" style={{ borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
			<div className="tf-container">
				<Swiper {...swiperConfig} className="swiper-container slider-partner">
					<div className="swiper-wrapper align-items-center">
						{partnerLogos.map((partner, index) => (
							<SwiperSlide key={index}>
								<Link href="/contact">
									<span className="tf-overlay" />
									<Image
										width={0}
										height={0}
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										className="img1"
										src={partner.img}
										alt={partner.name}
									/>
									<Image
										width={0}
										height={0}
										sizes="100vw"
										style={{ width: "100%", height: "auto" }}
										className="img2"
										src={partner.img}
										alt={partner.name}
									/>
								</Link>
							</SwiperSlide>
						))}
					</div>
				</Swiper>
			</div>
		</section>
	)
}
