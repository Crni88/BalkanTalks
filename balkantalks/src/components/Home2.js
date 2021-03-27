import React from "react";
import "./Home.css";
import ciko from "../images/ciko-02.png";
import room1 from "../images/1-02.png";
import room2 from "../images/3-02.png";
import room3 from "../images/2-02.png";
import room4 from "../images/4-02.png";

import { ChatRoom } from "./ChatRooms";

const chatRooms = [
  {
    img: room1,
    tema: "Lažne vijesti",
  },
  {
    img: room2,
    tema: "Socijalna distanca",
  },
  {
    img: room3,
    tema: "Kad sve ovo prodje",
  },
  {
    img: room4,
    tema: "Depresija",
  },
];

export function Home2() {
  return (
    <div className="wrapper">
      <img className="ciko" src={ciko} alt="ciko" />

      <div className="centerdiv">
        <h2>Lažne vijesti</h2>
        <p>
          Aktuelna desavanja nas okruzuju ali ne smiju okupirati nas um.
          Podijelite anonimno vasa misljenja, stavove i novosti na osnovu
          odabrane teme sa ostalim ljudima u opustenom okruzenju
        </p>
        <button> Razgovaraj</button>
        <button style={{ backgroundColor: "#272324", color: "white" }}>
          Registracija
        </button>
      </div>
      <div className="sidebar">
        {chatRooms.map((room, index) => (
          <ChatRoom key={index} room={room} />
        ))}
      </div>
    </div>
  );
}
