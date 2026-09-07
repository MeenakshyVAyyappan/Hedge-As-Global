'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function MobileMenu() {
	const pathname = usePathname();
	const [activeDropdown, setActiveDropdown] = useState(null);

	const toggleDropdown = (key) => {
		setActiveDropdown(activeDropdown === key ? null : key);
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
					<Link href="/services">Services</Link>
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
					<li><Link href="/services">All Services Overview</Link></li>
					<li><Link href="/services/accounting-services">Accounting Services</Link></li>
					<li><Link href="/services/bookkeeping">Bookkeeping Services</Link></li>
					<li><Link href="/services/audit-assurance">Audit & Assurance (Pioneer Hedge)</Link></li>
					<li><Link href="/services/uae-corporate-tax">UAE Corporate Tax</Link></li>
					<li><Link href="/services/vat-uae">VAT UAE</Link></li>
					<li><Link href="/services/vat-bahrain">VAT Bahrain</Link></li>
					<li><Link href="/services/icv-certification">ICV Certification</Link></li>
					<li><Link href="/services/e-invoicing">UAE E-Invoicing</Link></li>
					<li><Link href="/services/business-advisory">Business Advisory</Link></li>
				</ul>
			</li>

			<li className="item">
				<Link href="/blog">Insights & Updates</Link>
			</li>

			<li className="item">
				<Link href="/contact">Contact Us</Link>
			</li>
		</ul>
	);
}
