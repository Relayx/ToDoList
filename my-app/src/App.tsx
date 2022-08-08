import React from 'react';
import { observer } from 'mobx-react';

import List from './components/List';
import Form from './components/Form';
import ObservableList from './Classes/ObservableList';

import './styles/App.css';

interface AppProps {
  list: ObservableList;
}

@observer
class App extends React.Component<AppProps> {
  render(): React.ReactNode {
    const { list } = this.props;

    return (
      <div className="App">
        <Form list={list} />
        <List
          tasks={list.getTasks(false)}
          label="Задачи"
          list={list}
        />
        <List
          tasks={list.getTasks(true)}
          label="Выполненные задачи"
          list={list}
        />
      </div>
    );
  }
}

export default App;
