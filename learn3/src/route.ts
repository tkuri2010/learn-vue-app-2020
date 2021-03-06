import { Vue } from 'vue-property-decorator';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: '/', component: () => import(/* webpackChunkName: "_layout" */ './view/_layout.vue'),
		children: [
			{
				path: 'hello', component: () => import(/* webpackChunkName: "hello" */ './view/hello.vue'),
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
