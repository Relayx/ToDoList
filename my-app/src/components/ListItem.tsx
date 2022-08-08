import React from 'react';
import { observer } from 'mobx-react';

import Task from '../Task';
import ObservableList from '../ObservableList';
import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';

import '../styles/ListItem.css';
import '../styles/Font.css';

export interface ListItemProps {
  list: ObservableList;
  task: Task;
  // eslint-disable-next-line react/no-unused-prop-types
  key: string
}

@observer
export default class ListItem extends React.Component<ListItemProps> {
  render(): React.ReactNode {
    const { task, list } = this.props;
    return (
      <div className="item">
        <CheckBox task={task} />
        <span className={task.isFinished ? 'fontBase finished' : 'fontBase'}>
          {task.task}
        </span>
        <DeleteButton key="adwdaw" list={list} task={task} />
      </div>
    );
  }
}
