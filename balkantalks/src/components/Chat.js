import firebase from 'firebase/app'
import React, { useEffect, useState,useRef } from "react";
import { useFirestoreQuery } from '../hooks';


export function Chat({ user = null}) {
  const db = firebase.firestore();
  const messagesRef = db.collection('poruke');
  const messages = useFirestoreQuery(
    messagesRef.orderBy('createdAt', 'asc').limit(100)
  );

  const [newMessage, setNewMessage] = useState('');

  const inputRef = useRef();
  const bottomListRef = useRef();

  //const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleOnChange = e => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = e => {
    console.log("Salji");
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      messagesRef.add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        //uid,
        //displayName,
       // photoURL,
      });
      // Clear input field
      setNewMessage('');
      // Scroll down to the bottom of the list
      //bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat komponenta</h1>
      </header>
      <ul>
         {messages.map(message =>(
           <li key={message.id}>{message.text}</li>
         ))}
      </ul>
      <input
            ref={inputRef}
            type="text"
            value={newMessage}
            onChange={handleOnChange}
            placeholder="Sta zelite reci?"
          />
      <button
            type="submit"
            disabled={!newMessage}
            onClick={handleOnSubmit}
          >
            Send
          </button>
    </div>
  );
}

//export default Chat;
