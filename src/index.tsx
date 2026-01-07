import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./style.css";
import "./chat.css"
import "./rwd.css"

const root = createRoot(
  document.getElementById("app")!   
);

root.render(<App />);
