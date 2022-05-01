// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from '../src/Components/Header/Header.js';
import AboutMe from './Components/AboutMe/AboutMe';
import Skills from './Components/Skills/Skills';
import Portofolio from './Components/Portofolio/Portofolio';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <Header />
        <AboutMe />
        <Skills />
        <Portofolio />
        
        
        <Contact />
       
      </main>
    </div>
  );
}

export default App;
