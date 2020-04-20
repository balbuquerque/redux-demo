import { combineReducers } from "redux";
import counter from './reducers/counter';

const createRootReducer = () =>
  combineReducers({
    counter
  });

export default createRootReducer;