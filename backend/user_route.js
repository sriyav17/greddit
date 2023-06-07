const express = require('express');
const User = require('./schema/user_schema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Session } = require('express-session');


// const bodyParser = require('body-parser');

require('dotenv').config();

const router = express.Router();
// router.use(bodyParser.json());


router.post('/register', async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (user)
      return res.status(409).send({ message: 'Username already in use' });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: 'User registered successfully' });
  }
  catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});


// Login a user
router.post('/login', async (req, res) => {
  const username = req.body.userName;
  const password = req.body.password;
  User.findOne({ userName: username })
    .then(user => {
      if (!user) {
        return res.status(400).json({ success: false, msg: 'User not found' })
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            return res.status(400).json({ success: false, msg: 'Incorrect password' });
          }
          const token = jwt.sign(
            { id: user._id },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
          );
          try {
            req.session.user = user;
            res.json({
              success: true,
              msg: 'Logged in successfully',
              token: `Bearer ${token}`
            })
          }
          catch (error) {
            console.log("Error", error)
          }
        })
        .catch(err => {
          res.status(500).json({ success: false, msg: 'Server error' });
          console.log(err)
        });
    })
});

module.exports = router
