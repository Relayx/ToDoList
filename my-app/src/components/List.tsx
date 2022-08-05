import React from 'react';
import { observer } from 'mobx-react';

import ListItem from './ListItem';
import Task from '../Task';

import '../styles/List.css';
import '../styles/Font.css';

export interface ListProps {
  tasks: Task[];
  label: string;
  update: (task: Task) => void;
}

@observer
export default class List extends React.Component<ListProps> {
  render(): React.ReactNode {
    const content: JSX.Element[] = [];
    const { tasks, label, update } = this.props;
    tasks.forEach(
      (task) => content.push(
        <ListItem task={task} update={update} key={task.key} />
      )
    );

    return (
      <div className="list">
        <h1 className="labelFont">{label}</h1>
        {content}
        <br />
      </div>
    );
  }
}
