import { useEffect } from 'react'
import { useLocation } from 'react-router'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    const elementId = decodeURIComponent(hash.substring(1))
    const element = document.getElementById(elementId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}

export default ScrollToHash