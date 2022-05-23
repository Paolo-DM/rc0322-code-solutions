import React from 'react';
import ReactDom from 'react-dom/client';
import AppDrawer from './app-drawer';

const element = (
  <div>
    <AppDrawer />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);

root.render(element);
