'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _ratings = require('../../../models/ratings');

var _ratings2 = _interopRequireDefault(_ratings);

var _ratings3 = require('../../types/ratings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllRatings = {
    type: new _graphql.GraphQLList(_ratings3.RatingType), // On fait un RatingType pour dire à GraphQL comment faire? lui montrer un modèle d'objet ici
    resolve: function resolve() {
        var ratings = Ratings.find().exec();
        if (!ratings) throw new Error('Error al traer la base de datos ');
        return ratings;
    }
};

exports.default = queryAllRatings;