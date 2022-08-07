import React from 'react';
import { observer } from 'mobx-react';

import ListItem from './ListItem';
import Task from '../Task';

import '../styles/List.css';
import '../styles/Font.css';

export interface ListProps {
  tasks: Task[];
  label: string;
}

@observer
export default class List extends React.Component<ListProps> {
  lastDraggedItem: Task | undefined;

  dragStartHandler = (e: React.DragEvent<HTMLDivElement>, item: Task) => {
    this.lastDraggedItem = item;
  };

  dropHandler = (e: React.DragEvent<HTMLDivElement>, item: Task) => {
    e.preventDefault();
    if (typeof this.lastDraggedItem === 'undefined') {
      return;
    }
    if ((item.key === this.lastDraggedItem.key)) {
      return;
    }
    const temp = item.task;
    // eslint-disable-next-line no-param-reassign
    item.task = this.lastDraggedItem.task;
    this.lastDraggedItem.task = temp;
  };

  // eslint-disable-next-line class-methods-use-this
  dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  render(): React.ReactNode {
    const content: JSX.Element[] = [];
    const { tasks, label } = this.props;
    tasks.forEach(
      (task) => content.push(
        <div
          key={task.key}
          draggable
          onDragStart={(e: React.DragEvent<HTMLDivElement>) => {
            this.dragStartHandler(e, task);
          }}
          onDragOver={this.dragOverHandler}
          onDrop={(e: React.DragEvent<HTMLDivElement>) => {
            this.dropHandler(e, task);
          }}
        >
          <ListItem task={task} key={task.key} />
        </div>
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
