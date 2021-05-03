import axios from 'axios';

export default {
	getGroups: () => {
		return axios.get(`/groups/`);
	},

	getGroup: (id) => {
		return axios.get(`/groups/${id}`);
	},

	exitGroup: (id) => {
		return axios.delete(`/groups/${id}`);
	}
}