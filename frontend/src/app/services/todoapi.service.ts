import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoTask } from '../models/todotask';

@Injectable({
  providedIn: 'root'
})

export class TodoapiService {

  baseurl = "http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<any> {
    return this.http.get(this.baseurl + '/todolist/', {headers: this.httpHeaders})
  }

  getOneTask(id: number): Observable<any> {
    return this.http.get(this.baseurl + `/todolist/${id}`, {headers: this.httpHeaders})
  }

  editTask(task: any): Observable<any> {
    const body = {task_title: task.task_title, task_completion: task.task_completion}
    return this.http.put(this.baseurl + `/todolist/${task.id}/`, body, {headers: this.httpHeaders})
  }
}
