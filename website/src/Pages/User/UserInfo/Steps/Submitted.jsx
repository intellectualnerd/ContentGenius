import React, { useEffect } from 'react'
import '../css/submitted.css'
import mygif from '../../../../assests/checked_icon.gif'
import axios from "axios";
import Cookies from 'js-cookie';


export const Submitted = ({contentInfo,userInfo}) => {
  console.log(userInfo,"USERINFORMATION")
console.log(Cookies.get("user"),"cookies")
  console.log(contentInfo,"CONTENTINFORMATION")
  useEffect(()=>{
axios.post("http://127.0.0.1:4000/storeUserInfo",{"user":userInfo,"content":contentInfo,"cookie":Cookies.get("user")}, {
    withCredentials: true
}).then((response)=>{
console.log(response)
if(response.status==200){
  window.location.assign("/user");
}
})

  },[])




  return (
    <div className='submitedSection'>
<div className="heading">
  Thank You For Submitting.
</div>
  <img src={mygif} alt="Submitted" />
    </div>
  )
}
