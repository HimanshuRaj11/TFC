import { useEffect, useState } from "react";
import "./App.css";
import MNavbar from "./Components/Navbar/M_Navbar";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { IoApps } from "react-icons/io5";
import Home from "./Page/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Page/About/About";
import Menu from "./Page/Menu/Menu";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import BookATable from "./Page/BookATable/BookATable";
import Services from "./Page/Services/Services";
import Contact from "./Page/Contact/Contact";
import DishEditPage from "./Page/DishEditPage/DishEditPage";
import AddDish from "./Page/AddDish/AddDish";
import Dashboard from "./Page/Admin/Dashboard/dashboard";
import ItemDetail from "./Page/ItemDetail/ItemDetail";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App light-bg">
      <Navbar />

      <div className="container">
        <Routes>
          <Route excat path="/" element={<Home />} />
          <Route excat path="/about" element={<About />} />
          <Route excat path="/menu" element={<Menu />} />
          <Route excat path="/menu/item/:_id" element={<ItemDetail />} />
          <Route excat path="/edit/item/:_id" element={<DishEditPage />} />
          <Route excat path="/Book-Table" element={<BookATable />} />
          <Route excat path="/services" element={<Services />} />
          <Route excat path="/contact" element={<Contact />} />
          <Route excat path="/Add-Dish" element={<AddDish />} />
          {/* <Route excat path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
      {mobileMenu && <MNavbar setMobileMenu={setMobileMenu} />}
      <IoApps
        className="icon app-icon"
        onClick={() => {
          setMobileMenu(true);
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
