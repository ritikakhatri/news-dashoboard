import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store/index";
import {Provider} from "react-redux";
import Form from "./Form"
ReactDOM.render(<Provider store={store}><div className="row"><App /><Form /></div></Provider>, document.getElementById('root'));

