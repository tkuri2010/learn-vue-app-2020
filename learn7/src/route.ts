import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: '/', component: () => import(/* webpackChunkName: "_layout" */ './view/_layout.vue'),
		children: [
			{
				path: 'user/list', component: () => import(/* webpackChunkName: "user_list" */ './view/user_list.vue'),
			},
			{
				path: 'user/data', component: () => import(/* webpackChunkName: "user_data" */ './view/user_data.vue'),
			},
			{
				path: '', component: () => import(/* webpackChunkName: "index" */ './view/index.vue'),
			}
		]
	},

	{
		path: '*', component: () => import('./view/_404.vue'),
	}
];

const router = new VueRouter({
	routes,
});

export default router;
