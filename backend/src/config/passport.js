const passport = require("passport");
const LocalStrategy = require("passport-local");
const userModel = require("../models/user");

passport.serializeUser((user, done) => {
  done(null, user._id);
  console.log("Logged in!");
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id);
    return done(null, user);
  } catch (error) {
    console.log(error);
  }
});

// register strat.
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      const user = await userModel.findOne({ email });
      console.log(user);
      if (user && user.verifyPasswordSync(password)) {
        // err, user.
        return done(null, user);
      } else {
        console.log("user was null");
      }
      // not verified.
      return done(null, false);
    }
  )
);
