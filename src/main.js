import App from "./App";
import router from "./routes/index";
import { Store } from "./core/core";

const root = document.querySelector("#root");
root.append(new App().el);

router();
