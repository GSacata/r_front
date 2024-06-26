import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AppModule } from './app.module';
import { TodoapiService } from './services/todoapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, TodolistComponent, AppModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TodoapiService]
})

export class AppComponent {
  title = 'frontend';
}
