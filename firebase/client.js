import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA9UF0wHiPGkalcsj6JFJ1VUkxWBwm3rhs",
    authDomain: "webcomic-49a88.firebaseapp.com",
    databaseURL: "https://webcomic-49a88.firebaseio.com",
    projectId: "webcomic-49a88",
    storageBucket: "webcomic-49a88.appspot.com",
    messagingSenderId: "943789659813",
    appId: "1:943789659813:web:04117c7af1cc1b19231f4c",
    measurementId: "G-EMECDLZB2F"
};


!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()


const mapUserFromFirebaseAuthToUser = user => {
    const {
        displayName,
        email,
        photoURL,
        uid
    } = user
    return {
        avatar: photoURL,
        username: displayName,
        email,
        uid
    }
}

export const loginWithGoogle = () => {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(GoogleProvider)
}

export const onAuthChanged = (onChange) => {
    return firebase.auth().onAuthStateChanged(user => {
        const normalizeUser = user ? mapUserFromFirebaseAuthToUser(user) : null
        onChange(normalizeUser)
    })
}


export const getAllCategories = () => {
  return db
    .collection("categorias")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        return {
          ...data,
          id,
        }
      })
    })
}