export const storeUserController=(req,res)=>{
    console.log(req.session.email,"email")
 console.log ( req.session.uid,"uid")

    console.log('Raw Headers:', req.headers.cookie);
    console.log("Comes")
    console.log(req.body,req.cookies)
}
