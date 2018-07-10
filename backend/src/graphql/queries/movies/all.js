import {
    GraphQLList
} from 'graphql';

import Movie from '../../../models/movies';
import { MovieType } from '../../types/movies';


const queryAllMovies = {
    type: new GraphQLList(MovieType), // On fait un RatingType pour dire à GraphQL comment faire? lui montrer un modèle d'objet ici
    resolve() {
        const movies = Movies.find().exec()
        if(!movies) throw new Error ('Error al traer la base de datos ')
        return movies
    }
}

export default queryAllMovies;