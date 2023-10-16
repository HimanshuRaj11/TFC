import "./Navbar.css";
import {NavLink} from "react-router-dom"
import {BsFillMoonFill,BsSunFill} from "react-icons/bs"
import { useEffect, useState } from "react";

const Navbar = ({lightBg,setLightBg}) => {


  const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 100);
   });
 }, []);
  return (
    <div className={`Navbar d-flex a-center row ${scroll?"nav-shadow": ""}`}>

      <NavLink to={'/'} className="logo font3"><img src="/TFC1.png" alt="" /></NavLink>

      <div className={`menus font2`}>
        <NavLink className={`link`} to={'/'} >Home</NavLink>
        <NavLink className={`link`} to={'/about'}>About</NavLink>
        <NavLink className={`link`} to={'/menu'} >Menu</NavLink>
        <NavLink className={`link`} to={'/Book-Table'} >Book a Table</NavLink>
        <NavLink className={`link`} to={"/service"} >Services</NavLink>
        <NavLink className={`link`} to={'contact'}>Contact</NavLink>
      </div>

      {/* <div className="theamChanger">
        {
            lightBg?<BsFillMoonFill className="Theam-icon" onClick={()=>{
                setLightBg(false)
                window.localStorage.setItem('lightBg',false)
              }}/>
              :<BsSunFill className="Theam-icon"onClick={()=>{
                window.localStorage.setItem('lightBg',true)
                setLightBg(true)
            }}/>
        }
      </div> */}
      <div className="orderBtn">
        <button className="btn order-btn">Order Now</button>
      </div>
    </div>
  );
};

export default Navbar;
