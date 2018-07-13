"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RatingInputType = exports.RatingType = undefined;

var _graphql = require("graphql");

var RatingType = exports.RatingType = new _graphql.GraphQLObjectType({
  name: "ListRatings",
  description: "Clasificación de la BD",
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      name: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
      },
      age: {
        type: _graphql.GraphQLInt
      },
      is_active: {
        type: _graphql.GraphQLString
      }
    };
  }
});

var RatingInputType = exports.RatingInputType = new _graphql.GraphQLInputObjectType({
  name: "AddRatings",
  description: "Agrega, modifica nuevas clasifaciones a la bd",
  fields: function fields() {
    return {
      _id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
      },
      name: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
      },
      age: {
        type: _graphql.GraphQLInt
      }
    };
  }
});