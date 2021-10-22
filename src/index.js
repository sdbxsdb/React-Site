import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import { DoneContextProvider } from './store/done-context'



ReactDOM.render(

    <DoneContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DoneContextProvider>, 
  document.getElementById('root')

);

