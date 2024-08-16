import passport from "../Config/passportConfig.js"


export const authCallbackController  = (req,res)=>{
    passport.authenticate('google',{failureRedirect : '/auth/callback/failure'},
        (err,user,info)=>{
            if(err || !user){  
                console.log(err)
            }
            else{
                console.log(user.email)
                res.status(308).json({user : user})
            }
        }
    )
} 