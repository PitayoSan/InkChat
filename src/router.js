import Home from './views/Home';
import Login from './views/Login';
import Forgot from './views/Forgot';
import Register from './views/Register';
import VueRouter from 'vue-router';
import Studio from './views/Studio';
import Test from './views/Test';
import Friends from './views/Friends';
import Groups from './views/Groups';
import Layout from './views/Layout';
import {auth} from './firebase';

const routes = [
    { path: '/', component: Login, meta: {requiresAuth: false}},
    { path: '/home', component: Home, meta: {requiresAuth: true}},
    { path: '/register', component: Register, meta: {requiresAuth: false}},
    { path: '/forgot', component: Forgot, meta: {requiresAuth: false}},
    { path: '/studio', component: Studio, meta: {requiresAuth: false}},
    { path: '/test', component: Test, meta: {requiresAuth: false}},
    { path: '/friends', component: Friends, meta: {requiresAuth: false}},
    { path: '/groups', component: Groups, meta: {requiresAuth: false}},
    { path: '/layout', component: Layout, meta: {requiresAuth: false}},
]

const router = new VueRouter({
    mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach(async (to, from, next) => {
    
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

    if(requiresAuth) {

        if(auth.currentUser) {

            return next();

        }

        return next(false);

    }

    return next();

});

export default router;
