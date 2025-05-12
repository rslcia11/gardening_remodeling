import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import Home from "./pages/home"
import Remodeling from "./pages/remodeling"
import Gardening from "./pages/gardening"


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Home page route */}
        <Route path="/home" element={<Home />} />
        <Route path="/remodeling" element={<Remodeling />} />
        <Route path="/landscaping" element={<Gardening />} />


        {/* Add more routes here as needed */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App

