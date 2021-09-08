import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAit0tmGLTqYql29CKLGsR0zIhwCsqEn-o",
  authDomain: "shumpun-landing.firebaseapp.com",
  projectId: "shumpun-landing",
  storageBucket: "shumpun-landing.appspot.com",
  messagingSenderId: "353801218160",
  appId: "1:353801218160:web:b71bf353fd55b26a8eacb5",
  measurementId: "G-GW18Y4W57S",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    date: data.date.toMillis(),
  };
}
