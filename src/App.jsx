import './App.css'
import Principal from './Principal'
import Componente1 from './Componente1'
import Componente2 from './Componente2'
import Footer from './Footer'
import Header from './Header'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Principal></Principal>}></Route>
      <Route path="/componente1" element={<Componente1></Componente1>}></Route>
      <Route path="/componente2" element={<Componente2></Componente2>}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
