import React, { useState } from 'react';

const AuthPage = ({ isLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(isLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginMode) {
                                                              // Handle login logic
      console.log('Logging in with:', { email, password });
    } else {
                                                               // Handle signup logic
      console.log('Signing up with:', { name, email, password });
    }
    onClose();
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="auth-container">
      <button
        onClick={onClose}
        className="close-button"
        aria-label="Close"
      >
        ×
      </button>
      <h1 className="auth-title">{isLoginMode ? 'Login' : 'Signup'}</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLoginMode && (
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>
        )}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button
          type="submit"
          className="auth-button"
        >
          {isLoginMode ? 'Login' : 'Signup'}
        </button>
      </form>
      <button
        onClick={toggleMode}
        className="toggle-button"
      >
        {isLoginMode ? 'Switch to Signup' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default AuthPage;
