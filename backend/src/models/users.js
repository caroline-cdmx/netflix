import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type:String,
    required: true
  },
  lastName:{
    type:String,
    required: true
  },
  email: {
    type:String,
    required: true
  },
  password:{
    type: String,
    required:true
  },
  photo: {
    type: String
  },
  is_admin:{
    type: Boolean,
    default: false
  },
  is_active:{
    type:Boolean,
    default:true  //c'est mieux de mettre false, et que ça devienne true après l'envoie d'un mail de confirmation avec lien 
  },
  client_id:{
    //Este es para el procesador de pagos
    type:String,
  }
}, {collection:"Users", timestamps:true});

userSchema.pre('save',function (next){
  let user = this;
  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR,function (err, salt){
    if (err) return next(err);
    bcrypt.hash(user.password,salt,function (err,hash){
      if (err) return next(err);
      user.password = hash;
      next();
    })

  })
})

userSchema.methods.comparePassword = function (candidatePassword,cb){
  bcrypt.compare(candidatePassword, this.password, function(err,isMatch){
    cb(err,isMatch)
  })
}

//TODO: Aqui voy a agregar el 'trigger' o hasheo de password

export default mongoose.model('Users',userSchema);