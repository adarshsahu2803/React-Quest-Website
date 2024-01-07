import "./css/styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import OptimalDest from "./routes/OptimalDest";
import Signup from "./routes/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dest" element={<OptimalDest />} />
      </Routes>
      <Footer />
    </div>
  );
}
