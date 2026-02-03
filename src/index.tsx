import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./style.css"
import "./chat.css"

import "./rwd.css"
import { BrowserRouter } from "react-router-dom";
const root = createRoot(
  document.getElementById("app")!   
);

root.render(<BrowserRouter><App /></BrowserRouter>);


