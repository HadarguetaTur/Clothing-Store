
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyADvwY62p-cn-jYF5avCfzATsZw1E3t-Do",
  authDomain: "toys-store-c1510.firebaseapp.com",
  projectId: "toys-store-c1510",
  storageBucket: "toys-store-c1510.appspot.com",
  messagingSenderId: "95136499795",
  appId: "1:95136499795:web:718b0c96816731b73b9ea6",
  measurementId: "G-S387YHBGLG"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"

});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}