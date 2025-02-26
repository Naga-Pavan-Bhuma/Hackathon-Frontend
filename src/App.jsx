import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import NavBar from "./Components/NavBar"; // Correct import
import LoginNavBar from "./Components/LoginNavBar";

function App() {
  return (
    <Router>
      <LoginNavBar /> {/* Navbar is outside Routes, so it's persistent */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
