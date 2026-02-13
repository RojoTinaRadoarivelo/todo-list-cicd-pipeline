import { Component } from '@angular/core';
import { Lists } from './lists/lists';
import { ListCompletedTasks } from './list-completed-tasks/list-completed-tasks';
import { AddTask } from './add-task/add-task';

@Component({
  selector: 'app-todo-list',
  imports: [Lists, ListCompletedTasks, AddTask],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {}
