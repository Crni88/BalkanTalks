import React from "react";
import "./ChatRoom.css";

export function ChatRoom(props) {
  console.log(props);
  return (
    <div className="room">
      <div></div>
      <img src={props.room.img} className="roomImage" alt="rooms" />
      <p>Title</p>
    </div>
  );
}
