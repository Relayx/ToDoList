import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ObservableList from './Classes/ObservableList';

const observableList = new ObservableList();

const root = document.getElementById('root') as HTMLElement;

const mainJsx = (
  <React.StrictMode>
    <App list={observableList} />
  </React.StrictMode>
);

render(mainJsx, root);
