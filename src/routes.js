import Home from './views/Home';
import Login from './views/Login';
import Forgot from './views/Forgot';
import Register from './views/Register';

const routes = [
    { path: '/', component: Login},
    { path: '/home', component: Home},
    { path: '/register', component: Register},
    { path: '/forgot', component: Forgot}
]

export default routes;
