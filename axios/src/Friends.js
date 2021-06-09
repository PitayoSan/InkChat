import axios from "./config/axios";

export default {
	getFriends: (id) => {
		return axios.get(`/friends?uid=${id}`);
	},

	sendFR: (sender, dest) => {
		return axios.post(`/friends`, {sender, dest});
	},

	acceptFR: (sender, dest) => {
		return axios.put(`/friends`, {sender, dest});
	},

	deleteFriend: (uid, friend) => {
		return axios.delete(`/friends?uid=${uid}&friend=${friend}`);
	},
}