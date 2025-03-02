import Navbar from "./components/Navbar";
import Slides from "./components/Slides";
import Home from "./components/Home";
import S3 from "./components/S3";
import S1 from "./components/S1";
import S4 from "./components/S4";
import S2 from "./components/S2";
import MyFooter from "./components/MyFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import P2 from "./components/portfolio/P2";
import P1 from "./components/portfolio/P1";
import P3 from "./components/portfolio/P3";
import P4 from "./components/portfolio/P4";


import Slides1 from "./components/portfolio/Slides1";
import Slides2 from "./components/portfolio/Slides2";
import Slides3 from "./components/portfolio/Slides3";
import Slides4 from "./components/portfolio/Slides4";


function App() {
  
  return (
    
      
      <Router>
          <Routes>
              <Route path="/" element={
                <>
                  <Navbar />
                  <Slides />
                  <Home />
                  {/* Fix the studio thats where the resposiveness error is for the start page */}
                  <S1 />
                  <S2 />
                  <S3 />
                  <S4 />
                  <MyFooter />
                </>
              } />
              <Route path="/portfolio/p1" element={
                <>
                   {/*   change the slides to be the slides of the current project */}
                  <Slides1 />
                  <P1 />
                  <MyFooter />
                </>
                } />

              <Route path="/portfolio/p2" element={
                <>
                   {/*   change the slides to be the slides of the current project */}
                  <Slides2 />
                  <P2 />
                  <MyFooter />
                </>
                } />

              <Route path="/portfolio/p3" element={
                <>
                   {/*   change the slides to be the slides of the current project */}
                  <Slides3 />
                  <P3 />
                  <MyFooter />
                </>
                } />

              <Route path="/portfolio/p4" element={
                <>
                   {/*   change the slides to be the slides of the current project */}
                  <Slides4 />
                  <P4 />
                  <MyFooter />
                </>
                } />
          </Routes>
      </Router>

    
  )
}

export default App
