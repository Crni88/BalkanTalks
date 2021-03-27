import React from "react";
import "./ChatRoom.css";

export function ChatRoom(props) {
  console.log(props);
  return (
    <div className="room">
      <div className="chattext">
        <h2>{props.room.number}</h2>
        <p>Tema dana:</p>
        <p>"{props.room.tema}"</p>
      </div>
      <img src={props.room.img} className="roomImage" alt="rooms" />
    </div>
  );
}
