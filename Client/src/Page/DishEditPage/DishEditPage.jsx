import { useEffect, useState } from "react";
import "./DishEditPage.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../Redux/Slice/Category.slice";
const DishEditPage = () => {
  const Server_Url = import.meta.env.VITE_SERVER_URL;

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    image: "",
    dish_Name: "",
    description: "",
    price: "",
    discount_percent: "",
    discount_amount: "",
    Ingredients: "",
    Cuisine: "",
    isVej: "",
    inStock: "",
  });
  const [category, setcategory] = useState();
  const [formCategory, setFormcategory] = useState([]);

  const Category = useSelector((state) => ({ ...state.Category }));
  const CategoryData = Category?.Category?.category;

  const navigate = useNavigate();
  const { _id } = useParams();

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  const [checkBox, setCheckBox] = useState({
    isVej: formData.isVej,
    inStock: formData.inStock,
  });
  const handelCheck = (e) => {
    const { name, checked } = e.target;
    setCheckBox({
      ...checkBox,
      [name]: checked,
    });
  };

  const getDish = async () => {
    const res = await axios.get(`${Server_Url}dish/fetchDishById/${_id}`, {
      withCredentials: true,
    });
    const data = res.data;
    setFormData(data.dish);
    setcategory(data.dish.category);
  };

  const saveData = async () => {
    await axios.post(
      `${Server_Url}dish/EditDishes/${_id}`,
      { formData, formCategory },
      { withCredentials: true }
    );
    navigate("/menu");
  };


  const deleteCategory = (value) => {
    setFormcategory((oldValues) => {
      return oldValues.filter((category) => category._id != value);
    });
  };

  const addCtegory = (category, _id) => {
    
    setFormcategory((currentData) => [...currentData, { category, _id }]);
  };
  useEffect(() => {
    getDish();
    dispatch(fetchCategory());
    if(formData.category){
    const x = Object.entries(formData.category);
    setFormcategory(x);
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itemDetailsPage center column">
      <div className="page center column">
        <div className="item d-flex row center">
          <div className="imgPart row ">
            <div className="imgSel column center">
              <div className="imgs">
                <input
                  type="text"
                  className="smallimg"
                  name="image"
                  onChange={handelChange}
                  value={formData?.image}
                />
              </div>
            </div>
            {/* big image */}
            <input
              className="bigimg"
              type="text"
              name="image"
              onChange={handelChange}
              value={formData?.image}
            />
          </div>

          <div className="DetailsPart">
            <div className="detail column">
              <h2 className="font2">
                <input
                  type="text"
                  name="dish_Name"
                  onChange={handelChange}
                  value={formData?.dish_Name}
                  placeholder="Name"
                />
              </h2>
              <div className="showCategory d-flex wrap a-center">
                {formCategory?.map((cate, i) => {
                  return (
                    <>
                      <div className="category row center" key={i}>
                        <span className="catName">{cate?.category}</span>
                        <h5
                          className="catAdd center"
                          onClick={() => deleteCategory(cate?._id)}
                        >
                          {" "}
                          &#10006;
                        </h5>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="showCategory d-flex wrap a-center">
                {CategoryData?.map((cate, i) => {
                  return (
                    <>
                      <div className="category row center" key={i}>
                        <span className="catName">{cate?.category}</span>
                        <h5
                          className="catAdd center"
                          onClick={() => addCtegory(cate?.category, cate?._id)}
                        >
                          &#10010;
                        </h5>
                      </div>
                    </>
                  );
                })}
              </div>

              <div className="disc">
                <textarea
                  name="description"
                  onChange={handelChange}
                  value={formData?.description}
                  placeholder="Description"
                />
              </div>
              <div className="sDet">
                <label htmlFor="isVej">
                  IsVej
                  <input
                    type="checkbox"
                    name="isVej"
                    checked={checkBox.isVej}
                    onClick={handelCheck}
                    onChange={handelCheck}
                  />
                </label>
                <label htmlFor="inStock">
                  InStock
                  <input
                    type="checkbox"
                    name="inStock"
                    checked={checkBox.inStock}
                    onClick={handelCheck}
                    onChange={handelCheck}
                  />
                </label>

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
              </div>
              <h3>
                <span className="cPrice">
                  {" "}
                  &#8377;
                  <input
                    type="number"
                    name="price"
                    onChange={handelChange}
                    value={formData?.price}
                    placeholder="Price"
                  />
                </span>
                <span className="offer">
                  {" "}
                  <input
                    type="number"
                    name="discount_percent"
                    onChange={handelChange}
                    value={formData?.discount_percent}
                    placeholder="Dishcount Percent"
                  />
                  % OFF
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="save center">
        <div className="btn center" onClick={saveData}>
          Save Dish
        </div>
      </div>
    </div>
  );
};

export default DishEditPage;
