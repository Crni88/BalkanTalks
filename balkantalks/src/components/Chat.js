import firebase from "firebase/app";
import React, { useEffect, useState, useRef } from "react";
import { useFirestoreQuery } from "../hooks";
import "./Chat.css";
import smiley from "../images/smiley-03.png";

export function Chat(props) {
  const { nickname } = props;

  const db = firebase.firestore();
  const messagesRef = db.collection(props.room);
  const messages = useFirestoreQuery(
    messagesRef.orderBy("createdAt", "asc").limit(100)
  );
  console.log(messages);

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
        nickname: nickname,
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
      <div className="chatHeader">
        <span
          style={{
            fontSize: 35,
            marginLeft: 20,
            marginRight: 30,
            marginBottom: 3,
          }}
          onClick={props.closeChat}
        >
          {"<"}
        </span>
        <div
          style={{
            width: 10,
            borderRadius: "50%",
            height: 10,
            backgroundColor: "white",
            marginRight: 10,
            marginTop: 2,
          }}
        ></div>
        <p>Live Chat</p>
      </div>
      <div className="message">
        {messages.map((message) => (
          <>
            {message.nickname === nickname ? (
              <div key={message.id} className="myMessage">
                <div className="myMessageText">{message.text}</div>
              </div>
            ) : (
              <div className="guestMessage" key={message.id}>
                <p style={{ marginBottom: 3, marginLeft: 5 }}>
                  {message.nickname}
                </p>
                <div className="textMessage">{message.text}</div>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="chatFooter">
        <div className="divInput">
          <input
            ref={inputRef}
            type="text"
            className="input"
            value={newMessage}
            onChange={handleOnChange}
            placeholder="Sta zelite reci?"
          />
          <img src={smiley} alt="smajli" width={20} height={20} />
          <button type="submit" disabled={!newMessage} onClick={handleOnSubmit}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
