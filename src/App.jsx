import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HighlightMedia from "./components/HighlightMedia/HighlightMedia";
import CollectionDetail from "./pages/CollectionDetail/CollectionDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/highlight/:id" element={<HighlightMedia />} />{" "}
        {/* Add route for HighlightMedia */}
        <Route path="/collection/:id" element={<CollectionDetail />} />{" "}
        {/* Add route for CollectionDetail */}
      </Routes>
    </Router>
  );
};

export default App;
