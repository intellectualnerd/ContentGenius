import "./user.css";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import axios from "axios";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseconfig from "../../../fir-869fb-firebase-adminsdk-xy3i0-ecdeea31bb.json";
import { UserProvider } from "./userContext";
const User = () => {
  const [user, setUser] = useState(null);

  const [userInfoData, setUserInfo] = useState([]);
  const [userContentInfoData, setUserContentInfo] = useState([]);

  console.log("hiiiiiiiiii", user);
  const idToken = Cookies.get("idTokenContent");

  useEffect(() => {
    console.log("FIRST USER");
    const api = axios.create({
      baseURL: "http://localhost:4000",
      withCredentials: true,
    });

    const userData = Cookies.get("userIdContent");
    console.log(idToken);
    if (userData) {
      try {
        const response = api
          .post("/start-session", {
            idToken: idToken,
          })
          .then((response) => {
            console.log(response, "response");

            api.post("/getData", { idToken: idToken }).then((response) => {
              console.log(response.data);
              if (response.data != 0) {
                const { userInfo, userContentInfo } = response.data;
                setUserInfo(userInfo);
                setUserContentInfo(userContentInfo);
              } else {
                window.location.assign("/userInfo");
              }
            });
          })
          .catch((error) => {
            if (error.response && error.response.status === 401) {
              // Redirect to the user page based on server response
              window.location.href = error.response.data.redirect;
            } else {
              console.error("Error occurred:", error);
              // For other errors (e.g., token validation errors)
              if (error.response && error.response.data.redirect) {
                window.location.href = error.response.data.redirect;
              }
            }
          });

        const parsedUser = JSON.parse(userData);

        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data from cookie", error);
      }
    } else {
      console.log("No user data found");
    }
  }, []);
  console.log(user, "user");

  const [isCustomStyle, setIsCustomStyle] = useState(false);
  return (
    <>
      { (
        <UserProvider value={{userInfoData,userContentInfoData}}>

        <div className="mydark">
          {user && (
            <Sidebar
              img={user.photoURL}
              isCustomStyle={isCustomStyle}
              setIsCustomStyle={setIsCustomStyle}
              name={user.displayName}
            />
          )}
          <div
            className={`app-container ${
              isCustomStyle ? "custom-style user-content" : "user-content"
            }`}
          >
            <Outlet
              isCustomStyle={isCustomStyle}
              setIsCustomStyle={setIsCustomStyle}
              userInfo={userInfoData}
              userContent={userContentInfoData}
            />
          </div>
        </div>
        </UserProvider>

      )}
    </>
  );
};

export default User;
