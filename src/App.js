import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Recipes from './Components/Recipes';
import Contact from './Components/Contact';
import Recipe from './Components/JS/Recipe';
import Footer from './Components/JS/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from './Components/JS/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe/:id" element={<Recipe/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
