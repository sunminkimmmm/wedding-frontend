// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
// import { ConnectedRouter } from "react-router-redux";
// import store, { history } from "./redux/configureStore";
import App from "./app";

ReactDOM.render(
  // <Provider store={store}>
  //   <ConnectedRouter history={history}>
  //   <App />
  //   </ConnectedRouter>
  // </Provider>,
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
