import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyComponent from './MyCompClass';
import MyFunction from './MyCompFunc';
import StateExample from './StateExample';
import Button2 from './Button2';
import WelcomeFunc from './WelcomeFunc';
import reportWebVitals from './reportWebVitals';
import Form from './Forms';
import Lists from './Lists';
import App from './App';
//import RadioButton from './RadioButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="container">
      <div>
        <App />
        {/* <RadioButton radioItems={["Option 1", "Option 2", "Option 3"]}/> 
        
        <Button2/>*/}
      </div>
    </div>
  </React.StrictMode>
);

 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
