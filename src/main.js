import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
// import VueResource from 'vue-resource'
import { store } from './store/store'
import 'simplebar';
import 'simplebar/dist/simplebar.css';

// Vue.use(VueResource);
Vue.use(Vuex)
Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
	router,
	store: store,
	render: h => h(App)
}).$mount('#app')
