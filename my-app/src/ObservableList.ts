import { observable, autorun } from 'mobx';

import Task from './Task';

export default class ObservableList {
  @observable
    tasks: Task[];

  constructor(startList: Task[]) {
    this.tasks = startList;
    autorun(() => console.log(this.tasks.map((task) => task.task).join(', ')));
  }

  addTask(task: string) : void {
    this.tasks.push(new Task(task, false));
  }

  getTasks(isFinished: boolean) : Task[] {
    return this.tasks.filter((task) => task.isFinished === isFinished);
  }
}
