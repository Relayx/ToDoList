import { autorun, observable } from 'mobx';

const KEY_SIZE = 8;

function generateKey(length: number): string {
  let outString = '';
  const inOptions = 'abcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
  }

  return outString;
}

export default class Task {
  @observable
    task: string;

  @observable
    isFinished: boolean;

  key: string;

  constructor(task: string, isFinished: boolean) {
    this.task = task;
    this.isFinished = isFinished;
    this.key = generateKey(KEY_SIZE);
    autorun(this.updateStorage);
  }

  updateStorage = () => {
    localStorage.removeItem(this.key);
    localStorage.setItem(this.key, JSON.stringify(this));
  };

  changeState = () : void => {
    this.isFinished = !this.isFinished;
  };

  changeTask = (value: string) : void => {
    this.task = value;
  };
}
