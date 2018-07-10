import genres from './genres';
import ratings from './ratings';
import users from './users';
import movies from './movies';

export default {
    ...genres, //Los tres puntos son para decir copia todo 
    ...ratings,
    ...movies
}