import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
// import App from './App';
import NavBar from './NavBar';
import Body from './Body';
import Bottom from './Bottom';
import reportWebVitals from './reportWebVitals';
import SideButton from './SideButton';
import { Button } from 'react-bootstrap';
import Test from './Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Body/>
      <SideButton/>
      {/* <Test/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
