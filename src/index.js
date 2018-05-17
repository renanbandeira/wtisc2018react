import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import NotFound from './NotFound';

ReactDOM.render(<BrowserRouter>
  <div>
    <Route path="/" component={App} />
    <Route path="/about" component={NotFound} />
  </div>
</BrowserRouter>, document.getElementById('root'));
