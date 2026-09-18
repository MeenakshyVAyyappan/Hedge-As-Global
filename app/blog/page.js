import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { blogsData, fetchBlogsFromApi } from "@/data/blogs";

export const metadata = {
	title: "Insights & Regulatory Updates | Hedge Chartered Accountants Group",
	description: "Latest expert articles on UAE Corporate Tax, VAT compliance, statutory audit, ICV certification, and E-Invoicing.",
	alternates: {
		canonical: "https://hedgeasglobal.com/blog"
	}
};

export default async function BlogPage() {
	const blogs = await fetchBlogsFromApi();
	const articles = blogs && blogs.length > 0 ? blogs : blogsData;

	return (
		<Layout breadcrumbTitle="Insights & Updates" mainCls="padding-0" breadcrumbBg="/images/bredcrumb/bredcrumb1.jpeg">
			<section className="py-5 bg-light-slate">
				<div className="tf-container">


					{/* Featured Article */}
					{articles.length > 0 && (
						<div className="row mb-5">
							<div className="col-12">
								<div className="card-blog-featured bg-white rounded-4 border shadow-sm overflow-hidden d-flex flex-column flex-lg-row">
									<div className="image-wrap position-relative w-100 w-lg-50" style={{ minHeight: "clamp(220px, 30vw, 360px)" }}>
										<div className="bg-image w-100 h-100 position-absolute" style={{ backgroundImage: `url(${articles[0].image || '/images/blog/blog1.png'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
									</div>
									<div className="content p-4 p-md-5 w-100 w-lg-50 d-flex flex-column justify-content-center">
										<div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
											<span className="badge bg-red text-white fs-12 fw-7 uppercase px-3 py-1 rounded">
												{articles[0].category}
											</span>
											<span className="text-muted fs-14 fw-6">{articles[0].date}</span>
										</div>
										<h2 className="mb-3 font-main-2" style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, lineHeight: 1.25 }}>
											<Link href={`/blog/${articles[0].slug}`} className="text-dark hover-text-red">
												{articles[0].title}
											</Link>
										</h2>
										<p className="text-muted fs-16 mb-4 leading-relaxed">
											{articles[0].excerpt}
										</p>
										<div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mt-auto pt-2 border-top border-light">
											<span className="fw-7 text-dark fs-14"><i className="icon-user me-2 text-red"></i>{articles[0].author}</span>
											<Link href={`/blog/${articles[0].slug}`} className="tf-btn secondary small">
												Read Full Insight
												<i className="icon-chevron-right ms-2" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Rest of the articles */}
					<div className="row g-4 g-lg-4">
						{articles.slice(1).map((article) => (
							<div key={article.id} className="col-lg-4 col-md-6">
								<div className="card-blog-item bg-white rounded-4 border shadow-sm h-100 d-flex flex-column overflow-hidden hover-up transition-all">
									<div className="image hover-1" style={{ height: "220px", overflow: "hidden" }}>
										<img src={article.image || '/images/blog/blog1.png'} alt={article.title} className="w-100 h-100" style={{ objectFit: "cover" }} />
									</div>
									<div className="content p-4 d-flex flex-column flex-grow-1">
										<div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-1">
											<span className="text-red fs-12 fw-7 uppercase">
												{article.category}
											</span>
											<span className="text-muted fs-12">{article.date}</span>
										</div>
										<h3 className="fs-20 fw-7 mb-3 font-main-2 leading-tight">
											<Link href={`/blog/${article.slug}`} className="text-dark hover-text-red">
												{article.title}
											</Link>
										</h3>
										<p className="text-muted fs-14 mb-4 leading-relaxed flex-grow-1">
											{article.excerpt}
										</p>
										<div className="mt-auto d-flex align-items-center border-top pt-3">
											<Link href={`/blog/${article.slug}`} className="fw-7 text-dark hover-text-red fs-14 d-flex align-items-center">
												Read Article
												<i className="icon-chevron-right ms-2 text-red fs-12" />
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Layout>
	);
}

