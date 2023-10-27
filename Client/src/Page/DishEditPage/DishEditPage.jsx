import { useEffect, useState } from 'react';
import "./DishEditPage.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
const DishEditPage = () => {
    const navigate = useNavigate()
    const {_id} = useParams()
    const [formData, setFormData] = useState({
        image:"",
        dish_Name:"",
        description:"",
        price:"",
        discount_percent:"",
        discount_amount:"",
        category:"",
        Ingredients:"",
        Cuisine:"",
        isVej:"",
        inStock:""

    })
    const handelChange=(e)=>{
        const {name, value} = e.target
        setFormData((preVal)=>{
            return{...preVal,[name]:value}
        })
    }

    const getDish = async()=>{
            const res = await axios.get(`http://localhost:8000/dish/fetchDishById/${_id}`)
            const data = res.data;
            setFormData(data.dish);
    }

    const saveData = async()=>{
            await axios.post(`http://localhost:8000/dish/EditDishes/${_id}`, formData)
            // navigate("/dishPage")
    }
    useEffect(()=>{
        getDish()
    },[])
    return (
        <div className='DishPage d-flex column center'>

            <div className="form_inps row">

            <div className="form_row column">
            <input type="text" name="image"  onChange={handelChange} value={formData?.image} />
            <input type="text" name='dish_Name' onChange={handelChange} value={formData?.dish_Name}/>
            <textarea name='description' onChange={handelChange} value={formData?.description}/>
            </div>

            <div className="form_row column">
            <input type="text" name='price' onChange={handelChange} value={formData?.price}/>
            <input type="text" name='discount_percent' onChange={handelChange} value={formData?.discount_percent}/>
            <input type="text" name='discount_amount' onChange={handelChange} value={formData?.discount_amount}/>
            <input type="text" name='category' onChange={handelChange} value={formData?.category}/>
            <input type="text" name='Ingredients' onChange={handelChange} value={formData?.Ingredients}/>
            <input type="text" name='Cuisine' onChange={handelChange} value={formData?.Cuisine}/>
            </div>
            </div>

        <div className="btn_div">
            <button type="submit" onClick={saveData}>Save</button>
        </div>
        </div>
    );
}

export default DishEditPage;
