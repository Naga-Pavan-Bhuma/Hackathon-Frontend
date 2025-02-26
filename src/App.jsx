import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";
import NavBar from "./Components/NavBar";
import LoginNavBar from "./Components/LoginNavBar";
import Body from "./Components/Body";
import Home from "./Components/Home";
import Clubs from "./Components/Clubs";
import DiscussionPage from "./Components/DiscussionPage";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="/discussion" element={<DiscussionPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
