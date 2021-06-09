import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import { auth } from './firebase'
import store from './store'
import PubNubVue from 'pubnub-vue'
import router from './router';

// Buefy imports
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './global.css'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTint, faUser, faUserCheck, faUserTimes, faCircle, faTrash, faUpload, faExclamationCircle, faTimesCircle, faUsers } from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false

library.add(
			faTint, 
			faUser, 
			faUserCheck, 
			faUserTimes, 
			faCircle, 
			faTrash, 
			faUpload,
			faExclamationCircle,
			faTimesCircle,
			faUsers
		)
Vue.component('vue-fontawesome', FontAwesomeIcon);

// Buefy Config
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome', 
  defaultIconPack: 'fas'
});

// Router Config
Vue.use(VueRouter);

// PubNub Config
const publishKey = 'pub-c-75662b11-93bd-4398-aa9b-a1a1a525c08f'
const subscribeKey = 'sub-c-466e468a-a2fe-11eb-b1ae-be4e92e38e16'


Vue.use(PubNubVue, {
	publishKey,
	subscribeKey,
	ssl: true
}, store)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

console.log("app created!");


// const appIsLoaded = new Promise(resolve => {
// 	let app;
// 	auth.onAuthStateChanged(user => {
// 		if(!app) {
// 			app = new Vue({
// 				router,
// 				store,
// 				render: h => h(App)
// 			}).$mount('#app')
// 		}

// 		if(user) {
// 			resolve(store.dispatch('fetchUserProfile', user))
// 		}
// 	});
// })


// let app;
// auth.onAuthStateChanged(user => {
// 	if(!app) {
// 		app = new Vue({
// 			router,
// 			store,
// 			render: h => h(App)
// 		}).$mount('#app')
// 	}

// 	if(user) {
// 		store.dispatch('fetchUserProfile', user)
// 	}
// });


