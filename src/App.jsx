import React from 'react'
import Inicial from './pages/Inicial'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import CustomNavbar from './components/CustomNavBar'
import Faculdade from './pages/Faculdade'
import CustomFooter from './components/CustomFlooter'
import Dpo from './pages/Dpo'
import Noticias from './pages/Noticias'
import VisualizaNoticia from './pages/VisualizaNoticia'

const App = () => {
  return (
    <BrowserRouter>
    <CustomNavbar />
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/a-faculdade" element={<Faculdade />} />
        <Route path="/dpo-lgpd" element={<Dpo />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticias/:id" element={<VisualizaNoticia />} />
      </Routes>
    </Container>
    <CustomFooter />
    </BrowserRouter>
  )
}

export default App