import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from  'react-redux';
import { createStore,applyMiddleware }  from 'redux';
import * as serviceWorker from './serviceWorker';
import ListApp  from "./reducer/index";
import thunk from 'redux-thunk'; 
import Navigation from "./components/navigation";

let store=createStore(ListApp,applyMiddleware(thunk));


   


ReactDOM.render(
     <Provider store = {store}> 
     <Navigation />
     </Provider>
     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

