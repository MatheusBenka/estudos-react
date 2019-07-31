import Axios from 'axios';
const API = Axios.create({baseURL:'https://rocketseat-node.herokuapp.com/api'});
export default API;