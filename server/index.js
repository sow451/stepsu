import express from "express"
import mysql from "mysql2"
import passport from 'passport';
import session from 'express-session';
import dotenv from 'dotenv'; 
import './passportSetup.js'; //  This is the file where Passport config is
dotenv.config(); //  Load env variables from .env file 

const app = express();

// Middleware to parse JSON requests
app.use(express.json());


// Session handling
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Session secret from .env
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth routes
app.get(
  '/auth/google',
  (req, res, next) => {
    console.log("Redirect URL being used: ",process.env.GOOGLE_REDIRECT_URL);  // Log redirect URL
    next();
  },
  passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'consent' })
);

app.get(
  '/auth/google/callback',
  (req, res, next) => {
    console.log("Callback being hit, redirect_url: ",process.env.GOOGLE_REDIRECT_URL);  // Log redirect URI in callback
    next();
  },
  passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/',  // Temporary redirect for testing,
  })
);

// Logout routes
app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err);
    } // Passport's logout method
  res.redirect('/');
});
});


// MySQL database connection setup
const db = mysql.createConnection({
    host: process.env.DB_HOST,       // Using DB_HOST from .env
  user: process.env.DB_USER,       // Using DB_USER from .env
  password: process.env.DB_PASSWORD, // Using DB_PASSWORD from .env
  database: process.env.DB_NAME    // Using DB_NAME from .env

})

// Check if database is connected
db.connect((err) => {
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Database connected successfully!');
    }
  });

// Simple route for testing server
app.get("/", (req, res)=>{
res.json("hello there")
})

// Fetch all users
app.get("/users", (req,res)=>{
    const q = "SELECT * from users"
    db.query(q, (err,data)=>{
        if(err) return res.json("Something's wrong!")
            return res.json(data)
    })
})

// Insert a new user
app.post("/users", (req,res)=>{
    const q = "INSERT INTO users(`first_name`, `last_name`, `email`, `country`) VALUES(?)"
    // const values =['Jason', 'Lama', 'jasonlama@ggmail.com', 'UAE'];
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.country,
    ];

    db.query(q, [values],(err,data) => {
        if (err) return res.json(err)
        return res.json("user has been created")
    })
})
// Start the server
const PORT = process.env.PORT || 8800
app.listen (PORT, ()=>{
    console.log(`Connected to the server  and running on port ${PORT}!`)
});