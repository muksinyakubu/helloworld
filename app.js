const express = require("express")
const port = 5050
const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World")
})


app.listen(port,()=>{
    console.log("Started the server");
    console.log(`You server is running on http://localhost:${port}`);
})