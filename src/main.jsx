import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SchedulePage from "./pages/SchedulePage/SchedulePage.jsx";
import "./normalize.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SchedulePage />
  </StrictMode>,
);
