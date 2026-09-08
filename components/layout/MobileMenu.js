'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function MobileMenu() {
	const pathname = usePathname();
	const router = useRouter();
	const [activeDropdown, setActiveDropdown] = useState(null);

	const toggleDropdown = (key) => {
		setActiveDropdown(activeDropdown === key ? null : key);
	};

	const scrollToFaq = (e) => {
		e.preventDefault();
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
				<Link href="/">Home</Link>
			</li>

			<li className="item">
				<Link href="/about-us">About Us</Link>
			</li>

			<li className={`item has-child ${activeDropdown === 'services' ? 'active' : ''}`}>
				<div className="d-flex align-items-center justify-content-between">
					<Link href="/services">Our Services</Link>
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
					<li><Link href="/services"><strong className="text-red">All Services Overview</strong></Link></li>

					<li className="fw-7 text-white mt-2 ps-2">Accounting</li>
					<li><Link href="/services/accounting-services">Accounting Services</Link></li>
					<li><Link href="/services/bookkeeping">Book Keeping</Link></li>

					<li className="fw-7 text-white mt-2 ps-2">Auditing</li>
					<li><Link href="/services/audit-assurance">Audit</Link></li>

					<li className="fw-7 text-white mt-2 ps-2">Taxation</li>
					<li><Link href="/services/uae-corporate-tax">UAE Corporate Tax</Link></li>
					<li><Link href="/services/vat-uae">VAT UAE</Link></li>
					<li><Link href="/services/vat-bahrain">VAT Bahrain</Link></li>

					<li className="fw-7 text-white mt-2 ps-2">ICV Certificate</li>
					<li><Link href="/services/icv-certification">ICV Certificate UAE</Link></li>
				</ul>
			</li>

			<li className="item">
				<Link href="/blog">Insights &amp; Updates</Link>
			</li>

			<li className="item">
				<a href="/#faq" onClick={scrollToFaq}>FAQs</a>
			</li>

			<li className="item">
				<Link href="/contact">Contact Us</Link>
			</li>
		</ul>
	);
}
