import { createRouter } from "../core/core";
import About from "./About";
import Home from "./Home";
import Pokemon from "./Pokemon";

export default createRouter([
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/pokemon", component: Pokemon },
]);
