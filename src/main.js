import Vue from 'vue'
import App from './App.vue'

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

new Vue({
  render: h => h(App),
}).$mount('#app')
