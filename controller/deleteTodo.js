const Todo = require("../models/todo");

exports.deleteTodo = async (req,res)=>{
    try{
        const {id} = req.params;

        const todo =await Todo.findById(id);
        
        if(!todo){
            console.log("not found!!");
            return res.status(404).json({
                success:false,
                message:"Todo with provided id is not found!!"
            })
        }
        
        await Todo.findByIdAndDelete(id);
  
        console.log("Successfully deleted!!");
        res.status(200).json({
            success:true,
            message:"Todo Deleted"
        })
    }
    catch(err){
       console.error(err);
       res.status(500).json({
        success:false,
        error:err.message,
        message:"Server Error"
       })
    }
}