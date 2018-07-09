import User from '../models/users';
import jwt from 'jsonwebtoken';

const expiresIn = "3d";
const secret = "samplejwtnetflix";
const tokenPrefix = "JWT";


export const verifyToken = () => {
  try{
    const [prefix,tokenReceived] = token.split(' ');
    if(!tokenReceived){
      throw new Error('No token provided');
    }
    if(prefix != tokenPrefix){
      throw new Error('Invalid header format');
    }
    jwt.verify(tokenReceived,secret,(err,payload)=>{
      if(err) throw new Error('Invalid Token')
      else user = User.findById(payload.id).exec()
    })
    if(!user) throw new Error("User doesn't exist")

    return user

  }catch(err){
    throw Error("Error not exepted")
  }
}