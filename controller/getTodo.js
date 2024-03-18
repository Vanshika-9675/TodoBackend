const Todo = require("../models/todo");

exports.getTodo = async(req,res)=>{
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});
         
          //response
        res.status(200).json({
            success:true,
            data: todos,
            message:"Entire Todo data is fetched"
        });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message,  
        });
    }
}

exports.getTodoById = async(req,res)=>{
       try{
          const id = req.params.id;
          const todo = await Todo.findById({_id : id});

          //if for a given id todo is not present
          if(!todo){
            console.log("Todo with given id is not found!!");
            res.status(404).json({
                success:false,
                message:"Error 404 Found!, No data found with given id"
            })
          }

          res.status(200).json({
            success:true,
            data:todo,
            message:`todo ${id} data successfully fetched`
          })

       }
       catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:err.message,  
        });
       }
}