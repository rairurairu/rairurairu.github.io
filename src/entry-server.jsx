import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function render(id) {
  return renderToString(<App id={id} />);
}
