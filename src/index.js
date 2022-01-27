import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';//import store
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import postData from './Middleware/thunk';

import { Provider } from 'react-redux';
const initialState={count:0,postdata:[]}
//create reducer
function reducer(state=initialState,actions){
  console.log(state);
  switch(actions.type){
    // case 'INC' : return {count:state.count+1}
    case 'INC' : return{...state,count:state.count+actions.payload}
    // case 'DEC' : return {count:state.count-1}
    case 'DEC' : return{...state,count:state.count-actions.payload}
    // case 'RESET' : return {count:state.count+actions.payload}
    case 'RESET' : return {...state,count:0}
    case 'pdata' : return {...state,...state,postData:actions.payload}
    default : return state;
  }
  
}
const store = createStore(reducer,applyMiddleware(thunk))
store.dispatch(postData());
// const store = createStore(reducer);//access store

// store.dispatch({type:'INC',payload:3})
// store.dispatch({type:'INC',payload:3})
// store.dispatch({type:'INC',payload:3})
// store.dispatch({type:'INC',payload:3})
// store.dispatch({type:'DEC',payload:2})
// store.dispatch({type:'DEC',payload:2})
// store.dispatch({type:'DEC',payload:2})
// store.dispatch({type:'RESET',payload:0})
// store.dispatch({type:'RESET',payload:0})
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
