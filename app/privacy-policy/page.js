import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
	title: 'Privacy Policy | Hedge Chartered Accountants Group UAE',
	description: 'Privacy Policy of Hedge Chartered Accountants Group. Read how we protect enterprise financial data, ensure client confidentiality, and adhere to UAE data protection laws.',
};

export default function PrivacyPolicy() {
	return (
		<Layout breadcrumbTitle="Privacy Policy" mainCls="padding-0" breadcrumbBg="/images/bredcrumb/bredcrumb1.jpeg">
			<section style={{ backgroundColor: '#f8fafc', paddingTop: '60px', paddingBottom: '80px' }}>
				<div className="container" style={{ maxWidth: '960px' }}>
					<div 
						style={{ 
							backgroundColor: '#ffffff', 
							borderRadius: '16px', 
							boxShadow: '0 10px 35px rgba(3, 33, 78, 0.05)', 
							border: '1px solid #e2e8f0', 
							padding: '48px 40px' 
						}}
						className="policy-card-container"
					>
						{/* Top Header Card */}
						<div style={{ marginBottom: '32px' }}>
							<span style={{ 
								display: 'inline-block',
								backgroundColor: 'rgba(3, 33, 78, 0.08)', 
								color: '#03214e', 
								fontWeight: '600', 
								fontSize: '12px', 
								padding: '6px 14px', 
								borderRadius: '20px', 
								textTransform: 'uppercase', 
								letterSpacing: '0.8px',
								marginBottom: '14px'
							}}>
								Statutory &amp; Data Governance Policy
							</span>
							<h1 style={{ 
								fontSize: '32px', 
								lineHeight: '1.25', 
								fontWeight: '800', 
								color: '#03214e', 
								marginBottom: '10px',
								letterSpacing: '-0.02em'
							}}>
								Privacy Policy
							</h1>
							<p style={{ color: '#64748b', fontSize: '14px', margin: 0, fontWeight: '500' }}>
								Effective Date: September 2026 &nbsp;|&nbsp; Hedge Chartered Accountants Group UAE
							</p>
							<hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '24px 0' }} />
						</div>

						{/* Content Body */}
						<div style={{ color: '#334155', fontSize: '15px', lineHeight: '1.8' }}>
							<p style={{ marginBottom: '24px' }}>
								At <strong>Hedge Chartered Accountants Group</strong> (operating through Pioneer Hedge Auditing &amp; Tax Consulting in the UAE), client confidentiality and data security are the foundation of our practice. This Privacy Policy outlines how we collect, use, process, and safeguard your personal and enterprise financial data when you visit our website (<Link href="/" style={{ color: '#c8102e', fontWeight: '600', textDecoration: 'none' }}>hedgeasglobal.com</Link>) or engage our professional auditing, accounting, tax, and advisory services.
							</p>

							{/* Section 1 */}
							<div style={{ marginTop: '36px', marginBottom: '28px' }}>
								<h2 style={{ 
									fontSize: '20px', 
									fontWeight: '700', 
									color: '#03214e', 
									marginBottom: '14px',
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}>
									<span style={{ width: '4px', height: '18px', backgroundColor: '#c8102e', borderRadius: '2px', display: 'inline-block' }}></span>
									1. Information We Collect
								</h2>
								<p style={{ marginBottom: '16px' }}>
									To provide statutory audit, UAE Corporate Tax filing, VAT compliance, bookkeeping, ICV certification, and E-Invoicing services, we collect information that you directly provide to us, including:
								</p>
								<ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0 0 20px 0' }}>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										<strong style={{ color: '#03214e' }}>Identity &amp; Contact Details:</strong> Full name, corporate email address, phone number, company name, job title, and official business address.
									</li>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										<strong style={{ color: '#03214e' }}>Financial &amp; Accounting Records:</strong> Trial balances, general ledgers, invoices, payroll logs, bank statements, trade licenses, and tax registration documents necessary for professional engagements.
									</li>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										<strong style={{ color: '#03214e' }}>Technical &amp; Website Data:</strong> IP addresses, browser types, device information, and interaction metrics gathered automatically when navigating our website.
									</li>
								</ul>
							</div>

							{/* Section 2 */}
							<div style={{ marginTop: '36px', marginBottom: '28px' }}>
								<h2 style={{ 
									fontSize: '20px', 
									fontWeight: '700', 
									color: '#03214e', 
									marginBottom: '14px',
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}>
									<span style={{ width: '4px', height: '18px', backgroundColor: '#c8102e', borderRadius: '2px', display: 'inline-block' }}></span>
									2. Purpose &amp; Legal Basis of Processing
								</h2>
								<p style={{ marginBottom: '16px' }}>
									We process data strictly in compliance with applicable laws, including the <strong>UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL)</strong> and professional regulations governed by the Federal Tax Authority (FTA) and Ministry of Economy:
								</p>
								<ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0 0 20px 0' }}>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '10px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										Delivering chartered accounting, statutory auditing, VAT returns, and Corporate Tax filing.
									</li>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '10px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										Conducting mandatory Anti-Money Laundering (AML) and Know Your Customer (KYC) compliance checks.
									</li>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '10px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										Responding to service inquiries and scheduling executive consultation meetings.
									</li>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '10px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										Enhancing website functionality, performance, and cyber security safeguards.
									</li>
								</ul>
							</div>

							{/* Section 3 */}
							<div style={{ marginTop: '36px', marginBottom: '28px' }}>
								<h2 style={{ 
									fontSize: '20px', 
									fontWeight: '700', 
									color: '#03214e', 
									marginBottom: '14px',
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}>
									<span style={{ width: '4px', height: '18px', backgroundColor: '#c8102e', borderRadius: '2px', display: 'inline-block' }}></span>
									3. Professional Confidentiality &amp; Security
								</h2>
								<p style={{ marginBottom: '16px' }}>
									As licensed Chartered Accountants and registered FTA Tax Consultants, all financial documents, business records, and correspondence are held under strict professional secrecy. We employ enterprise-grade encryption, secure server infrastructure, restricted access protocols, and multi-factor authentication to prevent unauthorized access, disclosure, or alteration of client data.
								</p>
							</div>

							{/* Section 4 */}
							<div style={{ marginTop: '36px', marginBottom: '28px' }}>
								<h2 style={{ 
									fontSize: '20px', 
									fontWeight: '700', 
									color: '#03214e', 
									marginBottom: '14px',
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}>
									<span style={{ width: '4px', height: '18px', backgroundColor: '#c8102e', borderRadius: '2px', display: 'inline-block' }}></span>
									4. Information Sharing &amp; Disclosure
								</h2>
								<p style={{ marginBottom: '16px' }}>
									Hedge Chartered Accountants Group does <strong>never sell, rent, or trade</strong> client or website visitor data to third parties. Disclosure only occurs under the following circumstances:
								</p>
								<ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0 0 20px 0' }}>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										<strong style={{ color: '#03214e' }}>Regulatory Compliance:</strong> Submissions made directly to government authorities (such as the UAE Federal Tax Authority, Ministry of Economy, or Abu Dhabi/Dubai Economic Departments) strictly as requested for tax filings or official certifications.
									</li>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										<strong style={{ color: '#03214e' }}>Authorized Service Providers:</strong> Trusted IT, hosting, or software infrastructure partners operating under strict non-disclosure agreements (NDAs).
									</li>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										<strong style={{ color: '#03214e' }}>Legal Obligations:</strong> When mandated by court order or binding regulatory directives.
									</li>
								</ul>
							</div>

							{/* Section 5 */}
							<div style={{ marginTop: '36px', marginBottom: '28px' }}>
								<h2 style={{ 
									fontSize: '20px', 
									fontWeight: '700', 
									color: '#03214e', 
									marginBottom: '14px',
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}>
									<span style={{ width: '4px', height: '18px', backgroundColor: '#c8102e', borderRadius: '2px', display: 'inline-block' }}></span>
									5. Data Retention Period
								</h2>
								<p style={{ marginBottom: '16px' }}>
									Accounting records, audit working papers, and tax filings are retained for a minimum period of 5 to 7 years in accordance with UAE Commercial Companies Law, Tax Procedures Law, and international auditing standards, after which data is securely erased or archived under encrypted protocols.
								</p>
							</div>

							{/* Section 6 */}
							<div style={{ marginTop: '36px', marginBottom: '28px' }}>
								<h2 style={{ 
									fontSize: '20px', 
									fontWeight: '700', 
									color: '#03214e', 
									marginBottom: '14px',
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}>
									<span style={{ width: '4px', height: '18px', backgroundColor: '#c8102e', borderRadius: '2px', display: 'inline-block' }}></span>
									6. Your Rights &amp; Contact Information
								</h2>
								<p style={{ marginBottom: '16px' }}>
									Subject to statutory accounting and legal record-keeping requirements, you have the right to request access to, correction of, or deletion of your personal data. For privacy inquiries or data requests, please contact our compliance desk:
								</p>

								{/* Contact Box */}
								<div style={{ 
									backgroundColor: '#f1f5f9', 
									borderRadius: '12px', 
									borderLeft: '4px solid #03214e', 
									padding: '24px 28px',
									marginTop: '20px'
								}}>
									<p style={{ fontWeight: '700', color: '#03214e', fontSize: '16px', marginBottom: '10px' }}>
										Hedge Chartered Accountants Group — Data Compliance Officer
									</p>
									<p style={{ marginBottom: '6px', fontSize: '14px', color: '#475569' }}>
										<strong style={{ color: '#03214e' }}>Address:</strong> Office 702, Al Ghaith Tower, Hamdan St, Abu Dhabi, UAE
									</p>
									<p style={{ marginBottom: '6px', fontSize: '14px', color: '#475569' }}>
										<strong style={{ color: '#03214e' }}>Email:</strong> <Link href="mailto:info@hedgeasglobal.com" style={{ color: '#c8102e', fontWeight: '600', textDecoration: 'none' }}>info@hedgeasglobal.com</Link>
									</p>
									<p style={{ margin: 0, fontSize: '14px', color: '#475569' }}>
										<strong style={{ color: '#03214e' }}>Phone:</strong> <Link href="tel:+971502253373" style={{ color: '#c8102e', fontWeight: '600', textDecoration: 'none' }}>+971 50 225 3373</Link>
									</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}

