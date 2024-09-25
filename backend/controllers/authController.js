const {saveUser}=require("../database/auth")


const signup=(req,res)=>{
    if(req.body.name,req.body.email,req.body.password){
        saveUser(req.body).then((result) => {
            res.json({
                success:true,
                message:"user created succesfully",
                result
            })
            
        }).catch((err) => {
            console.log("err");
            res.json({
                success:false,
                message:err,
            })
            
        });


    }else{
        res.json({
            sucess:false,
            message:"all fields require"
        })
    }

}

const login=(req,res)=>{
    res.json({
        success:true,
        mesaage:"loggged successfully"
    })

}

module.exports={
    signup,
    login
}