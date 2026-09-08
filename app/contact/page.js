import Layout from "@/components/layout/Layout"
import Contact from "@/components/pages/contact"

export const metadata = {
	title: "Contact Us | Hedge Chartered Accountants Group",
	description: "Get in touch with Hedge Chartered Accountants Group. Contact our offices in Abu Dhabi, Dubai, Al Ain, Bahrain and India for accounting, audit, tax, and advisory services.",
	alternates: {
		canonical: "https://hedgeasglobal.com/contact"
	}
};

export default function ContactPage() {
	return (
		<Layout breadcrumbTitle="Contact Us" mainCls="padding-0" breadcrumbBg="/images/bredcrumb/bredcrumb1.jpeg">
			<Contact />
		</Layout>
	)
}