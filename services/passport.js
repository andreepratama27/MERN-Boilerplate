const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('@models/User')
const keys = require('@configs/keys')

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save()
    }
  )
)
