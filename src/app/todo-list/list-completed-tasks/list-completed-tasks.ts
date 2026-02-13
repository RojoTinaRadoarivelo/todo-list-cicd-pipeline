import { Component, computed } from '@angular/core';
import { TaskService } from '../../shared/services/tasks';
import { taskAnimation } from '../../shared/utils/animations/task.animation';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-completed-tasks',
  imports: [MatButtonModule, MatIconModule],
  animations: [taskAnimation],
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
