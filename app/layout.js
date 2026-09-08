import "@/node_modules/react-modal-video/css/modal-video.css";
import "@/public/css/bootstrap.css";
import "@/public/css/swiper-bundle.min.css";
import "@/public/css/odometer.min.css";
import "@/public/css/magnific-popup.min.css";
import "@/public/css/animate.min.css";
import "@/public/css/animate2.min.css";
import "@/public/css/textanimation.css";
import "@/public/font/fonts.css";
import "@/public/icons/icomoon/style.css";
import "@/public/icons/flaticon/font/flaticon_saylo.css";
import "@/public/css/styles.css";
import { Public_Sans } from 'next/font/google';
import Script from 'next/script';

const publicSans = Public_Sans({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	metadataBase: new URL('https://hedgeasglobal.com'),
	title: {
		default: 'Hedge Chartered Accountants Group | Accounting, Audit, Tax & Advisory Firm UAE',
		template: '%s | Hedge Chartered Accountants Group'
	},
	description: 'Hedge Chartered Accountants Group provides professional accounting, statutory audit, UAE Corporate Tax, VAT compliance, ICV certification, and E-Invoicing solutions across Abu Dhabi, Dubai, Bahrain, and India.',
	keywords: [
		'Accounting Firm UAE',
		'Accounting Firm Abu Dhabi',
		'Accounting Firm Dubai',
		'Accounting Services UAE',
		'Bookkeeping UAE',
		'Audit Firm UAE',
		'Audit Firm Abu Dhabi',
		'UAE Corporate Tax',
		'Corporate Tax Consultant UAE',
		'VAT Consultant UAE',
		'ICV Certification UAE',
		'E-Invoicing UAE',
		'Tax Consultant Abu Dhabi'
	],
	authors: [{ name: 'Hedge Chartered Accountants Group' }],
	openGraph: {
		title: 'Hedge Chartered Accountants Group | Accounting, Audit & Tax UAE',
		description: 'Financial Clarity for Confident Business Decisions. Professional accounting, FTA-approved tax consulting, statutory audits, ICV certification, and E-Invoicing.',
		url: 'https://hedgeasglobal.com',
		siteName: 'Hedge Chartered Accountants Group',
		images: [
			{
				url: '/images/logo/hedgelogo.png',
				width: 800,
				height: 600,
				alt: 'Hedge Chartered Accountants Group Logo',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Hedge Chartered Accountants Group',
		description: 'Accounting, Audit, Tax & Financial Advisory in UAE, Bahrain, India.',
		images: ['/images/logo/hedgelogo.png'],
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/images/logo/hedgelogo.png',
	},
	alternates: {
		canonical: 'https://hedgeasglobal.com',
	}
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'AccountingService',
	'name': 'Hedge Chartered Accountants Group',
	'image': 'https://hedgeasglobal.com/images/logo/hedgelogo.png',
	'@id': 'https://hedgeasglobal.com',
	'url': 'https://hedgeasglobal.com',
	'telephone': '+971 50 225 3373',
	'priceRange': '$$$',
	'address': {
		'@type': 'PostalAddress',
		'streetAddress': 'Office 702, Al Ghaith Tower, Hamdan Bin Mohammed Street',
		'addressLocality': 'Abu Dhabi',
		'addressRegion': 'Abu Dhabi',
		'postalCode': '41477',
		'addressCountry': 'AE'
	},
	'geo': {
		'@type': 'GeoCoordinates',
		'latitude': 24.4882,
		'longitude': 54.3644
	},
	'openingHoursSpecification': {
		'@type': 'OpeningHoursSpecification',
		'dayOfWeek': [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		],
		'opens': '09:00',
		'closes': '18:00'
	},
	'sameAs': [
		'https://hedgeasglobal.com'
	],
	'subOrganization': {
		'@type': 'TaxAdvisor',
		'name': 'Pioneer Hedge Auditing & Tax Consulting',
		'description': 'FTA-Approved Tax Agency and Auditing Division of Hedge Chartered Accountants Group'
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<Script
					id="json-ld-structured-data"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className={`${publicSans.className}`}>{children}</body>
		</html>
	);
}
