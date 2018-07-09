import jwt from 'jsonwebtoken';
import User from '../models/users';

const expiresIn = "1d";
const secret = "samplejwtnetflix";
const tokenPrefix = "JWT";


export const createToken = (email, password) => {

  if (!email || !password) {
    return false
  }

  const user = User.findOne({
    'email': email
  }).then((user) => {
    return new Promise((resolve, reject) => {
      user.comparePassword(password, (err, isMatch) => {
        console.log(isMatch);
        if (isMatch) {
          let payload = {
            email: user.email,
            id: user._id
          }
          const token = jwt.sign(payload, secret, {
            expiresIn
          });

          resolve(token)
        } else {
          reject(false)
        }
      })
    });
  }).catch((err) => {
    return err
  });


  return user

}