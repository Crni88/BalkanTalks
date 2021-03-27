import React from "react";
import "./Home.css";
import ciko from "../images/ciko-02.png";
import room1 from "../images/1-02.png";
import room2 from "../images/3-02.png";
import room3 from "../images/2-02.png";
import room4 from "../images/4-02.png";
import chatIcon from "../images/logo-02.png";
import languageIcon from "../images/bosanskijezik-02.png";

import { ChatRoom } from "./ChatRooms";

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
  return (
    <div className="wrapper">
      <header className="header">
        <p>Pocetna</p>
        <p>O nama</p>
        <p>Prijava</p>
      </header>
      <img className="ciko" src={ciko} alt="ciko" />
      <img className="chatIcon" src={chatIcon} alt="icon" />

      <div className="centerdiv">
        <h2>Lažne vijesti</h2>
        <p style={{ textShadow: "0.5px 0.5px white" }}>
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
      <div className="language">
        <img
          src={languageIcon}
          alt="language"
          width={30}
          height={30}
          style={{ marginRight: 10 }}
        />
        <p> Bosanski</p>
      </div>
    </div>
  );
}
