const User=require("../model/userSchema")

const saveUser=(userdata)=>{
    return new Promise((resolve, reject) => {
        User.findOne({email:userdata.email}).then((result) => {
            if(result){
                reject("email alredy exist")
            }else{
                let user=new User(userdata)
                resolve(user.save())
            }
            
            
        }).catch((err) => {
            reject(err)
            
        });
        
    })
}
const getUserByemail = async (userEmail) => {
    try {
        const user = await User.findOne({ email: userEmail });
        return user;
    } catch (err) {
        console.log(err);
        throw err; 
    }
}

module.exports={saveUser,
    getUserByemail
}