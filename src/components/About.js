import React from 'react';
import '../App.css';

const About = () => {
  return (
    <div className="about">
      <h2>About W-News</h2>
      <p>
        W-News is a modern web application designed to provide users with the latest news articles from around the world. Our goal is to deliver timely and relevant news content in an easy-to-read format. Whether you're interested in breaking news, technology updates, or entertainment stories, W-News has you covered.
      </p>
      <p>
        <strong>Features of W-News:</strong>
      </p>
      <ul>
        <li>Real-time news updates from various sources.</li>
        <li>Search functionality to find news articles based on keywords.</li>
        <li>Responsive design for optimal viewing on any device.</li>
        <li>Easy navigation with a user-friendly interface.</li>
      </ul>

      <h2>About News API</h2>
      <p>
        This application uses the <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">News API</a> to fetch the latest news articles. The News API provides a simple HTTP REST API for searching and retrieving live articles from all over the web.
      </p>
      <p>
        <strong>Key Features of News API:</strong>
      </p>
      <ul>
        <li>Get live top and breaking headlines from news sources and blogs across the web.</li>
        <li>Search for articles from over 30,000 news sources and blogs.</li>
        <li>Retrieve articles based on various criteria such as keywords, date range, and language.</li>
        <li>Supports multiple languages and regions.</li>
      </ul>
      <p>
        For more information, visit the <a href="https://newsapi.org/docs/get-started" target="_blank" rel="noopener noreferrer">News API documentation</a>.
      </p>
    </div>
  );
};

export default About;
