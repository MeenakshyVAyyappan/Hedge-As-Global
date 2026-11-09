'use client'
import DataBg from "@/utils/DataBg"
import animateBoxVideo from "@/utils/animateBoxVideo"
import animateImgItem from "@/utils/animateImgItem"
import animateText from "@/utils/animateText"
import { useCircularTextEffect } from "@/utils/applyCircularText "
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import AddClassBody from "../elements/AddClassBody"
import dynamic from "next/dynamic"
import Hero1 from "../pages/home1/hero1"
import BoxWelcome from "./BoxWelcome"
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Header1 from "./header/Header1"

// Only the live homepage uses Hero1. The old template heroes are loaded on demand
// so their code (and Swiper) is not shipped to every page.
const Hero2 = dynamic(() => import("../pages/home2/hero2"))
const Hero3 = dynamic(() => import("../pages/home3/hero3"))
const Hero4 = dynamic(() => import("../pages/home4/hero4"))

import FloatingCTADock from "../elements/FloatingCTADock"

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, mainCls, breadcrumbAlt, hero, breadcrumbBg }) {
	const [scroll, setScroll] = useState(0)
	// MobileMenu
	const [isMobileMenu, setMobileMenu] = useState(false)
	const handleMobileMenu = () => {
		setMobileMenu(!isMobileMenu)
		!isMobileMenu ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")
	}
	// WelcomeBox
	const [isWelcomeBox, setWelcomeBox] = useState(false)
	const handleWelcomeBox = () => {
		setWelcomeBox(!isWelcomeBox)
		!isWelcomeBox ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll")
	}
	const pathname = usePathname()

	useEffect(() => {
		setMobileMenu(false)
		setWelcomeBox(false)
		if (typeof document !== 'undefined') {
			document.body.classList.remove("no-scroll")
		}
	}, [pathname])

	useEffect(() => {
		const WOW = require('wowjs')
		window.wow = new WOW.WOW({
			live: false
		})
		window.wow.init()

		let ticking = false
		const onScroll = () => {
			if (ticking) return
			ticking = true
			window.requestAnimationFrame(() => {
				setScroll(window.scrollY > 100)
				ticking = false
			})
		}

		window.addEventListener("scroll", onScroll, { passive: true })

		// Handle hash-based anchor navigation (e.g. /#faq)
		const handleHashScroll = () => {
			const hash = window.location.hash
			if (hash) {
				const id = hash.replace('#', '')
				setTimeout(() => {
					const el = document.getElementById(id)
					if (el) {
						el.scrollIntoView({ behavior: 'smooth', block: 'start' })
					}
				}, 600)
			}
		}
		handleHashScroll()
		window.addEventListener('hashchange', handleHashScroll)

		// Performance: pause the looping CSS animations of sections that are off-screen.
		// They resume automatically as soon as the section scrolls into view, so visitors
		// still see every animation, but the phone/computer does not keep drawing hidden ones.
		let pauseObserver
		if ('IntersectionObserver' in window) {
			pauseObserver = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle('anim-offscreen', !entry.isIntersecting)
				})
			}, { rootMargin: '200px 0px' })
			document.querySelectorAll('#wrapper section, #wrapper footer').forEach((el) => pauseObserver.observe(el))
		}

		return () => {
			window.removeEventListener("scroll", onScroll)
			window.removeEventListener('hashchange', handleHashScroll)
			if (pauseObserver) pauseObserver.disconnect()
		}
	}, [])

	animateImgItem()
	animateBoxVideo()
	animateText()
	DataBg()
	useCircularTextEffect()

	return (
		<>
			<div id="top" />
			<AddClassBody />
			<div id="wrapper">
				<Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} />
				<BoxWelcome isWelcomeBox={isWelcomeBox} handleWelcomeBox={handleWelcomeBox} />
				{hero == 1 && <Hero1 />}
				{hero == 2 && <Hero2 />}
				{hero == 3 && <Hero3 />}
				{hero == 4 && <Hero4 />}
				<Breadcrumb breadcrumbTitle={breadcrumbTitle} breadcrumbAlt={breadcrumbAlt} breadcrumbBg={breadcrumbBg} />
				<div className={`main-content ${mainCls ? mainCls : ""}`}>
					{children}
				</div>

				<Footer1 />

				<FloatingCTADock />
			</div>
		</>
	)
}
