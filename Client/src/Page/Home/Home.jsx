import "./Home.css";
import { GiCook } from "react-icons/gi";

import { BsArrowBarRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import MenuCard from "../../Components/Menu-Card/MenuCard";
const Home = () => {
  return (
    <>
      <div className="Home column j-center">
        <div className="home-container1 column j-center">
          <h2>The Food Court</h2>
          <h1>We belive good food </h1>
          <h1>offer greate smile</h1>
        </div>
      </div>
      <div className="home-container2 center">
        <div className="cont2-text d-flex column">
          <div className="head">
            <h1>We Provide Good Food For Your Family!</h1>
          </div>
          <div className="detail">
            <p>
              Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
              laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
              m, quis nostrud exer. Ut enim acgsd minim veniam, quxcis nostrud
              exercitation ullamco laboris nisi ufsit aliquip ex ea commodo
              consequat is aute irure m, quis nostrud exer.
            </p>
          </div>
          <div className="serv center wrap">

            <div className="list row a-center light-comp">
              <div className="list-icon center">
                <GiCook className="icon" />{" "}
              </div>
              <p className="list-text center">
                Ut enim ad minim veniam, quis nostrud exer.
              </p>
            </div>
            <div className="list row a-center light-comp">
              <div className="list-icon center">
                <GiCook className="icon" />{" "}
              </div>
              <p className="list-text center">
                Ut enim ad minim veniam, quis nostrud exer.
              </p>
            </div>
            <div className="list row a-center light-comp">
              <div className="list-icon center">
                <GiCook className="icon" />{" "}
              </div>
              <p className="list-text center">
                Ut enim ad minim veniam, quis nostrud exer.
              </p>
            </div>
            <div className="list row a-center light-comp">
              <div className="list-icon center">
                <GiCook className="icon" />{" "}
              </div>
              <p className="list-text center">
                Ut enim ad minim veniam, quis nostrud exer.
              </p>
            </div>
          
          </div>
        </div>
        <div className="cont2-img">
          <img
            src="https://techxmedia.com/wp-content/uploads/2021/09/setup-Virtual-Cloud-Kitchen-techxmedia.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="container3 center">
        <div className="top-menu center column">
          <div className="head center column">
            <h1>Some Trendy And Popular Courses</h1>
            <h3 className="d-sub-text">Our Top Menu</h3>
          </div>
          <div className="types center">
            <span className="active" id="Special">
              Special
            </span>
            <span id="Desserts">Desserts</span>
            <span id="Beverages">Beverages</span>
          </div>
          <div className="topR-menu center wrap">
            
          <MenuCard/>
          <MenuCard/>
          <MenuCard/>
          <MenuCard/>
          <MenuCard/>
          <MenuCard/>
          
          </div>

          <div className="all-menu center">
            <NavLink className={`center`}> <span>View More</span>  <BsArrowBarRight className="arrow-icon" /> </NavLink>
          </div>
        </div>
      </div>
      <hr />

      <div className="container4 center">
        <div className="contain4 center">
            <NavLink className="book-a-table">
                <h1>Book Your Table</h1>
            </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
