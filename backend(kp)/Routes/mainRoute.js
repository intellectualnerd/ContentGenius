import express from 'express';
import { createNewUserController } from '../Controller/createNewUserController.js';
import passport from '../Config/passportConfig.js';
import { authCallbackController } from '../Controller/authCallbackController.js';

import admin from 'firebase-admin'

import { AddingData } from '../FireStoreFunctions/AddingData.js';
import {storeUserController} from '../Controller/storeUserController.js'
import { RetrivingData } from '../FireStoreFunctions/RetrivingData.js';

import { auth } from '../FireStoreFunctions/index.js';
import { firestore } from '../FireStoreFunctions/index.js';

import { AssignApi } from '../FireStoreFunctions/MappingApi.js';

import { configDotenv } from 'dotenv';
import Configuration from 'openai'
import OpenAIApi from 'openai'
import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";
import * as cheerio from 'cheerio';
import axios from 'axios';


configDotenv({path:".env"})

const genAI = new GoogleGenerativeAI("AIzaSyBSFZcjtPz7jMUzE5vtJWP7o8I9IYL0eQs");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const Router = express.Router();



Router.route('/createNewUser').post(createNewUserController);

//ADDING DATA INTO FIRESTORE
Router.route("/storeUserInfo").post(AddingData);

//RETRIVING DATA FROM FIRESTORE 
Router.post("/getData",async (req,res)=>{
    console.log(req.session.email,"gotcha")
    console.log(req.session.api,"gotcha1")

    console.log(req.cookies.idToken,"id")
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

});

//FOR STARTING SESSION

Router.post('/start-session', async (req, res) => {
  try {
    // Parse the request body for idToken
    const { idToken } = req.body;
console.log(idToken)
   
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    const email = decodedToken.email;


    console.log("UID:", uid);
    console.log("Email:", email);
    

    // Handle user session or authentication
    req.session.uid=uid
    req.session.email=email

    let api=await AssignApi(idToken)
    req.session.api=api
    const responseData = {
      message: 'Session started successfully',
      uid: uid,
      email: email // Return the email address if available
    };

    res.status(200).json(responseData);
  } catch (error) {
    if (error.code === 'auth/invalid-id-token') {
      console.error("Invalid ID token:", error);
     res.status(401).json({ redirect: 'http://localhost:3000' });

      // res.redirect.
    } else {
      console.error("Error verifying ID token:", error);
      // res.status(400).json({ error: error.message });
      res.status(400).json({ redirect: 'http://localhost:3000' });

    }
  }
});


Router.route('/signInWithGoogle').get(
  passport.authenticate('google', { scope: ['email', 'profile'], session: false }),
);

// Router.get('/auth/callback',
//   passport.authenticate('google', {
//     failureRedirect: '/auth/callback/failure',
//     session: false
//   }), (req, res) => {
//     console.log('callback is called');

//     console.log(req.user)

//     // store in auth data
//     // in home page check if user loggedin or not 
//     auth.createUser({
//       email: req.user.email,
//       photoURL: req.user.picture,
//       displayName: req.user.displayName,
//       emailVerified: req.user.email_verified,
//       providerToLink: req.user.provider
//     }).then(async (user) => {
//       // await admin.auth().updateUser(user.uid, {
//       //   providerData: [{ providerId: req.user.provider}],
//       // });
//       console.log('user created')
//       res.status(200).json(req.user) // Redirect to frontend application

//     }).catch((e) => {
//       if (e.code === 'auth/email-already-exists') {
//         auth.getUserByEmail(req.user.email).then((user) => {
//           console.log('user already exists')

//           // manage a cookie and jwt
          

//           console.log(JSON.stringify(user))

//           const expiresInOneMonth = new Date();
//           expiresInOneMonth.setMonth(expiresInOneMonth.getMonth() + 1);
//           // Set a cookie with user data as a JSON string
//           res.cookie('user', JSON.stringify(user), {
//             httpOnly: false, // Set to false so the cookie is accessible via JavaScript
//             domain: 'localhost',
//             path: '/',
//             sameSite: 'Lax',
//             expires: expiresInOneMonth
//           });
//   console.log(req.session.Username,"jere")
//   req.session.email=user.email
//   req.session.uid=user.uid

