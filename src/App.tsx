import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/home/HomePage';
import Gallery from './components/gallery/Gallery';
import GalleryDetail from './components/gallery/GalleryDetail';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import './App.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #8bb8c1;
    --text-color: #333333;
    --background-color: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Manrope', sans-serif;
    color: var(--text-color);
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galleries" element={<Gallery />} />
            <Route path="/galleries/:categoryId" element={<GalleryDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
