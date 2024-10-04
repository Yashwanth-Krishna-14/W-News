// LandingPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import '../App.css';

const LandingPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: '3ab8d6afb6dd41a78ea823ef93ab173b',
            q: searchQuery,
            category: category,
            page: page,
            pageSize: 10,
          },
        });
        setArticles(prevArticles => [...prevArticles, ...response.data.articles]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [searchQuery, category, page]);

  const handleSearch = ({ query, category }) => {
    setSearchQuery(query);
    setCategory(category);
    setArticles([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="landing-page">
      <SearchBar onSearch={handleSearch} />
      <div className="content">
        {loading && page === 1 ? (
          <div className="spinner">Loading news...</div>
        ) : error ? (
          <div className="error-message">
            <p>Error fetching news: {error.message}</p>
            <button onClick={() => setPage(1)}>Retry</button>
          </div>
        ) : (
          <>
            {articles.length > 0 ? (
              <>
                <div className="main-article card">
                  <h2>{articles[0].title}</h2>
                  <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
                    <img src={articles[0].urlToImage} alt={articles[0].title} />
                  </a>
                  <p>{articles[0].description}</p>
                  <p><strong>Author:</strong> {articles[0].author || 'Unknown'}</p>
                  <p><strong>Published At:</strong> {new Date(articles[0].publishedAt).toLocaleDateString()}</p>
                </div>
                <div className="side-articles">
                  {articles.slice(1).map((article, index) => (
                    <div className="side-article card" key={index}>
                      <h3>{article.title}</h3>
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        <img src={article.urlToImage} alt={article.title} />
                      </a>
                      <p>{article.description}</p>
                      <p><strong>Author:</strong> {article.author || 'Unknown'}</p>
                      <p><strong>Published At:</strong> {new Date(article.publishedAt).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
                {!loading && (
                  <button onClick={loadMore} className="load-more-button">
                    Load More
                  </button>
                )}
                {loading && <p>Loading more news...</p>}
              </>
            ) : (
              <p>No news articles found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
