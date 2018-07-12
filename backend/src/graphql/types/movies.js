import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLType,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList
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
        return Genre.findById(genre).exec()
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
      type:GraphQLList(GraphQLFloat)
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

export const MovieInputType = new GraphQLInputObjectType({
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
      type:GraphQLString
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
      type:GraphQLString
    
    }
  })
})

export const RateMovieType = new GraphQLInputObjectType({
  name:"addRate",
  description:"Agrega rate a Movie",
  fields: () => ({
    rate: {
      type: GraphQLFloat
    }
  })
})


