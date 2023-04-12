import axios from 'axios';

import { BASE_URL } from './api_config';

export const login = async (email, password) => {
    return await axios.post(`${BASE_URL}/api/login`, { email,password })
    .then(response => response.data)
	  .catch(error => {
		  console.log(error);
		  return error;
    })
}

export const logout = async (token) => {
    return await axios.post(`${BASE_URL}/api/v1/logout`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    .then(response => response.data)
	  .catch(error => {
		console.log(error.message);
		return error.message;
    });

}