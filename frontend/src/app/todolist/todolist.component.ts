import { Component } from '@angular/core';
import { MOCKTASKLIST } from '../misc/mock_todotasks';
import { AppModule } from '../app.module';
import { TodoapiService } from '../services/todoapi.service';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [
    AppModule
  ],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})

export class TodolistComponent {
  task = MOCKTASKLIST; // Uses fake tasks for testing

  getAllTasks() {
    this.todoapi.getAllTasks().subscribe({
      next: (data) => { this.task = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log("Success: GET all tasks") }
    })
  }

  constructor (private todoapi: TodoapiService) {
    this.getAllTasks()
  }
}
