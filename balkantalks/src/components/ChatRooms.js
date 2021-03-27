import React from "react";
import "./Rooms.css";

export function ChatRoom(props) {
  return (
    <div className="room" {...props}>
      <div className="chattext">
        <h2>{props.room.number}</h2>
        <p>Tema dana:</p>
        <p>"{props.room.tema}"</p>
      </div>
      <img src={props.room.img} className="roomImage" alt="rooms" />
    </div>
  );
}
