import { Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from "./components/NavBar"
import { Home } from './pages/Home'
import { Plan } from './pages/Plan'
import { PlanDetail } from './pages/PlanDetail'
import { Nosotros } from './pages/Nosotros'
import { Footer } from './components/Footer'

export const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Proyecto-4-Aplicacion-Restaurante/" element={<Home />} />
        <Route path="/Proyecto-4-Aplicacion-Restaurante/nosotros" element={<Nosotros />} />
        <Route path="/Proyecto-4-Aplicacion-Restaurante/plans" element={<Plan />} />
        <Route path="/Proyecto-4-Aplicacion-Restaurante/plans/:sku" element={<PlanDetail />} />
      </Routes>
      <Footer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/plans" element={<Plan />} />
          <Route path="/plans/:sku" element={<PlanDetail />} />
        </Routes>
      </Footer>
    </>
  )
}