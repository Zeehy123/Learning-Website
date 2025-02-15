import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import AboutUs from "./components/aboutUs/AboutUs";
import Footer from "./components/Home/Footer/Footer";
import AllCourses from "./components/Courses/AllCourses";
import Prcing from "./components/Pricing/Prcing";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/pricing" element={<Prcing />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
