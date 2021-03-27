import { useEffect, useState, useRef,inputRef,React } from "react";
import "./Home.css";
import ciko from "../images/ciko-02.png";
import room1 from "../images/1-02.png";
import room2 from "../images/3-02.png";
import room3 from "../images/2-02.png";
import room4 from "../images/4-02.png";
import chatIcon from "../images/logo-02.png";
import languageIcon from "../images/bosanskijezik-02.png";
import { ChatRoom } from "./ChatRooms";

//FIREBASE 

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
 

const chatRooms = [
  {
    img: room1,
    tema: "Lažne vijesti",
    number: "01",
  },
  {
    img: room2,
    tema: "Socijalna distanca",
    number: "02",
  },
  {
    img: room3,
    tema: "Kad sve ovo prodje",
    number: "03",
  },
  {
    img: room4,
    tema: "Depresija",
    number: "04",
  },
];

export function Home2() {

  const [nickname, setNickname] = useState('');

  /* ---AKO HOCEMO DA SE USER NE REGISTRIRA*/
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

  /* const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };  */
const dodanNickName = ()=>{
  console.log(nickname);
}

  return (
    <div className="wrapper">
      <header className="header">
        <p>Početna</p>
        <p>O nama</p>
        <p>Prijava</p>
      </header>
      <img className="ciko" src={ciko} alt="ciko" />
      <img className="chatIcon" src={chatIcon} alt="icon" />

      <div className="centerdiv">
        <h2>Lažne vijesti</h2>
        <p style={{ textShadow: "0.5px 0.5px white" }}>
          Aktuelna dešavanja nas okružuju ali ne smiju okupirati naš um.
          Podijelite anonimno Vaša mišljenja, stavove i novosti na osnovu
          odabrane teme sa ostalim ljudima u opuštenom okruženju.
        </p>
       {/*  <input
        type="text"
        placeholder="Vaš nickname?" 
        value={nickname}
        onChange={event => setNickname(event.target.value)}
        >
        </input> */}
        <button
        disabled={!nickname}
        onClick={dodanNickName}
        > Razgovaraj</button>

        <button style={{ backgroundColor: "#272324", color: "white" }}
         onClick={signInWithGoogle}
        >
          Registracija
        </button>
      </div>
      <div className="sidebar">
        {chatRooms.map((room, index) => (
          <ChatRoom key={index} room={room} />
        ))}
      </div>
      <div className="language">
        <img
          src={languageIcon}
          alt="language"
          width={30}
          height={30}
          style={{ marginRight: 10 }}
        />
        <p> Bosanski ˅</p>
      </div>
    </div>
  );
}
