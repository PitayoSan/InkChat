import Vue from 'vue';
import Vuex from 'vuex';
import * as fb from '../firebase';
import router from '../router';
import api from '../../axios/src/api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userProfile: {},
		pubNubUUID: {}
	},
	mutations: {
		setUserProfile(state, val) {
			state.userProfile = val;
		},
		setPubNubUUID(state, uuid) {
			state.pubNubUUID = uuid;
		}
	}, // mutations vs actions: actions can be async
	actions: {
		// async login(form) {
		// 	fb.auth.signInWithEmailAndPassword(form.email, form.password)
		// 	.then(() => { console.log("xd")})
		// 		.catch(() => {
		// 			console.log("ERROR LOGGING IN")
		// 		})
		// },
		async fetchUserProfile({ commit, dispatch }) {
			// Using firebase uid, fetch all user data from db.
			let uid = fb.auth.currentUser.uid;
			console.log("the uid: ", uid);
			api.usersApi.getUser(uid)
				.then(dbUser => {
					// Commit user profile in state
					commit('setUserProfile', dbUser);

					// set pubnub uuid:
					dispatch('setPubNubUUID', 'test_uuid')

					// Go to home if user is logged in
					if (router.currentRoute.path === '/') {
						router.push('/home')
					}
					
				})
				.catch(() => {
					console.error("ERROR FETCHING USER FROM DATABASE");
				});
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
		setPubNubUUID({ commit }, uuid) {
			commit('setPubNubUUID', uuid);
		}
	}
});