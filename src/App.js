import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import SearchBar from './components/SearchBar';
import About from "./components/About"
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage searchQuery={searchQuery} />} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
