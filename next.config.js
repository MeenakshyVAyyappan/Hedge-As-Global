/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{ source: '/our-service', destination: '/services', permanent: true },
			{ source: '/our-service-02', destination: '/services', permanent: true },
			{ source: '/service-details', destination: '/services/accounting-services', permanent: true },
			{ source: '/blog-standard', destination: '/blog', permanent: true },
			{ source: '/blog-details', destination: '/blog', permanent: true },
			{ source: '/case-study-01', destination: '/services', permanent: true },
			{ source: '/case-study-02', destination: '/services', permanent: true },
			{ source: '/case-details', destination: '/services', permanent: true },
			{ source: '/home-2', destination: '/', permanent: true },
			{ source: '/home-3', destination: '/', permanent: true },
			{ source: '/home-4', destination: '/', permanent: true },
			{ source: '/team-member', destination: '/about-us', permanent: true },
			{ source: '/team-details', destination: '/about-us', permanent: true },
			{ source: '/pricing-table', destination: '/services', permanent: true },
			{ source: '/career', destination: '/about-us', permanent: true },
			{ source: '/awards', destination: '/about-us', permanent: true },
			{ source: '/mission-vision', destination: '/about-us', permanent: true },
		];
	},
};

module.exports = nextConfig;
