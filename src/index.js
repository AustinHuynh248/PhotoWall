import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./styles/main.css";
import { createStore } from "redux";
import rootReducer from "./Redux/reducer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
