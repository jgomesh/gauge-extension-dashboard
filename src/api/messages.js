import axios from 'axios';
import { BASE_URL } from './api_config';

export const createMessage = async (data , token) => {
	console.log(data)
  return await axios.post(`${BASE_URL}/api/v1/message`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  .then(response => response.data)
	.catch(error => {
		console.log(error.message);
		return error.message;
	});
};

export const editMessage = async (data , messageId, token) => {
	const { end_date, start_date, id, message, title, type } = data
	return await axios.put(`${BASE_URL}/api/v1/message/${messageId}`, { end_date,
		start_date,
		id,
		message,
		title, 
		type,
		user_id: JSON.parse(localStorage.getItem("user_logged")).id
	}, {
      headers: {
	 			Authorization: `Bearer ${token}`,
      },
    })
  .then(response => response.data)
	.catch(error => {
		console.log(error.message);
		return error.message;
	});
	
};

export const deleteMessage = async (messageId, token) => {
	const response = await axios.delete(`${BASE_URL}/api/v1/message/${messageId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  .then(response => response)
	.catch(error => {
		console.log(error.message);
		return error;
	});
	return response.data
};

export const getMessagesOnTimeAndActive = async (token) => {
	return await axios.get(`${BASE_URL}/api/v1/messagesOnTimeIsActive`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
	.then(response => response.data)
	.catch(error => {
		console.log(error.message);
		return error;
	});
};

export const getMessagesActive = async (token) => {
	return await axios.get(`${BASE_URL}/api/v1/messagesIsActive`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
	.then(response => response.data)
	.catch(error => {
		console.log(error.message);
		return error;
	});
};