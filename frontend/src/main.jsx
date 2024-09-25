import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MyProvider } from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <MyProvider>
    <App />
  </MyProvider>
);
