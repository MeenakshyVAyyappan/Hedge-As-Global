'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Menu() {
	const pathname = usePathname();

	const isActive = (path) => (pathname === path ? "current" : "");
	const isParentActive = (paths) => (paths.some((path) => pathname.startsWith(path)) ? "current" : "");

	return (
		<ul className="nav-list">
			<li className={`item ${isActive("/")}`}>
				<Link href="/"><span>Home</span></Link>
			</li>

			<li className={`item ${isActive("/about-us")}`}>
				<Link href="/about-us"><span>About Us</span></Link>
			</li>

			<li className={`item has-child ${isParentActive(["/services", "/our-service", "/service-details"])}`}>
				<Link href="/services"><span>Services</span></Link>
				<ul className="sub-nav" style={{ minWidth: "260px" }}>
					<li className={isActive("/services")}>
						<Link href="/services"><span className="fw-7 text-red">All Services Overview</span></Link>
					</li>
					<li className={isActive("/services/accounting-services")}>
						<Link href="/services/accounting-services"><span>Accounting Services</span></Link>
					</li>
					<li className={isActive("/services/bookkeeping")}>
						<Link href="/services/bookkeeping"><span>Bookkeeping Services</span></Link>
					</li>
					<li className={isActive("/services/audit-assurance")}>
						<Link href="/services/audit-assurance"><span>Audit & Assurance (Pioneer Hedge)</span></Link>
					</li>
					<li className={isActive("/services/uae-corporate-tax")}>
						<Link href="/services/uae-corporate-tax"><span>UAE Corporate Tax</span></Link>
					</li>
					<li className={isActive("/services/vat-uae")}>
						<Link href="/services/vat-uae"><span>VAT UAE Services</span></Link>
					</li>
					<li className={isActive("/services/vat-bahrain")}>
						<Link href="/services/vat-bahrain"><span>VAT Bahrain</span></Link>
					</li>
					<li className={isActive("/services/icv-certification")}>
						<Link href="/services/icv-certification"><span>ICV Certification</span></Link>
					</li>
					<li className={isActive("/services/e-invoicing")}>
						<Link href="/services/e-invoicing"><span>UAE E-Invoicing</span></Link>
					</li>
					<li className={isActive("/services/business-advisory")}>
						<Link href="/services/business-advisory"><span>Business Advisory</span></Link>
					</li>
				</ul>
			</li>

			<li className={`item ${isParentActive(["/blog"])}`}>
				<Link href="/blog"><span>Insights & Blog</span></Link>
			</li>

			<li className={`item ${isActive("/contact")}`}>
				<Link href="/contact"><span>Contact</span></Link>
			</li>
		</ul>
	);
}
