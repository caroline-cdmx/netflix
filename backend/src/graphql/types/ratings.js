import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt
} from 'graphql'


export const RatingType = new GraphQLObjectType({
  name: "ListRatings",
  description: "Clasificación de la BD",
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
    age:{
      type:GraphQLInt
    },
    is_active:{
      type:GraphQLString
    }
  })
});

export const RatingsInputType = new GraphQLInputObjectType({
  name: "AddRatings",
  description: "Agrega, modifica nuevas clasifaciones a la bd",
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
    age:{
      type:GraphQLInt
    }
  })
})


