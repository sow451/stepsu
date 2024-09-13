import React from 'react';
import './GoogleSignIn.css'; // Import your custom CSS file if you want custom styles.

const GoogleSignIn = () => {
  const handleSignIn = () => {
    window.location.href = 'http://localhost:8800/auth/google'; // Redirect to Google OAuth route

  };

  return (
    <div className="google-sign-in-container">
      <button className="google-sign-in-button" onClick={handleSignIn}>
        Sign In with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
