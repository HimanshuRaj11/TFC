const Dishes = require("../Models/Dishes.model")

exports.AddDishes = async(req, res)=>{
    try {
        const {dish_Name,description,price,discount_percent,discount_amount,category,Ingredients,Cuisine} = req.body;
        const newDish = await Dishes.create({
            dish_Name,description,price,discount_percent,discount_amount,category,Ingredients,Cuisine
        }).then((Dish)=>{
            return res.status(201).json({msg:"Dish Added Successfully" ,Dish })
        })
    } catch (error) {
        console.log(error);
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}

exports.RemoveDishes = async(req, res)=>{
    try {
        
    } catch (error) {
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}

exports.EditDishes = async(req, res)=>{
    try {
        const {_id} = req.params;
        const {dish_Name,description,price,discount_percent,discount_amount,category,Ingredients,Cuisine} = req.body;
        const dish = await Dishes.findByIdAndUpdate({_id},{
            dish_Name,description,price,discount_percent,discount_amount,category,Ingredients,Cuisine
        }).then((Dish)=>{
            return res.status(201).json({msg:"Dish Added Successfully" ,Dish })
        })
    } catch (error) {
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}
