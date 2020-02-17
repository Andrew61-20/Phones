import axios from 'axios';

axios.defaults.baseUrl='http://localhost:3001';
const BASE_URL = 'http://localhost:3001/users';

const getAllUsersItems = () =>
  axios.get (BASE_URL).then(response => {
    return response.data;
  });    
  
const deleteUserItem = id => 
  axios.delete (`${BASE_URL}/${id}`).then(response => response.status === 200)
   

const addUserItem = item =>
  axios.post(BASE_URL, item).then(response => {
      return response.data;
    });
	
export { getAllUsersItems, deleteUserItem, addUserItem };
    