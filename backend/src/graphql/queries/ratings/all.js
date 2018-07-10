import {
    GraphQLList
} from 'graphql';

import Rating from '../../../models/ratings';
import { RatingType } from '../../types/ratings';


const queryAllRatings = {
    type: new GraphQLList(RatingType), // On fait un RatingType pour dire à GraphQL comment faire? lui montrer un modèle d'objet ici
    resolve() {
        const ratings = Ratings.find().exec()
        if(!ratings) throw new Error ('Error al traer la base de datos ')
        return ratings
    }
}

export default queryAllRatings;