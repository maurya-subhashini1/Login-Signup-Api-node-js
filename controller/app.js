const knex=require('../database/db')
const jwt = require('jsonwebtoken');

get=(req,res)=>{
    knex.select("*").from("userregistion")
    .then((data)=>{
            res.send(data)
            console.log(data);
        
    }).catch((err)=>{
            console.log(err);
            res.send(err)   
    });
    }
post=(req,res)=>{
    // console.log(req.body);
    const user={ 
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        password:req.body.password,
        email:req.body.email
    }
    knex("userregistion").insert(user)
    
    .then((data)=>{
        res.send(data)
        console.log(data);

    }).catch((err)=>{
        console.log(err);
        res.send(err)

        
    });
}

login=(req,res)=>{
    knex.select("*").from("userregistion").where("password","=",req.body.password,"email","=",req.body.email)
    .then((data)=>{

        console.log(data);

        res.send({message:"login successfuly"})
    
}).catch((err)=>{
        console.log(err);
        res.send({message:"login not sucessfuly"})   
});
}

delet=(req,res)=>{
    knex.delete("*").from("userregistion").where("id","=",req.params.id)
    .then((data)=>{
        console.log(data);
        res.send({message:"deleted successfuly"})
    
}).catch((err)=>{
        console.log(err);
        res.send({message:" not deleted faild"})   
});
}

updat=(req,res)=>{
    knex.from("userregistion").where("id","=",req.params.id)
    .update({
        id:req.body.id,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        password:req.body.password,
        email:req.body.email
    })
    .then((data)=>{
        var jwt=require({uaser_name:"secret key"})
        console.log(data);
        res.send({message:"updated successfuly"})
    
    }).catch((err)=>{
        console.log(err);
        res.send({message:" not update faild"})   
});
}
  

  
module.exports={get,post,login,delet,updat}

