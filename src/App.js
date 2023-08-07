import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Footer from "./components/Contact.jsx";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/mediaquery.scss";
import Contact from "./components/Contact.jsx";
// import Contact from "./components/Services.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
