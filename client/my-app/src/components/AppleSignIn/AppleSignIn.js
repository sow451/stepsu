import React, { useEffect } from 'react';
import './AppleSignIn.css'; // Import your custom CSS file if you want custom styles.

const AppleSignIn = () => {
  useEffect(() => {
    // Initialize AppleID.auth object with the required settings
    window.AppleID.auth.init({
      clientId: 'com.your-app.client-id',  // Replace this with your app's client ID (from Apple Developer portal)
      scope: 'name email',  // Request user's name and email from Apple
      redirectURI: 'https://your-backend-url.com/auth/callback',  // URL where Apple will redirect after sign-in
      state: 'yourStateToken',  // Optional state to maintain app context during sign-in
      usePopup: true,  // Use a popup for authentication instead of redirect
    });
  }, []);

  // handleSignIn function calls window.AppleID.auth.signIn() to initiate the sign-in process when the user clicks the button.
  const handleSignIn = () => {
    window.AppleID.auth.signIn();
  };

  return (
    <div className="apple-sign-in-container">
      <button className="apple-sign-in-button" onClick={handleSignIn}>
        Sign In with Apple
      </button>
    </div>
  );
};

export default AppleSignIn;
