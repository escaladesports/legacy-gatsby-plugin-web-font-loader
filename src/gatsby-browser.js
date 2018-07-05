export function onRouteUpdate({ location }) {
	if (process.env.NODE_ENV === 'production' && typeof window._hsq === 'object') {
		// Wait for the title update (see #2478)
		setTimeout(() => {
			window._hsq.push(['trackPageView'])
		}, 0)
	}
}