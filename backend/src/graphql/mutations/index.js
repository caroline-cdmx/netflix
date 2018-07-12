import Users from './users';
import Movies from './movies';
import Ratings from './ratings';
import Genres from './genres';

export default {
    ...Users,
    ...Movies,
    ...Ratings, 
    ...Genres
}