import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ObservableList from './ObservableList';
import Task from './Task';

import TestComponent from './components/TestComponent';

const tasksInfo: Task[] = [
  {
    task: 'Сделать что-то',
    isFinished: false,
    key: 'qqqq1111'
  },
  {
    task: 'finish to-do-list',
    isFinished: false,
    key: 'qqqaaa45'
  },
  {
    task: 'покормить кота',
    isFinished: true,
    key: 'asdfzxcv'
  }
];

const observableList = new ObservableList(tasksInfo);
observableList.tasks[0].isFinished = true;
observableList.addTask('New task');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const task = new Task('Я тасочка', false);

root.render(
  <React.StrictMode>
    <TestComponent task={task} />
    <App list={observableList} />
  </React.StrictMode>
);
