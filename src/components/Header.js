import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import AuthPage from './AuthPage';
import '../App.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModal = (loginMode) => {
    setIsLogin(loginMode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <h1>W-News</h1>
        </Link>
      </div>
      <nav className="nav">
        <ul>
         
        <li><button onClick={() => openModal(true)}>Login</button></li>
        <li><button onClick={() => openModal(false)}>Signup</button></li>
        <li><button><Link to="/">Home</Link></button></li>
        <li> <button><Link to="/about">About</Link></button></li>
        
        </ul>
      </nav>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Authentication Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <AuthPage isLogin={isLogin} onClose={closeModal} />
      </Modal>
    </header>
  );
};

export default Header;
