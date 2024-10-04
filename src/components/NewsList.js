import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import '../App.css';

const NewsList = ({ searchQuery }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=10&apiKey=3ab8d6afb6dd41a78ea823ef93ab173b`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNews(prevNews => [...prevNews, ...data.articles]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]);

  const filteredNews = news.filter(article =>
    article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (loading && page === 1) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error loading news: {error.message}</p>;
  }

  return (
    <div>
      {filteredNews.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
      {loading && <p>Loading more news...</p>}
      {!loading && (
        <button onClick={loadMore} className="load-more-button">
          Load More
        </button>
      )}
    </div>
  );
};

export default NewsList;
