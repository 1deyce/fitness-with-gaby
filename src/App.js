import "./App.css";
import "./styles/hero.css";
import "./styles/header.css";
import "./styles/exercises.css";
import "./styles/footer.css";
import "./styles/pricing.css";
import "./styles/start.css";
import Header from "./components/Header/Header";
import Home from "./pages/HomePage";
import Bookings from "./pages/BookingsPage";
import Reviews from "./pages/ReviewsPage";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/UI/Footer";
import ContactPage from "./pages/ContactPage";
// import './assets/main.css';

const App = () => {
  return ( 
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/bookings" element={<Bookings />} /> 
            <Route exact path="/reviews" element={<Reviews />} />
            <Route exact path="/contact" element={<ContactPage />} />
          </Routes>
        <Footer />
      </Router>
  );
};

export default App;
