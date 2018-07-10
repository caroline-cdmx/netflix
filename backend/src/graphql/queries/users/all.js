import {
    GraphQLList
} from 'graphql';

import User from '../../../models/users';
import { UserType } from '../../types/users';


const queryAllUsers = {
    type: new GraphQLList(UserType), // On fait un UserType pour dire à GraphQL comment faire? lui montrer un modèle d'objet ici
    resolve() {
        const users = Users.find().exec()
        if(!users) throw new Error ('Error al traer la base de datos ')
        return users
    }
}

export default queryAllUsers;