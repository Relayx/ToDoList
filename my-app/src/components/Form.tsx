import { observer } from 'mobx-react';
import React, { SyntheticEvent } from 'react';

export interface FormProps {
  addItem: (e: SyntheticEvent) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

@observer
export default class Form extends React.Component<FormProps> {
  render(): React.ReactNode {
    const { addItem, handleInput } = this.props;
    return (
      <form onSubmit={addItem}>
        <input type="text" onChange={handleInput} />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}
