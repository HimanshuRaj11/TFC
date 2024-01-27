import MenuCard from "../../Components/Menu-Card/MenuCard";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategory } from "../../Redux/Slice/Category.slice";
import {
  fetchAllDishes,
  fetchCategoryDishes,
} from "../../Redux/Slice/Dishes.slice";
import MenuCardSkleton from "../../Components/Menu-Card/MenuCardSkleton";

const Menu = () => {
  const dispatch = useDispatch();
  const [AllDish, setAllDish] = useState()

  const Category = useSelector((state) => ({ ...state.Category }));
  const CategoryData = Category?.Category?.category;

  const {Dishes} = useSelector((state) => ({ ...state }));
  const DishData = Dishes?.Dishes?.dishes;
  const loading = Dishes?.loading;
  console.log(loading);

  useEffect(()=>{
    setAllDish(DishData)
  },[DishData])

  const changeCate = (e) => {
    const category = e.target.value;
    if (e.target.value == "All") {
      dispatch(fetchAllDishes());
    } else {
      dispatch(fetchCategoryDishes({ category }));
    }
  };
  const searchItem = (e) => {
    const searchVal = e.target.value;
    if (searchVal === "") {
      setAllDish(DishData);
      return;
    }
    const filterBySearch = DishData.filter((item) => {
      if (
        item.dish_Name
          .toString()
          .toLowerCase()
          .includes(searchVal.toString().toLowerCase())
      ) {
        return item;
      }
    });
    setAllDish(filterBySearch);
  };

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchAllDishes());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Menu center column">
      <div className="topHead light-comp center">
        <input
          type="search"
          placeholder="Search your taste..."
          name="search"
          id="search"
          onChange={searchItem}
        />

        <select
          name="course-type"
          id="course-type"
          defaultValue="All"
          onChange={changeCate}
        >
          <option value="All">All </option>
          {CategoryData?.map((cate, i) => {
            return (
              <option value={`${cate.category}`} key={i + 1}>
                {cate.category}
              </option>
            );
          })}
        </select>
      </div>

      <div className="menus center wrap">
        {loading?(
          <>
        <MenuCardSkleton/>
        <MenuCardSkleton/>
        <MenuCardSkleton/>
        <MenuCardSkleton/>
        <MenuCardSkleton/>
        <MenuCardSkleton/>
          </>
        ):
        (AllDish?.map((dish, i) => {
          return <MenuCard key={i + 1} dish={dish}/>;
        }))
        }
      </div>
    </div>
  );
};

export default Menu;
