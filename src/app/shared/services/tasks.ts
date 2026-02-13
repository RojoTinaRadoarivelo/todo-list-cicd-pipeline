import { Injectable, signal } from '@angular/core';
import { TaskModel } from '../../todo-list/models/tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<TaskModel[]>([]);

  addTask(title: string) {
    const newTask: TaskModel = {
      id: Date.now(),
      title,
      isCompleted: false,
      isDeleted: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }
  toggleTask(id: number) {
    this.tasks.update((tasks: TaskModel[]) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );
  }
  deleteTask(id: number) {
    this.tasks.update((tasks: TaskModel[]) =>
      tasks.map((task) =>
        task.id === id ? { ...task, isDeleted: !task.isDeleted } : task,
      ),
    );
  }

  getAllTasks() {
    return this.tasks().filter((task) => !task.isDeleted && !task.isCompleted);
  }

  getCompletedTasks() {
    return this.tasks().filter((t) => !t.isDeleted && t.isCompleted);
  }
}
