import expressJwt from 'express-jwt'
import User from "../models/user";

export const requireSignin = expressJwt({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

export const isInstructor = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).exec();
    //Because of not using Stripe/Money to register to Instructor
    //so everyone can create a new course
    if (!user.role.includes("Instructor")) {
      //return res.sendStatus(403);
      next();
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};