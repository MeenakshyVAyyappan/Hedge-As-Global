'use client';
import { useState } from 'react';
import PhoneInput from '@/components/elements/PhoneInput';

export default function Section2() {
	const [formData, setFormData] = useState({
		name: '',
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
				setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
			} else {
				setStatus({ loading: false, submitted: false, error: data.error || 'Submission failed.' });
			}
		} catch (err) {
			setStatus({ loading: false, submitted: false, error: 'Network error.' });
		}
	};

	return (
		<>

			<section className="s-map">
				<div className="box-map">
					{/* <div id="map" className="map" /> */}
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={825} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
				</div>
				<div className="content-wrap">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-8 offset-lg-4">
								<div className="content">
									<div className="comment-wrap style-2">
										<h3 className="text-anime-wave">
											Send Us Message
										</h3>
										<p className="note mb-40">
											Required fields are marked *
										</p>
										{status.submitted ? (
											<div className="alert alert-success p-3 rounded mb-4">
												Thank you! Your message has been sent. Our team will contact you shortly.
											</div>
										) : (
											<form onSubmit={handleSubmit} className="form-comment style-3">
												{status.error && <div className="alert alert-danger p-2 fs-13 mb-3">{status.error}</div>}
												<div className="cols mb-20">
													<fieldset>
														<input
															type="text"
															name="name"
															placeholder="Name *"
															required
															value={formData.name}
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
															placeholder="Message"
															value={formData.message}
															onChange={handleChange}
														/>
													</fieldset>
												</div>
												<div className="bot">
													<button type="submit" className="tf-btn text-anime-style-1" disabled={status.loading}>
														{status.loading ? 'Sending...' : 'Send Message Us'}
														<i className="icon-chevron-right" />
													</button>
												</div>
											</form>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
