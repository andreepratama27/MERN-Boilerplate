const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('@models/User')
const keys = require('@configs/keys')

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existUser) => {
        if (existUser) {
          // already have a record with the given profile id
          done(null, existUser)
        } else {
          // we don't have a record with profile id, make a new record
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user))
        }
      })
    }
  )
)
