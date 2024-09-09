import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import Header from './components/Header/header';
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
          <h1>Bootstrap Starter Template</h1>
          <p className="lead">
          Quickly and easily get started with Bootstrap's compiled, production-ready files with this barebones example featuring some basic HTML and helpful links. 
          Download all our examples to get started. 
          Use this document as a way to start any new project.
          <br />
          All you get is this text and a mostly barebones HTML document.
          </p>
        </div>
      </main>
      
      {/* Closing the main App div here */}
      
      <Footer />
    </div> 
  );
}

export default App;
