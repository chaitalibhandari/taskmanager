import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { AppRoutingModule } from '../app-routing.module';
import { TaskServiceService } from './services/task-service.service';
import { TaskViewComponent } from './task-view/task-view.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TasksComponent,
    TaskViewComponent,
    NavBarComponent,
    DeleteTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
   
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
