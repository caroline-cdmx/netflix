import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './src/models/users';
import {createToken,verifyToken} from './src/resolvers/create';


const app = express();
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://admin:layton18@ds127771.mlab.com:27771/netflix-clone');

const db = mongoose.connection;
db.on('error', ()=>console.log("Error al conectar a la BD"))
  .once('open',()=> console.log("Conectado a la BD"))

app.use(bodyParser.json());

app.post('/signup',(req,res)=> {
   let user = req.body;
   User.create(user).then(() => {
    return res.status(201).json({"message":"Usuario Creado",
    "id": user._id})
   }).catch((err)=>{
     console.log(err);
    return res.json(err);
   })
})

app.post('/login', (req, res)=>{
  
  const token = createToken(req.body.email,req.body.password).then((token)=>{

    res.status(201).json({token});

  }).catch(()=>{
    res.status(403).json({
      message:"Login Failed!!! :( Invalid credentials"
    })
  })
})

app.get('/', (req,res) => {
  res.send("Estoy funcionando :)");
})

app.listen(PORT, ()=> {
  console.log(`Magic happens in port ${PORT}`);
})