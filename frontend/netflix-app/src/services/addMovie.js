import axios from 'axios';
import constantes from '../const';
import getToken from '../resolvers/getToken';


export default (data) => {
  let {id,rate} = data;
  // avant la ligne en dessous mais comme ça marchait pas let newRate = JSON.stringify({rate:rate}); // convertit l'objet en string 
  let newMovie = `{
    name:'${data.name}',
    plot:'${data.plot}',
    genre:'${data.genre}',
    director:'${data.director}',
    year:'${data.year}',
    image_url:'${data.image_url}',
    rating:'${data.rating}'

  }`;
  return axios({
    url:constantes.url+'graphql',
    method:'post',
    data:{
      mutation:`
        mutation{
          addMovie(data:${newMovie}){
            _id, 
            name
          }
        }
      `
    },headers:{'Authorization':'JWT'+getToken()}
  })
}
