// import { firestore } from "../index";
import { firestore,auth } from "./index.js";
export const AddingData=(req,res)=>{
    const {user,content}=req.body;
console.log(user,"user",content)
const docRef = firestore.collection('UserData').doc(user.email);
const userContentRef=docRef.collection("UserContentInfoData").doc(user.email+"content")
const setDocument = async (address,age,country,email,gender,name,state,domain,platform,webUrl_1,webUrl_2,webUrl_3,webUrl_4,webUrl_5,Script_Style) => {
  await docRef.set({
    address: address,
    age: age,
    country:country,
    email:email,
    gender:gender,
name:name,
state:state
  });
await userContentRef.set({
    Script_style:Script_Style?Script_Style:"",
    platform_arr:platform,
    webUrlArr:[webUrl_1,webUrl_2,webUrl_3,webUrl_4?webUrl_4:"",webUrl_5?webUrl_5:""],
    domain:domain


})
  console.log('Document added with custom ID',email);
};

setDocument(user.address,user.age,user.country,user.email,user.gender,user.name,user.state,content.domain,content.platform,content.webUrl_1,content.webUrl_2,content.webUrl_3,content.webUrl_4,content.webUrl_5,content.Script_Style).catch(console.error).then((response)=>{
    console.log("done")
    res.send("Done")
}).catch((err)=>res.status(201).send("Something went wrong"));



}