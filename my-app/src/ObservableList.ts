import { observable } from 'mobx';

import Task from './Task';

export default class ObservableList {
  @observable
    tasks: Task[];

  constructor(startList: Task[]) {
    this.tasks = startList;
  }

  addTask(task: string) : void {
    this.tasks.push(new Task(task, false));
  }

  getTasks(isFinished: boolean) : Task[] {
    return this.tasks.filter((task) => task.isFinished === isFinished);
  }

  removeTask(key: string) : void {
    this.tasks = this.tasks.filter((task) => task.key !== key);
  }
}
