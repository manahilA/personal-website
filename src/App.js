import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import CVPage from "./components/CVPage";
import PortfolioPage from "./components/PortfolioPage";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact-me" element={<ContactPage />} />
                <Route path="/cv" element={<CVPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
            </Routes>
        </Router>
    )
}
