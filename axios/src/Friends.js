import axios from 'axios';

export default {
	getFriends: (id) => {
		return axios.get(`/friends?user=${id}`);
	},

	getFriend: (id) => {
		return axios.get(`/friends/${id}`);
	},

	deleteFriend: (id) => {
		return axios.delete(`/friends/${id}`);
	}
}