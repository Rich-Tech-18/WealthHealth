import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Tables from './components/Tables/Tables';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route exact path='/employee-list' element={<Tables />}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
