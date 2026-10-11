import { useEffect, useState } from 'react'
import Navbar from './Navbar'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12)

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <Navbar />
    </header>
  )
}

export default Header
