'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'

// Puts every <style jsx> block into the HTML that is sent to the browser.
// Without this, the App Router only adds these styles after all JavaScript has
// loaded, so the hero and other sections could not be drawn until then.
export default function StyledJsxRegistry({ children }) {
	const [jsxStyleRegistry] = useState(() => createStyleRegistry())

	useServerInsertedHTML(() => {
		const styles = jsxStyleRegistry.styles()
		jsxStyleRegistry.flush()
		return <>{styles}</>
	})

	return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
}
