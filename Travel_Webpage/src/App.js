import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import About from './About/About';
import Contact from './Contact/Contact';
import Service from './Service/Service';
import Signin from './Loog_Signup/Signin';

function Layout() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/signin"; 
  return (
    <>
      {!hideNavFooter && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      {!hideNavFooter && <Contact />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
