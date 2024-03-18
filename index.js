const express = require('express');
const todoRoutes = require("./routes/todos");
const dbConnect= require("./config/database");
const cors = require('cors');


const app = express();

const PORT = 3000;


app.use(express.json());
app.use(cors());


//mount the todo api routes
app.use("/api/v1",todoRoutes);


//start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
});

//database connection
dbConnect();

//default Route
app.get("/",(req,res)=>{
    res.send(`<h1>This is home page</h1>`);
})