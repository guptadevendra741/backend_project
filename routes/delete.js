const Task = require("../models/tasks");
const router = require("express").Router();

//to delete one task
router.delete("/v1/tasks/:id", async(req,res)=>{
    try{

        const deletedtask =await Task.findByIdAndDelete(req.params.id);
        if(!deletedtask){
            return res.status(204).json()
        }
        res.status(204).json();
    }catch(e){
        res.status(204).json()
    }
})

/// to delete multiple tasks at a time
router.delete("/v1/tasks", async(req,res)=>{
  const {ids} = req.body;

  try{
    await Task.deleteMany({_id:{ $in: ids}});
    res.status(204).json({message:"tasks deleted successfully"})
  }catch(e){
    res.json({
        status:"failed"
    })
  }
})

module.exports=router;