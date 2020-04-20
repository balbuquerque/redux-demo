import { createStore, compose } from "redux";
import rootReducer from "./reducers";

let middlewares;

middlewares = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer(), middlewares);

export default store;