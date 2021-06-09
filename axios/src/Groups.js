import axios from "./config/axios";

export default {
	getGroups: () => {
		return axios.get(`/groups/all`);
	},

	getGroup: (id) => {
		return axios.get(`/groups?name=${id}`);
	},

	createGroup: (name) => {
		return axios.post(`/groups`, {name});
	},

	sendMessage: (name, msg, uid, username, time) => {
		return axios.put(`/groups`, {name, msg, uid, username, time});
	}
}