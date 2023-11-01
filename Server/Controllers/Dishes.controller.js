const Dishes = require("../Models/Dishes.model")

exports.AddDishes = async(req, res)=>{
    try {
        const {image,dish_Name,description,price,discount_percent,category,Ingredients,Cuisine} = req.body.formData;
        const {isVej,inStock} = req.body.checkBox;
        const discount_amount = (price/100)*discount_percent
        console.log(category);
        const newDish = await Dishes.create({
            image, dish_Name,description,price,discount_percent,discount_amount,category,Ingredients,Cuisine,isVej,inStock
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
        console.log(_id);
        const {image,dish_Name,description,price,discount_percent,discount_amount,category,Ingredients,Cuisine,isVej,inStock} = req.body;
        const dish = await Dishes.findByIdAndUpdate({_id},{
            image, dish_Name,description,price,discount_percent,discount_amount,category,Ingredients,Cuisine,isVej,inStock
        }).then((Dish)=>{
            return res.status(201).json({msg:"Dish Updated Successfully" ,Dish })
        }).catch((e)=>{
            console.log(e);
        })
    } catch (error) {
        console.log(error);
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}

exports.fetchAllDishes = async(req,res)=>{
    try{
        await Dishes.find().then((dishes)=>{
            return res.status(201).json({dishes})
        })

    }catch (error){
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}
exports.fetchCategoryDishes = async(req, res)=>{
    try{
        const {category} = req.params;
        await Dishes.find({category}).then((dishes)=>{
            return res.status(201).json({dishes})
        })

    }catch (error){
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}

exports.fetchDishById = async(req,res)=>{
    try {
        const {_id}=req.params;
        await Dishes.findById({_id}).then((dish)=>{
        return res.status(200).json({dish})
        })
    } catch (error) {
        console.log(error);
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}