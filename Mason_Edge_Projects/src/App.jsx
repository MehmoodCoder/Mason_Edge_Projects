import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import Navbar from './components/Navbar'
import { services } from './components/ServiceCard'

function NotFoundPage() {
  return (
    <main className="mx-auto min-h-[65vh] max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">404 · Page not found</span>
      <h1 className="my-5 max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
        Looks like this path hasn’t been built yet.
      </h1>
      <Link
        className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-900 px-5 font-semibold text-white transition hover:bg-slate-800"
        to="/"
      >
        Back to home
      </Link>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-slate-800">
        <a
          className="fixed left-3 top-3 z-[100] -translate-y-40 rounded-xl bg-white px-4 py-3 font-semibold text-slate-900 shadow-xl focus:translate-y-0"
          href="#main-content"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main-content" tabIndex="-1">
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
