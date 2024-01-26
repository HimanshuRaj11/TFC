import { NavLink } from 'react-router-dom';
import "./Dashboard.css"

const Dashboard = () => {
    return (
        <div className='dashboard' >

            <div className="Add-btn"><NavLink to="/Add-Dish"> + Add Dish</NavLink></div>
            
        </div>
    );
}

export default Dashboard;
