// authentication 

const router = require('express').Router();
import User from '../models/User';
import { genSalt, hash, compare } from 'bcrypt';

//REGISTER
router.post('/register', async (req, res) => {
  try {
    console.log(req);
    const salt = await genSalt(10);
    const hashedPass = await hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user && res.status(400)) {
      return res.json('Username is incorrect!');
    }

    const validated = await compare(req.body.password, user.password);
    if (!validated && res.status(400)) {
      return res.json('Wrong Password!');
    }

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;
