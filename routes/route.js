const express=require('express')
const router=express.Router();


const {get,post, login,delet,updat}=require("../controller/app")

router.get("/get",get)

router.post("/registion",post)

router.post("/login",login)

router.delete("/delete/:id",delet)

router.put("/update/:id",updat)

module.exports=router;