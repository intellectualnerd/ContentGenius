import React from "react";
import "./css/userinfo.css";
import "../../../main.css";
import { useState } from "react";
import { PersonalInfo } from "./Steps/PersonalInfo";
import { ContentInfo } from "./Steps/ContentInfo";
import { Submitted } from "./Steps/Submitted";
import { platform_arr } from "./Informations/information";
function UserInfo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userInfo,setUserInfo]=useState({
    name:"jainam",
    email:"",
    address:"",
    age:"",
    country:"",
    state:"",
    gender:""
    })
  const [userContentInfo,setUserContentInfo]=useState({
    domain:-1,
    platform:platform_arr,
    webUrl_1:"",
    webUrl_2:"",
    webUrl_3:"",
    webUrl_4:"",
    webUrl_5:"",
    Script_Style:"",
    file:"",
    isSubMitted:false

  })

  const changeStep = (element) => {
    if (element < currentStep) {
      setCurrentStep(element);
    }
  };
  return (
    <>
      <div className="userMain">
        <div
          style={{
            height: "60px",
            width: "100%",
            paddingTop: "20px",
            marginLeft: "30px",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--dark-lemongreen)",
              height: "100%",
              width: "200px",
            }}
          ></div>
        </div>
        <div className="userForm">
          <div className="form">

         
{
  currentStep==1?<PersonalInfo setCurrentStep={setCurrentStep} userinfo={userInfo} setuserinfo={setUserInfo}/>:currentStep==2?<ContentInfo  setCurrentStep={setCurrentStep} contentinfo={userContentInfo} setUserContentInfo={setUserContentInfo}/>:<Submitted contentInfo={userContentInfo} userInfo={userInfo}/>
}
          </div>
        </div>
        <div className="userSteps">
          <div className="stepContainer">
            {[1, 2, 3].map((element) => {
              return (
                <div
                style={{"backgroundColor":((userInfo.email && element==1) || ((userContentInfo.isSubMitted && element==2))) ?"#87ff29":""}}
                  key={element}
                  className="steps"
                  onClick={(e) => changeStep(element)}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
