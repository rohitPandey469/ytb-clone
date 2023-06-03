import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';
import './index.css';

// selecting the div with id of root and creating the root
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);