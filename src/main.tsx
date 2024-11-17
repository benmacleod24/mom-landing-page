import { createRoot } from "react-dom/client";
import App from "./App.tsx";
//@ts-ignore
import "@fontsource-variable/inter";
//@ts-ignore
import "@fontsource-variable/noto-sans";
import "./styles/butler.css";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
