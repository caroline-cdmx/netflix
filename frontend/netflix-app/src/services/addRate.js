import axios from 'axios';
import constantes from '../const';
import getToken from '../resolvers/getToken';


export default (data) => {
  let {id,rate} = data;
  // avant la ligne en dessous mais comme ça marchait pas let newRate = JSON.stringify({rate:rate}); // convertit l'objet en string 
  let newRate = `{rate:${rate}}`;
  return axios({
    url:constantes.url+'graphql',
    method:'post',
    data:{
      mutation:`
        mutation{
          addRate(id:'${id}',data:${newRate}){
            _id, 
            name
          }
        }
      `
    },headers:{'Authorization':'JWT'+getToken()}
  })
}
