import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cars from "./Cars/Cars";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cars" element={<Cars />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
