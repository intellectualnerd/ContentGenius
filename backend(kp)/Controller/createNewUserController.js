import { auth } from "../index.js"


export const createNewUserController = async(req,res)=>{
    console.log('called')
    const {email,password,uid} = req.body 

    try{
        const user = await auth.createUser({
            email : email,
            password : password,
            uid : uid
        })

        res.status(308).json({user : user})

        if(user)
            {
                console.log('User is created')
            }
    }
    catch(e)
    {
        if (e.code === 'auth/email-already-exists')
            // console.log('User is already logedin' + JSON.stringify(await auth.getUserByEmail(email)))

            res.status(308).json({user :JSON.stringify(await auth.getUserByEmail(email)) })

        console.error(e.toString())
    }
}