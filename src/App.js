import React from 'react';
import HomeBar from "./components/Navbar";
import Home from "./pages/Home";
import Applications from "./pages/Sign-in";
import Contact from "./pages/Deck-Builder"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/Deck-Builder">
       <HomeBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Sign-in" element={<Applications />} />
          <Route exact path="/Deck-Builder" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;