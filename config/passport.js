const passport = require("passport");
const { Strategy, ExtractJwt } = require('passport-jwt');
const db = require('../models');

const option = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: process.env.SECRET
};

const jwtStrategy = new Strategy(option, async (payload, done) => {

   const targetUser = await db.User.findOne({ where: { id: payload.id } });
   const targetAdmin = await db.Admin.findOne({ where: { id: payload.id } });

   if (targetUser) {
      done(null, targetUser);
   } else if (targetAdmin) {
      done(null,targetAdmin);
   } else {
      done(null, false);
   }
});

passport.use("jwt-auth", jwtStrategy);