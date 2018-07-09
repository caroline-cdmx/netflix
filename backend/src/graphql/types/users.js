import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql'

import User from '../../models/users';

export const UserType = new GraphQLObjectType({
  name: "Users",
  description: "Usuarios de la BD",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
    },
    name:{
      type:GraphQLString
    },
    lastname:{
      type:GraphQLString
    },
    email:{
      type:GraphQLString
    },
    is_admin:{
      type:GraphQLBoolean
    },
    create_at:{
      type:GraphQLString
    },
    is_active:{
      type:GraphQLBoolean
    },
    client_id:{
      type:GraphQLString
    },

  })
});

export const UserInputType = new GraphQLInputObjectType({
  name: "AddUsers",
  description: "Agrega, modifica nuevos usuarios a la bd",
  fields: () => ({
    _id:{
      type:GraphQLNonNull(GraphQLID)
    },
    name:{
      type:GraphQLString
    },
    lastname:{
      type:GraphQLString
    },
    password:{
      typeGraphQLString
    },
    email:{
      type:GraphQLString
    },
    photo:{
      type:GraphQLString
    }
    

  })
})


