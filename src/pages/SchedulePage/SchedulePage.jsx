import React from "react";
// import { useState } from 'react'
import "./SchedulePage.css";

import HeaderPage from "./components/HeaderPage/HeaderPage.jsx";
import ScheduleApp from "./components/ScheduleApp/Schedule.jsx";
export default function SchedulePage() {
  return (
    <div>
      <HeaderPage />
      <div className="line"></div>
      <ScheduleApp />
    </div>
  );
}
