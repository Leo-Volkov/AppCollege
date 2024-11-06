import React from "react";
import logoks54 from "./assets/logoks542.png";

import "./HeaderPage.css";

export default function HeaderPage() {

  
  return (
    <div>
      <header className="flex">
        <div className="logo flex">
          <img src={logoks54} alt="logo"/>
          <h1>
            Колледж связи №54 <br />
            <span>имени П.М. Вострухина</span>
          </h1>
        </div>
        <div className="time">
          <h2>12:34:56</h2>
        </div>
        <div className="data flex">
          <h2 className="weekday">понидельник</h2>
          <h2 className="day">10 сентября 2024</h2>
        </div>
      </header>
    </div>
  );
}
