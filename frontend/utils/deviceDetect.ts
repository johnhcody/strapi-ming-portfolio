import { useState, useEffect } from 'react'

export default function useDeviceDetect() {
  const [width, setWidth] = useState(null)

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  let isMobile: boolean = width <= 768

  useEffect(() => {
    if (typeof window !== 'undefined') setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return { isMobile }
}
