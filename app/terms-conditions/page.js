import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
	title: 'Terms & Conditions | Hedge Chartered Accountants Group UAE',
	description: 'Terms and Conditions of Hedge Chartered Accountants Group. Review our professional engagement terms, auditing standards, client responsibilities, and governing UAE laws.',
};

export default function TermsConditions() {
	return (
		<Layout breadcrumbTitle="Terms & Conditions" mainCls="padding-0" breadcrumbBg="/images/bredcrumb/bredcrumb1.jpeg">
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
								Legal &amp; Professional Services Governance
							</span>
							<h1 style={{ 
								fontSize: '32px', 
								lineHeight: '1.25', 
								fontWeight: '800', 
								color: '#03214e', 
								marginBottom: '10px',
								letterSpacing: '-0.02em'
							}}>
								Terms &amp; Conditions
							</h1>
							<p style={{ color: '#64748b', fontSize: '14px', margin: 0, fontWeight: '500' }}>
								Effective Date: September 2026 &nbsp;|&nbsp; Hedge Chartered Accountants Group UAE
							</p>
							<hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '24px 0' }} />
						</div>

						{/* Content Body */}
						<div style={{ color: '#334155', fontSize: '15px', lineHeight: '1.8' }}>
							<p style={{ marginBottom: '24px' }}>
								Welcome to <strong>Hedge Chartered Accountants Group</strong> (<Link href="/" style={{ color: '#c8102e', fontWeight: '600', textDecoration: 'none' }}>hedgeasglobal.com</Link>). By accessing our website or engaging our professional auditing, accounting, tax, ICV certification, or business advisory services, you agree to comply with and be bound by the following terms and conditions.
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
									1. Scope of Professional Services
								</h2>
								<p style={{ marginBottom: '16px' }}>
									Hedge Chartered Accountants Group (including Pioneer Hedge Auditing &amp; Tax Consulting) provides specialized professional services including but not limited to statutory audits, internal financial reviews, UAE Corporate Tax consulting, VAT advisory and return filing, ICV certification, E-Invoicing integration, and management accounting.
								</p>
								<p style={{ marginBottom: '16px' }}>
									All professional engagements are formalized through an official engagement letter or service agreement detailing specific deliverables, timelines, fee schedules, and scope boundaries.
								</p>
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
									2. Professional Standards &amp; Regulatory Compliance
								</h2>
								<p style={{ marginBottom: '16px' }}>
									Our services are rendered in strict compliance with:
								</p>
								<ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0 0 20px 0' }}>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										International Financial Reporting Standards (IFRS) and International Standards on Auditing (ISA).
									</li>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										Federal Tax Authority (FTA) regulations governing Corporate Tax and Value Added Tax in the UAE.
									</li>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										UAE Commercial Companies Law and Ministry of Economy requirements.
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
									3. Client Responsibilities &amp; Document Accuracy
								</h2>
								<p style={{ marginBottom: '16px' }}>
									For all accounting, audit, and tax assignments, the client acknowledges and agrees that:
								</p>
								<ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0 0 20px 0' }}>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										Management retains primary responsibility for the accuracy, completeness, and authenticity of all financial statements, invoices, receipts, trade licenses, and supporting records provided to Hedge Group.
									</li>
									<li style={{ position: 'relative', paddingLeft: '24px', marginBottom: '12px' }}>
										<span style={{ position: 'absolute', left: '6px', top: '10px', width: '6px', height: '6px', backgroundColor: '#03214e', borderRadius: '50%' }}></span>
										Hedge Chartered Accountants Group is not liable for penalties, interest, or delays resulting from inaccurate, fraudulent, incomplete, or delayed records supplied by the client.
									</li>
								</ul>
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
									4. Fees, Billing &amp; Invoicing
								</h2>
								<p style={{ marginBottom: '16px' }}>
									Professional fees are charged on a fixed project, retainer, or hourly rate basis as specified in the service agreement. Invoices are payable upon issuance or within the agreed credit period. Outstanding balances may result in temporary suspension of service deliverables or filings.
								</p>
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
									5. Intellectual Property &amp; Website Use
								</h2>
								<p style={{ marginBottom: '16px' }}>
									All content on this website—including articles, tax guides, logos, trademarks, layout designs, and calculation tools—is the exclusive property of Hedge Chartered Accountants Group. Reproducing, republishing, or commercializing website materials without prior written consent is strictly prohibited.
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
									6. Limitation of Liability
								</h2>
								<p style={{ marginBottom: '16px' }}>
									To the maximum extent permitted by UAE law, Hedge Chartered Accountants Group shall not be liable for indirect, incidental, or consequential damages arising from reliance on general information published on this website. Advice provided on this website is for informational purposes and does not constitute formal auditing or tax opinions without a signed engagement agreement.
								</p>
							</div>

							{/* Section 7 */}
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
									7. Governing Law &amp; Jurisdiction
								</h2>
								<p style={{ marginBottom: '16px' }}>
									These terms, agreements, and any disputes arising out of website usage or professional services shall be governed by and construed in accordance with the <strong>laws of the United Arab Emirates</strong>. All disputes shall be subject to the exclusive jurisdiction of the competent courts of Abu Dhabi, UAE.
								</p>
							</div>

							{/* Section 8 */}
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
									8. Contact Us
								</h2>
								<p style={{ marginBottom: '16px' }}>
									If you have questions regarding these Terms &amp; Conditions or professional service engagements, please reach out to our team:
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
										Hedge Chartered Accountants Group — Legal &amp; Client Relations
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

