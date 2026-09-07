import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { blogsData } from "@/data/blogs";

export const metadata = {
	title: "Insights & Regulatory Updates | Hedge Chartered Accountants Group",
	description: "Latest expert articles on UAE Corporate Tax, VAT compliance, statutory audit, ICV certification, and E-Invoicing.",
	alternates: {
		canonical: "https://hedgeasglobal.com/blog"
	}
};

export default function BlogPage() {
	return (
		<Layout breadcrumbTitle="Insights & Updates">
			<section className="py-5 bg-light-slate">
				<div className="tf-container">
					<div className="row justify-content-center text-center mb-5">
						<div className="col-lg-8">
							<span className="badge bg-red text-white fs-12 uppercase px-3 py-1 mb-2 rounded-pill fw-7">
								Hedge Thought Leadership
							</span>
							<h1 className="font-main-2 text-dark fs-36 fw-7">
								Insights & Tax Regulatory Updates
							</h1>
							<p className="text-muted fs-16 mt-2">
								Stay informed on evolving UAE Corporate Tax decrees, Federal Tax Authority regulations, E-Invoicing standards, and financial best practices.
							</p>
						</div>
					</div>

					<div className="row g-4">
						{blogsData.map((article) => (
							<div key={article.id} className="col-lg-6">
								<div className="card-blog-item bg-white p-4 rounded-3 border shadow-sm h-100 d-flex flex-column justify-content-between">
									<div>
										<div className="d-flex align-items-center gap-2 mb-2">
											<span className="badge bg-red text-white fs-11 fw-7 uppercase px-2 py-1 rounded">
												{article.category}
											</span>
											<span className="text-muted fs-12">{article.date} • {article.author}</span>
										</div>
										<h2 className="fs-20 fw-7 mb-2">
											<Link href={`/blog/${article.slug}`} className="text-dark hover-text-red">
												{article.title}
											</Link>
										</h2>
										<p className="text-muted fs-14 mb-4 leading-relaxed">
											{article.excerpt}
										</p>
									</div>
									<div>
										<Link href={`/blog/${article.slug}`} className="tf-btn secondary small">
											Read Full Insight
											<i className="icon-chevron-right ms-1" />
										</Link>
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
