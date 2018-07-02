import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskservice: TaskServiceService,private router: Router,) { }

  ngOnInit() {

    this.tasks = this.taskservice.getTasks();
   // console.log(this.tasks);
  }

  
  onDelete(taskId) {
    if (confirm('Are you sure?')) {
      this.taskservice.deleteTask(taskId);
      this.router.navigate(['/tasks']);
    }
  }

}
