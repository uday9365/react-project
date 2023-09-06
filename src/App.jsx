import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App