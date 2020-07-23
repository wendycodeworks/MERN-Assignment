const authRedirect = (req, res, next) => {
  // check if user is already signed in.
  if (req.session && req.user) {
    res.redirect("/");
  }

  next();
};

const authorize(req, res, next) {
  if (!req.session && !req.session.user) {
    // TODO
    return;
  }

  next();
}

const authAdmin(req, res, next) {
  if (!req.session && !req.session.user) {
    return;
    // TODO add role to User schema
  } else if (req.session.user.role !== "admin") {
    return;
  }

  // else they are admin.
  next();
}

module.exports = {
  authRedirect: authRedirect,
};
