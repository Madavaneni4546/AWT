const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();
app.use(express.json());
const path = require('path');

let students = [];

// Passport configuration
passport.use(new LocalStrategy(
  {
    usernameField: 'username', // Assuming username and password are sent in the request body
    passwordField: 'password'
  },
  (username, password, done) => {
    // Implement your own logic to authenticate users here
    // For simplicity, let's assume a hardcoded user for demonstration
    if (username === 'admin' && password === 'password') {
      return done(null, { id: 1, username: 'admin' });
    } else {
      return done(null, false, { message: 'Incorrect username or password' });
    }
  }
));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Retrieve user from database using id
  const user = { id: 1, username: 'admin' }; // Hardcoded user for demonstration
  done(null, user);
});

// Middleware to initialize Passport and session support
app.use(passport.initialize());
app.use(passport.session());

// Authentication middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('Unauthorized');
}

// Serve login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Login route
app.post('/login', passport.authenticate('local'), (req, res) => {
  // If authentication succeeds, user object will be attached to req object by Passport
  res.redirect('/students'); // Redirect to students page after successful login
});

// Protected route
app.get('/students', isAuthenticated, (req, res) => {
  res.json(students);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
