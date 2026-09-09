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
		<Layout breadcrumbTitle={article.title} mainCls="padding-0" breadcrumbBg="/images/bredcrumb/bredcrumb1.jpeg">
			<section className="py-5 bg-light-slate">
				<div className="tf-container">
					<div className="row g-4">
						<div className="col-lg-8">
							<article className="bg-white p-3 p-sm-4 p-md-5 rounded-4 border shadow-sm">
								<div className="d-flex align-items-center gap-2 flex-wrap mb-4 pb-3 border-bottom">
									<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 rounded-pill fw-7">
										{article.category}
									</span>
									<span className="text-muted fs-14 fw-6"><i className="icon-calendar-days me-1"></i> {article.date}</span>
									<span className="text-muted fs-14 fw-6 ms-0 ms-sm-2"><i className="icon-user me-1 text-red"></i> {article.author}</span>
								</div>

								{article.image && (
									<div className="mb-4 mb-md-5 overflow-hidden rounded-4 shadow-sm" style={{ height: "clamp(220px, 35vw, 400px)" }}>
										<img src={article.image} alt={article.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
									</div>
								)}

								<div
									className="article-content text-muted fs-16 leading-relaxed mb-4 mb-md-5"
									dangerouslySetInnerHTML={{ __html: article.content }}
								/>

								<div className="p-4 bg-light-slate rounded-3 border d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mt-4 mt-md-5">
									<div>
										<h4 className="fw-7 text-dark fs-18 mb-1">Need Specific Advisory On This Topic?</h4>
										<p className="fs-14 text-muted mb-0">Our senior tax and audit team can assist your business with compliance review.</p>
									</div>
									<Link href="/contact" className="tf-btn style-3 shrink-0">
										Consult an Advisor
										<i className="icon-chevron-right ms-2" />
									</Link>
								</div>
							</article>
						</div>

						<div className="col-lg-4">
							<div className="bg-white p-4 rounded-4 border shadow-sm mb-4 sticky-lg-top" style={{ top: "100px", zIndex: 10 }}>
								<h3 className="fs-20 fw-8 text-dark mb-4 font-main-2">Related Insights</h3>
								<ul className="list-unstyled mb-0">
									{relatedArticles.map((rel) => (
										<li key={rel.id} className="mb-4 pb-4 border-bottom last-border-0">
											<span className="text-red fs-11 fw-7 uppercase mb-2 d-inline-block">
												{rel.category}
											</span>
											<Link href={`/blog/${rel.slug}`} className="text-dark fw-7 hover-text-red d-block fs-16 mb-2 leading-tight">
												{rel.title}
											</Link>
											<span className="text-muted fs-12 fw-6">{rel.date}</span>
										</li>
									))}
								</ul>

								<div className="bg-dark text-white p-4 rounded-4 shadow-sm text-center mt-4 position-relative overflow-hidden">
									<div className="position-absolute top-0 start-0 w-100 h-100 bg-red opacity-10" style={{ zIndex: 0 }}></div>
									<div className="position-relative" style={{ zIndex: 1 }}>
										<i className="flaticon-email fs-40 text-red mb-3 d-inline-block" />
										<h4 className="text-white fs-20 fw-7 mb-2">Subscribe to Hedge Tax Updates</h4>
										<p className="text-white-70 fs-14 mb-4 leading-relaxed">Get official UAE FTA &amp; Corporate Tax insights delivered directly.</p>
										<Link href="/contact" className="tf-btn secondary w-100 justify-content-center">
											Get Regulatory Newsletters
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="s-conversion-cta py-5 bg-dark text-white">
				<div className="tf-container">
					<div className="row align-items-center">
						<div className="col-lg-5 mb-4 mb-lg-0">
							<h2 className="text-white font-main-2 fs-32 fw-7 mb-3">Questions Regarding UAE Regulation?</h2>
							<p className="text-white-70 fs-15 leading-relaxed">
								Speak with our registered tax agents at Pioneer Hedge Auditing &amp; Tax Consulting.
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
