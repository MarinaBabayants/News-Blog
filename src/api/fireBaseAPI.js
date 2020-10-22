import app, {db} from '../base'

export const fireBaseAPI = {
    fbSignIn(email, password) {
        return app
            .auth()
            .signInWithEmailAndPassword(email, password);
    },

    fbSignUp(email, password) {
        return app
            .auth()
            .createUserWithEmailAndPassword(email, password);
    },
    fbGetNews() {
        return db.collection('news').get();
    },
    fbGetNewItem(id) {
        return db.collection('news').doc(id).get();
    }

}


