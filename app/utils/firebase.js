import firebase from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyDsDRXl6Lw1o7VW7zQX-jrpqq0nqkYC8VQ",
    authDomain: "degourmet-f5977.firebaseapp.com",
    databaseURL: "https://degourmet-f5977.firebaseio.com",
    projectId: "degourmet-f5977",
    storageBucket: "degourmet-f5977.appspot.com",
    messagingSenderId: "4626924573",
    appId: "1:4626924573:web:d003ef3421eb1d423872f4"
};

export const firebaseApp =   firebase.initializeApp(firebaseConfig);