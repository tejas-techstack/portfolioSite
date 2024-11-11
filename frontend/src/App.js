import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import BlogPost from './pages/BlogPost'; // New component to display individual blog posts
import Feedback from './pages/Feedback'; // Import the feedback component
import { StyledLink } from "./pages/style.js";
import './App.css'; // This should contain CSS for layout

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <div className="sidebar">
            <h2>Sidebar</h2>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/About">About</StyledLink>
            <StyledLink to="/Blogs">Blogs</StyledLink>
            <StyledLink to="/Feedback">Feedback</StyledLink> {/* Link to the Feedback page */}
          </div>

          <div className="main-content">
            <div className="top-bar">
              <h1>My Application</h1>
            </div>

            <div className="page-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/Blogs" element={<BlogPage />} />
                <Route path="/Blogs/:fileName" element={<BlogPost />} /> {/* Dynamic blog route */}
                <Route path="/Feedback" element={<Feedback />} /> {/* New route for Feedback page */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
