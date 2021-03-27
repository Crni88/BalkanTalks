import firebase from "firebase/app";
import React, { useEffect, useState, useRef } from "react";
import { useFirestoreQuery } from "../hooks";
import "./Chat.css";

export function Chat({ user = null, nickname, ...props }) {
  console.log(props);
  const nicknameUsera = props.nickname;
  console.log("Nickname usera", nicknameUsera);

  const db = firebase.firestore();
  const messagesRef = db.collection(props.room);
  const messages = useFirestoreQuery(
    messagesRef.orderBy("createdAt", "asc").limit(100)
  );

  const [newMessage, setNewMessage] = useState("");

  const inputRef = useRef();
  // const bottomListRef = useRef();
  //const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      messagesRef.add({
        text: trimmedMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        nickname: nicknameUsera,
        //uid,
        //displayName,
        // photoURL,
      });

      // Clear input field
      setNewMessage("");
      // Scroll down to the bottom of the list
      //bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ChatWrapper">
      <div onClick={props.closeChat}> back</div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            {message.nickname}
            {message.text}
          </li>
        ))}
      </ul>
      <input
        ref={inputRef}
        type="text"
        value={newMessage}
        onChange={handleOnChange}
        placeholder="Sta zelite reci?"
      />
      <button type="submit" disabled={!newMessage} onClick={handleOnSubmit}>
        Send
      </button>
    </div>
  );
}
