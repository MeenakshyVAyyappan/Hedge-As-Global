import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import SocialLinks from "@/components/elements/SocialLinks"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleWelcomeBox, isWelcomeBox }) {
	return (
		<>
			<div className="tf-topbar">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="topbar-inner">
								<div className="topbar-left">
									<div className="icon">
										<i className="flaticon-tag" />
									</div>
									<p>Hedge Chartered Accountants Group | UAE • Bahrain • India</p>
								</div>
								<div className="topbar-right">
									<ul className="infor-list">
										<li>
											<div className="icon">
												<i className="flaticon-open-mail" />
											</div>
											<Link href="mailto:info@hedgeasglobal.com">
												info@hedgeasglobal.com
											</Link>
										</li>
										<li>
											<div className="icon">
												<i className="flaticon-phone-call" />
											</div>
											<p>
												Call Us : <Link href="tel:+971502253373">+971 50 225 3373</Link>
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="flaticon-clock" />
											</div>
											<a>
												MON – SAT | 09:00 AM – 06:00 PM
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>{/* /.Topbar */}
			{/* Header */}
			<header className="tf-header">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-inner">
								<div className="header-left">
									<div className="logo-site">
										<Link href="/">
											<Image
												width="280"
												height="85"
												style={{ objectFit: "contain", height: "85px", width: "auto", maxWidth: "280px" }}
												id="logo_header" 
												src="/images/logo/logoclear21.png" 
												alt="Hedge Chartered Accountants Group Logo" 
											/>
										</Link>
									</div>
								</div>
								<div className="header-center">
									<nav className="main-nav">
										<Menu />
									</nav>
								</div>
								<div className="header-right d-flex align-items-center gap-3">
									<div className="header-social-wrap d-none d-md-block">
										<SocialLinks />
									</div>
									<div className="union mobile-button" onClick={handleMobileMenu} style={{ cursor: 'pointer', zIndex: 10, pointerEvents: 'auto', touchAction: 'manipulation' }}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
									<div className="union btn-open-welcome" onClick={handleWelcomeBox}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Navigation Drawer - placed outside header to escape backdrop-filter containing block */}
			<div className={isMobileMenu ? "mobile-nav-wrap active" : "mobile-nav-wrap"}>
				<div className="overlay-mobile-nav" onClick={handleMobileMenu} />
				<div className="inner-mobile-nav overflow-y-auto">
					<div className="top">
						<div className="logo d-flex align-items-center justify-content-between mb-4">
							<Link href="/" rel="home" className="main-logo" onClick={handleMobileMenu}>
								<Image
									width="220"
									height="65"
									style={{ objectFit: "contain", height: "55px", width: "auto", maxWidth: "200px" }}
									id="mobile-logo_header" 
									alt="Hedge Chartered Accountants Group" 
									src="/images/logo/logoclear21.png" 
								/>
							</Link>
							<div className="mobile-nav-close" onClick={handleMobileMenu}>
								<i className="icon-xmark" />
							</div>
						</div>
						<nav id="mobile-main-nav" className="mobile-main-nav">
							<MobileMenu handleMobileMenu={handleMobileMenu} />
						</nav>
					</div>
					<div className="bottom mt-4 pt-3 border-top border-white border-opacity-10">
						<div className="wrap">
							<p className="title text-white fs-16 fw-7 mb-3">
								Contact Head Office
							</p>
							<ul className="contact-list mb-20 list-unstyled">
								<li className="mb-2">
									<p className="fs-13 text-white-70 mb-0">
										Address: <span className="text-white">P-2337, Building No:30, Al Qurashi Buildings, Corniche, Abu Dhabi, UAE</span>
									</p>
								</li>
								<li className="mb-2">
									<p className="fs-13 text-white-70 mb-0">
										Email: <Link href="mailto:info@hedgeasglobal.com" className="text-white text-decoration-none">info@hedgeasglobal.com</Link>
									</p>
								</li>
								<li className="mb-2">
									<p className="fs-13 text-white-70 mb-0">
										Phone: <Link href="tel:+971502253373" className="text-white text-decoration-none">+971 50 225 3373</Link>
									</p>
								</li>
								<li className="mb-3">
									<p className="fs-13 text-white-70 mb-0">
										Hours: <span className="text-white">Mon – Sat: 09:00 AM – 06:00 PM</span>
									</p>
								</li>
							</ul>
							<div className="mt-3">
								<p className="title mb-2 fs-14 text-white fw-6">Connect With Us</p>
								<SocialLinks className="mb-3" />
								<Link href="/contact" className="tf-btn w-100 justify-content-center py-2 fs-14" onClick={handleMobileMenu}>
									Request Consultation
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
