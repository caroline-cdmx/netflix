import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql'


export const GenreType = new GraphQLObjectType({
  name: "ListGenres",
  description: "Generos de la BD",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
    },
    name:{
      type:GraphQLString
    },
    description:{
      type:GraphQLString
    },
    is_active:{
      type:GraphQLString
    }
  })
});

export const GenreInputType = new GraphQLInputObjectType({
  name: "AddGenres",
  description: "Agrega, modifica nuevos generos a la bd",
  fields: () => ({
    name:{
      type:GraphQLString
    },
    description:{
      type:GraphQLString
    }
  })
})