//           // Redirect to the client application
//           res.redirect('http://localhost:3000/user');
//         })
//       }
//       else {
//         console.error("Error" + e)
//         //goto signin or signup page
//       }
//     })

//     //redirect to home page
//   }
// );

// Router.get('/auth/callback/success', (req, res) => {
//   console.log(req.session.Username,"jere")
//   console.log(req.user); // Log user profile after successful authentication
//   const expiresInOneMonth = new Date();
//   expiresInOneMonth.setMonth(expiresInOneMonth.getMonth() + 1);
//   // Set a cookie with user data as a JSON string
//   res.cookie('user', JSON.stringify(user), {
//     httpOnly: false, // Set to false so the cookie is accessible via JavaScript
//     domain: 'localhost',
//     path: '/',
//     sameSite: 'Lax',
//     expires: expiresInOneMonth
//   });

//   // Redirect to the client application
//   res.redirect('http://localhost:3000/user');
// });

// Router.get('/auth/callback/failure', (req, res) => {
//   console.log('Error in failure');
//   res.redirect('http://localhost:3000/');
// });




const fetchLinks = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    let links = [];

    $('nav a').each((i, element) => {
      const link = $(element).attr('href');
      if (link) {
        links.push(link);
      }
    });

    // Process the gathered links
    const prompt = `I want news of Delhi, India. Make a URL array of 3 elements from ${links} like [link1, link2, ...., link5] without any other text.`;
    const result = await model.generateContent(prompt);
    const ans = result.response;
    const text = ans.text();
    const start = text.indexOf("[");
    const end = text.indexOf("]");
    const newlinks = JSON.parse(text.substring(start, end + 1));

    // console.log(newlinks);

    // Return the newlinks directly
    return newlinks;

  } catch (error) {
    console.error(`Error fetching links from ${url}:`, error.message);
    return links; // Return the gathered links even if there's an error in processing
  }
};


// Function to fetch all text data from each link
const fetchTextFromLinks = async (links) => {
  let prompt_data = ""; // Initialize prompt_data variable

  for (let link of links) {
    try {
      console.log("Fetching:", link)
      // Ensure the link is a full URL
      if (link.startsWith('http') || link.startsWith('https')) {
        const response = await axios.get(link);
        const $ = cheerio.load(response.data);
        // Extract all text from the page
        $('div').each((i, element) => {
          prompt_data += $(element).text() + "\n"; // Append text from each element
        });
      }
    } catch (error) {
      console.error(`Error fetching data from ${link}:`, error);
    }
  }
  // console.log(prompt_data.trim())
  return prompt_data.trim();
};

Router.post('/getideas', async (req, res) => {
  let {links}=await req.body
  console.log(links,"reqBody in get ideas")

  const urls =links

  try {
    let allLinks = [];

    // Fetch all links from the provided URLs
    for (let url of urls) {
      url=url.trim()
      if(url.length==0)continue;
      // console.log(url,"url")
      const links = await fetchLinks(url);
      allLinks = [...allLinks, ...links];
    }
    // console.log(allLinks)
    // Fetch text data from each gathered link
    const prompt_data = await fetchTextFromLinks(allLinks);
    // Return the extracted text data
    // Process the gathered links
    console.log("Generating content with Gemini...");
    const promptQuery = `make like [{"title":"here is title", "description":"summary generated"}, {"title":"here is title", "description":"summary generated"},.....] of news from /n/n/n'''' prompt data : ${prompt_data} '''/n/n/n  without any other text.`;
    const generatedResult = await model.generateContent(promptQuery);
    const responseContent = generatedResult.response;
    console.log("Gemini content generated...");
    const responseText = responseContent.text();
    const arrayStart = responseText.indexOf("[");
    const arrayEnd = responseText.indexOf("]");
    const parsedData = JSON.parse(responseText.substring(arrayStart, arrayEnd + 1));
    console.log(parsedData);
    res.status(200).json(parsedData); 

  } catch (error) {

    res.status(500).json({ error: 'Failed to fetch ideas' });
  }
});

export default Router;