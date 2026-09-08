import Section3 from "./section3"
import Section6 from "./section6"
import ConsultationSection from "./ConsultationSection"

export default function OurService() {
	return (
		<>
			{/* 1. Our Services Section with all service cards */}
			<Section3 />

			{/* 2. Partner logo carousel */}
			<Section6 />

			{/* 3. Consultation form section */}
			<ConsultationSection />
		</>
	)
}