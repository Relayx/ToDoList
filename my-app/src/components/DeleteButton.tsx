import React from 'react';
import { observer } from 'mobx-react';

import ObservableList from '../Classes/ObservableList';
import Task from '../Classes/Task';

import '../styles/DeleteButton.css';

export interface ListItemProps {
  list: ObservableList;
  task: Task;
}

@observer
export default class DeleteButton extends React.Component<ListItemProps> {
  clickHandler = () => {
    const { list, task } = this.props;
    list.removeTask(task.key);
  };

  render(): React.ReactNode {
    return (
      <button
        type="button"
        className="deleteButton"
        onClick={this.clickHandler}
      >
        <img src="trash.png" alt="" className="ico" />
      </button>
    );
  }
}
