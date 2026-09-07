'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer1() {
	const [isAccordion1, setIsAccordion1] = useState(0);
	const [isAccordion2, setIsAccordion2] = useState(0);
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleAccordion1 = (key) => {
		if (!isDesktop) {
			setIsAccordion1((prev) => (prev === key ? null : key));
		}
	};
	const handleAccordion2 = (key) => {
		if (!isDesktop) {
			setIsAccordion2((prev) => (prev === key ? null : key));
		}
	};

	const getDisplayStyle1 = (key) => (isDesktop ? 'block' : isAccordion1 === key ? 'block' : 'none');
	const getDisplayStyle2 = (key) => (isDesktop ? 'block' : isAccordion2 === key ? 'block' : 'none');

	return (
		<footer className="tf-footer position-relative z-1 pt-80 pb-30" style={{ backgroundColor: '#0A111F' }}>
			<div className="container-fluid px-3 px-md-4 px-lg-5" style={{ maxWidth: '1400px' }}>
				<div className="row">
					<div className="col-lg-12">
						<div className="footer-inner d-flex flex-wrap justify-content-between align-items-start gap-4 gap-lg-5">
							
							{/* Column 1: Brand Info */}
							<div className="inner-right mb-4" style={{ maxWidth: '360px' }}>
								<div className="logo-site mb-4">
									<Link href="/">
										<Image
											width={200}
											height={60}
											style={{ objectFit: 'contain', height: '48px', width: 'auto' }}
											id="logo_footer"
											src="/images/logo/hedgesecondlogo.png"
											alt="Hedge Chartered Accountants Group"
										/>
									</Link>
								</div>
								<p className="text-white-50 fs-15 leading-relaxed mb-4">
									Hedge Chartered Accountants Group delivers professional accounting, statutory audit, UAE Corporate Tax, VAT, ICV certification, and E-Invoicing solutions built on accuracy, transparency, and trust.
								</p>
								<div className="d-inline-flex align-items-center">
									<i className="flaticon-award text-red me-2 fs-20"></i>
									<span className="text-white fw-6 fs-15">FTA-Approved Tax Agency</span>
								</div>
							</div>

							{/* Column 2: Core Services */}
							<div className="footer-inner-wrap footer-col-block">
								<p className="footer-title footer-title-desktop text-white fw-7 fs-20 mb-4">Our Services</p>
								<p className="footer-title footer-title-mobile text-white" onClick={() => handleAccordion1(1)}>
									Our Services
								</p>
								<ul className="list tf-collapse-content list-unstyled" style={{ display: getDisplayStyle1(1) }}>
									{[
										{ name: 'Accounting & Bookkeeping', path: '/services/accounting-services' },
										{ name: 'Audit & Assurance', path: '/services/audit-assurance' },
										{ name: 'UAE Corporate Tax Consulting', path: '/services/uae-corporate-tax' },
										{ name: 'UAE VAT Advisory & Filing', path: '/services/vat-uae' },
										{ name: 'In-Country Value (ICV)', path: '/services/icv-certification' },
										{ name: 'UAE E-Invoicing Integration', path: '/services/e-invoicing' }
									].map((item, index) => (
										<li key={index} className="mb-3 d-flex align-items-center">
											<Link href={item.path} className="text-white-50 hover-text-white fs-15 text-decoration-none" style={{ transition: 'color 0.3s ease' }}>{item.name}</Link>
										</li>
									))}
								</ul>
							</div>

							{/* Column 3: Quick Links */}
							<div className="footer-inner-wrap footer-col-block">
								<p className="footer-title footer-title-desktop text-white fw-7 fs-20 mb-4">Company Links</p>
								<p className="footer-title footer-title-mobile text-white" onClick={() => handleAccordion2(1)}>
									Company Links
								</p>
								<ul className="list tf-collapse-content list-unstyled" style={{ display: getDisplayStyle2(1) }}>
									{[
										{ name: 'About Hedge Group', path: '/about-us' },
										{ name: 'All Services', path: '/services' },
										{ name: 'Insights & Tax Updates', path: '/blog' },
										{ name: 'Frequently Asked Questions', path: '/faqs' },
										{ name: 'Contact Offices', path: '/contact' }
									].map((item, index) => (
										<li key={index} className="mb-3 d-flex align-items-center">
											<Link href={item.path} className="text-white-50 hover-text-white fs-15 text-decoration-none" style={{ transition: 'color 0.3s ease' }}>{item.name}</Link>
										</li>
									))}
								</ul>
							</div>

							{/* Column 4: Contact Head Office */}
							<div className="footer-inner-wrap" style={{ maxWidth: '320px' }}>
								<p className="footer-title text-white fw-7 fs-20 mb-4">Head Office</p>
								<ul className="contact-info-list text-white-50 fs-15 list-unstyled">
									<li className="mb-3 d-flex align-items-start gap-3">
										<i className="flaticon-pin text-white fs-16 mt-1"></i>
										<span className="leading-relaxed">Al Ghaith Tower, Hamdan St, <br/>Abu Dhabi, UAE</span>
									</li>
									<li className="mb-3 d-flex align-items-center gap-3">
										<i className="flaticon-phone-call text-white fs-16"></i>
										<Link href="tel:+971502253373" className="text-white fs-16 fw-6 text-decoration-none hover-text-red">+971 50 225 3373</Link>
									</li>
									<li className="mb-4 d-flex align-items-center gap-3">
										<i className="flaticon-open-mail text-white fs-16"></i>
										<Link href="mailto:info@hedgeasglobal.com" className="text-white fs-15 fw-6 text-decoration-none hover-text-red">info@hedgeasglobal.com</Link>
									</li>
									<li className="mt-4 pt-3 border-top border-white border-opacity-10">
										<p className="text-white-50 fs-13 mb-0 uppercase fw-6 tracking-wide">Regional Presence</p>
										<p className="text-white fs-14 mt-1 mb-0">Abu Dhabi • Dubai • Al Ain • Bahrain • India</p>
									</li>
								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid px-3 px-md-4 px-lg-5 mt-5 pt-4 border-top border-white border-opacity-10" style={{ maxWidth: '1400px' }}>
				<div className="row align-items-center">
					<div className="col-md-8 text-center text-md-start">
						<p className="no-copy style-2 text-white-50 mb-0 fs-14">
							© {new Date().getFullYear()} <span className="text-white fw-5">Hedge Chartered Accountants Group</span>. All Rights Reserved.
						</p>
					</div>
					<div className="col-md-4 text-center text-md-end mt-3 mt-md-0">
						<Link href="/#top" className="text-white-50 hover-text-white fs-14 me-3 text-decoration-none fw-6 d-inline-flex align-items-center transition-all">
							Back to Top 
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ms-2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
