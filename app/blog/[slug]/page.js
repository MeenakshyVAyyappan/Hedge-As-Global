import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsData } from "@/data/blogs";
import ConsultationForm from "@/components/forms/ConsultationForm";

export async function generateMetadata({ params }) {
	const article = blogsData.find((b) => b.slug === params.slug);
	if (!article) return { title: "Article Not Found" };

	return {
		title: `${article.title} | Hedge Insights`,
		description: article.excerpt,
		alternates: {
			canonical: `https://hedgeasglobal.com/blog/${article.slug}`
		}
	};
}

export async function generateStaticParams() {
	return blogsData.map((b) => ({
		slug: b.slug,
	}));
}

export default function BlogDetailPage({ params }) {
	const article = blogsData.find((b) => b.slug === params.slug);
	if (!article) {
		notFound();
	}

	const relatedArticles = blogsData.filter((b) => b.slug !== params.slug).slice(0, 3);

	return (
		<Layout breadcrumbTitle={article.title}>
			<section className="py-5 bg-light-slate">
				<div className="tf-container">
					<div className="row g-4">
						<div className="col-lg-8">
							<article className="bg-white p-5 rounded-4 border shadow-sm">
								<div className="d-flex align-items-center gap-2 mb-3">
									<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 rounded-pill fw-7">
										{article.category}
									</span>
									<span className="text-muted fs-14">{article.date} • By {article.author}</span>
								</div>

								<h1 className="font-main-2 text-dark fs-32 fw-7 mb-4">
									{article.title}
								</h1>

								<div
									className="article-content text-muted fs-16 leading-relaxed mb-5"
									dangerouslySetInnerHTML={{ __html: article.content }}
								/>

								<div className="p-4 bg-light-slate rounded-3 border d-flex justify-content-between align-items-center flex-wrap gap-3">
									<div>
										<h4 className="fw-7 text-dark fs-16 mb-1">Need Specific Advisory On This Topic?</h4>
										<p className="fs-13 text-muted mb-0">Our tax and audit team can assist your business with compliance review.</p>
									</div>
									<Link href="/contact" className="tf-btn small">
										Consult an Advisor
									</Link>
								</div>
							</article>
						</div>

						<div className="col-lg-4">
							<div className="bg-white p-4 rounded-4 border shadow-sm mb-4">
								<h3 className="fs-18 fw-7 text-dark mb-3">Related Insights</h3>
								<ul className="list-unstyled mb-0">
									{relatedArticles.map((rel) => (
										<li key={rel.id} className="mb-3 pb-3 border-bottom last-border-0">
											<span className="badge bg-light text-red fs-11 fw-6 uppercase mb-1 d-inline-block">
												{rel.category}
											</span>
											<Link href={`/blog/${rel.slug}`} className="text-dark fw-6 hover-text-red d-block fs-14 mb-1">
												{rel.title}
											</Link>
											<span className="text-muted fs-12">{rel.date}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="bg-dark text-white p-4 rounded-4 shadow-sm text-center">
								<h4 className="text-white fs-18 fw-7 mb-2">Subscribe to Hedge Tax Updates</h4>
								<p className="text-white-70 fs-13 mb-3">Get official UAE FTA & Corporate Tax insights delivered directly.</p>
								<Link href="/contact" className="tf-btn secondary w-100 justify-content-center">
									Get Regulatory Newsletters
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-5 bg-dark text-white">
				<div className="tf-container">
					<div className="row align-items-center">
						<div className="col-lg-5 mb-4 mb-lg-0">
							<h2 className="text-white font-main-2 fs-32 fw-7 mb-3">Questions Regarding UAE Regulation?</h2>
							<p className="text-white-70 fs-15 leading-relaxed">
								Speak with our registered tax agents at Pioneer Hedge Auditing & Tax Consulting.
							</p>
						</div>
						<div className="col-lg-7">
							<ConsultationForm title="Inquire With Tax Practice" />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
