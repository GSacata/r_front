import { Component } from '@angular/core';
import { MOCKTASKLIST } from '../misc/mock_todotasks';
import { AppModule } from '../app.module';
import { TodoapiService } from '../services/todoapi.service';
import { TodoTask } from '../models/todotask';

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
  selectedTask: any;

  getAllTasks() {
    this.todoapi.getAllTasks().subscribe({
      next: (data) => {
        this.task = data
      },
      error: (err) => { console.log(err) },
      complete: () => { console.log("Success: GET all tasks") }
    })
  }

  getOneTask(task: TodoTask) {
    this.todoapi.getOneTask(task.id).subscribe({
      next: (data) => {
        this.selectedTask = data
      },
      error: (err) => { console.log(err) },
      complete: () => { console.log("Success: GET one task") }
    })
  }

  editTask() {
    //chama a função editTask, usando 'this.selectedTask' como parâmetro, para subcrever info em 'this.selectedTask'.
    //basicamente, insere a tarefa no input para editá-la, e depois dar o PUT
    this.todoapi.editTask(this.selectedTask).subscribe({
      next: (data) => {
        this.selectedTask = data
        this.refreshCrud()
        this.getAllTasks()
      },
      error: (err) => { console.log(err) },
      complete: () => { console.log("Success: PUT task") }
    })
  }
  
  createTask() {
    this.todoapi.createTask(this.selectedTask).subscribe({
      next: (data) => {
        this.task.push(data)
        this.refreshCrud()
        this.getAllTasks()
      },
      error: (err) => { console.log(err) },
      complete: () => { console.log("Success: POST task") }
    })
  }

  deleteTask() {
    this.todoapi.deleteTask(this.selectedTask.id).subscribe({
      next: () => {
        this.refreshCrud()
        this.getAllTasks()
      },
      error: (err) => { console.log(err) },
      complete: () => { console.log("Success: DEL one task") }
    })
  }

  refreshCrud() {
    // window.location.reload()
    this.selectedTask = { task_title: '', task_completion: false, task_description: '', task_created_at: '', task_updated_at: ''  }
  }

  constructor (private todoapi: TodoapiService) {
    this.getAllTasks()

    //fills 'selectedTask' with empty info so it doesn't bug the page; opens empty fields for edition.
    this.selectedTask = { task_title: '', task_completion: false, task_description: '', task_created_at: '', task_updated_at: ''  }
  }
}
