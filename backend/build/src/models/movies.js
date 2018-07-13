"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var MovieSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  plot: {
    type: String,
    require: true
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: "Genre"
  },
  url: {
    type: String,
    require: true
  },
  director: {
    type: String,
    require: true
  },
  year: {
    type: String //Ou Number, number c'est plus si on utilise l'année pour faire des calculs, ici c'est pareil de mettre String ou Number, on n'utilise pas l'année dans des calculs mathématiques
  },
  rating: {
    type: Schema.Types.ObjectId,
    ref: "Rating"
  },
  is_active: {
    type: Boolean,
    default: true
  },
  upload_at: {
    type: Date,
    default: new Date()
  }
}, { collection: "Movies", timestamps: true });

exports.default = _mongoose2.default.model('Movies', MovieSchema);