import passport  from 'passport'
import {Strategy as GoogleStrategy} from 'passport-google-oauth2'


passport.use(new GoogleStrategy({
    callbackURL:  'http://localhost:4000/auth/callback',
    clientID : '122533875590-979duvhlb99d45u86mrjtb1qa26j7p5b.apps.googleusercontent.com',
    clientSecret : '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',
    passReqToCallback : true,
    
},(req,accessToken, refreshToken, profile, done)=>{
    console.log(profile)
    return done(null,profile)
}))

console.log('passport is called')
passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})

export default passport