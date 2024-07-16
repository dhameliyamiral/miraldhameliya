import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heders from './Component/Heders';
import Hero from './Pages/Hero';
import Skills from './Pages/Skils';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';
import { Element } from "react-scroll";
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Heders />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Element name="hero">
                <Hero />
              </Element>
              <Element name="skills">
                <Skills />
              </Element>
              <Element name="resume">
                <Resume />
              </Element>
              <Element name="contact">
                <Contact />
              </Element>
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
