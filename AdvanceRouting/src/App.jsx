import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Product'
import{Route,Routes} from 'react-router-dom'
import Notfound from './pages/Notfound'
import Product from './pages/Product'
import Women from './pages/Women'
import Men from './pages/Men'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/About' element={<About />} />
        <Route path = '/Product' element={<Product />}>
        <Route path = 'Men' element={<Men />} />
        <Route path = 'Women' element={<Women/>} />
        </Route>
        
        
        <Route path = '*' element={<Notfound />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App