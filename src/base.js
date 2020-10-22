import * as firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDmYM7Rt1RK7Fi71LWdqP3ETEUS2pIIDzk",
    authDomain: "news-blog-394d3.firebaseapp.com",
    databaseURL: "https://news-blog-394d3.firebaseio.com",
    projectId: "news-blog-394d3",
    storageBucket: "news-blog-394d3.appspot.com",
    messagingSenderId: "559820294115",
    appId: "1:559820294115:web:634c3ed30bd414452282d6"

})

export const db = app.firestore();

export default app