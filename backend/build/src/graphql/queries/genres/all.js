'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _genres = require('../../../models/genres');

var _genres2 = _interopRequireDefault(_genres);

var _genres3 = require('../../types/genres');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllGenres = {
    type: new _graphql.GraphQLList(_genres3.GenreType), // On fait un RatingType pour dire à GraphQL comment faire? lui montrer un modèle d'objet ici
    resolve: function resolve() {
        var genres = Genres.find().exec();
        if (!genres) throw new Error('Error al traer la base de datos ');
        return genres;
    }
};

exports.default = queryAllGenres;