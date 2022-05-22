import React from 'react';
import ReactDOM from 'react-dom/client';
import StopWacth from './stopwatch';

const element = (
  <div>
    <StopWacth />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
