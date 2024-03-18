const mongoose = require("mongoose");

const dbConnect = ()=>{
    mongoose.connect("mongodb+srv://vanshisharma303:X5pomwZhO89mvepm@cluster0.zrb9una.mongodb.net/").then(()=>{
        console.log("Database connection is successful");
    })
    .catch((err)=>{
        console.log(err);
        console.log("Issue in db connection ");
        process.exit(1);
    })
}

module.exports = dbConnect;