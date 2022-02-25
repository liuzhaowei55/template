import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import reportWebVitals from './reportWebVitals';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>{routes({})}</BrowserRouter>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
