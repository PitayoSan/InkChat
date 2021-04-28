import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyDeym-6kt5sRM3ZAFmJrrTchG7LKXBXyao",
    authDomain: "inkchat-58958.firebaseapp.com",
    projectId: "inkchat-58958",
    storageBucket: "inkchat-58958.appspot.com",
    messagingSenderId: "63876947777",
    appId: "1:63876947777:web:ea2df34da2d5bdf96e4bc0"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {
	auth,
}