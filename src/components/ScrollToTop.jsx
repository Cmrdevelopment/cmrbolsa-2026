import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      let timeoutId

      const scrollToElement = (attempt = 0) => {
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })

          return
        }

        if (attempt < 20) {
          timeoutId = setTimeout(() => {
            scrollToElement(attempt + 1)
          }, 50)
        }
      }

      scrollToElement()

      return () => {
        clearTimeout(timeoutId)
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname, hash])

  return null
}