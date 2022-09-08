import React from 'react';
import ReactDOM from 'react-dom/client'; // react18
// import ReactDOM from 'react-dom'; // react 17
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import CreateMeetup from './pages/CreateMeetup';
import Explore from './pages/Explore';
import Others from './pages/Others';

// penggunaan react 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create-meetup" element={<CreateMeetup />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/others" element={<Others />} />
    </Routes>
  </BrowserRouter>
);

// penggunaan react 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )


// bawah apus

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
