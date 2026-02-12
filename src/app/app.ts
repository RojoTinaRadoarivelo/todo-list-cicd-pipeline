import { Component } from '@angular/core';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'to-do-list-netlify-cicd';
}
