import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const LandingPage = ({ searchQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
          params: {
            country: 'us',
            apiKey: 'f9fda6ddd55c4660bc0d978ab8b56e5b', // Replace with your News API key
            q: searchQuery,
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [searchQuery]);

  return (
    <div className="landing-page">
      <a href="https://medium.com/@sevenhash/scaling-solutions-in-web3-a-ctos-guide-to-layer-2-and-cross-chain-technologies-c80508a923de#:~:text=Oct%2023,%202023.%20Chapter%201:%20Introduction" target="_blank" rel="noopener noreferrer" className="ad ad-left">
        <img src="https://cdn.dribbble.com/userupload/6588901/file/original-fbf7ac362277f4a720a30dd8b08df771.png?compress=1&resize=752x" alt="Left Ad Poster" />
      </a>
      <div className="content">
        {articles.length > 0 ? (
          <>
            <div className="main-article">
              <h2>{articles[0].title}</h2>
              <a href={articles[0].url} target="_blank" rel="noopener noreferrer">
                <img src={articles[0].urlToImage} alt={articles[0].title} />
              </a>
              <p>{articles[0].description}</p>
              <p><strong>Author:</strong> {articles[0].author}</p>
              <p><strong>Published At:</strong> {new Date(articles[0].publishedAt).toLocaleDateString()}</p>
              
            </div>
            <div className="side-articles">
              {articles.slice(1, 4).map((article, index) => (
                <div className="side-article" key={index}>
                  <h3>{article.title}</h3>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <img src={article.urlToImage} alt={article.title} />
                  </a>
                  <p>{article.description}</p>
                  <p><strong>Author:</strong> {article.author}</p>
                  <p><strong>Published At:</strong> {new Date(article.publishedAt).toLocaleDateString()}</p>
                 
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Loading news...</p>
        )}
      </div>
      <a href="https://online.kfc.co.in/#:~:text=Click%20to%20see%20the%20latest%20KFC" target="_blank" rel="noopener noreferrer" className="ad ad-right">
        <img src="https://th.bing.com/th/id/OIP.t8IJ6BDlY7sjTOc7M0majwHaLh?rs=1&pid=ImgDetMain" alt="Right Ad Poster" />
      </a>
    </div>
  );
};

export default LandingPage;
