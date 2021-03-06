'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _movies = require('../../../models/movies');

var _movies2 = _interopRequireDefault(_movies);

var _movies3 = require('../../types/movies');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllMovies = {
    type: new _graphql.GraphQLList(_movies3.MovieType), // On fait un RatingType pour dire à GraphQL comment faire? lui montrer un modèle d'objet ici
    resolve: function resolve() {
        var movies = Movies.find().exec();
        if (!movies) throw new Error('Error al traer la base de datos ');
        return movies;
    }
};

exports.default = queryAllMovies;