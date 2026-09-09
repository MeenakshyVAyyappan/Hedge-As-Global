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
						<ul className="contact-list mb-20">
							<li>
								<p>
									Address: <span className="text-white">Al Ghaith Tower, Hamdan Bin Mohammed St, P.O. Box 41477, Abu Dhabi, UAE</span>
								</p>
							</li>
							<li>
								<p>
									Email: <Link href="mailto:info@hedgeasglobal.com">info@hedgeasglobal.com</Link>
								</p>
							</li>
							<li>
								<p>
									Phone: <Link href="tel:+971502253373">+971 50 225 3373</Link>
								</p>
							</li>
							<li>
								<p>
									Office Hours: <span className="text-white">MON – SAT | 09:00 AM – 06:00 PM</span>
								</p>
							</li>
						</ul>
						<div className="mb-4">
							<p className="title mb-2 fs-15 text-white">Connect With Us</p>
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
