import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

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
												width="180"
												height="52"
												style={{ objectFit: "contain", height: "52px", width: "auto" }}
												id="logo_header" 
												src="/images/logo/hedgelogo.png" 
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
								<div className="header-right">
									<Link href="/contact" className="tf-btn">
										Get Free Consultation
										<i className="icon-chevron-right" />
									</Link>
									<div className="union mobile-button" onClick={handleMobileMenu}>
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
							<div className={isMobileMenu ? "mobile-nav-wrap active" : "mobile-nav-wrap"}>
								<div className="overlay-mobile-nav" onClick={handleMobileMenu} />
								<div className="inner-mobile-nav overflow-y-auto">
									<div className="top">
										<div className="logo">
											<Link href="/" rel="home" className="main-logo">
												<Image
													width="160"
													height="48"
													style={{ objectFit: "contain", height: "48px", width: "auto" }}
													id="mobile-logo_header" 
													alt="Hedge Chartered Accountants Group" 
													src="/images/logo/hedgesecondlogo.png" 
												/>
											</Link>
											<div className="mobile-nav-close" onClick={handleMobileMenu}>
												<i className="icon-xmark" />
											</div>
										</div>
										<nav id="mobile-main-nav" className="mobile-main-nav">
											<MobileMenu />
										</nav>
									</div>
									<div className="bottom">
										<div className="wrap">
											<p className="title">
												Contact Head Office
											</p>
											<ul className="contact-list mb-20">
												<li>
													<p>
														Address: <span className="text-white">Al Ghaith Tower, Hamdan St, Abu Dhabi, UAE</span>
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
											</ul>
											<div className="mt-20">
												<Link href="/contact" className="tf-btn w-100 justify-content-center" onClick={handleMobileMenu}>
													Request Consultation
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}
