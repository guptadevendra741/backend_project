const Task = require("../models/tasks");
const router = require("express").Router();

//to update a task
router.put("/v1/tasks/:id", async(req,res)=>{
    try{
        const updatedtask= await Task.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        })
        if(!updatedtask){
            return res.status(404).json({message:"there is no task with that id"})
        }
        res.status(204).json(updatedtask)
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }    
})
module.exports=router;