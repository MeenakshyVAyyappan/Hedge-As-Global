'use client';
import { useState } from 'react';
import PhoneInput from '@/components/elements/PhoneInput';

export default function Section6() {
	const [formData, setFormData] = useState({
		fullName: '',
		phone: '',
		email: '',
		subject: '',
		message: '',
	});
	const [status, setStatus] = useState({ loading: false, submitted: false, error: null });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus({ loading: true, submitted: false, error: null });
		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			if (data.success) {
				setStatus({ loading: false, submitted: true, error: null });
				setFormData({ fullName: '', phone: '', email: '', subject: '', message: '' });
			} else {
				setStatus({ loading: false, submitted: false, error: data.error || 'Submission failed.' });
			}
		} catch (err) {
			setStatus({ loading: false, submitted: false, error: 'Network error.' });
		}
	};

	return (
		<>

			<section className="s-contact tf-spacing-3">
				<div className="tf-container ">
					<div className="row">
						<div className="col-lg-12">
							<div className="content-wrap">
								<div className="content-left">
									<p className="s-sub-title">
										<i className="icon-angles-right moveLeftToRight" />
										need consultations
									</p>
									<p className="s-title text-anime-wave">
										Ready to Get Free <span>
											Consultation ?
										</span>
									</p>
									<ul className="list">
										<li className="wow fadeInUp" data-wow-delay="0s">
											<p className="cap">Address Business</p>
											<p className="infor">
												Al Ghaith Tower, Hamdan St, Abu Dhabi, UAE
											</p>
										</li>
										<li className="wow fadeInUp" data-wow-delay="0.1s">
											<p className="cap">Contact Us</p>
											<p className="infor">
												info@hedgeasglobal.com<br />
												+971 50 225 3373
											</p>
										</li>
									</ul>
								</div>
								<div className="content-right">
									<p className="title mb-30 text-center font-main-2">
										Get Free Consultation
									</p>
									{status.submitted ? (
										<div className="alert alert-success p-3 rounded mb-4">
											Thank you! Your consultation request has been sent. Our team will contact you shortly.
										</div>
									) : (
										<form onSubmit={handleSubmit} className="form-contact style-3">
											{status.error && <div className="alert alert-danger p-2 fs-13 mb-3">{status.error}</div>}
											<div className="cols mb-20">
												<fieldset>
													<input
														type="text"
														name="fullName"
														placeholder="Full Name *"
														required
														value={formData.fullName}
														onChange={handleChange}
													/>
												</fieldset>
												<fieldset>
													<PhoneInput
														name="phone"
														placeholder="Phone *"
														required
														value={formData.phone}
														onChange={handleChange}
													/>
												</fieldset>
											</div>
											<div className="cols mb-20">
												<fieldset>
													<input
														type="email"
														name="email"
														placeholder="Email *"
														required
														value={formData.email}
														onChange={handleChange}
													/>
												</fieldset>
												<fieldset>
													<input
														type="text"
														name="subject"
														placeholder="Subject *"
														required
														value={formData.subject}
														onChange={handleChange}
													/>
												</fieldset>
											</div>
											<div className="cols mb-20">
												<fieldset>
													<textarea
														name="message"
														className="h-100px"
														placeholder="Write message"
														value={formData.message}
														onChange={handleChange}
													/>
												</fieldset>
											</div>
											<button type="submit" className="tf-btn full text-anime-style-1" disabled={status.loading}>
												{status.loading ? 'Submitting...' : 'Get Consultation'}
												<i className="icon-chevron-right" />
											</button>
										</form>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
