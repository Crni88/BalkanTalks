import React, { useEffect, useState, useRef } from 'react';
import { Chat } from "./Chat";
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDmwBQbqEMU3UjGqS8tMrCmPISUSqMuv0c",
  authDomain: "balkantalks-48617.firebaseapp.com",
  projectId: "balkantalks-48617",
  storageBucket: "balkantalks-48617.appspot.com",
  messagingSenderId: "1069168869230",
  appId: "1:1069168869230:web:176e03a08cd5820b2ccb7f",
  measurementId: "G-ZW1BRD6VMH"
});
const auth = firebase.auth();

export function Home() {
  const [user,setUser] = useState(()=>auth.currentUser);

  useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged(user => {
      if(user){
        setUser(user);
      }else{
          setUser(null);
      }
    });

    return unsubscribe;
  },[])

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  }

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        
        {user?(
          <>
          <button onClick={signOut}> odjava</button>
          <Chat></Chat>
          </>
        ):(

          <button
          onClick={signInWithGoogle}
          
>Prijavite se sa svojim Google racunom</button>
          )}
        
      </header>
    </div>
  );
}
