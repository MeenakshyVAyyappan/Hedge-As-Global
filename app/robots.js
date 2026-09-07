export default function robots() {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api/", "/404"],
		},
		sitemap: "https://hedgeasglobal.com/sitemap.xml",
	};
}
