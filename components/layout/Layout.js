'use client'
import DataBg from "@/utils/DataBg"
import animateBoxVideo from "@/utils/animateBoxVideo"
import animateImgItem from "@/utils/animateImgItem"
import animateText from "@/utils/animateText"
import { useCircularTextEffect } from "@/utils/applyCircularText "
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import AddClassBody from "../elements/AddClassBody"
import Hero1 from "../pages/home1/hero1"
import Hero2 from "../pages/home2/hero2"
import Hero3 from "../pages/home3/hero3"
import Hero4 from "../pages/home4/hero4"
import BoxWelcome from "./BoxWelcome"
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"
import Footer4 from "./footer/Footer4"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"

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

		const onScroll = () => {
			setScroll(window.scrollY > 100)
		}

		window.addEventListener("scroll", onScroll)

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

		return () => {
			window.removeEventListener("scroll", onScroll)
			window.removeEventListener('hashchange', handleHashScroll)
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
