import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { auth } from './firebase'
import store from './store'

// Routes
import router from './router';

// Buefy imports
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import './global.css'

// Use fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTint, faUser, faUserCheck, faUserTimes, faCircle, faTrash  } from '@fortawesome/free-solid-svg-icons'

library.add(faTint, faUser, faUserCheck, faUserTimes, faCircle, faTrash)
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome', 
  defaultIconPack: 'fas'
});

Vue.use(VueRouter);

/*new Vue({
  render: h => h(App),
  router: new VueRouter({routes, mode: 'history'})
}).$mount('#app')*/

let app;
auth.onAuthStateChanged(user => {
	if(!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount('#app')
	}

	if(user) {
		store.dispatch('fetchUserProfile', user)
	}
});
