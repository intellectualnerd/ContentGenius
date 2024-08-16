
import { auth } from "../index.js";
import { firestore } from "./index.js";
import express from 'express'
export const RetrivingData=async (req,res)=>{
    console.log(req.session.email,"gotcha")
const {idToken}=req.body

const decode_token=await auth.verifyIdToken(idToken)
const email=decode_token.email
console.log(decode_token,"decode")

const getDocument = async (email) => {
    
  const docRef = firestore.collection('UserData').doc(email);
  const subdocRef=docRef.collection("UserContentInfoData").doc(email+"content")
  
  const doc = await docRef.get();
const subdoc=await subdocRef.get()
  
  if (doc.exists && subdoc.exists) {
 
const obj ={
    userInfo:doc.data(),
    userContentInfo:subdoc.data()
}


res.status(200).json(obj)
  } else {
  
    console.log('No such document!');
    res.status(200).send("0");
  }
};

getDocument(email).catch(console.error);

}