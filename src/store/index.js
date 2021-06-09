import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase';
import router from '../router';
import api from '../../axios/src/api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userProfile: {},
		pubNubUUID: {},
		userFriends: {},
		userGroups: {}
	},
	mutations: {
		setUserProfile(state, val) {
			state.userProfile = val;
		},
		setPubNubUUID(state, uuid) {
			state.pubNubUUID = uuid;
		},
		setUserFriends(state, friends){
			state.userFriends = friends;
		},
		setUserGroups(state, groups){
			state.userGroups = groups;
		}
	}, 
	// mutations vs actions: actions can be async
	actions: {
		async fetchUserProfile({ commit }) {
			// Using firebase uid, fetch all user data from db.
			let uid = fb.auth.currentUser.uid;
			
			try {
				const dbUser = await api.usersApi.getUser(uid);
				console.log("fetched user profile");
				// Commit user profile in state
				commit('setUserProfile', dbUser);

				// Set pubnub uuid:
				commit('setPubNubUUID', uid);

				// // Go to home if user is logged in
				// if (router.currentRoute.path === '/') {
				// 	router.push('/home');
				// }

				return dbUser;

			} catch {
				// console.error("ERROR FETCHING USER FROM DATABASE");
				return false;
			}
		},
		async logout({ commit }) {
			// log user out
			await fb.auth.signOut();

			// clear user data from state
			commit('setUserProfile', {});

			// redirect to login view
			router.push('/');
		},
		async changePW({ dispatch }, form) {
			fb.auth.sendPasswordResetEmail(form.email).then(function() {
				// Email sent.
				alert('¡Se ha enviado un correo para cambiar su contraseña!')
				dispatch('logout');
			}).catch(function(error) {
				// An error happened.
				console.log(error);
			});
		},
		// setPubNubUUID({ commit }, uuid) {
		// 	commit('setPubNubUUID', uuid);
		// },
		async getUserFriends({ commit }) {
			let uid = fb.auth.currentUser.uid;
			console.log(uid);
			
			api.friendsApi.getFriends(uid)
			.then(res => {
				commit('setUserFriends', res);
			});
		},
		async getUserGroups({ commit }) {
			let uid = fb.auth.currentUser.uid;
			console.log(uid);
			
			api.groupsApi.getGroups(uid)
			.then(res => {
				commit('setUserGroups', res);
			});
		}
	}
});