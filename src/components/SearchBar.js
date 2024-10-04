// SearchBar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      const fetchSuggestions = async () => {
        try {
          const response = await axios.get('https://api.example.com/suggestions', {
            params: { q: query },
          });
          setSuggestions(response.data);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = () => {
    onSearch({ query, category });
    setSuggestions([]);
  };

  return (
    <div className="search-bar-container">
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-select">
        <option value="">All Categories</option>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        list="suggestions"
        className="search-input"
      />
      <datalist id="suggestions">
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion} />
        ))}
      </datalist>
      <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
