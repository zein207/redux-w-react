import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore((state = 0, action) => { // is a reducer
  //action = {type: 'action type', payload: any}
  switch (action.type) {
    case 'increment': {
      return state + 1
    }
    case 'decrement': {
      return state -1
    }
    case 'set': {
      return action.payload
    }
    default: 
      return state
  }
})
console.log(store.getState())

store.dispatch({type: 'lala'});
console.log(store.getState())

store.dispatch({type: 'increment'});
console.log(store.getState())

store.dispatch({type: 'decrement'});
console.log(store.getState())

store.dispatch({type: 'set', payload: 15});
console.log(store.getState())



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
