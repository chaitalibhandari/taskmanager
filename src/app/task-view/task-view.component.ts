import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskServiceService } from '../services/task-service.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  task: Task = new Task();
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService:TaskServiceService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(map => {
      this.id = +map.get('id');
      this.task = this.taskService.getTask(this.id);
      //console.log(this.task);
    });

    
  }

}
