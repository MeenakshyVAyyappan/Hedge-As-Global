'use client'
import { useEffect } from 'react'

const animateBoxVideo = () => {
	useEffect(() => {
		const handleScroll = () => {
			const elements = document.querySelectorAll(
				'.tf-animate__box, .tf-animate__box-2, .tf-animate__rotate-left, .tf-animate__rotate-right'
			)

			elements.forEach((element) => {
				const sectionOffsetTop = element.getBoundingClientRect().top + window.scrollY
				const sectionHeight = element.offsetHeight
				const scrollPosition = window.scrollY
				const windowHeight = window.innerHeight

				if (
					scrollPosition + windowHeight > sectionOffsetTop + 100 &&
					scrollPosition < sectionOffsetTop + sectionHeight - 100
				) {
					if (element.classList.contains('tf-animate__box')) {
						element.classList.add('animate__animated', 'animate__zoomInLeft')
					} else if (element.classList.contains('tf-animate__box-2')) {
						element.classList.add('animate__animated', 'animate__zoomInRight')
					}
				}
			})
		}

		// Run the checks at most once per animation frame (avoids layout thrashing while scrolling)
		let ticking = false
		const onScroll = () => {
			if (ticking) return
			ticking = true
			window.requestAnimationFrame(() => {
				handleScroll()
				ticking = false
			})
		}
		window.addEventListener('scroll', onScroll, { passive: true })

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])
}

export default animateBoxVideo
