import React from 'react';
import { observer } from 'mobx-react';

import Task from '../Task';
import CheckBox from './CheckBox';

import '../styles/ListItem.css';
import '../styles/Font.css';

export interface ListItemProps {
  task: Task;
  // eslint-disable-next-line react/no-unused-prop-types
  key: string
}

@observer
export default class ListItem extends React.Component<ListItemProps> {
  render(): React.ReactNode {
    const { task } = this.props;
    return (
      <div className="item">
        <CheckBox task={task} />
        <span className={task.isFinished ? 'fontFinished' : 'fontUnfinished'}>
          {task.task}
        </span>
      </div>
    );
  }
}
