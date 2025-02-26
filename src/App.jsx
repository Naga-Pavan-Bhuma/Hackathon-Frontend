import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import NavBar from "./Components/NavBar";
import LoginNavBar from "./Components/LoginNavBar";
import Body from "./Components/Body";
import Home from "./Components/Home";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
        <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
