import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCoRpL8aUtEVIYQEldrdKkRFHD-oHTuvDo",
  authDomain: "jico-chat.firebaseapp.com",
  databaseURL: "https://jico-chat.firebaseio.com",
  projectId: "jico-chat",
  storageBucket: "jico-chat.appspot.com",
  messagingSenderId: "1025735759588",
  appId: "1:1025735759588:web:e6cdc9043c75cd05"
};
firebase.initializeApp(firebaseConfig);

export const msgRef = firebase.database().ref("/messages/");

export const storedata = (payload, id) => {
  msgRef.child(`${id}/chats/${Date.now()}`).set(payload);
};
