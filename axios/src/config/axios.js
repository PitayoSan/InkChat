import axios from 'axios';
import { auth } from '../../../src/firebase';

const apiOrigin = "http://localhost:5000/";

const myAxios = axios.create({
    baseURL: apiOrigin
});

// Request interceptor (attach authorization header)
myAxios.interceptors.request.use(
    async config => {
        const token = await auth.currentUser.getIdToken();
        console.log(token);
        config.headers = {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return config;
    },
    () => {
        throw {message: "Error making request to server."};
    }
);

// Response interceptor
myAxios.interceptors.response.use(
    response => {
        return response.data.data;
    },
    async error => {

        if(!error.response) {
            throw {message: "Error de conexión con el servidor."};
        }
        
        if(error.response.status === 403) {
            // TODO take to login screen. refresh token, etc...
        }
        //TODO: Filter 
        throw error.response.data;
    }
);

export default myAxios;