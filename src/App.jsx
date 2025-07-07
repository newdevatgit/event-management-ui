import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Contact from './pages/Contact';

import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import SignIn from './pages/SignIn';
import './App.css'

function App() {

  return(
    <BrowserRouter>
     <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
      </Routes>
     </Layout>
    </BrowserRouter>
  )
  
}

export default App
