import { observable } from 'mobx';

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
  }

  addTask(task: string, isFinished = false) : void {
    const newTask = new Task(task, isFinished);
    this.tasks.push(newTask);
    localStorage.setItem(newTask.key, JSON.stringify(newTask));
  }

  getTasks(isFinished: boolean) : Task[] {
    return this.tasks.filter((task) => task.isFinished === isFinished);
  }

  removeTask(key: string) : void {
    this.tasks = this.tasks.filter((task) => task.key !== key);
    localStorage.removeItem(key);
  }
}
