import Image from "next/image"
import Link from "next/link"
import SocialLinks from "@/components/elements/SocialLinks"

export default function BoxWelcome({ handleWelcomeBox, isWelcomeBox }) {
	return (
		<>
			<div className={`box-welcome ${isWelcomeBox ? "active" : ""}`}>
				<div className="tf-overlay" onClick={handleWelcomeBox} />
				<div className="popular-wrap">
					<div className="btn-close-welcome" onClick={handleWelcomeBox}>
						<i className="icon-xmark" />
					</div>
					<div className="wrap">
						<div className="mb-3">
							<Image
								width="160"
								height="48"
								style={{ objectFit: "contain", height: "48px", width: "auto" }}
								src="/images/logo/logoclear20.png"
								alt="Hedge Chartered Accountants Group"
							/>
						</div>
						<p className="text">
							Hedge Chartered Accountants Group delivers professional accounting, audit, tax consultancy and compliance solutions for corporate enterprises across the UAE, Bahrain, and India.
						</p>
					</div>
					<div className="wrap">
						<p className="title">
							Head Office (Abu Dhabi)
						</p>
						<ul className="contact-list mb-20 list-unstyled">
							<li className="mb-2">
								<p className="mb-0" style={{ color: "#334155", fontSize: "14px", lineHeight: "1.6" }}>
									<strong style={{ color: "#0f172a" }}>Address:</strong>{" "}
									P-2337, Building No:30, Al Qurashi Buildings, Corniche, Abu Dhabi, UAE
								</p>
							</li>
							<li className="mb-2">
								<p className="mb-0" style={{ color: "#334155", fontSize: "14px", lineHeight: "1.6" }}>
									<strong style={{ color: "#0f172a" }}>Email:</strong>{" "}
									<Link href="mailto:info@hedgeasglobal.com" style={{ color: "#c8102e", fontWeight: "600", textDecoration: "none" }}>
										info@hedgeasglobal.com
									</Link>
								</p>
							</li>
							<li className="mb-2">
								<p className="mb-0" style={{ color: "#334155", fontSize: "14px", lineHeight: "1.6" }}>
									<strong style={{ color: "#0f172a" }}>Phone:</strong>{" "}
									<Link href="tel:+971502253373" style={{ color: "#0f172a", fontWeight: "600", textDecoration: "none" }}>
										+971 50 225 3373
									</Link>
								</p>
							</li>
							<li className="mb-2">
								<p className="mb-0" style={{ color: "#334155", fontSize: "14px", lineHeight: "1.6" }}>
									<strong style={{ color: "#0f172a" }}>Office Hours:</strong>{" "}
									<span>Mon – Sat: 09:00 AM – 06:00 PM (Sunday: Closed)</span>
								</p>
							</li>
						</ul>
						<div className="mb-4">
							<p className="title mb-3 fs-16">Connect With Us</p>
							<SocialLinks />
						</div>
						<div className="mt-3">
							<Link href="/contact" className="tf-btn w-100 justify-content-center" onClick={handleWelcomeBox}>
								Schedule Free Consultation
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
