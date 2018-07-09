import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  }
},{collection:'Genre',timestamps:true})

export default mongoose.model('Genre',GenreSchema);