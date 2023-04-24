const Task = require("../models/tasks");
const router = require("express").Router();

///to post new tasks
router.post("/v1/tasks", async(req,res)=>{
    try{
        const {title,is_completed}= req.body;
        let task = await Task.findOne({title})
        if(task){
            return res.json({message:"task already exists"});
        }
        task = await Task.create({title,is_completed});
        res.status(201).json({
            task
        })

    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})

// to get all the tasks
router.get("/v1/tasks", async(req,res)=>{
    const tasks = await Task.find();
    res.status(200).json({
        status:"success",
        tasks
    })
});

///to add bulk tasks
 router.post("/v1/tasks", async(req,res)=>{
  const tasks = req.body;
  try{
    const addedtask = await Task.insertMany(tasks);
    res.status(200).json({message:"tasks added successfully", addedtask})
  }catch(e){
    res.json({
        status:"failed"
    })
  }
});
module.exports=router;