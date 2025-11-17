
import './App.css';
import Head from './COM/Head';
import Home from './COM/Home';
import Footer from './COM/Footer';
import About from './COM/About';
import Contact from './COM/Contact';
import Product from './COM/Product';
import Casting from './COM/Casting';
import Poric from './COM/Poric';
import Regsister from './COM/Regsister';
import Female from './COM/Female';
import Male from './COM/Male';
import Kids from './COM/kids';
import Pro from './COM/Pro';


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Head />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portrait" element={<Poric />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Casting" element={<Casting />} />
        <Route path="/Product" element={<Product />} />
         <Route path="/Regsister" element={<Regsister />} />
        <Route path="/Female" element={< Female />} />
        <Route path="/Male" element={< Male />} />
        <Route path="/Kids" element={< Kids />} />
         <Route path="/Pro" element={< Pro />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;



