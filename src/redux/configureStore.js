import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";
// import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";

// 실행환경 알아오기
const env = process.env.NODE_ENV;

// history 생성
// const history = createHistory();

// middlewares -> thunk, routerMiddleware 등
// const middlewares = [thunk, routerMiddleware(history)];
const middlewares = [thunk];

// 개발환경일때 redux-logger 활성화
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// 하부 리듀서 합셔서 리듀서 생성
const reducer = combineReducers({
  routing: routerReducer
});

let store;
if (env === "development") {
  store = initialState =>
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
} else {
  store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

// export { history };
export default store();
