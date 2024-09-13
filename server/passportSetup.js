import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, // From .env
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // From .env
      callbackURL: process.env.GOOGLE_REDIRECT_URL, // From .env
    },
    function (accessToken, refreshToken, profile, done) {
      // You can save user info or tokens here.
      done(null, profile);
    }
  )
);

// Serialize and deserialize user (this could be saving into a session or DB)
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
