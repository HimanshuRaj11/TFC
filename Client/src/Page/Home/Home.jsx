import "./Home.css";
import { GiCook } from "react-icons/gi";
import { BsArrowBarRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import MenuCard from "../../Components/Menu-Card/MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategory } from "../../Redux/Slice/Category.slice";
import {fetchCategoryDishes} from "../../Redux/Slice/Dishes.slice";

const Home = () => {
  const dispatch = useDispatch();

  const Category = useSelector((state) => ({ ...state.Category }));
  const CategoryData = Category?.Category?.category;

  const Dishes = useSelector((state) => ({ ...state.Dishes }));
  const DishData = Dishes?.Dishes?.dishes;

  const [ActiveCourse, setActiveCourse] = useState("TFC Special");

  const setActive = (p) => {
    setActiveCourse(p);
  };
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchCategoryDishes({ category:ActiveCourse }));
  }, [ActiveCourse]);
  
  console.log(DishData);
  

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
            {CategoryData?.filter((data) => {
              return data.isTrending === true;
            }).map((data, i) => {
              return (
                <span
                  key={i}
                  className={`${ActiveCourse != data.category ? "" : "active"}`}
                  id={`${data._id}`}
                  onClick={() => setActive(data.category)}
                >
                  {data.category}
                </span>
              );
            })}
          </div>
          <div className="topR-menu center wrap">
            {DishData?.map((dish, i) => {
              return <MenuCard key={i + 1} dish={dish} />;
            })}
          </div>

          <div className="all-menu center">
            <NavLink className={`center`} to="/menu">
              {" "}
              <span>
                View More
              </span> <BsArrowBarRight className="arrow-icon" />{" "}
            </NavLink>
          </div>
        </div>
      </div>
      <hr />

      <div className="container4 center">
        <div className="contain4 center">
          <NavLink className="book-a-table" to="/Book-Table">
            <h1>Book Your Table</h1>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
