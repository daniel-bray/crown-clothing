import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDq_8iSWVYvahoKekPlWCdpRItNfUtuVEU",
  authDomain: "crown-db-e85c7.firebaseapp.com",
  databaseURL: "https://crown-db-e85c7.firebaseio.com",
  projectId: "crown-db-e85c7",
  storageBucket: "crown-db-e85c7.appspot.com",
  messagingSenderId: "372322036066",
  appId: "1:372322036066:web:fe9643e376a7cf1fea643b",
  measurementId: "G-8SDSE76FN9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
