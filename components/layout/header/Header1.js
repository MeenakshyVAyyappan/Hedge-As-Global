import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import SocialLinks from "@/components/elements/SocialLinks"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleWelcomeBox, isWelcomeBox }) {
	return (
		<>
			{/* Topbar in clean light palette with dark blue text and icons */}
			<div className="tf-topbar header-white-topbar">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="topbar-inner">
								<div className="topbar-left">
									<div className="icon">
										<i className="flaticon-tag" />
									</div>
									<p>Hedge Chartered Accountants Group | UAE &bull; Bahrain &bull; India</p>
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
												MON &ndash; SAT | 09:00 AM &ndash; 06:00 PM (SUN: CLOSED)
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>{/* /.Topbar */}

			{/* Header with White Background, Dark Blue Menus & Icons */}
			<header className="tf-header header-white-theme">
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
										<SocialLinks itemStyle={{ backgroundColor: 'rgba(7, 30, 61, 0.08)', color: '#071e3d' }} />
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

			{/* Mobile Navigation Drawer */}
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
										Address: <span className="text-white">P-2337, Building No:30, Sultan Qubasi Tower, Corniche, Abu Dhabi, UAE</span>
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
										Hours: <span className="text-white">Mon &ndash; Sat: 09:00 AM &ndash; 06:00 PM (Sunday: Closed)</span>
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

			{/* ── Global Styles for White Header, Dark Blue Menus & Icons ── */}
			<style jsx global>{`
				/* 1. Header White Background */
				.tf-header.header-white-theme,
				.tf-header {
					background: #ffffff !important;
					backdrop-filter: blur(20px) !important;
					-webkit-backdrop-filter: blur(20px) !important;
					border-bottom: 1px solid #e2e8f0 !important;
					box-shadow: 0 4px 25px rgba(7, 30, 61, 0.07) !important;
				}

				/* 2. Topbar in White / Light Slate */
				.tf-topbar.header-white-topbar,
				.tf-topbar {
					background-color: #f8fafc !important;
					border-bottom: 1px solid #e2e8f0 !important;
				}

				.tf-topbar .topbar-inner {
					border-bottom-color: #e2e8f0 !important;
				}

				.tf-topbar .topbar-inner p,
				.tf-topbar .topbar-inner span,
				.tf-topbar .topbar-inner a {
					color: #071e3d !important;
					font-weight: 600 !important;
				}

				.tf-topbar .topbar-inner a:hover {
					color: #c8102e !important;
				}

				/* Topbar Icons Dark Blue */
				.tf-topbar .topbar-inner i,
				.tf-topbar .topbar-inner .icon i {
					color: #071e3d !important;
				}

				/* 3. Menus into Dark Blue */
				.header-inner .nav-list a,
				.header-inner .nav-list .item>a {
					color: #071e3d !important;
					font-weight: 700 !important;
					transition: color 0.25s ease !important;
				}

				/* Menu hover & current states */
				.header-inner .nav-list .item:hover>a,
				.header-inner .nav-list .item.current>a {
					color: #c8102e !important;
				}

				.header-inner .nav-list .item>a::before {
					background-color: #c8102e !important;
				}

				/* Menu dropdown toggle icon (dark blue) */
				.header-inner .nav-list .item.has-child>a::after {
					color: #071e3d !important;
				}

				.header-inner .nav-list .item.has-child:hover>a::after,
				.header-inner .nav-list .item.current.has-child>a::after {
					color: #c8102e !important;
				}

				/* 4. Dropdown Menus in Clean White with Dark Blue Text */
				.header-inner .sub-nav,
				.hedge-services-dropdown,
				.hedge-flyout-menu {
					background-color: #ffffff !important;
					border: 1px solid #e2e8f0 !important;
					box-shadow: 0 12px 36px rgba(7, 30, 61, 0.14) !important;
					border-radius: 10px !important;
				}

				.header-inner .sub-nav a,
				.hedge-services-dropdown a,
				.hedge-flyout-menu a {
					color: #071e3d !important;
					font-weight: 600 !important;
				}

				.header-inner .sub-nav a:hover,
				.hedge-services-dropdown a:hover,
				.hedge-flyout-menu a:hover {
					color: #c8102e !important;
					background-color: #f8fafc !important;
				}

				.hedge-services-dropdown i {
					color: #071e3d !important;
				}

				.hedge-services-dropdown a:hover i {
					color: #c8102e !important;
				}

				/* 5. Header Icons in Dark Blue with Official Brand Color on Hover */
				.header-social-wrap .social-icon-btn {
					transition: all 0.25s ease !important;
				}

				.header-social-wrap .social-icon-facebook:hover,
				.header-social-wrap a[title*="Facebook"]:hover {
					background: #1877F2 !important;
					border-color: #1877F2 !important;
					color: #ffffff !important;
					box-shadow: 0 4px 14px rgba(24, 119, 242, 0.4) !important;
				}

				.header-social-wrap .social-icon-instagram:hover,
				.header-social-wrap a[title*="Instagram"]:hover {
					background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%) !important;
					border-color: #d6249f !important;
					color: #ffffff !important;
					box-shadow: 0 4px 14px rgba(228, 64, 95, 0.4) !important;
				}

				.header-social-wrap .social-icon-whatsapp:hover,
				.header-social-wrap a[title*="WhatsApp"]:hover {
					background: #25D366 !important;
					border-color: #25D366 !important;
					color: #ffffff !important;
					box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4) !important;
				}

				.header-social-wrap .social-icon-linkedin:hover,
				.header-social-wrap a[title*="LinkedIn"]:hover {
					background: #0A66C2 !important;
					border-color: #0A66C2 !important;
					color: #ffffff !important;
					box-shadow: 0 4px 14px rgba(10, 102, 194, 0.4) !important;
				}

				.header-social-wrap .social-icon-youtube:hover,
				.header-social-wrap a[title*="YouTube"]:hover {
					background: #FF0000 !important;
					border-color: #FF0000 !important;
					color: #ffffff !important;
					box-shadow: 0 4px 14px rgba(255, 0, 0, 0.4) !important;
				}

				/* Mobile & Welcome Hamburger Dots in Dark Blue */
				.union.mobile-button .dot,
				.union.btn-open-welcome .dot {
					background-color: #071e3d !important;
				}

				.union.mobile-button:hover .dot,
				.union.btn-open-welcome:hover .dot {
					background-color: #c8102e !important;
				}
			`}</style>
		</>
	)
}
