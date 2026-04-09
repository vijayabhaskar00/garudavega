import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Tracking from './pages/Tracking'
import Contact from './pages/Contact'
import OrderShipment from './pages/OrderShipment'
import PickupDropoff from './pages/PickupDropoff'
import CurrencyConverter from './pages/CurrencyConverter'
import VolumeCalculator from './pages/VolumeCalculator'
import RateCalculator from './pages/RateCalculator'
import ProhibitedList from './pages/ProhibitedList'
import './index.css'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<OrderShipment />} />
          <Route path="/pickup" element={<PickupDropoff />} />
          <Route path="/currency" element={<CurrencyConverter />} />
          <Route path="/volume" element={<VolumeCalculator />} />
          <Route path="/rate" element={<RateCalculator />} />
          <Route path="/prohibited" element={<ProhibitedList />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
