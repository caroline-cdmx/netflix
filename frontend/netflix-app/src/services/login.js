import axios from 'axios';
import constante from '../const.js'

export default (data) => {
  return axios.post(constante.url+'login/',data)
}