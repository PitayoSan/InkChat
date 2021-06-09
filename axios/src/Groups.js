import axios from "./config/axios";

export default {
	getGroups: () => {
		return axios.get(`/groups/all`);
	},

	getGroup: (id) => {
		return axios.get(`/groups/${id}`);
	},

	exitGroup: (id) => {
		return axios.delete(`/groups/${id}`);
	}
}