import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HighlightMedia from './components/HighlightMedia/HighlightMedia';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/highlight/:id" element={<HighlightMedia />} /> {/* Add route for HighlightMedia */}
            </Routes>
        </Router>
    );
};

export default App;