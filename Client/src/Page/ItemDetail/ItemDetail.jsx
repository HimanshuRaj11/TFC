import { useEffect, useState } from "react";
import "./ItemDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { GetItem } from "../../Redux/Slice/Item.slice";
import { NavLink, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import moment from "moment";
import axios from "axios";
import { MdModeEdit } from "react-icons/md";
import ItemDetailsSkeleton from "./ItemDetailsSkeleton";
import {toast} from "react-toastify"

const serverUrl = import.meta.env.VITE_SERVER_URL;
const clientUrl = import.meta.env.VITE_CLIENT_URL;

const ItemDetail = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const Item = useSelector((state) => ({ ...state.Item }));
  const { loading } = Item;
  // const Category = useSelector((state)=>({...state.Category}))
  // const CategoryData = Category?.Category?.category;

  const [hoverStar, setHoverStar] = useState(null);
  const [rating, setRatingGiven] = useState(null);

  const handelRating = (rate) => {
    setRatingGiven(rate);
  };

  const [reviewData, setReviewData] = useState({
    people: "",
    comment: "",
  });
  const { people, comment } = reviewData;

  const handelChangeReview = (e) => {
    let { value, name } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  const addReview = async () => {
    try {
      await axios.post(`${serverUrl}` + "dish/Add-Reviews/" + `${_id}`, {
        reviewData,
        rating,
      }).then(({data})=>{
        const {msg} = data;
        toast.success(msg);
      });
      await axios.post(`${serverUrl}` + "dish/Update-Ratings/" + `${_id}`)
      setReviewData({ people: "", comment: "" });
      setRatingGiven(null);
    } catch (error) {
      return error;
    }
  };

  const Dish = Item?.Item?.dish;
  const CurrentPrice = Dish?.price - Dish?.discount_amount;
  const selling_price = CurrentPrice.toFixed(2);
  const reviews = Dish?.Reviews;

  const rateings = async () => {
    await axios.post(`${serverUrl}` + "dish/Update-Ratings/" + `${_id}`);
  };
  useEffect(() => {
    dispatch(GetItem({ _id }));
    rateings();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itemDetailsPage center">
      {loading ? (
        <ItemDetailsSkeleton />
      ) : (
        <>
          <div className="edit">
            <NavLink to={`${clientUrl}` + "/edit/item/" + `${_id}`}>
              <MdModeEdit className="edit-icon" />
            </NavLink>
          </div>
          <div className="page center column">
            <div className="item d-flex row">
              <div className="imgPart row ">
                <div className="imgSel column center">
                  <div className="imgs">
                    <img src={Dish?.image} alt="" className="img" />
                  </div>
                  <div className="imgs">
                    <img src={Dish?.image} alt="" className="img" />
                  </div>
                  <div className="imgs">
                    <img src={Dish?.image} alt="" className="img" />
                  </div>
                  <div className="imgs">
                    <img src={Dish?.image} alt="" className="img" />
                  </div>
                </div>
                <img src={Dish?.image} alt="" className="img" />
              </div>
              <div className="detailsPart">
                <div className="detail column">
                  <h2 className="font2">{Dish?.dish_Name}</h2>
                  <div className="categoryS">
                    {Dish?.categorys?.map((data, i) => {
                      return (
                        <>
                          <span key={i}>{data.category}</span>
                        </>
                      );
                    })}
                  </div>

                  <span className="ratings row">
                    <span style={{ marginRight: "10px", fontWeight: "600" }}>
                      {Dish?.Ratings == 0 ? "" : Dish?.Ratings}
                    </span>
                    <div className="star row">
                      {[...Array(5)].map((star, i) => {
                        const r = i + 1;
                        return (
                          <>
                            <AiFillStar
                            key= {i}
                              id="star1"
                              color={r <= Dish?.Ratings ? "gold" : "gray"}
                            />
                          </>
                        );
                      })}
                    </div>
                  </span>
                  <div className="disc">{Dish?.description}</div>
                  <div className="sDet"></div>
                  <h3>
                    <del>&#8377; {Dish?.price}</del>
                    <span className="cPrice"> &#8377;{selling_price}</span>
                    <span className="offer">{Dish?.discount_percent}% OFF</span>
                  </h3>

                  <div className="addtoCart center">
                    <div className="btn center">ADD To CART</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reviews center column">
              <h1 className="font2">Peoples Feedback</h1>
              <div className="addReview">
                <h4>Give Your Feedback</h4>
                <div className="addFb row a-center">
                  <div className="column texts ">
                    <div className="row Is a-center">
                      <input
                        type="text"
                        name="people"
                        onChange={handelChangeReview}
                        value={people}
                        placeholder="Your Name"
                      />
                      <div className="stars row center">
                        {[...Array(5)].map((star, i) => {
                          const R = i + 1;
                          return (
                            <>
                              <AiFillStar
                                className="star"
                                color={
                                  R <= (hoverStar || rating) ? "gold" : "gray"
                                }
                                onMouseEnter={() => setHoverStar(R)}
                                onMouseLeave={() => setHoverStar(null)}
                                onClick={() => handelRating(i + 1)}
                              />
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <textarea
                      name="comment"
                      onChange={handelChangeReview}
                      value={comment}
                      placeholder="Give Here your Feedback..."
                      id="fedb"
                    ></textarea>
                  </div>
                  <button className="btnS" onClick={addReview}>
                    Submit
                  </button>
                </div>
              </div>
              {reviews?.length != 0 ? (
                <div className="reviewss wrap a-center">
                  {reviews?.map((data, i) => {
                    return (
                      <>
                        <div className="review row a-center" key={i}>
                          <div className="img">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCA20mcul2YxsFjJ3d-Ggdpvf9WnPvOlVwuA&usqp=CAU"
                              alt=""
                            />
                          </div>
                          <div className="rr">
                            <div className="top row a-center">
                              <h4 className="name">{data?.people}</h4>
                              <div className="star row">
                                {[...Array(5)].map((star, i) => {
                                  const r = i + 1;
                                  return (
                                    <>
                                      <AiFillStar
                                        id="star1"
                                        className={
                                          r <= data?.rating
                                            ? "ratedStar"
                                            : "unratedStar"
                                        }
                                      />
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="feedb">{data?.comment}</div>
                            <div className="date">
                              {moment(data?.time).format("LLL")}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              ) : (
                <div className="noReview center">
                  <h1>Not Reviews Yet..</h1>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
