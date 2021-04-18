import { createStore } from "redux";
import { cakeReducer } from "./Cake/cakeReducer";

export const store = createStore(cakeReducer);



