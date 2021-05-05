import axios from "./config/axios";
//import axios from myAxios;

export default {
	getFriends: (id) => {
		return axios.get(`/friends?uid=${id}`);
	},

	getFriend: (id) => {
		return axios.get(`/friends/${id}`);
	},

	deleteFriend: (id) => {
		return axios.delete(`/friends/${id}`);
	}
}