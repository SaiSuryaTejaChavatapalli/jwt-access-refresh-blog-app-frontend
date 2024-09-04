import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import BlogSection from "./components/BlogSection";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/blog/:section"
          element={
            <ProtectedRoute>
              <BlogSection />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
