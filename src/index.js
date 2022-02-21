import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1 levle
// Самый главный файл
// Сюда импортируем App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);