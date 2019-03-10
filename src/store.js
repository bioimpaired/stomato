import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware, connectRouter } from "connected-react-router";

export const history = createHistory();

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

// not exactly sure what this does
if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const comoposeEnhancer = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  connectRouter(history)(rootReducer),
  comoposeEnhancer
);

export default store;
