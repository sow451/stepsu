import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Header from './components/Header/header';
import AppleSignIn from './components/AppleSignIn/AppleSignIn';
import GoogleSignIn from './components/GoogleSignIn/GoogleSignIn';
import CreateLeaderBoard from './components/CreateLeaderBoard/CreateLeaderBoard'; // Import the CreateLeaderboard component
import Footer from './components/Footer/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <main className="container mt-4">
        <div className="starter-template text-center py-5 px-3">
          <h1>STEPSU</h1>
          <p className="lead">
          Steps leaderboard for your company/club/family. 
          Works with all Android and Apple devices. <br />
          Who's winning today? </p>
          <GoogleSignIn />
          <AppleSignIn />
          <CreateLeaderBoard />
        </div>
      </main>
      
      {/* Closing the main App div here */}
      
      <Footer />
    </div> 
  );
}

export default App;
