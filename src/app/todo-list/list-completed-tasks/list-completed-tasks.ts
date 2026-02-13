import { Component, computed } from '@angular/core';
import { TaskService } from '../../shared/services/tasks';

@Component({
  selector: 'app-list-completed-tasks',
  imports: [],
  templateUrl: './list-completed-tasks.html',
  styleUrl: './list-completed-tasks.scss',
})
export class ListCompletedTasks {
  completedTasks = computed(() => this._taskService.getCompletedTasks());
  constructor(private readonly _taskService: TaskService) {}

  toggle(id: number) {
    this._taskService.toggleTask(id);
  }

  delete(id: number) {
    this._taskService.deleteTask(id);
  }
}
