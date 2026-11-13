import { BrowserRouter, Routes, Route } from 'react-router'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToHash from './components/layout/ScrollToHash'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PlatformPage from './pages/PlatformPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/platformumuz" element={<PlatformPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App