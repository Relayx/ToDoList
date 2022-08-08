import { autorun, observable } from 'mobx';

import Task from './Task';

export default class ObservableList {
  @observable
    tasks: Task[];

  constructor() {
    this.tasks = [];
    Object.keys(localStorage).forEach((key: string) => {
      const data = localStorage.getItem(key);
      if (data != null) {
        const parsed = JSON.parse(data);
        this.removeTask(parsed.key);
        this.addTask(parsed.task, parsed.isFinished);
      }
    });
    autorun(this.updateList);
  }

  updateList = () => {
    localStorage.clear();
    this.tasks.forEach((task) => {
      localStorage.setItem(task.key, JSON.stringify(task));
    });
  };

  addTask(task: string, isFinished = false) : void {
    this.tasks.push(new Task(task, isFinished));
  }

  getTasks(isFinished: boolean) : Task[] {
    return this.tasks.filter((task) => task.isFinished === isFinished);
  }

  removeTask(key: string) : void {
    this.tasks = this.tasks.filter((task) => task.key !== key);
  }
}
