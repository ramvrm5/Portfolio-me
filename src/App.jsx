import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PortfolioPage from "./components/portfolio/PortfolioPage";
import Home from './Home';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<PortfolioPage />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App