const TableBooking = require("../Models/BookTable.model")
const Tables = require("../Models/Table.model")

exports.SetTable= async(req,res)=>{
    try {
        const {TableNumber, PriceForHour, discount} = req.body;

        await Tables.create({TableNumber, PriceForHour, discount}).then((table)=>{
            return res.status(201).json({table,msg:"Table Created successfully"});
        })
        
    } catch (error) {
        return res.status(503).json({error, msg:"Internal server error!!!"});
    }
}

exports.updateTabel = async(req,res)=>{
    try {
        const {_id} = req.params;
        const {PriceForHour, discount} = req.body;
        await Tables.findByIdAndUpdate({_id},{PriceForHour, discount}).then((table)=>{
            return res.status(200).json({table});
        })
    } catch (error) {
        return res.status(503).json({error, msg:"Internal server error!!!"});
    }
}

exports.BookATable = async(req,res)=>{
    try {
        
    } catch (error) {
        return res.status(503).json({error, msg:"Internal server error!!!"});
    }
}

exports.EditBooking = async(req,res)=>{
    try {
        
    } catch (error) {
        return res.status(503).json({error, msg:"Internal server error!!!"});
    }
}
exports.CancleBooking = async(req,res)=>{
    try {
        const {_id} = req.params;
        await TableBooking.findByIdAndUpdate({_id}, {status:"cancle"}).then((booking)=>{
            return res.status(200).json({msg:"Cancled"})
        }).catch((e)=>{
            return res.status(200).json({msg:"Please Try Again..."})
        })
    } catch (error) {
        return res.status(503).json({error, msg:"Internal server error!!!"});
    }
}