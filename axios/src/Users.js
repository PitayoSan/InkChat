import myAxios from './config/axios';

export default {
    createUser: (username, email, pw, pp) => 
        myAxios.post(`/users`, {username, email, pw, pp}),
    getUser: (uid) => 
        myAxios.get(`/users?uid=${uid}`)
    
}