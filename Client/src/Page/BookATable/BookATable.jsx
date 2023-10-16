import "./BookATable.css";
import { FaChair } from "react-icons/fa";
import { useState } from "react";
// import {DatePickerComponent} from '@syncfusion/ej2-react-calendars'

const BookATable = () => {

  return (
    <div className="BookATable center column">
     <div className="center filter-bar">
      Book On: date
    {/* <DatePickerComponent>

    </DatePickerComponent> */}
     </div>
      <div className="tableDesine center">
        <div className="room light-comp a-center row ">
          <div className="door"></div>
          <div className="reception">
            <div className="r-counter">
            </div>
          </div>
          <div className="tables center row">

            <div className="row a-center column">

              <div className="col1 a-center row" >
                <div className="chairs a-center column">
                  <FaChair className="c-icon left-c" />
                  <FaChair className="c-icon left-c" />
                </div>
                <div className="table center">
                  <div className="shape-T"></div>
                </div>
                <div className="chairs a-center column">
                  <FaChair className="c-icon right-c" />
                  <FaChair className="c-icon right-c" />
                </div>
              </div>


              <div className="col2 a-center row">
              <div className="chairs a-center column">
                  <FaChair className="c-icon left-c" />
                </div>
                <div className="table center">
                  <div className="shape-T"></div>
                </div>
                <div className="chairs a-center column">
                  <FaChair className="c-icon right-c" />
                </div>
              </div>
            </div>

            <div className="row a-center column">
              <div className="col1 a-center row">
                <div className="chairs a-center column">
                  <FaChair className="c-icon left-c" />
                  <FaChair className="c-icon left-c" />
                </div>
                <div className="table center">
                  <div className="shape-T"></div>
                </div>
                <div className="chairs a-center column">
                  <FaChair className="c-icon right-c" />
                  <FaChair className="c-icon right-c" />
                </div>
              </div>
              <div className="col2 a-center row">
              <div className="chairs a-center column">
                  <FaChair className="c-icon left-c" />
                </div>
                <div className="table center">
                  <div className="shape-T"></div>
                </div>
                <div className="chairs a-center column">
                  <FaChair className="c-icon right-c" />
                </div>
              </div>
            </div>

            <div className="row a-center column">
              <div className="col1 a-center row">
                <div className="chairs a-center column">
                  <FaChair className="c-icon left-c" />
                  <FaChair className="c-icon left-c" />
                </div>
                <div className="table center">
                  <div className="shape-T"></div>
                </div>
                <div className="chairs a-center column">
                  <FaChair className="c-icon right-c" />
                  <FaChair className="c-icon right-c" />
                </div>
              </div>
              <div className="col2 a-center row">
              <div className="chairs a-center column">
                  <FaChair className="c-icon left-c" />
                </div>
                <div className="table center">
                  <div className="shape-T"></div>
                </div>
                <div className="chairs a-center column">
                  <FaChair className="c-icon right-c" />
                </div>
              </div>
            </div>




           
          </div>
        </div>
      </div>

      {/* <TableBookPop/> */}

    </div>
  );
};

export default BookATable;
