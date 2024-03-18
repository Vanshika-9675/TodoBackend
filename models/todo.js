const mongoose = require('mongoose');

//mongoose.Schema is a blueprint that defines the structure of a document within a MongoDB collection
const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
            maxLength:50
        },
        description:{
            type:String,
            required: true,
            maxLength:50
        },
        status:{
            type: String,
            default : 'pending'        
        }
    }
);

const Todo=  mongoose.model("Todo",todoSchema);

module.exports = Todo; 