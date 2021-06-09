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
const sessionPersistence = firebase.auth.Auth.Persistence.SESSION;

const userIsSignedIn = new Promise(resolve => {
    auth.onAuthStateChanged(user => {
        if(user) {
            console.log("FIREBASE: user loaded!")
            resolve(user);
        }
        // else { CAUSES ERRORS
        //     console.log("login wtf");
        //     // resolve(false);
        // }
    });
});

console.log("Firebase config loaded!")

export {
	auth,
    sessionPersistence,
    userIsSignedIn
}