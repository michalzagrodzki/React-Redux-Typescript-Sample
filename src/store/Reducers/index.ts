import countReducer from "./countReducers"
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: countReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
