'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function MobileMenu({ handleMobileMenu }) {
	const pathname = usePathname();
	const router = useRouter();
	const [activeDropdown, setActiveDropdown] = useState(null);

	useEffect(() => {
		setActiveDropdown(null);
	}, [pathname]);

	const toggleDropdown = (key) => {
		setActiveDropdown(activeDropdown === key ? null : key);
	};

	const handleLinkClick = () => {
		if (handleMobileMenu) {
			handleMobileMenu();
		}
		setActiveDropdown(null);
	};

	const scrollToFaq = (e) => {
		e.preventDefault();
		if (handleMobileMenu) {
			handleMobileMenu();
		}
		const el = document.getElementById('faq');
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else {
			router.push('/#faq');
		}
	};

	return (
		<ul className="mobile-nav-list">
			<li className="item">
				<Link href="/" onClick={handleLinkClick}>Home</Link>
			</li>

			<li className="item">
				<Link href="/about-us" onClick={handleLinkClick}>About Us</Link>
			</li>

			<li className={`item has-child ${activeDropdown === 'services' ? 'active' : ''}`}>
				<div className="d-flex align-items-center justify-content-between">
					<Link href="/services" onClick={handleLinkClick}>Our Services</Link>
					<button
						type="button"
						className="btn-toggle-sub border-0 bg-transparent text-white p-2"
						onClick={() => toggleDropdown('services')}
						aria-label="Toggle Services Submenu"
					>
						<i className={`icon-chevron-${activeDropdown === 'services' ? 'up' : 'down'}`} />
					</button>
				</div>
				<ul className="sub-nav" style={{ display: activeDropdown === 'services' ? 'block' : 'none' }}>
					<li><Link href="/services" onClick={handleLinkClick}><strong className="text-red">All Services Overview</strong></Link></li>

					<li className="fw-7 text-white mt-2 ps-2">Accounting</li>
					<li><Link href="/services/accounting-services" onClick={handleLinkClick}>Accounting Services</Link></li>
					<li><Link href="/services/bookkeeping" onClick={handleLinkClick}>Book Keeping</Link></li>

					<li className="fw-7 text-white mt-2 ps-2">Auditing</li>
					<li><Link href="/services/audit-assurance" onClick={handleLinkClick}>Audit</Link></li>

					<li className="fw-7 text-white mt-2 ps-2">Taxation</li>
					<li><Link href="/services/uae-corporate-tax" onClick={handleLinkClick}>UAE Corporate Tax</Link></li>
					<li><Link href="/services/vat-uae" onClick={handleLinkClick}>VAT UAE</Link></li>
					<li><Link href="/services/vat-bahrain" onClick={handleLinkClick}>VAT Bahrain</Link></li>

					<li className="fw-7 text-white mt-2 ps-2">ICV Certificate</li>
					<li><Link href="/services/icv-certification" onClick={handleLinkClick}>ICV Certificate UAE</Link></li>
				</ul>
			</li>

			<li className="item">
				<Link href="/blog" onClick={handleLinkClick}>Insights &amp; Updates</Link>
			</li>

			<li className="item">
				<a href="/#faq" onClick={scrollToFaq}>FAQs</a>
			</li>

			<li className="item">
				<Link href="/contact" onClick={handleLinkClick}>Contact Us</Link>
			</li>

			<li className="item">
				<Link href="/privacy-policy" onClick={handleLinkClick}>Privacy Policy</Link>
			</li>

			<li className="item">
				<Link href="/terms-conditions" onClick={handleLinkClick}>Terms &amp; Conditions</Link>
			</li>
		</ul>
	);
}
