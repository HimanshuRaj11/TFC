import "./Skeleton.css"



const MenuCardSkleton = () => {
  return (
    <div className="cardSkeleton">
      <div className="menu-card light-comp">
        <div className="imgComp d-flex center">
        <div className="img"></div>
        </div>

        <div className="details j-center column">
          <h2 className="name"></h2>
          <div className="d-flex row">
          <span className="current-price"></span>
          <span className="current-price"></span>
          </div>
          </div>
        </div>
      </div>
    
  );
};

export default MenuCardSkleton;
