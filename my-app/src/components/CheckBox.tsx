import { observer } from 'mobx-react';
import React from 'react';

import Task from '../Task';

import '../styles/CheckBox.css';

export interface CheckBoxProps {
  task: Task
  // eslint-disable-next-line react/no-unused-prop-types
  update: (task: Task) => void;
}

@observer
export default class CheckBox extends React.Component<CheckBoxProps> {
  changeTaskState = () => {
    const { task } = this.props;
    task.isFinished = !task.isFinished;
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
