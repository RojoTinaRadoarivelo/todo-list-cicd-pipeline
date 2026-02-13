import { Component, computed } from '@angular/core';
import { TaskService } from '../../shared/services/tasks';

@Component({
  selector: 'app-lists',
  imports: [],
  templateUrl: './lists.html',
  styleUrl: './lists.scss',
})
export class Lists {
  allTasks = computed(() => this._taskService.getAllTasks());
  constructor(private readonly _taskService: TaskService) {}

  delete(id: number) {
    this._taskService.deleteTask(id);
  }

  toggle(id: number) {
    this._taskService.toggleTask(id);
  }
}
