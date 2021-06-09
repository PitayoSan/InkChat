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
import { userIsSignedIn } from './firebase';
import store from './store/index';

const routes = [
    { path: '/', component: Login, meta: {requiresAuth: false}},
    { path: '/home', component: Home, meta: {requiresAuth: true}},
    { path: '/register', component: Register, meta: {requiresAuth: false}},
    { path: '/forgot', component: Forgot, meta: {requiresAuth: false}},
    { path: '/studio', component: Studio, meta: {requiresAuth: false}},
    { path: '/test', component: Test, meta: {requiresAuth: false}},
    { path: '/friends', component: Friends, meta: {requiresAuth: true}},
    { path: '/groups', component: Groups, meta: {requiresAuth: true}},
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
        let user = await userIsSignedIn;
        console.log(user? "yes user": user);
        if(user) {
            let dbUser = await store.dispatch('fetchUserProfile', user);
            if(dbUser) {
                console.log("Entering page...");
                return next();
            } else {
                console.log("error fetching user from database")
                return next(false);
            }
        }
        console.log("user is not signed in");
        return next(false); // TODO return to login page

    }

    return next();

});

export default router;
