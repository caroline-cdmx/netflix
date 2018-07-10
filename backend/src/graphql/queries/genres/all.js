import {
    GraphQLList
} from 'graphql';

import Genre from '../../../models/genres';
import { GenreType } from '../../types/genres';


const queryAllGenres = {
    type: new GraphQLList(GenreType), // On fait un RatingType pour dire à GraphQL comment faire? lui montrer un modèle d'objet ici
    resolve() {
        const genres = Genres.find().exec()
        if(!genres) throw new Error ('Error al traer la base de datos ')
        return genres
    }
}

export default queryAllGenres;