const Todo = require("../models/todo");

exports.updateTodo = async(req,res)=>{
    try{
          const {id} = req.params;
          const {newTitle,newDesc} = req.body;

          const todo = await Todo.findById({_id : id});

          //if for a given id todo is not present
          if(!todo){
            console.log("Todo with given id is not found!!");
            return res.status(404).json({
                success:false,
                message:"Error 404 Found!, No data found with given id"
            })
          }

          todo.title=newTitle;
          todo.description= newDesc;
          await todo.save();

          res.status(200).json({
            success:true,
            data:todo,
            message:`updated Successfully`
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


exports.updateStatus= async(req,res)=>{
    try {
      const {id} = req.params;
      const {status} = req.body;

      console.log(status,id);
      const todo = await Todo.findById({_id : id});

          //if for a given id todo is not present
          if(!todo){
            console.log("Todo with given id is not found!!");
            return res.status(404).json({
                success:false,
                message:"Error 404 Found!, No data found with given id"
            })
          }

          todo.status = status;

          await todo.save();

          res.status(200).json({
            success:true,
            data:todo,
            message:`updated Successfully`
        })
    } catch (error) {
      console.log(error);
      res.status(500).json({
          success:false,
          data:"Internal Server Error",
      });
    }
}