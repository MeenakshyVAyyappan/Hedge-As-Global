'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faqsData, fetchFaqsFromApi } from '@/data/faqs';
import ConsultationForm from '@/components/forms/ConsultationForm';

export default function Section1() {
	const [faqs, setFaqs] = useState(faqsData);
	const [isAccordion, setIsAccordion] = useState(1);

	useEffect(() => {
		async function loadFaqs() {
			const apiFaqs = await fetchFaqsFromApi();
			if (apiFaqs && apiFaqs.length > 0) {
				setFaqs(apiFaqs);
			}
		}
		loadFaqs();
	}, []);

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key);
	};

	return (
		<>
			<section className="s-page-faq">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="content">
								<p className="s-sub-title">
									<i className="icon-angles-right moveLeftToRight" />
									faqs
								</p>
								<p className="s-title mb-50 text-anime-wave">
									Frequently Asked
									<span>
										Questions
									</span>
								</p>
								<span className="line" />
								<p className="title text-anime-style-2">
									Hedge AS Global Official FAQs
								</p>
								<div className="tf-accordion style-4 style-2 accordion mb-70" id="accordionExample">
									{faqs.map((faq, index) => {
										const itemKey = index + 1;
										const isOpen = isAccordion === itemKey;
										return (
											<div key={faq.id || index} className="accordion-item mb-3 rounded border">
												<h2 className="accordion-header" onClick={() => handleAccordion(itemKey)}>
													<button className={`accordion-button ${!isOpen ? 'collapsed' : ''}`} type="button">
														{faq.question}
													</button>
												</h2>
												<div className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}>
													<div className="accordion-body text-muted leading-relaxed">
														{faq.answer}
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="tf-sidebar">
								<div className="sb-item sb-contact mb-30 p-0 border-0 bg-transparent">
									<ConsultationForm title="Have Questions on Mind?" />
								</div>
								<div className="sb-item sb-service">
									<div className="tf-overlay" />
									<div className="image">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/blog/service-sidebar.jpg" alt="" />
									</div>
									<div className="content">
										<p className="font-main-2 text-anime-wave">
											Professional &amp; Experienced Business
											<span>
												Services
											</span>
										</p>
										<Link href="/our-service" className="tf-btn text-anime-style-1">
											Get Consultation
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
