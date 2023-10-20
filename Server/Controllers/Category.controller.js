const Category = require("../Models/Category.model")


exports.AddCategory = async(req, res)=>{
    try {
        const {category} = req.body;
        const newCategory = await Category.create({category})

        return res.status(201).json({newCategory, msg:"Category Created.."})
    } catch (error) {
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}

exports.RemoveCategory = async(req, res)=>{
    try {
        const {_id} = req.body;
        const cate = await Category.findOne({_id});
        if(!cate){
            return res.status(404).json({msg:"Something went wrong..."})
        }
        await Category.findOneAndDelete({_id}).then(()=>{
            return res.status(200).json({msg: `${cate.category} Deleted`})
        })
    } catch (error) {
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}