const Task = require("../models/tasks");
const router = require("express").Router();

//get a specific task
router.get("/v1/tasks/:id",async(req,res)=>{
    try{
        const task= await Task.findOne({_id:(req.params.id)})
        if(!task){
            return res.status(404).json({
                status:"failed",
                message:"there is no task with this id"
            })
        }
        res.status(200).json({
            status:"success",
            task
        })
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }

})
module.exports=router;