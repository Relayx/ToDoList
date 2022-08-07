import { observer } from 'mobx-react';
import React from 'react';
import ObservableList from '../ObservableList';

import '../styles/Form.css';

export interface FormProps {
  list: ObservableList
}

@observer
export default class Form extends React.Component<FormProps> {
  current: string;

  constructor(props: FormProps) {
    super(props);
    this.current = '';
  }

  handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.current = e.currentTarget.value;
  };

  addItem = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (this.current === '') {
      return;
    }
    const { list } = this.props;
    list.addTask(this.current);
  };

  render(): React.ReactNode {
    return (
      <form onSubmit={this.addItem} className="form">
        <input type="text" onChange={this.handleInput} />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}
