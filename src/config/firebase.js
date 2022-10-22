// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "##############",
    authDomain: "#################",
    projectId: "############",
    storageBucket: "###########",
    messagingSenderId: "###############",
    appId: "##################",
    measurementId: "#####################"
  };

// Initialize Firebase
if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)




export {firebase}

const auth  = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp
const human = firebase.auth().currentUser

export {auth,firestore,storage,serverTimestamp,human}