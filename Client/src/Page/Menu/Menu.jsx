import MenuCard from "../../Components/Menu-Card/MenuCard";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "../../Redux/Slice/Category.slice";
import { fetchAllDishes, fetchCategoryDishes } from "../../Redux/Slice/Dishes.slice";

const Menu = () => {
  const dispatch = useDispatch();

  const Category = useSelector((state) => ({ ...state.Category }));
  const CategoryData = Category?.Category?.category;

  const Dishes = useSelector((state) => ({ ...state.Dishes }));
  const DishData = Dishes?.Dishes?.dishes;


  const changeCate = (e)=>{
    const category = e.target.value
    if(e.target.value=="All"){
      dispatch(fetchAllDishes());
    }
    else{
      dispatch(fetchCategoryDishes({category}))
    }
  }


  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchAllDishes());
  }, []);

  return (
    <div className="Menu center column">
      <div className="topHead light-comp center">
        <input
          type="search"
          placeholder="Search your taste..."
          name="search"
          id="search"
        />

        <select name="course-type" id="course-type" defaultValue="All" onChange={changeCate}>
          <option value="All" >All </option>
          {CategoryData?.map((cate, i) => {
            return (
              <option value={`${cate._id}`} key={i + 1} >
                {cate.category}
              </option>
            );
          })}
        </select>
      </div>

      <div className="menus center wrap">

        {
          DishData?.map((dish,i)=>{
           return (<MenuCard key={i+1} dish={dish} />)
          })
        }
       
      </div>
    </div>
  );
};

export default Menu;
