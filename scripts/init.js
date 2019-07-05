if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyCUY3EG6zPGFv21RbI0a-VW8c3TL2pT1ZA",
  "databaseURL": "https://friendlychat-4a128.firebaseio.com",
  "storageBucket": "friendlychat-4a128.appspot.com",
  "authDomain": "friendlychat-4a128.firebaseapp.com",
  "messagingSenderId": "897576198681",
  "projectId": "friendlychat-4a128",
  "appId": "1:897576198681:web:fd7a1050d0b30dff"
});