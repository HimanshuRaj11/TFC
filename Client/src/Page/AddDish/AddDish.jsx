import { useEffect, useState } from "react";
import "./AddDish.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../Redux/Slice/Category.slice";
const AddDish = () => {
  const dispatch = useDispatch();
  const Category = useSelector((state) => ({ ...state.Category }));
  const CategoryData = Category?.Category?.category;

  const [formData, setFormData] = useState({
    image: "",
    dish_Name: "",
    description: "",
    price: "",
    discount_percent: "",
    discount_amount: "",
    category: "",
    Ingredients: "",
    Cuisine: "",
    
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };


  const [checkBox, setCheckBox] = useState({
    isVej: false,
    inStock: false,
  })
  const handelCheck = (e)=>{
    const {name,checked} = e.target
    setCheckBox({
        ...checkBox,
        [name]: checked,
      });
    
  }

  const saveData = async () => {
    await axios.post(`http://localhost:8000/dish/AddDishes`, {formData,checkBox});
    setFormData({
        image: "",
        dish_Name: "",
        description: "",
        price: "",
        discount_percent: "",
        discount_amount: "",
        category: "",
        Ingredients: "",
        Cuisine: "",
       
    })
    setCheckBox({
        isVej: false,
        inStock: false,
    })
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  return (
    <div className="DishPage d-flex column center">
      <div className="form_inps row">
        <div className="form_row column">
          <input
            type="text"
            name="image"
            onChange={handelChange}
            value={formData?.image}
            placeholder="Image"
          />
          <input
            type="text"
            name="dish_Name"
            onChange={handelChange}
            value={formData?.dish_Name}
            placeholder="Name"
          />
          <textarea
            name="description"
            onChange={handelChange}
            value={formData?.description}
            placeholder="Description"
          />
        </div>

        <div className="form_row column">
          <input
            type="number"
            name="price"
            onChange={handelChange}
            value={formData?.price}
            placeholder="Price"
          />
          <input
            type="number"
            name="discount_percent"
            onChange={handelChange}
            value={formData?.discount_percent}
            placeholder="Dishcount Percent"
          />
          <input
            type="number"
            name="discount_amount"
            onChange={handelChange}
            value={formData?.discount_amount}
            placeholder="dis amount"
          />
          <select name="category" id="course-type" onChange={handelChange}>
            <option value="" >None</option>
            {CategoryData?.map((cate, i) => {
              return (
                <option value={`${cate._id}`} key={i + 1}>
                  {cate.category}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            name="Ingredients"
            onChange={handelChange}
            value={formData?.Ingredients}
            placeholder="Ingredients"
          />
          <input
            type="text"
            name="Cuisine"
            onChange={handelChange}
            value={formData?.Cuisine}
            placeholder="Cuisine i.e Country"
          />
          <label htmlFor="isVej">IsVej
          <input type="checkbox" name="isVej" checked={checkBox.isVej} onClick={handelCheck} onChange={handelCheck}/>
          </label>
          <label htmlFor="inStock">InStock
          <input type="checkbox" name="inStock" checked={checkBox.inStock} onClick={handelCheck} onChange={handelCheck}/>
          </label>
        </div>
      </div>

      <div className="btn_div">
        <button type="submit" onClick={saveData}>
          Add Dish
        </button>
      </div>
    </div>
  );
};

export default AddDish;
