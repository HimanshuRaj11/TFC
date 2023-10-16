import MenuCard from "../../Components/Menu-Card/MenuCard";
import "./Menu.css";


const Menu = () => {
    return (
        <div className="Menu center column">
            <div className="topHead light-comp center">
                <input type="search" placeholder="Search your taste..." name="search" id="search" />

                <select name="course-type" id="course-type">
                    <option value="" disabled>Course Type</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Lunch">Lunch</option>
                    <option value="BrakeFast">BrakeFast</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Thai">Thai</option>
                    <option value="Indian">Indian</option>
                    <option value="South-Indian">South Indian</option>
                    <option value="Cold-Drink">Cold Drink</option>
                    <option value="Hot-Drink">Hot Drink</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Cold-Coffee">Cold Coffee</option>
                </select>
            </div>

            <div className="menus center wrap">
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/>
            </div>
        </div>
    );
}

export default Menu;
