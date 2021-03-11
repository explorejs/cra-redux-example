import { combineReducers } from "redux";
//import { useSelector, TypedUseSelectorHook } from "react-redux";
import themeReducer from "./themeReducer";

const reducers = combineReducers({
  books: () => ({ author: ["Secret Garden"] }),
  theme: themeReducer,
  user: () => ({ name: "Nick" }),
});

export default reducers;
