const express=require("express")
const router=require("./routes/route")
const app=express()
app.use(express.json())


app.use("/",router)


app.listen(8000,"localhost",()=>{
    console.log("Port listing 8000");
    
})