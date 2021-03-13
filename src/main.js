import Vue from 'vue'
import App from './App.vue'

// Buefy imports
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Use fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTint } from '@fortawesome/free-solid-svg-icons'

library.add(faTint)
Vue.component('vue-fontawesome', FontAwesomeIcon);


Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome', 
  defaultIconPack: 'fas'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
