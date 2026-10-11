import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import { services } from './data/siteContent'
import './App.css'

function NotFoundPage() {
  return (
    <main className="not-found page-wrap">
      <span className="eyebrow">404 · Page not found</span>
      <h1>Looks like this path hasn’t been built yet.</h1>
      <Link className="button button-primary" to="/">Back to home</Link>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {services.map((service) => (
              <Route
                key={service.slug}
                path={`/services/${service.slug}`}
                element={<ServicePage service={service} />}
              />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
