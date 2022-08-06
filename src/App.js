import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import AboutSection from './components/AboutSection';
import Navbar from './components/Navbar';
import logo from "./images/antharya.jpeg"; 
function App() {
  return (
    <Router>
      <Navbar />
      <div className='shadow'>
        <img class="logo" src={logo} alt="Loading..."/>
        <h1>Gowtham</h1>
      </div>
      <section>
      {/* <AboutSection/> */}
      </section>
      
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
