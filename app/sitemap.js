import { servicesData } from "@/data/services";
import { blogsData } from "@/data/blogs";

export default async function sitemap() {
	const baseUrl = "https://hedgeasglobal.com";

	const staticRoutes = [
		"",
		"/about-us",
		"/services",
		"/blog",
		"/contact",
		"/faqs"
	].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString(),
		changeFrequency: "weekly",
		priority: route === "" ? 1.0 : 0.8,
	}));

	const serviceRoutes = servicesData.map((s) => ({
		url: `${baseUrl}/services/${s.slug}`,
		lastModified: new Date().toISOString(),
		changeFrequency: "monthly",
		priority: 0.9,
	}));

	const blogRoutes = blogsData.map((b) => ({
		url: `${baseUrl}/blog/${b.slug}`,
		lastModified: new Date().toISOString(),
		changeFrequency: "monthly",
		priority: 0.7,
	}));

	return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
