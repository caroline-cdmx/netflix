import axios from 'axios';
import getToken from '../resolvers/getToken';
import constantes from '../const';


export default () => {
  return axios({
    url:constantes.url+'graphql',
    method:'post',
    data:{
      query:`
        query{
          allMovies{
            _id, 
            name,
            plot,
            director,
            genre{
              name,
            },
            rating {
              name
            },
            year,
            url
          }
        }
      `
    },headers:{'Authorization':'JWT'+getToken()}
  })
}