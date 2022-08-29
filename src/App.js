import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>} />
      </Routes>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
