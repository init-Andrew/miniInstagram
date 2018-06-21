import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Upload from './views/upload.vue'
import Search from './views/search.vue'
import Notifications from './views/notifications.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/upload',
			name: 'upload',
			component: Upload
		},
		{
			path: '/search',
			name: 'search',
			component: Search
		},
		{
			path: '/notifications',
			name: 'notifications',
			component: Notifications
		}
	]
})
