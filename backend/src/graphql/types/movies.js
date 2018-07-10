import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLType,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLFloat
} from 'graphql'

import {GenreType, GenresInputType} from './genres';
import {RatingType} from './ratings';
import Genre from '../../models/genres'
import Rating from '../../models/ratings'


export const MovieType = new GraphQLObjectType({
  name: "ListMovies",
  description: "Movies de la BD",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
    },
    name:{
      type:GraphQLString
    },
    plot:{
      type:GraphQLString
    },
    genre:{
      type:GenreType,
      resolve(movie){
        // const genre = movie.genre pareil que const {genre} = movie
        const {genre} = movie
        return GenresInputType.findById(genre).exec()
      }
    },
    url:{
      type:GraphQLString
    },
    director:{
      type:GraphQLBoolean
    },
    year:{
      type:GraphQLString
    },
    rate:{
      type:GraphQLFloat
    },
    rating:{
      type:RatingType,
      resolve(movie) {
        const {rating} = movie
        return RatingType.findById(rating).exec()
      }
    },
    is_active:{
      type: GraphQLBoolean
    },
    upload_at: {
      type: GraphQLString
    }

  })
});

export const MoviesInputType = new GraphQLInputObjectType({
  name: "addMovies",
  description: "Agrega, modifica peliculas a la bd",
  fields: () => ({
    name:{
      type:GraphQLString
    },
    plot:{
      type:GraphQLString
    },
    genre:{
      type:GraphQLString,
      resolve(movie){
        const {genre} = movie
        return GenresInputType.findById(genre).exec()
      }
    },
    url:{
      type:GraphQLString
    },
    director:{
      type:GraphQLBoolean
    },
    year:{
      type:GraphQLString
    },
    rating:{
      type:RatingType,
      resolve(movie) {
        const {rating} = movie
        return RatingType.findById(rating).exec()
      }
    }
  })
})


