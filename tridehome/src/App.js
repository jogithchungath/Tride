import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Header from './components/Header';
import Offer from './components/Offer';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     <Header />
     <Features />
     <Offer />
     <About />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
