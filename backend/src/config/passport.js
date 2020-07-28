const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
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
      session: false
    },
    async (email, password, done) => {
      const user = await User.findOne({ email })
        .catch(done);
      if (!user && !user.verifyPasswordSync(password)) {
        return done(null, false)
      }
      return done(null, user);
    }
  )
);

passport.use(new JwtStrategy(
    {
        jwtFromRequest: (req) => {
            let token = null;

            if (req && req.cookies) {
                token = req.cookies['jwt'];
            }

            return token;
        },
        secretOrKey: process.env.JWT_SECRET
    },
    async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.sub)
            .catch(done);

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
     }
));
