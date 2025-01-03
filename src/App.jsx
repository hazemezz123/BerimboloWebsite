import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Pricing from "./pages/Pricing";
import Shop from "./pages/Shop";
const App = () => {
  return (
    <Router>
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
};

export default App;
