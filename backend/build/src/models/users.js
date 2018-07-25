'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT_WORK_FACTOR = 10;

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  is_admin: {
    type: Boolean,
    default: false
  },
  is_active: {
    type: Boolean,
    default: true //c'est mieux de mettre false, et que ça devienne true après l'envoie d'un mail de confirmation avec lien 
  },
  client_id: {
    //Este es para el procesador de pagos
    type: String
  }
}, { collection: "Users", timestamps: true });

userSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) return next();

  _bcrypt2.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    _bcrypt2.default.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  _bcrypt2.default.compare(candidatePassword, this.password, function (err, isMatch) {
    cb(err, isMatch);
  });
};

//TODO: Aqui voy a agregar el 'trigger' o hasheo de password

exports.default = _mongoose2.default.model('Users', userSchema);