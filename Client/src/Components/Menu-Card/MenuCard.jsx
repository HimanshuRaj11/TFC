import { NavLink } from "react-router-dom";
import "./MenuCard.css"
import { AiFillStar } from "react-icons/ai";


const MenuCard = () => {
    return (
        <div data-aos="fade-up">
              <NavLink >
              <div className="menu-card light-comp">

                <div className="img">
                  <span className="rates center">
                    {" "}
                    <h3>4</h3> <AiFillStar className="star" />{" "}
                  </span>
                  <img
                    src="https://content.jdmagicbox.com/comp/chennai/p2/044pxx44.xx44.171205140323.h2p2/catalogue/nila-fast-foood-madhavaram-chennai-fast-food-sb1bz.jpg?clr="
                    alt=""
                  />
                  <span className="special-offer">Special Offer</span>
                </div>

                
                <div className="details j-center column">
                  <h2>Special burgur</h2>
                  <div className="d-flex p">
                    {" "}
                    <span>
                    <del className="realPrice">&#x20B9; 149 </del>
                    <span className="current-price">&#x20B9; 135 </span>
                    </span>

                    <span className="disc">10% off</span>{" "}
                  </div>
                </div>
              </div>
            </NavLink>
        </div>
    );
}

export default MenuCard;
