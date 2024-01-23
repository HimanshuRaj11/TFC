const Category = require("../Models/Category.model")


exports.AddCategory = async(req, res)=>{
    try {
        const {category} = req.body;
        const oldcate = await Category.findOne({category})
        res.setHeader('Content-Type', 'application/json');
        if(!oldcate){
            await Category.create({category}).then((newCategory)=>{
                return res.status(201).json({newCategory, msg:"Category Created.."})
            })
        }
        return res.status(305).json({msg:"Category already exists"})
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
exports.editCategory = async(req, res)=>{
    try {
        const {_id} = req.params;
        const {category,isTrending} = req.body;
        await Category.findByIdAndUpdate({_id},{category,isTrending}).then((cate)=>{
            return res.status(201).json({msg:"Category Updated Successfully" ,cate })
        })

    } catch (error) {
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}

exports.fetchCategory = async(req,res)=>{
    try {
        await Category.find().then((category)=>{
            return res.status(200).json({category})
        })
    } catch (error) {
        return res.status(503).json({msg: "Internal Server Error" , error})
    }
}
