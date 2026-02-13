import { Component } from '@angular/core';
import { TaskService } from '../../shared/services/tasks';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../../shared/utils/material/material.config';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, ReactiveFormsModule, MATERIAL_IMPORTS],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {
  title = '';
  constructor(private readonly _taskService: TaskService) {}
  add() {
    this._taskService.addTask(this.title);
    this.title = '';
  }
}
