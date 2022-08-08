import { observer } from 'mobx-react';
import React from 'react';

import Task from '../Classes/Task';

import '../styles/CheckBox.css';

export interface CheckBoxProps {
  task: Task
}

@observer
export default class CheckBox extends React.Component<CheckBoxProps> {
  changeTaskState = () => {
    const { task } = this.props;
    task.changeState();
  };

  render(): React.ReactNode {
    const { task } = this.props;
    return (
      <input
        className="checkBox"
        type="checkbox"
        checked={task.isFinished}
        onChange={this.changeTaskState}
      />
    );
  }
}
