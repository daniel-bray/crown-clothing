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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
