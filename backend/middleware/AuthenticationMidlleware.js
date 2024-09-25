const { getUserByemail } = require("../database/auth");
const User=require("../model/userSchema")
const bcrypt = require('bcrypt');




const encryptPassword=(req,res,next)=>{
    if(req.body.name,req.body.email,req.body.password){
         const saltRounds=8;
        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            if(err){
                res.json({
                    sucess:false,
                    message:"please enter correct password",

                })
                
            }
            // Store hash in your password DB.
            else{
                req.body.password=hash;
                next();
            }

        });
    }else{
        res.json({
            success:false,
            message:"All Fields are required"
        })
    }

}


const checkUser = async (req, res, next) => {
    try {
        if(req.body.email &&req.body.password){
            const user = await getUserByemail(req.body.email);

        if (user) {
            // Compare passwords using bcrypt
            const passwordMatch = await new Promise((resolve, reject) => {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) {
                        reject(err); // Reject promise if there is an error
                    } else {
                        resolve(result); // Resolve promise with the result of the comparison
                    }
                });
            });

            if (passwordMatch) {
                
                next();
            } else {
                // Passwords don't match, send an error response
                res.json({
                    success:false,
                    message:"enter correct password"
                })
            }
        } else {
            // User not found, send an error response
            res.json({
                success: false,
                message: "Enter correct email"
            });
        }

        }else{
            res.json({
                success:false,
                message:"all fields required"
            })
        }
        
    } catch (error) {
        // Handle any errors
        next(error);
    }
}

module.exports={
    encryptPassword,
    checkUser
}
