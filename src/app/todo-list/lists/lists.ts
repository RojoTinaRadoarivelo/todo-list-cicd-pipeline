import { Component, computed } from '@angular/core';
import { TaskService } from '../../shared/services/tasks';
import { taskAnimation } from '../../shared/utils/animations/task.animation';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lists',
  imports: [MatButtonModule, MatIconModule],
  animations: [taskAnimation],
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
