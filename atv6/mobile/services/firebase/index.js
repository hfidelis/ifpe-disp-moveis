import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_MESSAGING_SENDER_ID,
  FB_APP_ID,
} from '@env';

const firebaseConfig = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const handleSignUp = async (email, password) => {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode == 'auth/weak-password') {
      throw new Error('Senha muito fraca');
    } else {
      throw new Error(errorMessage);
    }
  });
}

export const toggleSignIn = async (email, password) => {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === 'auth/wrong-password') {
        throw new Error('Senha incorreta');
      } else {
        throw new Error(errorMessage);
      }

  });
}