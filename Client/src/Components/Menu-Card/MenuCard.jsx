import { NavLink } from "react-router-dom";
import "./MenuCard.css"
import { AiFillStar } from "react-icons/ai";

const dummy_image = "https://content.jdmagicbox.com/comp/chennai/p2/044pxx44.xx44.171205140323.h2p2/catalogue/nila-fast-foood-madhavaram-chennai-fast-food-sb1bz.jpg?clr="

const MenuCard = ({dish}) => {

  const selling = dish?.price-dish?.discount_amount
  const image = dish?.image
  const Rating = dish?.Ratings
  const selling_price = selling.toFixed(2)

 

    return (
        <div data-aos="fade-up">
              <NavLink to={`/menu/item/${dish?._id}`} >
              <div className="menu-card light-comp">

                <div className="img">
                  <span>
                    
                    {
                      Rating!=0?<span className="rates center"> <h3>{Rating}</h3> <AiFillStar className="star" /></span>:""
                    }
                  </span>
                  <img
                    src={`${image?image:dummy_image}`}
                    alt=""
                  />
                  {
                    dish?.special_offer?<span className="special-offer">Special Offer</span>:""
                  }
                  
                </div>

                
                <div className="details j-center column">
                  <h2>{dish?.dish_Name} </h2>
                  <div className="d-flex p">
                    {" "}
                    <span>
                      
                      {dish?.discount_percent==0? <span className="current-price">&#x20B9; {selling_price} </span>:
                    <>
                    <del className="realPrice">&#x20B9; {dish?.price} </del>
                    <span className="current-price">&#x20B9; {selling_price} </span>
                    </>
                      }
                    </span>
                    {dish?.discount_percent==0?""
                    :<span className="disc">{dish?.discount_percent}% off</span>
                  }
                  </div>
                </div>
              </div>
            </NavLink>
        </div>
    );
}

export default MenuCard;
