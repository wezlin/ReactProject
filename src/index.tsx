import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
// import App from './App';
// import NavBar from './NavBar';
import MainBody from './MainBody';
// import Bottom from './Bottom';
// import reportWebVitals from './reportWebVitals';
import SideButton from './SideButton';
// import { Button } from 'react-bootstrap';
// import Test from './Test';



const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found!');
}
ReactDOM.render(
  <React.StrictMode>
      <MainBody/>
      {/* <SideButton/> */}
      {/* <Test/> */}
  </React.StrictMode>,
  rootElement
);



