'use client';
import { useState } from 'react';

export default function ConsultationForm({ title = "Request a Free Consultation", className = "" }) {
	const [formData, setFormData] = useState({
		fullName: '',
		companyName: '',
		email: '',
		phone: '',
		service: 'Accounting & Bookkeeping',
		message: '',
		websiteHp: '' // honeypot for spam protection
	});

	const [status, setStatus] = useState({
		loading: false,
		submitted: false,
		error: null
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Spam bot honeypot check
		if (formData.websiteHp) {
			return;
		}

		if (!formData.fullName || !formData.email || !formData.phone) {
			setStatus({ loading: false, submitted: false, error: 'Please fill in all required fields.' });
			return;
		}

		setStatus({ loading: true, submitted: false, error: null });

		// Simulate server submission
		setTimeout(() => {
			setStatus({ loading: false, submitted: true, error: null });
			setFormData({
				fullName: '',
				companyName: '',
				email: '',
				phone: '',
				service: 'Accounting & Bookkeeping',
				message: '',
				websiteHp: ''
			});
		}, 1200);
	};

	return (
		<div className={`hedge-consultation-form-wrap ${className}`}>
			{title && <h3 className="form-heading text-white mb-20">{title}</h3>}
			<p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>
				Speak with our senior chartered accountants and tax experts across Abu Dhabi, Dubai, Bahrain, or India.
			</p>

			{status.submitted ? (
				<div className="alert alert-success bg-white text-dark p-4 rounded shadow-sm">
					<h4 className="text-success mb-2"><i className="icon-check-circle me-2"></i> Consultation Requested Successfully!</h4>
					<p className="mb-0">Thank you for reaching out to Hedge Chartered Accountants Group. A senior advisor will contact you within 24 business hours.</p>
				</div>
			) : (
				<form onSubmit={handleSubmit} className="hedge-consultation-form">
					{/* Honeypot field (hidden from users) */}
					<input
						type="text"
						name="websiteHp"
						value={formData.websiteHp}
						onChange={handleChange}
						style={{ display: 'none' }}
						tabIndex={-1}
						autoComplete="off"
					/>

					{status.error && (
						<div className="alert alert-danger mb-4 py-2 px-3 fs-14">
							{status.error}
						</div>
					)}

					<div className="row">
						<div className="col-md-6 mb-20">
							<label htmlFor="fullName" className="form-label text-white fs-14 fw-6">Full Name *</label>
							<input
								type="text"
								id="fullName"
								name="fullName"
								required
								value={formData.fullName}
								onChange={handleChange}
								placeholder="e.g. Sultan Al Mansoori"
								className="form-control custom-input"
							/>
						</div>

						<div className="col-md-6 mb-20">
							<label htmlFor="companyName" className="form-label text-white fs-14 fw-6">Company Name</label>
							<input
								type="text"
								id="companyName"
								name="companyName"
								value={formData.companyName}
								onChange={handleChange}
								placeholder="e.g. Enterprise Trading LLC"
								className="form-control custom-input"
							/>
						</div>

						<div className="col-md-6 mb-20">
							<label htmlFor="email" className="form-label text-white fs-14 fw-6">Business Email *</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={formData.email}
								onChange={handleChange}
								placeholder="name@company.com"
								className="form-control custom-input"
							/>
						</div>

						<div className="col-md-6 mb-20">
							<label htmlFor="phone" className="form-label text-white fs-14 fw-6">Phone Number *</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								required
								value={formData.phone}
								onChange={handleChange}
								placeholder="+971 50 123 4567"
								className="form-control custom-input"
							/>
						</div>

						<div className="col-12 mb-20">
							<label htmlFor="service" className="form-label text-white fs-14 fw-6">Required Service *</label>
							<select
								id="service"
								name="service"
								value={formData.service}
								onChange={handleChange}
								className="form-select custom-input"
							>
								<option value="Accounting & Bookkeeping">Accounting & Bookkeeping Services</option>
								<option value="Audit & Assurance">Audit & Assurance (Pioneer Hedge)</option>
								<option value="Corporate Tax">UAE Corporate Tax Advisory & Filing</option>
								<option value="VAT UAE">VAT UAE Compliance</option>
								<option value="VAT Bahrain">VAT Bahrain Services</option>
								<option value="ICV Certification">ICV Certification Support</option>
								<option value="E-Invoicing">UAE E-Invoicing Readiness</option>
								<option value="Business Advisory">Financial & Business Advisory</option>
								<option value="Other">Other Requirement</option>
							</select>
						</div>

						<div className="col-12 mb-25">
							<label htmlFor="message" className="form-label text-white fs-14 fw-6">Message / Requirement Details</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								value={formData.message}
								onChange={handleChange}
								placeholder="Briefly describe your company's accounting, tax, or audit requirements..."
								className="form-control custom-input"
							></textarea>
						</div>

						<div className="col-12">
							<button
								type="submit"
								disabled={status.loading}
								className="tf-btn secondary w-100 justify-content-center py-3"
							>
								{status.loading ? (
									<span>Submitting Request...</span>
								) : (
									<>
										<span>Request Consultation</span>
										<i className="icon-chevron-right ms-2" />
									</>
								)}
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
}
