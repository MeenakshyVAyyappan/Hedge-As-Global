import Layout from "@/components/layout/Layout";
import OurService from "@/components/pages/ourService";

export const metadata = {
	title: "Professional Accounting, Audit & Tax Services UAE | Hedge Group",
	description: "Explore Hedge Chartered Accountants Group's services including Accounting, Bookkeeping, Statutory Audit, UAE Corporate Tax, VAT, ICV Certification, and E-Invoicing.",
	alternates: {
		canonical: "https://hedgeasglobal.com/services"
	}
};

export default function ServicesPage() {
	return (
		<Layout breadcrumbTitle="Our Services" mainCls="padding-0" breadcrumbBg="/images/bredcrumb/bredcrumb1.jpeg">
			<OurService />
		</Layout>
	);
}


