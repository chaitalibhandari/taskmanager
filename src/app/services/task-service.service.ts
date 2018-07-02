import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskServiceService {
  private tasks: Task[];

  constructor(private httpClient: HttpClient) {

    this.tasks = [

      {
        id: 1,
        name: 'Answer ACADI VIVA',
        status: 'Open',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        date:'21-03-2015'
      },
      {
        id: 2,
        name: 'Link Adhar Card',
        status: 'Pending',
        description:'took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        date:'21-03-2015'
      },
      {
        id: 3,
        name: 'Book Movie ticket',
        status: 'Closed',
        description:'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        date:'21-03-2015'
      },
      {
        id: 4,
        name: 'Some Other Task',
        status: 'In-Progress',
        description:'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        date:'21-03-2015'
      }
    ];
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id: number): Task {
   
   const task = this.tasks.find(t => t.id === id);
   return task;
  }

  addTask(task: Task)
  {
    const newTask = new Task();
    newTask.id = this.generateId();
   
    newTask.name = task.name;
    newTask.description = task.description;
    newTask.status = task.status;
    newTask.date = task.date;

    this.tasks.push(newTask);
  }

  private generateId(): number {
    let id = 1;
    let lastItemIndex = this.tasks.length - 1;
    if (lastItemIndex > -1) {
      id = this.tasks[lastItemIndex].id + 1;
    }
    return id;
  }

  updateTask(id: number, taskInfo: Task) {
    const task = this.getTask(id);

    if (task) {
      task.name = taskInfo.name;
      task.description = taskInfo.description;
      task.status = taskInfo.status;
      task.date = taskInfo.date;
    }
  }

  deleteTask(id: number) {

    const index = this.tasks.findIndex(task => task.id === id);

    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }

}
