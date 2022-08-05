import React, { SyntheticEvent } from 'react';
import { observer } from 'mobx-react';

import List from './components/List';
import Form from './components/Form';
import ObservableList from './ObservableList';
import Task from './Task';

interface AppProps {
  list: ObservableList;
}

@observer
class App extends React.Component<AppProps> {
  // eslint-disable-next-line class-methods-use-this
  addItem = (e: SyntheticEvent): void => {
    // e.preventDefault();
    // const { tasks, current } = this.state;
    // const newTask: Task = {
    //   task: current,
    //   isFinished: false
    // };

    // const items = [...tasks, newTask];
    // this.setState({
    //   tasks: items
    // });
  };

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-empty-function
  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => { };

  // eslint-disable-next-line class-methods-use-this
  update = (task: Task): void => {
    // const { tasks } = this.state;
    // const items = tasks.map((candidate) => {
    //   if (candidate === task) {
    //     return {
    //       ...candidate,
    //       isFinished: !candidate.isFinished
    //     };
    //   }

    //   return candidate;
    // });

    // this.setState({
    //   tasks: items
    // });
  };

  render(): React.ReactNode {
    const { list } = this.props;

    return (
      <div>
        <Form addItem={this.addItem} handleInput={this.handleInput} />
        <List
          tasks={list.getTasks(false)}
          label="Задачи"
          update={this.update}
        />
        <List
          tasks={list.getTasks(true)}
          label="Выполненные задачи"
          update={this.update}
        />
      </div>
    );
  }
}

export default App;
