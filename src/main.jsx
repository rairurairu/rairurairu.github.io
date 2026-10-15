import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.jsx";
import { PAGES } from "./data.js";
import "./styles.css";

// Pre-rendered pages carry their id; the dev server falls back to the URL.
const fromPath = () => {
  const m = location.pathname.match(/^\/work\/([^/]+)/);
  return m ? m[1] : "home";
};
const id = PAGES.some(p => p.id === window.__PAGE__) ? window.__PAGE__ : fromPath();
const root = document.getElementById("root");
if (root.firstElementChild) hydrateRoot(root, <App id={id} />);
else createRoot(root).render(<App id={id} />);
window.__hydrated = true;
