import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "pages/LandingPage";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
