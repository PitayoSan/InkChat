import Home from './views/Home';
import Login from './views/Login';
import Forgot from './views/Forgot';
import Register from './views/Register';
import Studio from './views/Studio';

const routes = [
    { path: '/', component: Login},
    { path: '/home', component: Home},
    { path: '/register', component: Register},
    { path: '/forgot', component: Forgot},
    { path: '/studio', component: Studio}
]

export default routes;
