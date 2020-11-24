import * as firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCgUJmhtru2oSdwV6AyavPSfTFoobZnqLE",
    authDomain: "test-news-blog.firebaseapp.com",
    databaseURL: "https://test-news-blog.firebaseio.com",
    projectId: "test-news-blog",
    storageBucket: "test-news-blog.appspot.com",
    messagingSenderId: "650497942648",
    appId: "1:650497942648:web:db1c4e3267f315962bb98d"
})

export const db = app.firestore();

export default app
