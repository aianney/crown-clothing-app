import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAi_ikGgI2hR2uZklNmu2QARu2X-DwJUY8",
    authDomain: "crown-clothing-app-7674b.firebaseapp.com",
    projectId: "crown-clothing-app-7674b",
    storageBucket: "crown-clothing-app-7674b.appspot.com",
    messagingSenderId: "33112264923",
    appId: "1:33112264923:web:4796da6c2003e1f43efcfe"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;