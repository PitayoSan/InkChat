import Home from './views/Home';
import Login from './views/Login';
import Forgot from './views/Forgot';
import Register from './views/Register';
import VueRouter from 'vue-router';
import Studio from './views/Studio';
import Test from './views/Test';
import Friends from './views/Friends';
import Groups from './views/Groups';

const routes = [
    { path: '/', component: Login, meta: {requiresAuth: false}},
    { path: '/home', component: Home, meta: {requiresAuth: true}},
    { path: '/register', component: Register, meta: {requiresAuth: true}},
    { path: '/forgot', component: Forgot, meta: {requiresAuth: true}},
    { path: '/studio', component: Studio, meta: {requiresAuth: false}},
    { path: '/test', component: Test, meta: {requiresAuth: false}},
    { path: '/friends', component: Friends, meta: {requiresAuth: false}},
    { path: '/groups', component: Groups, meta: {requiresAuth: false}},
]

export default new VueRouter({
    mode: 'history',
	base: process.env.BASE_URL,
	routes
});
