import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import About from './pages/About';
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Login from "./pages/Login";
import Services from "./pages/Services";

function App() {
  return (
    <div >
      <Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
