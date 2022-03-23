import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";
import {Provider} from "react-redux";

const composedEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(allReducers, undefined, composedEnhancers);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// //ACTIONS
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   }
// }

// const decrement = () => {
//   return {
//     type: "DECREMENT"
//   }
// }

// //REDUCER
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// }

// //STORE
// let store = createStore(counter);

// //Display In Console
// store.subscribe(() => console.log(store.getState()));

// //DISPATCH
// store.dispatch(increment());
