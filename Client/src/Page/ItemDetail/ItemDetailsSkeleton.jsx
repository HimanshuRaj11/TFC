import "./Skeleton.css";

const ItemDetailsSkeleton = () => {
  return (
    <div className="itemDetailsSkeleton">
      <div className="center">
        <div className="page center column">
          <div className="item d-flex row">
            <div className="imgPart row ">
              <div className="imgSel column center">
                <div className="Simg anim"></div>
                <div className="Simg anim"></div>
                <div className="Simg anim"></div>
                <div className="Simg anim"></div>
              </div>
              <div className="img anim"></div>
            </div>
            <div className="detailsPart">
              <div className="detail column">
               <div className="ln anim"></div>
               <div className="ln anim"></div>
               <div className="anim bl"></div>
               <div className="dln anim"></div>
               <div className="dln anim"></div>
              </div>
            </div>
          </div>

          <div className="reviews wrap d-flex">
            <div className="revBox anim"></div>
            <div className="revBox anim"></div>
            <div className="revBox anim"></div>
            <div className="revBox anim"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsSkeleton;
