import React from 'react';
import { observer } from 'mobx-react';

import Task from '../Task';

export interface TestComponentProps {
  task: Task;
}

@observer
export default class TestComponent extends React.Component<TestComponentProps> {
  clickEvent = () => {
    const { task } = this.props;
    task.task = 'dawdaw';
  };

  render(): React.ReactNode {
    const { task } = this.props;
    return (
      <div>
        <h1>{task.task}</h1>
        <button type="submit" onClick={this.clickEvent}>Жмяк</button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
