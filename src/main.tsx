import { createRoot } from "react-dom/client";
import { NavProvider } from "./contexts/NavContext.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <NavProvider>
    <App />
  </NavProvider>
);
