import React, { useEffect, useState } from "react";
import "../css/personalInfo.css";
import { country_arr, s_a } from "../Informations/information";
import Alert from "./Alert";
export const PersonalInfo = ({ setCurrentStep, userinfo, setuserinfo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState(1);
  const [country, setCountry] = useState(-1);
  const [state, setState] = useState(-1);
  const [gender, setGender] = useState(-1);
  const [isAlert,setIsAlert]=useState(false)

  useEffect(() => {
    userinfo.name ? setName(userinfo.name) : "";
    userinfo.email?setEmail(userinfo.email):"";
    userinfo.address?setAddress(userinfo.address):"";
    userinfo.age?setAge(userinfo.age):"";
    userinfo.country?setCountry(country_arr.indexOf(userinfo.country)):"";
    userinfo.state?setState(userinfo.state):"";
    userinfo.gender?setGender(userinfo.gender):"";
  }, []);

const submit=(e)=>{
e.preventDefault();

if(country=="-1" ||  state=="-1" || gender=="-1"){
setIsAlert((prev)=>!prev)
setTimeout(() => {
    setIsAlert((prev)=>!prev)
}, 2000);
return ;
}

const userObj={
    name:name,
    age:age,
    gender:gender,
    address:address,
    country:country_arr[country],
    state:state,
    email:email
}

setuserinfo(userObj)
setCurrentStep(2)
}

  return (
    <>
      <div className="personalInfo">

        <h4 className="TitleTag">PersonalInfo:</h4>
      { isAlert? <Alert text="ALL Details Are Not Field!"/>:""}
        <div className="personalForm">
          <form className="form" onSubmit={(e)=>submit(e)}>
            <div className="innerInfo">
              <div className="inputinfo">
                <label htmlFor="">Full Name:</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="inputinfo">
                <label htmlFor="">Email:</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="innerInfo">
              <div className="inputinfo">
                <label htmlFor="">Address:</label>
                <textarea
                  placeholder="Enter Your Address"
                  name="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="innerInfo">
              <div className="inputinfo">
                <label htmlFor="">Country:</label>
                <select
                  name="country"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value={-1}>Select Your Country</option>
                  {country_arr.map((Element, index) => {
                    return (
                      <option value={index + 1} key={Element}>
                        {Element}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="inputinfo">
                <label htmlFor="">State:</label>
                <select name="state" id="" value={state} onChange={(e)=>{setState(e.target.value)}}>
                  <option value={-1}>Select Your State</option>
                  {country != -1
                    ? s_a[country].split("|").map((element) => {
                        return (
                          <option value={element} key={element}>
                            {element}
                          </option>
                        );
                      })
                    : ""}
                </select>
              </div>
            </div>
            <div className="innerInfo">
              <div className="inputinfo">
                <label htmlFor="">Gender:</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value={-1}>Select Your Gender:</option>
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                  <option value={"Other"}>Other</option>
                </select>
              </div>
              <div className="inputinfo">
                <label htmlFor="">Age:</label>
                <input
                  type="number"
                  min={1}
                  max={120}
                  name="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="next btn btn-primary"
              
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
