import "./css/styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import OptimalDest from "./routes/OptimalDest";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

export default function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dest" element={<OptimalDest />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
