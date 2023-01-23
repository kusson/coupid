import React from "react";
import Footer from "./Components/Nav-functions/Footer";
import Navbar from "./Components/Nav-functions/Navbar";
import BottomLinks from "./Components/Nav-functions/Bottomlinks";
import Home from "./Components/Pages/index";
import BrowseGifts from "./Components/Pages/browsegifts";
import Partnership from "./Components/Pages/partnership";
import Aboutus from "./Components/Pages/aboutus";
import Signin from "./Components/Pages/signin";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return(
        <div className="content-container">
          <Router>
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/browsegifts" element={<BrowseGifts />} />
                  <Route path="/partnership" element={<Partnership />} />
                  <Route path="/aboutus" element={<Aboutus />} />
                  <Route path="/signin" element={<Signin />} />
              </Routes>
              <BottomLinks />
              <Footer />
          </Router>
        </div>
    )
};

export default App;