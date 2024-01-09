import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Concepts from './pages/Concepts/Concepts';
import UTMLoyalty from './pages/UTMLoyalty/UTMLoyalty';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NoPage from './pages/NoPage/NoPage';
import './App.scss'; // Import the SCSS file

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/koncepter">Concepts</Link>
          </li>
          <li>
            <Link to="/utml-oyalty">UTM Loyalty</Link>
          </li>
          <li>
            <Link to="/om">About</Link>
          </li>
          <li>
            <Link to="/kontakt-os">Contact</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/koncepter" element={<Concepts />} />
        <Route path="/utml-oyalty" element={<UTMLoyalty />} />
        <Route path="/om" element={<About />} />
        <Route path="/kontakt-os" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
