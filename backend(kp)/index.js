import express, { json } from 'express';
import admin from 'firebase-admin';
import Router from './Routes/mainRoute.js';
import passport from './Config/passportConfig.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';
const app = express();


app.use(session({
      secret: '12e343', // Replace with a strong secret key in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false ,maxAge: 7 * 24 * 60 * 60 * 1000 }
}))

const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true // Allow credentials
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Initialize Firebase Admin SDK

const auth = admin.auth();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Initialize Passport.js
app.use(passport.initialize());

// Enable preflight request handling for CORS
app.options('/signInWithGoogle', cors());

// Use the main router
app.use('/', Router);


// Start the server
app.listen(4000, () => {
    console.log('Server started at port number 4000');
});

export { auth };
