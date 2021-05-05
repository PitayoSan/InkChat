import axios from "./config/axios";

export default {
	getGroups: (id) => {
		return axios.get(`/groups?uid=${id}`);
	},

	getGroup: (id) => {
		return axios.get(`/groups/${id}`);
	},

	exitGroup: (id) => {
		return axios.delete(`/groups/${id}`);
	}
}