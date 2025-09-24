import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import Remodeling from "./pages/remodeling";
import Gardening from "./pages/gardening";
import "./App.css";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/remodeling" element={<Remodeling />} />
          <Route path="/landscaping" element={<Gardening />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;

