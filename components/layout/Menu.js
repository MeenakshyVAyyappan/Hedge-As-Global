'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Menu() {
	const pathname = usePathname();
	const router = useRouter();

	const isActive = (path) => (pathname === path ? "current" : "");
	const isParentActive = (paths) => (paths.some((path) => pathname.startsWith(path)) ? "current" : "");

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
		<ul className="nav-list">
			<li className={`item ${isActive("/")}`}>
				<Link href="/"><span>Home</span></Link>
			</li>

			<li className={`item ${isActive("/about-us")}`}>
				<Link href="/about-us"><span>About Us</span></Link>
			</li>

			{/* Our Services Multi-Level Dropdown */}
			<li className={`item has-child ${isParentActive(["/services", "/our-service", "/service-details"])}`}>
				<Link href="/services">
					<span>Our Services</span>
				</Link>
				<ul className="sub-nav hedge-services-dropdown" style={{ width: "210px", padding: "8px 0" }}>
					
					{/* Level 1: Accounting */}
					<li className="hedge-has-flyout">
						<Link href="/services/accounting-services" className="d-flex align-items-center justify-content-between px-3 py-2">
							<span>Accounting</span>
							<i className="icon-chevron-right fs-11 ms-2" />
						</Link>
						<ul className="hedge-flyout-menu">
							<li>
								<Link href="/services/accounting-services"><span>Accounting Services</span></Link>
							</li>
							<li>
								<Link href="/services/bookkeeping"><span>Book Keeping</span></Link>
							</li>
						</ul>
					</li>

					{/* Level 1: Auditing */}
					<li className="hedge-has-flyout">
						<Link href="/services/audit-assurance" className="d-flex align-items-center justify-content-between px-3 py-2">
							<span>Auditing</span>
							<i className="icon-chevron-right fs-11 ms-2" />
						</Link>
						<ul className="hedge-flyout-menu">
							<li>
								<Link href="/services/audit-assurance"><span>Audit</span></Link>
							</li>
						</ul>
					</li>

					{/* Level 1: Taxation */}
					<li className="hedge-has-flyout">
						<Link href="/services/uae-corporate-tax" className="d-flex align-items-center justify-content-between px-3 py-2">
							<span>Taxation</span>
							<i className="icon-chevron-right fs-11 ms-2" />
						</Link>
						<ul className="hedge-flyout-menu">
							<li>
								<Link href="/services/uae-corporate-tax"><span>UAE Corporate Tax</span></Link>
							</li>
							<li>
								<Link href="/services/vat-uae"><span>VAT UAE</span></Link>
							</li>
							<li>
								<Link href="/services/vat-bahrain"><span>VAT Bahrain</span></Link>
							</li>
						</ul>
					</li>

					{/* Level 1: ICV Certificate */}
					<li className="hedge-has-flyout">
						<Link href="/services/icv-certification" className="d-flex align-items-center justify-content-between px-3 py-2">
							<span>ICV Certificate</span>
							<i className="icon-chevron-right fs-11 ms-2" />
						</Link>
						<ul className="hedge-flyout-menu">
							<li>
								<Link href="/services/icv-certification"><span>ICV Certificate UAE</span></Link>
							</li>
						</ul>
					</li>

				</ul>
			</li>

			<li className={`item ${isParentActive(["/blog"])}`}>
				<Link href="/blog"><span>Insights &amp; Blog</span></Link>
			</li>

			<li className="item">
				<a href="/#faq" onClick={scrollToFaq}><span>FAQs</span></a>
			</li>

			<li className={`item ${isActive("/contact")}`}>
				<Link href="/contact"><span>Contact</span></Link>
			</li>
		</ul>
	);
}

