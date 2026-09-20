import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import CookieConsent from '../components/CookieConsent'
import { trackPageView } from '../lib/analytics'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  // The initial page_view is already sent by gtag('config', ..., { send_page_view: true })
  // inside startAnalytics(). Only client-side navigations away from that first URL are
  // reported here, so the landing page is never counted twice.
  const lastPath = useRef(null)

  useEffect(() => {
    if (lastPath.current === null) {
      lastPath.current = window.location.pathname + window.location.search
    }

    const handleRouteChange = (url) => {
      if (url === lastPath.current) return
      lastPath.current = url
      trackPageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  )
}

export default MyApp
