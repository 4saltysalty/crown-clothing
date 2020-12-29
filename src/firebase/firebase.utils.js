import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDE9FF-6JzTzz8cfl8v2cS77y_h-r7mcHo",
    authDomain: "crown-clothing-94ae4.firebaseapp.com",
    databaseURL: "https://crown-clothing-94ae4.firebaseio.com",
    projectId: "crown-clothing-94ae4",
    storageBucket: "crown-clothing-94ae4.appspot.com",
    messagingSenderId: "625180366257",
    appId: "1:625180366257:web:7ca7645cef1711064bd990",
    measurementId: "G-EYCQ6PHLBR"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;