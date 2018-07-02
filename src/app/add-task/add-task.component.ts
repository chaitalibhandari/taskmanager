import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/empty';
import { TaskServiceService } from '../services/task-service.service';
import { Task } from '../models/task';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();
  id: number;
  addNew = true;
  taskForm: FormGroup;
  editingStatus: boolean = false;
  showMessage:boolean=false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    
    private taskService:TaskServiceService) {

      if('id' in this.route.snapshot.params) {
        this.editingStatus = true;
      }  
     }

  ngOnInit() {

      this.route.paramMap.subscribe(map => {
      this.id = +map.get('id');
      if (this.id) {
        this.task = this.taskService.getTask(this.id);
        console.log(this.task);
        this.addNew = false;
        this.initForm(this.task)
      }
      else{
        this.initForm()
      }

    });
  }

  initForm(task?: Task){

    let name: string;
    let desc:string;
    let taskdate:string;
    let status:string;

    if(task) { 
      name = task.name;
      desc= task.description;
      status=task.status;
      taskdate=task.date;

    } else 
    {
      name = '';
      desc= '';
      status='';
      taskdate='';
    }


    this.taskForm = new FormGroup({
      taskName: new FormControl(name, Validators.required),
      taskDescription: new FormControl(desc, Validators.required),
      taskstatus: new FormControl(status, Validators.required),
      taskDate: new FormControl(taskdate, Validators.required),
    })

  }

  onSave(){
  
    this.task.name = this.taskForm.value.taskName;
    this.task.description=this.taskForm.value.taskDescription;
    this.task.status=this.taskForm.value.taskstatus;
    this.task.date=this.taskForm.value.taskDate;
    //console.log(this.task);
    if (this.addNew) {
       console.log('add is called');
       this.taskService.addTask(this.task);
       

       this.showMessage = true;

       setTimeout(() => {
         this.showMessage = false;
         this.router.navigate(['/']);
       }, 3000);


    } else {

      this.taskService.updateTask(this.id, this.task);
      this.showMessage = true;

       setTimeout(() => {
         this.showMessage = false;
         this.router.navigate(['/']);
       }, 3000);

    }
  }

  get taskName(){
    return this.taskForm.get('taskName');
  }
  get taskDescription(){
    return this.taskForm.get('taskDescription');
  }
  get taskstatus(){
    return this.taskForm.get('taskstatus');
  }
  get taskDate(){
    return this.taskForm.get('taskDate');
  }
}
